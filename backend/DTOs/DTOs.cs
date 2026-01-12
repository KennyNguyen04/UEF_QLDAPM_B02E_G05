namespace TheWanderingRose.API.DTOs;

// ====== ZONE DTOs ======
public record ZoneDto(
    int Id,
    string Name,
    string HeroImage,
    string IntroTitle,
    List<string> IntroText,
    List<string> IntroImages,
    List<RoomSummaryDto> Rooms
);

public record ZoneSummaryDto(
    int Id,
    string Name,
    string HeroImage
);

// ====== ROOM DTOs ======
public record RoomDto(
    int Id,
    string Name,
    int MaxPeople,
    int Area,
    int RoomsCount,
    string BedType,
    decimal Price,
    string ImageUrl,
    string Zone,
    string? Description,
    List<string> Features,
    List<string> SubImages
);

public record RoomSummaryDto(
    int Id,
    string Name,
    int MaxPeople,
    decimal Price,
    string ImageUrl
);

// ====== BOOKING DTOs ======
public record CreateBookingDto(
    string FullName,
    string Email,
    string Phone,
    DateTime CheckIn,
    DateTime CheckOut,
    List<BookingRoomDto> Rooms
);

public record BookingRoomDto(
    int RoomId,
    int Quantity
);

public record BookingResponseDto(
    int Id,
    string BookingCode,
    DateTime CheckIn,
    DateTime CheckOut,
    decimal TotalPrice,
    string Status,
    CustomerDto Customer,
    List<BookingRoomDetailDto> Rooms
);

public record BookingRoomDetailDto(
    int RoomId,
    string RoomName,
    int Quantity,
    decimal UnitPrice
);

public record CustomerDto(
    int Id,
    string FullName,
    string Email,
    string Phone
);

// ====== EVENT SERVICE DTOs ======
public record EventServiceDto(
    int Id,
    string Title,
    string Description,
    string ImageUrl,
    string Slug,
    List<string> DetailedContent,
    List<string> Highlights
);

// ====== TOUR DTOs ======
public record TourDto(
    int Id,
    string Title,
    string Description,
    string ImageUrl,
    string Slug,
    List<string> DetailedContent,
    List<string> Highlights
);

// ====== NEWS DTOs ======
public record NewsDto(
    int Id,
    string Title,
    string Category,
    string ImageUrl,
    DateTime? Date,
    string? Description,
    List<string> Content
);

// ====== FAQ DTOs ======
public record FaqDto(
    int Id,
    string Question,
    string Answer
);

// ====== AMENITY DTOs ======
public record AmenityDto(
    int Id,
    string Title,
    string Description,
    string IconName
);

// ====== CONTACT DTOs ======
public record CreateContactDto(
    string FullName,
    string Email,
    string Phone,
    string Subject,
    string Message
);

public record ContactResponseDto(
    bool Success,
    string Message
);

// ====== EVENT BOOKING DTOs ======
public record CreateEventBookingDto(
    string FullName,
    string Email,
    string Phone,
    string EventType,
    string Message
);

// ====== TOUR BOOKING DTOs ======
public record CreateTourBookingDto(
    string FullName,
    string Email,
    string Phone,
    string TourName,
    string Message
);

// ====== GENERIC RESPONSE ======
public record ApiResponse<T>(
    bool Success,
    string Message,
    T? Data
);
