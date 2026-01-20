using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Data;

public static class DbInitializer
{
    public static void Initialize(AppDbContext context)
    {
        // Ensure database is created
        context.Database.EnsureCreated();

        // Check if already seeded
        if (context.Zones.Any())
        {
            return; // DB has been seeded
        }

        // === ZONES ===
        var zones = new List<Zone>
        {
            new Zone
            {
                Name = "Wooden House",
                HeroImage = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000",
                IntroTitle = "Giới thiệu",
                IntroText = JsonSerializer.Serialize(new List<string>
                {
                    "Wooden House tại The Wandering Rose Villa là chốn dừng chân lý tưởng cho những ai đang kiếm tìm sự ấm áp, bình yên và một nhịp sống chậm rãi hơn.",
                    "Mỗi chi tiết trong căn nhà - từ tấm thảm trải sàn, khung tranh treo tường đến ánh sáng len qua cửa sổ, đều gợi cảm giác thân thuộc, dễ chịu.",
                    "Tại đây, bạn sẽ tìm thấy sự cân bằng giữa tiện nghi hiện đại và nét giản dị gần gũi."
                }),
                IntroImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=600"
                })
            },
            new Zone
            {
                Name = "Rose House",
                HeroImage = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2000",
                IntroTitle = "Giới thiệu",
                IntroText = JsonSerializer.Serialize(new List<string>
                {
                    "Khu Rose House mang đến một không gian nghỉ dưỡng đậm chất thơ, nơi mỗi căn nhà là một màu sắc riêng biệt.",
                    "Không gian tại đây yên tĩnh tuyệt đối, chỉ có tiếng gió rì rào qua tán lá và hương thơm thoang thoảng của cỏ cây.",
                    "Mỗi căn Rose House đều có khoảng sân riêng biệt, đảm bảo sự riêng tư tối đa."
                }),
                IntroImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1562519819-016930d66421?auto=format&fit=crop&q=80&w=600"
                })
            },
            new Zone
            {
                Name = "Villa",
                HeroImage = "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=2000",
                IntroTitle = "Giới thiệu",
                IntroText = JsonSerializer.Serialize(new List<string>
                {
                    "Biệt thự The Wandering Rose là tuyệt tác kiến trúc nằm giữa lòng di sản thiên nhiên Ba Vì.",
                    "Với thiết kế không gian mở, phòng khách rộng lớn nối liền với khu vườn xanh mát và bể bơi riêng biệt.",
                    "Nơi đây không chỉ là chốn nghỉ ngơi, mà là nơi gắn kết tình thân."
                }),
                IntroImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1600596542815-9ad4c598d40e?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
                })
            }
        };

        context.Zones.AddRange(zones);
        context.SaveChanges();

        // === ROOMS ===
        var woodenHouse = zones[0];
        var roseHouse = zones[1];
        var villa = zones[2];

        var rooms = new List<Room>
        {
            // Wooden House
            new Room
            {
                Name = "Forest Room",
                MaxPeople = 16,
                Area = 48,
                RoomsCount = 2,
                BedType = "08 đệm 1m6 x 1m8",
                Price = 2500000,
                ImageUrl = "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
                ZoneId = woodenHouse.Id,
                Description = "Forest Room được bao quanh bởi rừng thông xanh mát, mang đến không gian thoáng đãng và gần gũi với thiên nhiên.",
                Features = JsonSerializer.Serialize(new List<string> { "View rừng thông", "Ban công rộng", "Bếp nấu ăn riêng", "Smart TV", "Tủ lạnh mini" }),
                SubImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600"
                })
            },
            new Room
            {
                Name = "Deluxe Room",
                MaxPeople = 2,
                Area = 18,
                RoomsCount = 1,
                BedType = "01 giường 1m8 x 2m",
                Price = 1200000,
                ImageUrl = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
                ZoneId = woodenHouse.Id,
                Description = "Deluxe Room là sự lựa chọn hoàn hảo cho các cặp đôi muốn tìm kiếm không gian riêng tư và lãng mạn.",
                Features = JsonSerializer.Serialize(new List<string> { "Giường King size", "Bồn tắm nằm", "Ban công riêng", "Minibar" }),
                SubImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=600"
                })
            },
            new Room
            {
                Name = "Family Room",
                MaxPeople = 4,
                Area = 45,
                RoomsCount = 2,
                BedType = "02 giường 1m6 x 2m",
                Price = 1800000,
                ImageUrl = "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200",
                ZoneId = woodenHouse.Id,
                Description = "Family Room được thiết kế dành riêng cho các gia đình nhỏ, mang đến không gian ấm cúng và tiện nghi.",
                Features = JsonSerializer.Serialize(new List<string> { "2 Giường đôi", "Không gian chơi cho bé", "Ấm đun nước", "Sấy tóc" }),
                SubImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600"
                })
            },
            // Rose House
            new Room
            {
                Name = "Pink Rose House",
                MaxPeople = 4,
                Area = 30,
                RoomsCount = 1,
                BedType = "02 giường 1m8 x 2m",
                Price = 1900000,
                ImageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
                ZoneId = roseHouse.Id,
                Description = "Pink Rose House sở hữu vẻ đẹp ngọt ngào và lãng mạn, được bao quanh bởi vườn hoa hồng rực rỡ.",
                Features = JsonSerializer.Serialize(new List<string> { "Sân hiên ngắm hoa", "Trà chiều miễn phí", "Nội thất Vintage" }),
                SubImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600"
                })
            },
            new Room
            {
                Name = "White Rose House",
                MaxPeople = 2,
                Area = 24,
                RoomsCount = 1,
                BedType = "01 giường 1m8 x 2m",
                Price = 1500000,
                ImageUrl = "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
                ZoneId = roseHouse.Id,
                Description = "White Rose House mang đến không gian nghỉ dưỡng thanh lịch, hiện đại và tràn ngập ánh sáng.",
                Features = JsonSerializer.Serialize(new List<string> { "Thiết kế tối giản", "Bồn tắm đứng", "View toàn cảnh" }),
                SubImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1616594039964-40891a909d93?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1556020685-ae79c95eda3d?auto=format&fit=crop&q=80&w=600"
                })
            },
            new Room
            {
                Name = "Red Rose House",
                MaxPeople = 2,
                Area = 13,
                RoomsCount = 1,
                BedType = "01 giường 1m6 x 2m",
                Price = 1300000,
                ImageUrl = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
                ZoneId = roseHouse.Id,
                Description = "Red Rose House mang nét đẹp trầm mặc, ấm cúng như một ngôi nhà nhỏ vùng ngoại ô.",
                Features = JsonSerializer.Serialize(new List<string> { "Không gian ấm cúng", "Giá hợp lý", "Gần khu BBQ" }),
                SubImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1512918760513-95f192972701?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=600"
                })
            },
            // Villa
            new Room
            {
                Name = "The Wandering Rose Villa",
                MaxPeople = 4,
                Area = 100,
                RoomsCount = 2,
                BedType = "2 giường 1m8 x 2m",
                Price = 5000000,
                ImageUrl = "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?auto=format&fit=crop&q=80&w=1200",
                ZoneId = villa.Id,
                Description = "Biệt thự The Wandering Rose là sự kết tinh của kiến trúc hiện đại và vẻ đẹp phóng khoáng của thiên nhiên.",
                Features = JsonSerializer.Serialize(new List<string> { "Bể bơi riêng", "Phòng khách lớn", "Bếp Full nội thất", "BBQ tại vườn", "Loa Marshall" }),
                SubImages = JsonSerializer.Serialize(new List<string>
                {
                    "https://images.unsplash.com/photo-1600596542815-9ad4c598d40e?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
                })
            }
        };

        context.Rooms.AddRange(rooms);
        context.SaveChanges();

        // === AMENITIES ===
        var amenities = new List<Amenity>
        {
            new Amenity { Title = "Wifi 24/7", Description = "Kết nối tốc độ cao phủ sóng toàn khu vực.", IconName = "wifi" },
            new Amenity { Title = "Hồ bơi", Description = "Bể bơi vô cực view núi rừng, lọc nước muối khoáng.", IconName = "pool" },
            new Amenity { Title = "Xe đạp miễn phí", Description = "Tự do khám phá những cung đường thơ mộng.", IconName = "bike" },
            new Amenity { Title = "BBQ ngoài trời", Description = "Đầy đủ dụng cụ cho bữa tiệc nướng ấm cúng.", IconName = "bbq" }
        };

        context.Amenities.AddRange(amenities);
        context.SaveChanges();

        // === EVENT SERVICES ===
        var eventServices = new List<EventService>
        {
            new EventService
            {
                Title = "Tổ chức sinh nhật",
                Description = "Biến ngày sinh nhật trở thành kỷ niệm khó quên với không gian trang trí lộng lẫy giữa thiên nhiên.",
                ImageUrl = "https://images.unsplash.com/photo-1513151241214-ca203898fed1?auto=format&fit=crop&q=80&w=800",
                Slug = "birthday",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "The Wandering Rose mang đến một không gian tổ chức sinh nhật ngoài trời đậm chất thơ.",
                    "Khu vực sân vườn rộng rãi cạnh bể bơi là địa điểm lý tưởng để tổ chức tiệc nướng BBQ ấm cúng.",
                    "Ẩm thực là linh hồn của bữa tiệc. Các đầu bếp tài hoa sẽ chuẩn bị thực đơn phong phú."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Trang trí theo Concept riêng (Vintage, Boho, Luxury...)",
                    "Tiệc nướng BBQ / Buffet ngoài trời",
                    "Hệ thống âm thanh, ánh sáng & Karaoke",
                    "Bánh sinh nhật & Hoa tươi trang trí"
                })
            },
            new EventService
            {
                Title = "Teambuilding",
                Description = "Sân cỏ rộng lớn và không khí trong lành là địa điểm lý tưởng cho các hoạt động gắn kết.",
                ImageUrl = "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
                Slug = "teambuilding",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "Rời xa văn phòng ngột ngạt, hãy để The Wandering Rose tái tạo năng lượng cho đội ngũ của bạn.",
                    "Mỗi chương trình Teambuilding đều được thiết kế riêng để phù hợp với văn hóa doanh nghiệp.",
                    "Chúng tôi cung cấp trọn gói dịch vụ từ MC hoạt náo, dụng cụ chơi game, âm thanh di động."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Sân cỏ tự nhiên rộng 500m2",
                    "Kịch bản trò chơi đa dạng",
                    "MC chuyên nghiệp & Dụng cụ game đầy đủ",
                    "Lửa trại & Tiệc Gala Dinner"
                })
            },
            new EventService
            {
                Title = "Tiệc cưới nhỏ",
                Description = "Một đám cưới lãng mạn, riêng tư dưới ánh hoàng hôn Ba Vì là giấc mơ của nhiều cặp đôi.",
                ImageUrl = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
                Slug = "wedding",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "Xu hướng 'Intimate Wedding' đang lên ngôi, và The Wandering Rose là địa điểm hoàn hảo.",
                    "Không gian làm lễ được set-up giữa rừng thông hoặc bên cạnh bể bơi vô cực.",
                    "Chúng tôi cung cấp phòng Tân hôn đặc biệt dành cho cặp đôi."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Không gian làm lễ lãng mạn giữa thiên nhiên",
                    "Trang trí hoa tươi cao cấp",
                    "Tiệc bàn Âu hoặc Buffet nướng",
                    "Phòng Tân hôn Honey Moon"
                })
            },
            new EventService
            {
                Title = "Lễ kỷ niệm",
                Description = "Không gian sang trọng và ấm áp của Villa sẽ là phông nền hoàn hảo cho những khoảnh khắc sum vầy.",
                ImageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
                Slug = "anniversary",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "Cuộc sống là một chuỗi những cột mốc đáng nhớ, và Lễ kỷ niệm là dịp để nhìn lại.",
                    "Không gian phòng khách Villa sang trọng với lò sưởi ấm áp là nơi tuyệt vời.",
                    "Dịch vụ 'Private Chef' sẽ mang đến trải nghiệm ẩm thực đỉnh cao."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Không gian riêng tư, ấm cúng và sang trọng",
                    "Thực đơn tiệc thiết kế riêng",
                    "Trang trí bàn tiệc theo chủ đề",
                    "Hỗ trợ trình chiếu Video kỷ niệm"
                })
            }
        };

        context.EventServices.AddRange(eventServices);
        context.SaveChanges();

        // === TOURS ===
        var tours = new List<Tour>
        {
            new Tour
            {
                Title = "Tour khám phá Vườn Quốc gia Ba Vì",
                Description = "Hành trình đưa bạn về với thiên nhiên hoang sơ, hùng vĩ.",
                ImageUrl = "https://images.unsplash.com/photo-1533035332515-56456f481a5a?auto=format&fit=crop&q=80&w=800",
                Slug = "ba-vi-park",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "Vườn Quốc gia Ba Vì, lá phổi xanh phía Tây Hà Nội, là một kho tàng thiên nhiên.",
                    "Điểm dừng chân đầu tiên là Nhà Kính Xương Rồng với hơn 1.200 giống xương rồng.",
                    "Hành trình còn đưa bạn đến phế tích Nhà thờ cổ Pháp."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Xe đưa đón khứ hồi từ Resort",
                    "Vé tham quan các điểm",
                    "Hướng dẫn viên am hiểu lịch sử",
                    "Set Picnic trưa giữa rừng thông"
                })
            },
            new Tour
            {
                Title = "Tour Ao Vua",
                Description = "Khu du lịch sinh thái Ao Vua nổi tiếng với cảnh quan sơn thủy hữu tình.",
                ImageUrl = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
                Slug = "ao-vua",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "Gắn liền với truyền thuyết Sơn Tinh - Thủy Tinh, Ao Vua không chỉ là một danh thắng.",
                    "Bạn sẽ được chiêm ngưỡng hệ thống thác nước hùng vĩ.",
                    "Tour bao gồm dịch vụ tắm thảo dược người Dao đỏ."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Vé vào cổng & Trọn gói các trò chơi",
                    "Tham quan hệ thống thác nước",
                    "Tắm thảo dược người Dao đỏ",
                    "Bữa trưa đặc sản"
                })
            },
            new Tour
            {
                Title = "Khoang Xanh – Suối Tiên",
                Description = "Tận hưởng cảm giác thư giãn tuyệt đối với dịch vụ tắm bùn khoáng nóng.",
                ImageUrl = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
                Slug = "khoang-xanh",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "Nếu bạn đang tìm kiếm trải nghiệm nghỉ dưỡng kết hợp trị liệu sức khỏe.",
                    "Điểm nhấn là trải nghiệm tắm bùn khoáng nóng.",
                    "Hệ thống Thác Mơ, Thác Mâm Xôi cũng là những điểm check-in không thể bỏ qua."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Vé tắm khoáng nóng & Tắm bùn khoáng",
                    "Tham quan các thác nước",
                    "Vé tham quan Động trượt tuyết",
                    "Bữa ăn theo thực đơn sức khỏe"
                })
            },
            new Tour
            {
                Title = "Các trải nghiệm bản địa",
                Description = "Hòa mình vào cuộc sống của người dân địa phương với các hoạt động thú vị.",
                ImageUrl = "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800",
                Slug = "local-exp",
                DetailedContent = JsonSerializer.Serialize(new List<string>
                {
                    "Ba Vì không chỉ có núi rừng mà còn có những nét văn hóa nông nghiệp đặc sắc.",
                    "Sau đó, bạn sẽ được nghệ nhân hướng dẫn quy trình sao chè thủ công.",
                    "Kết thúc tour là bữa tiệc nhẹ với các sản phẩm từ sữa."
                }),
                Highlights = JsonSerializer.Serialize(new List<string>
                {
                    "Trải nghiệm hái chè & Học sao chè",
                    "Tham quan Trang trại bò sữa",
                    "Thưởng thức tiệc trà",
                    "Quà tặng mang về"
                })
            }
        };

        context.Tours.AddRange(tours);
        context.SaveChanges();

        // === NEWS ===
        var news = new List<News>
        {
            new News
            {
                Title = "Đêm nhạc Acoustic giữa rừng thông",
                Category = "Sự kiện âm nhạc",
                ImageUrl = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
                Date = new DateTime(2023, 10, 24),
                Description = "Hòa mình vào giai điệu du dương giữa không gian núi rừng Ba Vì hùng vĩ.",
                Content = JsonSerializer.Serialize(new List<string>
                {
                    "Bạn đã bao giờ tưởng tượng mình đang ngồi dưới tán thông reo?",
                    "Đêm nhạc 'Melody of the Forest' không chỉ là một sự kiện âm nhạc đơn thuần.",
                    "Chương trình bắt đầu từ 19:30 với tiệc nướng BBQ ngoài trời."
                })
            },
            new News
            {
                Title = "Ưu đãi mùa thu: Giảm 20% đặt phòng sớm",
                Category = "Khuyến mãi",
                ImageUrl = "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
                Date = new DateTime(2023, 10, 20),
                Description = "Cơ hội trải nghiệm nghỉ dưỡng đẳng cấp với mức giá ưu đãi nhất trong năm.",
                Content = JsonSerializer.Serialize(new List<string>
                {
                    "Mùa thu Ba Vì mang một vẻ đẹp quyến rũ khó cưỡng.",
                    "Giảm ngay 20% cho tất cả các đặt phòng được thực hiện trước 30 ngày.",
                    "Ngoài ưu đãi về giá phòng, quý khách còn nhận được gói quà tặng trị giá 1.000.000đ."
                })
            },
            new News
            {
                Title = "Workshop: Nghệ thuật cắm hoa & Trà chiều",
                Category = "Hoạt động",
                ImageUrl = "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
                Date = new DateTime(2023, 10, 15),
                Description = "Một buổi chiều thư giãn với hoa, trà và những câu chuyện nghệ thuật.",
                Content = JsonSerializer.Serialize(new List<string>
                {
                    "Dành cho những tâm hồn yêu cái đẹp và sự tinh tế.",
                    "Workshop diễn ra vào chiều Chủ Nhật, từ 14:00 đến 17:00.",
                    "Xen kẽ trong buổi workshop là tiệc trà chiều kiểu Anh."
                })
            }
        };

        context.News.AddRange(news);
        context.SaveChanges();

        // === FAQs ===
        var faqs = new List<Faq>
        {
            new Faq { Question = "Làm thế nào để đặt phòng?", Answer = "Quý khách có thể đặt phòng trực tiếp trên website hoặc liên hệ qua hotline 092 981 6699.", SortOrder = 1 },
            new Faq { Question = "Chính sách hủy phòng như thế nào?", Answer = "Hủy phòng trước 14 ngày sẽ được hoàn 100% tiền cọc. Hủy từ 7-14 ngày hoàn 50%. Hủy trong vòng 7 ngày không hoàn tiền cọc.", SortOrder = 2 },
            new Faq { Question = "Có dịch vụ đưa đón sân bay không?", Answer = "Chúng tôi cung cấp dịch vụ xe đưa đón sân bay và từ trung tâm Hà Nội với mức phí ưu đãi.", SortOrder = 3 },
            new Faq { Question = "Giờ nhận phòng và trả phòng là mấy giờ?", Answer = "Giờ nhận phòng là 14:00 và giờ trả phòng là 12:00 trưa hôm sau.", SortOrder = 4 },
            new Faq { Question = "Villa có cho phép mang thú cưng không?", Answer = "Rất tiếc, để đảm bảo vệ sinh và không gian chung, chúng tôi hiện chưa có chính sách cho phép mang thú cưng.", SortOrder = 5 },
            new Faq { Question = "Bữa sáng có bao gồm trong giá phòng không?", Answer = "Tất cả các hạng phòng đều đã bao gồm bữa sáng tự chọn tại nhà hàng.", SortOrder = 6 },
            new Faq { Question = "Có khu vui chơi cho trẻ em không?", Answer = "Chúng tôi có khu vui chơi ngoài trời an toàn cho trẻ em và các hoạt động trải nghiệm thiên nhiên.", SortOrder = 7 },
            new Faq { Question = "Tôi có thể tổ chức tiệc BBQ tại villa không?", Answer = "Mỗi căn villa đều được trang bị bếp nướng BBQ và khu vực ăn uống ngoài trời.", SortOrder = 8 }
        };

        context.Faqs.AddRange(faqs);
        context.SaveChanges();

        // === SYSTEM CONFIGS ===
        var systemConfigs = new List<SystemConfig>
        {
            new SystemConfig 
            { 
                ConfigKey = "WEEKEND_SURCHARGE_RATE", 
                ConfigValue = "10", 
                Description = "Tỷ lệ phụ thu cuối tuần (%) - Áp dụng cho các đêm Thứ 7 và Chủ nhật"
            }
        };

        context.SystemConfigs.AddRange(systemConfigs);
        context.SaveChanges();
    }
}
