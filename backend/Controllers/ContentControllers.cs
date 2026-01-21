using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using TheWanderingRose.API.Data;
using TheWanderingRose.API.DTOs;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ToursController : ControllerBase
{
    private readonly AppDbContext _context;

    public ToursController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<TourDto>>> GetTours()
    {
        var tours = await _context.Tours.ToListAsync();

        var result = tours.Select(t => new TourDto(
            t.Id,
            t.Title,
            t.Description,
            t.ImageUrl,
            t.Slug,
            JsonSerializer.Deserialize<List<string>>(t.DetailedContent) ?? new(),
            JsonSerializer.Deserialize<List<string>>(t.Highlights) ?? new()
        )).ToList();

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TourDto>> GetTour(int id)
    {
        var tour = await _context.Tours.FindAsync(id);

        if (tour == null)
            return NotFound();

        var result = new TourDto(
            tour.Id,
            tour.Title,
            tour.Description,
            tour.ImageUrl,
            tour.Slug,
            JsonSerializer.Deserialize<List<string>>(tour.DetailedContent) ?? new(),
            JsonSerializer.Deserialize<List<string>>(tour.Highlights) ?? new()
        );

        return Ok(result);
    }

    [HttpGet("slug/{slug}")]
    public async Task<ActionResult<TourDto>> GetTourBySlug(string slug)
    {
        var tour = await _context.Tours
            .FirstOrDefaultAsync(t => t.Slug == slug);

        if (tour == null)
            return NotFound();

        var result = new TourDto(
            tour.Id,
            tour.Title,
            tour.Description,
            tour.ImageUrl,
            tour.Slug,
            JsonSerializer.Deserialize<List<string>>(tour.DetailedContent) ?? new(),
            JsonSerializer.Deserialize<List<string>>(tour.Highlights) ?? new()
        );

        return Ok(result);
    }
}

[ApiController]
[Route("api/[controller]")]
public class EventsController : ControllerBase
{
    private readonly AppDbContext _context;

    public EventsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<EventServiceDto>>> GetEvents()
    {
        var events = await _context.EventServices.ToListAsync();

        var result = events.Select(e => new EventServiceDto(
            e.Id,
            e.Title,
            e.Description,
            e.ImageUrl,
            e.Slug,
            JsonSerializer.Deserialize<List<string>>(e.DetailedContent) ?? new(),
            JsonSerializer.Deserialize<List<string>>(e.Highlights) ?? new()
        )).ToList();

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<EventServiceDto>> GetEvent(int id)
    {
        var eventItem = await _context.EventServices.FindAsync(id);

        if (eventItem == null)
            return NotFound();

        var result = new EventServiceDto(
            eventItem.Id,
            eventItem.Title,
            eventItem.Description,
            eventItem.ImageUrl,
            eventItem.Slug,
            JsonSerializer.Deserialize<List<string>>(eventItem.DetailedContent) ?? new(),
            JsonSerializer.Deserialize<List<string>>(eventItem.Highlights) ?? new()
        );

        return Ok(result);
    }

    [HttpGet("slug/{slug}")]
    public async Task<ActionResult<EventServiceDto>> GetEventBySlug(string slug)
    {
        var eventItem = await _context.EventServices
            .FirstOrDefaultAsync(e => e.Slug == slug);

        if (eventItem == null)
            return NotFound();

        var result = new EventServiceDto(
            eventItem.Id,
            eventItem.Title,
            eventItem.Description,
            eventItem.ImageUrl,
            eventItem.Slug,
            JsonSerializer.Deserialize<List<string>>(eventItem.DetailedContent) ?? new(),
            JsonSerializer.Deserialize<List<string>>(eventItem.Highlights) ?? new()
        );

        return Ok(result);
    }
}

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    private readonly AppDbContext _context;

    public NewsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<NewsDto>>> GetNews()
    {
        var news = await _context.News.OrderByDescending(n => n.Date).ToListAsync();

        var result = news.Select(n => new NewsDto(
            n.Id,
            n.Title,
            n.Category,
            n.ImageUrl,
            n.Date,
            n.Description,
            JsonSerializer.Deserialize<List<string>>(n.Content) ?? new()
        )).ToList();

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<NewsDto>> GetNewsById(int id)
    {
        var news = await _context.News.FindAsync(id);

        if (news == null)
            return NotFound();

        var result = new NewsDto(
            news.Id,
            news.Title,
            news.Category,
            news.ImageUrl,
            news.Date,
            news.Description,
            JsonSerializer.Deserialize<List<string>>(news.Content) ?? new()
        );

        return Ok(result);
    }
}

[ApiController]
[Route("api/[controller]")]
public class FaqsController : ControllerBase
{
    private readonly AppDbContext _context;

    public FaqsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<FaqDto>>> GetFaqs()
    {
        var faqs = await _context.Faqs.OrderBy(f => f.SortOrder).ToListAsync();

        var result = faqs.Select(f => new FaqDto(
            f.Id,
            f.Question,
            f.Answer
        )).ToList();

        return Ok(result);
    }
}

[ApiController]
[Route("api/[controller]")]
public class AmenitiesController : ControllerBase
{
    private readonly AppDbContext _context;

    public AmenitiesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<AmenityDto>>> GetAmenities()
    {
        var amenities = await _context.Amenities.ToListAsync();

        var result = amenities.Select(a => new AmenityDto(
            a.Id,
            a.Title,
            a.Description,
            a.IconName
        )).ToList();

        return Ok(result);
    }
}
