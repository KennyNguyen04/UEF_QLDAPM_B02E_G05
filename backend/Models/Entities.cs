using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheWanderingRose.API.Models;

// ====== ZONE ======
public class Zone
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [MaxLength(500)]
    public string HeroImage { get; set; } = string.Empty;
    
    [MaxLength(100)]
    public string IntroTitle { get; set; } = string.Empty;
    
    // JSON array of paragraphs
    public string IntroText { get; set; } = "[]";
    
    // JSON array of image URLs
    public string IntroImages { get; set; } = "[]";
    
    // Navigation
    public virtual ICollection<Room> Rooms { get; set; } = new List<Room>();
}

// ====== ROOM ======
public class Room
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;
    
    public int MaxPeople { get; set; }
    
    public int Area { get; set; }
    
    public int RoomsCount { get; set; }
    
    [MaxLength(100)]
    public string BedType { get; set; } = string.Empty;
    
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    
    [MaxLength(500)]
    public string ImageUrl { get; set; } = string.Empty;
    
    [MaxLength(1000)]
    public string? Description { get; set; }
    
    // JSON array
    public string Features { get; set; } = "[]";
    
    // JSON array
    public string SubImages { get; set; } = "[]";
    
    // Foreign Key
    public int ZoneId { get; set; }
    public virtual Zone Zone { get; set; } = null!;
    
    // Navigation
    public virtual ICollection<BookingRoom> BookingRooms { get; set; } = new List<BookingRoom>();
}

// ====== CUSTOMER ======
public class Customer
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string FullName { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(100)]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(20)]
    public string Phone { get; set; } = string.Empty;
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Navigation
    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
    public virtual ICollection<ContactRequest> ContactRequests { get; set; } = new List<ContactRequest>();
}

// ====== BOOKING ======
public class Booking
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(20)]
    public string BookingCode { get; set; } = string.Empty;
    
    public DateTime CheckIn { get; set; }
    
    public DateTime CheckOut { get; set; }
    
    [Column(TypeName = "decimal(18,2)")]
    public decimal TotalPrice { get; set; }
    
    [MaxLength(50)]
    public string Status { get; set; } = "pending"; // pending, confirmed, cancelled, completed
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Foreign Key
    public int CustomerId { get; set; }
    public virtual Customer Customer { get; set; } = null!;
    
    // Navigation
    public virtual ICollection<BookingRoom> BookingRooms { get; set; } = new List<BookingRoom>();
}

// ====== BOOKING_ROOM (Many-to-Many) ======
public class BookingRoom
{
    [Key]
    public int Id { get; set; }
    
    public int Quantity { get; set; }
    
    [Column(TypeName = "decimal(18,2)")]
    public decimal UnitPrice { get; set; }
    
    // Foreign Keys
    public int BookingId { get; set; }
    public virtual Booking Booking { get; set; } = null!;
    
    public int RoomId { get; set; }
    public virtual Room Room { get; set; } = null!;
}

// ====== EVENT SERVICE ======
public class EventService
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;
    
    [MaxLength(1000)]
    public string Description { get; set; } = string.Empty;
    
    [MaxLength(500)]
    public string ImageUrl { get; set; } = string.Empty;
    
    [MaxLength(100)]
    public string Slug { get; set; } = string.Empty;
    
    // JSON array
    public string DetailedContent { get; set; } = "[]";
    
    // JSON array
    public string Highlights { get; set; } = "[]";
}

// ====== TOUR ======
public class Tour
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;
    
    [MaxLength(1000)]
    public string Description { get; set; } = string.Empty;
    
    [MaxLength(500)]
    public string ImageUrl { get; set; } = string.Empty;
    
    [MaxLength(100)]
    public string Slug { get; set; } = string.Empty;
    
    // JSON array
    public string DetailedContent { get; set; } = "[]";
    
    // JSON array
    public string Highlights { get; set; } = "[]";
}

// ====== NEWS ======
public class News
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(300)]
    public string Title { get; set; } = string.Empty;
    
    [MaxLength(100)]
    public string Category { get; set; } = string.Empty;
    
    [MaxLength(500)]
    public string ImageUrl { get; set; } = string.Empty;
    
    public DateTime? Date { get; set; }
    
    [MaxLength(500)]
    public string? Description { get; set; }
    
    // JSON array
    public string Content { get; set; } = "[]";
}

// ====== FAQ ======
public class Faq
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(500)]
    public string Question { get; set; } = string.Empty;
    
    [MaxLength(2000)]
    public string Answer { get; set; } = string.Empty;
    
    public int SortOrder { get; set; }
}

// ====== AMENITY ======
public class Amenity
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = string.Empty;
    
    [MaxLength(300)]
    public string Description { get; set; } = string.Empty;
    
    [MaxLength(50)]
    public string IconName { get; set; } = string.Empty;
}

// ====== CONTACT REQUEST ======
public class ContactRequest
{
    [Key]
    public int Id { get; set; }
    
    [MaxLength(200)]
    public string Subject { get; set; } = string.Empty;
    
    [MaxLength(2000)]
    public string Message { get; set; } = string.Empty;
    
    [MaxLength(50)]
    public string Status { get; set; } = "new"; // new, read, replied
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Foreign Key
    public int CustomerId { get; set; }
    public virtual Customer Customer { get; set; } = null!;
}

// ====== EVENT BOOKING ======
public class EventBooking
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string FullName { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(100)]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(20)]
    public string Phone { get; set; } = string.Empty;
    
    [MaxLength(100)]
    public string EventType { get; set; } = string.Empty;
    
    [MaxLength(2000)]
    public string Message { get; set; } = string.Empty;
    
    [MaxLength(50)]
    public string Status { get; set; } = "pending";
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// ====== TOUR BOOKING ======
public class TourBooking
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string FullName { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(100)]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(20)]
    public string Phone { get; set; } = string.Empty;
    
    [MaxLength(200)]
    public string TourName { get; set; } = string.Empty;
    
    [MaxLength(2000)]
    public string Message { get; set; } = string.Empty;
    
    [MaxLength(50)]
    public string Status { get; set; } = "pending";
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
