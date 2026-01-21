using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using TheWanderingRose.API.Data;
using TheWanderingRose.API.DTOs;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ZonesController : ControllerBase
{
    private readonly AppDbContext _context;

    public ZonesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<ZoneDto>>> GetZones()
    {
        var zones = await _context.Zones
            .Include(z => z.Rooms)
            .ToListAsync();

        var result = zones.Select(z => new ZoneDto(
            z.Id,
            z.Name,
            z.HeroImage,
            z.IntroTitle,
            JsonSerializer.Deserialize<List<string>>(z.IntroText) ?? new(),
            JsonSerializer.Deserialize<List<string>>(z.IntroImages) ?? new(),
            z.Rooms.Select(r => new RoomSummaryDto(
                r.Id, r.Name, r.MaxPeople, r.Price, r.ImageUrl
            )).ToList()
        )).ToList();

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ZoneDto>> GetZone(int id)
    {
        var zone = await _context.Zones
            .Include(z => z.Rooms)
            .FirstOrDefaultAsync(z => z.Id == id);

        if (zone == null)
            return NotFound();

        var result = new ZoneDto(
            zone.Id,
            zone.Name,
            zone.HeroImage,
            zone.IntroTitle,
            JsonSerializer.Deserialize<List<string>>(zone.IntroText) ?? new(),
            JsonSerializer.Deserialize<List<string>>(zone.IntroImages) ?? new(),
            zone.Rooms.Select(r => new RoomSummaryDto(
                r.Id, r.Name, r.MaxPeople, r.Price, r.ImageUrl
            )).ToList()
        );

        return Ok(result);
    }

    [HttpGet("name/{name}")]
    public async Task<ActionResult<ZoneDto>> GetZoneByName(string name)
    {
        var zone = await _context.Zones
            .Include(z => z.Rooms)
            .FirstOrDefaultAsync(z => z.Name == name);

        if (zone == null)
            return NotFound();

        var result = new ZoneDto(
            zone.Id,
            zone.Name,
            zone.HeroImage,
            zone.IntroTitle,
            JsonSerializer.Deserialize<List<string>>(zone.IntroText) ?? new(),
            JsonSerializer.Deserialize<List<string>>(zone.IntroImages) ?? new(),
            zone.Rooms.Select(r => new RoomSummaryDto(
                r.Id, r.Name, r.MaxPeople, r.Price, r.ImageUrl
            )).ToList()
        );

        return Ok(result);
    }
}
