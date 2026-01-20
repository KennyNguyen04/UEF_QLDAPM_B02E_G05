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

    /// <summary>
    /// Đếm số đêm cuối tuần (Thứ 7, Chủ nhật) trong khoảng thời gian đặt phòng
    /// Đêm cuối tuần được tính dựa trên ngày check-in của đêm đó
    /// </summary>
    private int CountWeekendNights(DateTime checkIn, DateTime checkOut)
    {
        int weekendNights = 0;
        var current = checkIn.Date;
        var end = checkOut.Date;
        
        while (current < end)
        {
            // Thứ 7 = DayOfWeek.Saturday (6), Chủ nhật = DayOfWeek.Sunday (0)
            if (current.DayOfWeek == DayOfWeek.Saturday || current.DayOfWeek == DayOfWeek.Sunday)
            {
                weekendNights++;
            }
            current = current.AddDays(1);
        }
        return weekendNights;
    }

    /// <summary>
    /// Lấy tỷ lệ phụ thu cuối tuần từ cấu hình hệ thống
    /// </summary>
    private async Task<decimal> GetWeekendSurchargeRateAsync()
    {
        var config = await _context.SystemConfigs
            .FirstOrDefaultAsync(c => c.ConfigKey == "WEEKEND_SURCHARGE_RATE");
        
        if (config == null || !decimal.TryParse(config.ConfigValue, out var rate))
        {
            return 10m; // Giá trị mặc định 10%
        }
        return rate;
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

        // Calculate total price with weekend surcharge
        decimal basePrice = 0;
        // Số đêm tính bằng số ngày giữa ngày check-in và ngày check-out (bỏ qua giờ)
        var nights = (dto.CheckOut.Date - dto.CheckIn.Date).Days;
        var bookingRooms = new List<BookingRoom>();

        foreach (var roomDto in dto.Rooms)
        {
            var room = await _context.Rooms.FindAsync(roomDto.RoomId);
            var roomPrice = room!.Price * nights * roomDto.Quantity;
            basePrice += roomPrice;

            bookingRooms.Add(new BookingRoom
            {
                RoomId = roomDto.RoomId,
                Quantity = roomDto.Quantity,
                UnitPrice = room.Price
            });
        }

        // Calculate weekend surcharge
        var weekendNights = CountWeekendNights(dto.CheckIn, dto.CheckOut);
        var surchargeRate = await GetWeekendSurchargeRateAsync();
        
        // Tính phụ thu: Giá phòng mỗi đêm × số đêm cuối tuần × tỷ lệ phụ thu
        decimal weekendSurchargeAmount = 0;
        foreach (var roomDto in dto.Rooms)
        {
            var room = await _context.Rooms.FindAsync(roomDto.RoomId);
            weekendSurchargeAmount += room!.Price * roomDto.Quantity * weekendNights * (surchargeRate / 100m);
        }

        var totalPrice = basePrice + weekendSurchargeAmount;

        // Generate booking code
        var bookingCode = "#OL" + new Random().Next(10000000, 99999999);

        // Create booking with weekend surcharge info
        var booking = new Booking
        {
            BookingCode = bookingCode,
            CustomerId = customer.Id,
            CheckIn = dto.CheckIn,
            CheckOut = dto.CheckOut,
            TotalPrice = totalPrice,
            WeekendNights = weekendNights,
            WeekendSurchargeRate = surchargeRate,
            WeekendSurchargeAmount = weekendSurchargeAmount,
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
            roomDetails,
            new WeekendSurchargeInfoDto(
                booking.WeekendNights,
                booking.WeekendSurchargeRate,
                booking.WeekendSurchargeAmount
            )
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
            )).ToList(),
            new WeekendSurchargeInfoDto(
                booking.WeekendNights,
                booking.WeekendSurchargeRate,
                booking.WeekendSurchargeAmount
            )
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
