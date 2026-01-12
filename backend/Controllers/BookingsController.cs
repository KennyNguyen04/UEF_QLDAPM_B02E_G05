using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheWanderingRose.API.Data;
using TheWanderingRose.API.DTOs;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingsController : ControllerBase
{
    private readonly AppDbContext _context;

    public BookingsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<BookingResponseDto>> CreateBooking([FromBody] CreateBookingDto dto)
    {
        // Validation
        if (dto.CheckIn >= dto.CheckOut)
        {
            return BadRequest(new ApiResponse<object>(false, "Ngày trả phòng phải sau ngày nhận phòng.", null));
        }

        if (dto.CheckIn.Date < DateTime.UtcNow.Date)
        {
            return BadRequest(new ApiResponse<object>(false, "Ngày nhận phòng không thể ở quá khứ.", null));
        }

        // Validate rooms exist and check availability
        foreach (var roomDto in dto.Rooms)
        {
            var room = await _context.Rooms.FindAsync(roomDto.RoomId);
            if (room == null)
            {
                return BadRequest(new ApiResponse<object>(false, $"Phòng với ID {roomDto.RoomId} không tồn tại.", null));
            }

            // Check if room is available
            var isBooked = await _context.BookingRooms
                .Include(br => br.Booking)
                .AnyAsync(br =>
                    br.RoomId == roomDto.RoomId &&
                    br.Booking.Status != "cancelled" &&
                    br.Booking.CheckIn < dto.CheckOut &&
                    br.Booking.CheckOut > dto.CheckIn);

            if (isBooked)
            {
                return BadRequest(new ApiResponse<object>(false, $"Phòng '{room.Name}' đã được đặt trong khoảng thời gian này.", null));
            }
        }

        // Create or find customer
        var customer = await _context.Customers
            .FirstOrDefaultAsync(c => c.Email == dto.Email);

        if (customer == null)
        {
            customer = new Customer
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Phone = dto.Phone
            };
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();
        }
        else
        {
            // Update customer info
            customer.FullName = dto.FullName;
            customer.Phone = dto.Phone;
        }

        // Calculate total price
        decimal totalPrice = 0;
        var nights = (dto.CheckOut - dto.CheckIn).Days;
        var bookingRooms = new List<BookingRoom>();

        foreach (var roomDto in dto.Rooms)
        {
            var room = await _context.Rooms.FindAsync(roomDto.RoomId);
            var roomPrice = room!.Price * nights * roomDto.Quantity;
            totalPrice += roomPrice;

            bookingRooms.Add(new BookingRoom
            {
                RoomId = roomDto.RoomId,
                Quantity = roomDto.Quantity,
                UnitPrice = room.Price
            });
        }

        // Generate booking code
        var bookingCode = "#OL" + new Random().Next(10000000, 99999999);

        // Create booking
        var booking = new Booking
        {
            BookingCode = bookingCode,
            CustomerId = customer.Id,
            CheckIn = dto.CheckIn,
            CheckOut = dto.CheckOut,
            TotalPrice = totalPrice,
            Status = "pending",
            BookingRooms = bookingRooms
        };

        _context.Bookings.Add(booking);
        await _context.SaveChangesAsync();

        // Build response
        var roomDetails = new List<BookingRoomDetailDto>();
        foreach (var br in booking.BookingRooms)
        {
            var room = await _context.Rooms.FindAsync(br.RoomId);
            roomDetails.Add(new BookingRoomDetailDto(
                br.RoomId,
                room!.Name,
                br.Quantity,
                br.UnitPrice
            ));
        }

        var response = new BookingResponseDto(
            booking.Id,
            booking.BookingCode,
            booking.CheckIn,
            booking.CheckOut,
            booking.TotalPrice,
            booking.Status,
            new CustomerDto(customer.Id, customer.FullName, customer.Email, customer.Phone),
            roomDetails
        );

        return CreatedAtAction(nameof(GetBooking), new { code = booking.BookingCode }, response);
    }

    [HttpGet("{code}")]
    public async Task<ActionResult<BookingResponseDto>> GetBooking(string code)
    {
        var booking = await _context.Bookings
            .Include(b => b.Customer)
            .Include(b => b.BookingRooms)
                .ThenInclude(br => br.Room)
            .FirstOrDefaultAsync(b => b.BookingCode == code);

        if (booking == null)
            return NotFound(new ApiResponse<object>(false, "Không tìm thấy đơn đặt phòng.", null));

        var response = new BookingResponseDto(
            booking.Id,
            booking.BookingCode,
            booking.CheckIn,
            booking.CheckOut,
            booking.TotalPrice,
            booking.Status,
            new CustomerDto(
                booking.Customer.Id,
                booking.Customer.FullName,
                booking.Customer.Email,
                booking.Customer.Phone
            ),
            booking.BookingRooms.Select(br => new BookingRoomDetailDto(
                br.RoomId,
                br.Room.Name,
                br.Quantity,
                br.UnitPrice
            )).ToList()
        );

        return Ok(response);
    }

    [HttpPatch("{code}/status")]
    public async Task<ActionResult> UpdateBookingStatus(string code, [FromBody] string status)
    {
        var booking = await _context.Bookings
            .FirstOrDefaultAsync(b => b.BookingCode == code);

        if (booking == null)
            return NotFound(new ApiResponse<object>(false, "Không tìm thấy đơn đặt phòng.", null));

        var validStatuses = new[] { "pending", "confirmed", "cancelled", "completed" };
        if (!validStatuses.Contains(status))
        {
            return BadRequest(new ApiResponse<object>(false, "Trạng thái không hợp lệ.", null));
        }

        booking.Status = status;
        await _context.SaveChangesAsync();

        return Ok(new ApiResponse<object>(true, "Cập nhật trạng thái thành công.", null));
    }
}
