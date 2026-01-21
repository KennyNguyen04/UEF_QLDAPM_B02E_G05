using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using TheWanderingRose.API.Data;
using TheWanderingRose.API.DTOs;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContactController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<ContactResponseDto>> SubmitContact([FromBody] CreateContactDto dto)
    {
        // Validation
        if (string.IsNullOrWhiteSpace(dto.FullName))
            return BadRequest(new ContactResponseDto(false, "Vui lòng nhập họ và tên."));

        if (string.IsNullOrWhiteSpace(dto.Email))
            return BadRequest(new ContactResponseDto(false, "Vui lòng nhập email."));

        if (!Regex.IsMatch(dto.Email, @"^[^\s@]+@[^\s@]+\.[^\s@]+$"))
            return BadRequest(new ContactResponseDto(false, "Địa chỉ email không hợp lệ."));

        if (string.IsNullOrWhiteSpace(dto.Phone))
            return BadRequest(new ContactResponseDto(false, "Vui lòng nhập số điện thoại."));

        if (!Regex.IsMatch(dto.Phone, @"^[0-9]{10,11}$"))
            return BadRequest(new ContactResponseDto(false, "Số điện thoại không hợp lệ (10-11 số)."));

        if (string.IsNullOrWhiteSpace(dto.Subject))
            return BadRequest(new ContactResponseDto(false, "Vui lòng nhập chủ đề."));

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

        // Create contact request
        var contactRequest = new ContactRequest
        {
            CustomerId = customer.Id,
            Subject = dto.Subject,
            Message = dto.Message ?? ""
        };

        _context.ContactRequests.Add(contactRequest);
        await _context.SaveChangesAsync();

        return Ok(new ContactResponseDto(true, "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!"));
    }
}

[ApiController]
[Route("api/event-bookings")]
public class EventBookingsController : ControllerBase
{
    private readonly AppDbContext _context;

    public EventBookingsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<ContactResponseDto>> BookEvent([FromBody] CreateEventBookingDto dto)
    {
        // Validation
        if (string.IsNullOrWhiteSpace(dto.FullName) || 
            string.IsNullOrWhiteSpace(dto.Email) || 
            string.IsNullOrWhiteSpace(dto.Phone) ||
            string.IsNullOrWhiteSpace(dto.EventType))
        {
            return BadRequest(new ContactResponseDto(false, "Vui lòng điền đầy đủ các trường bắt buộc (*)."));
        }

        if (!Regex.IsMatch(dto.Email, @"^[^\s@]+@[^\s@]+\.[^\s@]+$"))
            return BadRequest(new ContactResponseDto(false, "Địa chỉ email không hợp lệ."));

        if (!Regex.IsMatch(dto.Phone, @"^[0-9]{10,11}$"))
            return BadRequest(new ContactResponseDto(false, "Số điện thoại không hợp lệ (10-11 số)."));

        // Create event booking
        var eventBooking = new EventBooking
        {
            FullName = dto.FullName.Trim(),
            Email = dto.Email.Trim(),
            Phone = dto.Phone.Trim(),
            EventType = dto.EventType,
            Message = dto.Message?.Trim() ?? ""
        };

        _context.EventBookings.Add(eventBooking);
        await _context.SaveChangesAsync();

        return Ok(new ContactResponseDto(true, "Yêu cầu đặt lịch sự kiện của bạn đã được gửi thành công!"));
    }
}

[ApiController]
[Route("api/tour-bookings")]
public class TourBookingsController : ControllerBase
{
    private readonly AppDbContext _context;

    public TourBookingsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<ContactResponseDto>> BookTour([FromBody] CreateTourBookingDto dto)
    {
        // Validation
        if (string.IsNullOrWhiteSpace(dto.FullName) || 
            string.IsNullOrWhiteSpace(dto.Email) || 
            string.IsNullOrWhiteSpace(dto.Phone) ||
            string.IsNullOrWhiteSpace(dto.TourName))
        {
            return BadRequest(new ContactResponseDto(false, "Vui lòng điền đầy đủ các trường bắt buộc (*)."));
        }

        if (!Regex.IsMatch(dto.Email, @"^[^\s@]+@[^\s@]+\.[^\s@]+$"))
            return BadRequest(new ContactResponseDto(false, "Địa chỉ email không hợp lệ."));

        if (!Regex.IsMatch(dto.Phone, @"^[0-9]{10,11}$"))
            return BadRequest(new ContactResponseDto(false, "Số điện thoại không hợp lệ (10-11 số)."));

        // Create tour booking
        var tourBooking = new TourBooking
        {
            FullName = dto.FullName.Trim(),
            Email = dto.Email.Trim(),
            Phone = dto.Phone.Trim(),
            TourName = dto.TourName,
            Message = dto.Message?.Trim() ?? ""
        };

        _context.TourBookings.Add(tourBooking);
        await _context.SaveChangesAsync();

        return Ok(new ContactResponseDto(true, "Yêu cầu đặt tour của bạn đã được gửi thành công!"));
    }
}
