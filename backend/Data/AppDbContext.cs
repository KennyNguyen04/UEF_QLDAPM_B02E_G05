using Microsoft.EntityFrameworkCore;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    
    // DbSets
    public DbSet<Zone> Zones { get; set; }
    public DbSet<Room> Rooms { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Booking> Bookings { get; set; }
    public DbSet<BookingRoom> BookingRooms { get; set; }
    public DbSet<EventService> EventServices { get; set; }
    public DbSet<Tour> Tours { get; set; }
    public DbSet<News> News { get; set; }
    public DbSet<Faq> Faqs { get; set; }
    public DbSet<Amenity> Amenities { get; set; }
    public DbSet<ContactRequest> ContactRequests { get; set; }
    public DbSet<EventBooking> EventBookings { get; set; }
    public DbSet<TourBooking> TourBookings { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Zone -> Rooms (One-to-Many)
        modelBuilder.Entity<Room>()
            .HasOne(r => r.Zone)
            .WithMany(z => z.Rooms)
            .HasForeignKey(r => r.ZoneId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // Customer -> Bookings (One-to-Many)
        modelBuilder.Entity<Booking>()
            .HasOne(b => b.Customer)
            .WithMany(c => c.Bookings)
            .HasForeignKey(b => b.CustomerId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // Booking -> BookingRooms (One-to-Many)
        modelBuilder.Entity<BookingRoom>()
            .HasOne(br => br.Booking)
            .WithMany(b => b.BookingRooms)
            .HasForeignKey(br => br.BookingId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // Room -> BookingRooms (One-to-Many)
        modelBuilder.Entity<BookingRoom>()
            .HasOne(br => br.Room)
            .WithMany(r => r.BookingRooms)
            .HasForeignKey(br => br.RoomId)
            .OnDelete(DeleteBehavior.Restrict);
        
        // Customer -> ContactRequests (One-to-Many)
        modelBuilder.Entity<ContactRequest>()
            .HasOne(cr => cr.Customer)
            .WithMany(c => c.ContactRequests)
            .HasForeignKey(cr => cr.CustomerId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // Unique constraint for Booking Code
        modelBuilder.Entity<Booking>()
            .HasIndex(b => b.BookingCode)
            .IsUnique();
        
        // Index for Customer Email
        modelBuilder.Entity<Customer>()
            .HasIndex(c => c.Email);
    }
}
