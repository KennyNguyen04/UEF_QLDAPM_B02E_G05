using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using TheWanderingRose.API.Data;
using TheWanderingRose.API.DTOs;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomsController : ControllerBase
{
    private readonly AppDbContext _context;

    public RoomsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<RoomDto>>> GetRooms([FromQuery] string? zone = null)
    {
        var query = _context.Rooms.Include(r => r.Zone).AsQueryable();

        if (!string.IsNullOrEmpty(zone))
        {
            query = query.Where(r => r.Zone.Name == zone);
        }

        var rooms = await query.ToListAsync();

        var result = rooms.Select(r => new RoomDto(
            r.Id,
            r.Name,
            r.MaxPeople,
            r.Area,
            r.RoomsCount,
            r.BedType,
            r.Price,
            r.ImageUrl,
            r.Zone.Name,
            r.Description,
            JsonSerializer.Deserialize<List<string>>(r.Features) ?? new(),
            JsonSerializer.Deserialize<List<string>>(r.SubImages) ?? new()
        )).ToList();

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<RoomDto>> GetRoom(int id)
    {
        var room = await _context.Rooms
            .Include(r => r.Zone)
            .FirstOrDefaultAsync(r => r.Id == id);

        if (room == null)
            return NotFound();

        var result = new RoomDto(
            room.Id,
            room.Name,
            room.MaxPeople,
            room.Area,
            room.RoomsCount,
            room.BedType,
            room.Price,
            room.ImageUrl,
            room.Zone.Name,
            room.Description,
            JsonSerializer.Deserialize<List<string>>(room.Features) ?? new(),
            JsonSerializer.Deserialize<List<string>>(room.SubImages) ?? new()
        );

        return Ok(result);
    }

    [HttpGet("available")]
    public async Task<ActionResult<List<RoomDto>>> GetAvailableRooms(
        [FromQuery] DateTime checkIn,
        [FromQuery] DateTime checkOut,
        [FromQuery] int guests = 1)
    {
        // Get rooms that are NOT booked in the date range
        var bookedRoomIds = await _context.BookingRooms
            .Include(br => br.Booking)
            .Where(br => 
                br.Booking.Status != "cancelled" &&
                br.Booking.CheckIn < checkOut && 
                br.Booking.CheckOut > checkIn)
            .Select(br => br.RoomId)
            .Distinct()
            .ToListAsync();

        var availableRooms = await _context.Rooms
            .Include(r => r.Zone)
            .Where(r => !bookedRoomIds.Contains(r.Id) && r.MaxPeople >= guests)
            .ToListAsync();

        var result = availableRooms.Select(r => new RoomDto(
            r.Id,
            r.Name,
            r.MaxPeople,
            r.Area,
            r.RoomsCount,
            r.BedType,
            r.Price,
            r.ImageUrl,
            r.Zone.Name,
            r.Description,
            JsonSerializer.Deserialize<List<string>>(r.Features) ?? new(),
            JsonSerializer.Deserialize<List<string>>(r.SubImages) ?? new()
        )).ToList();

        return Ok(result);
    }
}
