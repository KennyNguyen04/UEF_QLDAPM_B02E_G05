import { Room, Amenity, Service, Tour, News, EventServiceItem, ZoneInfo, FAQ } from './types';

// Mock Data mimicking SQL Server Tables

export const zonesData: ZoneInfo[] = [
  {
    name: 'Wooden House',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000',
    introTitle: 'Giới thiệu',
    introText: [
      "Wooden House tại The Wandering Rose Villa là chốn dừng chân lý tưởng cho những ai đang kiếm tìm sự ấm áp, bình yên và một nhịp sống chậm rãi hơn. Không gian được thiết kế theo phong cách mộc mạc, kết hợp hài hòa giữa sắc mộc mạc và gỗ thơm, tạo nên sự gần gũi và thư giãn.",
      "Mỗi chi tiết trong căn nhà - từ tấm thảm trải sàn, khung tranh treo tường đến ánh sáng len qua cửa sổ, đều gợi cảm giác thân thuộc, dễ chịu. View xanh mát với nhiều cửa sổ rộng mở giúp căn phòng luôn tràn đầy ánh sáng, gió trời và hương vị núi rừng trong lành.",
      "Tại đây, bạn sẽ tìm thấy sự cân bằng giữa tiện nghi hiện đại và nét giản dị gần gũi, để từng khoảnh khắc nghỉ ngơi đều trở thành kỷ niệm đáng nhớ bên những người thương yêu."
    ],
    introImages: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    name: 'Rose House',
    heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2000',
    introTitle: 'Giới thiệu',
    introText: [
      "Khu Rose House mang đến một không gian nghỉ dưỡng đậm chất thơ, nơi mỗi căn nhà là một màu sắc riêng biệt, hòa quyện tuyệt đối với thiên nhiên Ba Vì. Được thiết kế theo phong cách tối giản nhưng đầy đủ tiện nghi, Rose House là lựa chọn hoàn hảo cho các cặp đôi hoặc gia đình nhỏ.",
      "Không gian tại đây yên tĩnh tuyệt đối, chỉ có tiếng gió rì rào qua tán lá và hương thơm thoang thoảng của cỏ cây. Buổi sáng thức dậy với ánh nắng chan hòa, buổi tối quây quần bên hiên nhà ngắm sao trời – đó là những trải nghiệm quý giá mà Rose House mang lại.",
      "Mỗi căn Rose House đều có khoảng sân riêng biệt, đảm bảo sự riêng tư tối đa, giúp bạn tận hưởng trọn vẹn từng khoảnh khắc bình yên bên những người thân yêu nhất."
    ],
    introImages: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=600", // Bungalow style
      "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80&w=600", // Nature view
      "https://images.unsplash.com/photo-1562519819-016930d66421?auto=format&fit=crop&q=80&w=600"  // Picnic style
    ]
  },
  {
    name: 'Villa',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=2000',
    introTitle: 'Giới thiệu',
    introText: [
        "Biệt thự The Wandering Rose là tuyệt tác kiến trúc nằm giữa lòng di sản thiên nhiên Ba Vì. Được xây dựng với tiêu chuẩn cao cấp nhất, Villa là biểu tượng của sự sang trọng, riêng tư và đẳng cấp, dành riêng cho những vị khách thượng lưu muốn tìm kiếm một kỳ nghỉ dưỡng không tì vết.",
        "Với thiết kế không gian mở, phòng khách rộng lớn nối liền với khu vườn xanh mát và bể bơi riêng biệt, Villa xóa nhòa ranh giới giữa con người và thiên nhiên. Nội thất được tuyển chọn kỹ lưỡng, kết hợp giữa phong cách hiện đại và những điểm nhấn nghệ thuật tinh tế.",
        "Nơi đây không chỉ là chốn nghỉ ngơi, mà là nơi gắn kết tình thân. Dù là bữa tiệc BBQ sôi động bên hồ bơi hay những phút giây lắng đọng bên ly rượu vang trong phòng khách sang trọng, Villa đều mang đến những trải nghiệm xúc cảm thăng hoa nhất."
    ],
    introImages: [
      "https://images.unsplash.com/photo-1600596542815-9ad4c598d40e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
    ]
  }
];

export const rooms: Room[] = [
  // --- WOODEN HOUSE ZONE ---
  {
    id: 1,
    name: "Forest room",
    maxPeople: 16,
    area: 48,
    roomsCount: 2,
    bedType: "08 đệm 1m6 x 1m8",
    price: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
    zone: 'Wooden House',
    description: "Forest Room được bao quanh bởi rừng thông xanh mát, mang đến không gian thoáng đãng và gần gũi với thiên nhiên. Thiết kế mở với nhiều cửa kính lớn giúp bạn có thể ngắm nhìn khung cảnh tuyệt đẹp bên ngoài ngay từ giường ngủ. Nội thất gỗ mộc mạc kết hợp cùng các tiện nghi hiện đại tạo nên sự thoải mái tối đa cho các nhóm bạn đông người.",
    features: ["View rừng thông", "Ban công rộng", "Bếp nấu ăn riêng", "Smart TV", "Tủ lạnh mini"],
    subImages: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 2,
    name: "Deluxe room",
    maxPeople: 2,
    area: 18,
    roomsCount: 1,
    bedType: "01 giường 1m8 x 2m",
    price: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
    zone: 'Wooden House',
    description: "Deluxe Room là sự lựa chọn hoàn hảo cho các cặp đôi muốn tìm kiếm không gian riêng tư và lãng mạn. Căn phòng được bài trí tinh tế với tông màu ấm áp, cửa sổ lớn đón ánh sáng tự nhiên và ban công riêng biệt để thưởng thức trà chiều. Tiện nghi đầy đủ cùng không gian yên tĩnh sẽ mang lại cho bạn những giây phút thư giãn tuyệt vời.",
    features: ["Giường King size", "Bồn tắm nằm", "Ban công riêng", "Minibar"],
    subImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 3,
    name: "Family Room",
    maxPeople: 4,
    area: 45,
    roomsCount: 2, // Updated to 2 rooms to match the user scenario
    bedType: "02 giường 1m6 x 2m",
    price: 1800000,
    imageUrl: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200",
    zone: 'Wooden House',
    description: "Family Room được thiết kế dành riêng cho các gia đình nhỏ, mang đến không gian ấm cúng và tiện nghi như ở nhà. Phòng có không gian vui chơi an toàn cho trẻ em và khu vực sinh hoạt chung thoải mái. Với vị trí thuận lợi gần các khu vực tiện ích, đây là nơi lý tưởng để cả gia đình cùng nhau tận hưởng kỳ nghỉ đáng nhớ.",
    features: ["2 Giường đôi", "Không gian chơi cho bé", "Ấm đun nước", "Sấy tóc"],
    subImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600"
    ]
  },

  // --- ROSE HOUSE ZONE ---
  {
    id: 4,
    name: "Pink Rose House",
    maxPeople: 4,
    area: 30,
    roomsCount: 1,
    bedType: "02 giường 1m8 x 2m",
    price: 1900000,
    imageUrl: "https://images.unsplash.com/photo-1522771753033-6a0e69ed6dfb?auto=format&fit=crop&q=80&w=1200",
    zone: 'Rose House',
    description: "Pink Rose House sở hữu vẻ đẹp ngọt ngào và lãng mạn, được bao quanh bởi vườn hoa hồng rực rỡ quanh năm. Thiết kế nội thất mang phong cách Vintage nhẹ nhàng với tông màu hồng pastel chủ đạo, tạo cảm giác thư thái và mộng mơ. Đây là không gian lý tưởng để bạn thả hồn vào thiên nhiên, đọc một cuốn sách hay và tận hưởng sự bình yên hiếm có.",
    features: ["Sân hiên ngắm hoa", "Trà chiều miễn phí", "Nội thất Vintage"],
    subImages: [
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1505693436371-8d8c4c643c72?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 5,
    name: "White Rose House",
    maxPeople: 2,
    area: 24,
    roomsCount: 1,
    bedType: "01 giường 1m8 x 2m",
    price: 1500000,
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
    zone: 'Rose House',
    description: "Với tông màu trắng tinh khôi chủ đạo, White Rose House mang đến không gian nghỉ dưỡng thanh lịch, hiện đại và tràn ngập ánh sáng. Căn phòng được thiết kế tối giản nhưng đầy đủ tiện nghi, với cửa kính lớn hướng ra khu vườn xanh mát. Tại đây, bạn sẽ cảm nhận được sự tinh khiết của thiên nhiên và tìm thấy sự cân bằng trong tâm hồn.",
    features: ["Thiết kế tối giản", "Bồn tắm đứng", "View toàn cảnh"],
    subImages: [
        "https://images.unsplash.com/photo-1616594039964-40891a909d93?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1556020685-ae79c95eda3d?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 6,
    name: "Red Rose House",
    maxPeople: 2,
    area: 13,
    roomsCount: 1,
    bedType: "01 giường 1m6 x 2m",
    price: 1300000,
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
    zone: 'Rose House',
    description: "Nằm ẩn mình dưới tán cây cổ thụ, Red Rose House mang nét đẹp trầm mặc, ấm cúng như một ngôi nhà nhỏ vùng ngoại ô. Sử dụng chất liệu gỗ tự nhiên cùng tông màu đỏ trầm, căn phòng tạo cảm giác gần gũi và an yên. Đây là chốn ẩn náu hoàn hảo cho những ai muốn 'trốn' khỏi sự ồn ào của phố thị để tìm về với chính mình.",
    features: ["Không gian ấm cúng", "Giá hợp lý", "Gần khu BBQ"],
    subImages: [
        "https://images.unsplash.com/photo-1512918760513-95f192972701?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=600"
    ]
  },

  // --- VILLA ZONE ---
  {
    id: 7,
    name: "The Wandering Rose Villa",
    maxPeople: 4,
    area: 100,
    roomsCount: 2,
    bedType: "2 giường 1m8 x 2m",
    price: 5000000,
    imageUrl: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?auto=format&fit=crop&q=80&w=1200", 
    zone: 'Villa',
    description: "Biệt thự The Wandering Rose là sự kết tinh của kiến trúc hiện đại và vẻ đẹp phóng khoáng của thiên nhiên. Với không gian rộng 100m² trải dài trên 2 tầng, villa sở hữu phòng khách sang trọng, bếp tiện nghi và bể bơi riêng biệt. Đây là lựa chọn hoàn hảo cho những kỳ nghỉ dưỡng riêng tư, đẳng cấp bên gia đình và những người thân yêu.",
    features: ["Bể bơi riêng", "Phòng khách lớn", "Bếp Full nội thất", "BBQ tại vườn", "Loa Marshall"],
    subImages: [
        "https://images.unsplash.com/photo-1600596542815-9ad4c598d40e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const amenities: Amenity[] = [
  { id: 1, title: "Wifi 24/7", description: "Kết nối tốc độ cao phủ sóng toàn khu vực.", iconName: "wifi" },
  { id: 2, title: "Hồ bơi", description: "Bể bơi vô cực view núi rừng, lọc nước muối khoáng.", iconName: "pool" },
  { id: 3, title: "Xe đạp miễn phí", description: "Tự do khám phá những cung đường thơ mộng.", iconName: "bike" },
  { id: 4, title: "BBQ ngoài trời", description: "Đầy đủ dụng cụ cho bữa tiệc nướng ấm cúng.", iconName: "bbq" },
];

export const services: Service[] = [
  { id: 1, title: "Tổ chức sinh nhật", imageUrl: "https://images.unsplash.com/photo-1513151241214-ca203898fed1?auto=format&fit=crop&q=80&w=600", link: "#" },
  { id: 2, title: "Teambuilding", imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600", link: "#" },
  { id: 3, title: "Tiệc cưới nhỏ", imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600", link: "#" }
];

export const eventServices: EventServiceItem[] = [
  {
    id: 1,
    title: "Tổ chức sinh nhật",
    description: "Biến ngày sinh nhật trở thành kỷ niệm khó quên với không gian trang trí lộng lẫy giữa thiên nhiên. Chúng tôi cung cấp dịch vụ trọn gói từ lên ý tưởng, trang trí, âm thanh ánh sáng đến thực đơn tiệc phong phú, đảm bảo mang lại niềm vui trọn vẹn cho chủ nhân bữa tiệc và khách mời.",
    imageUrl: "https://images.unsplash.com/photo-1513151241214-ca203898fed1?auto=format&fit=crop&q=80&w=800",
    slug: "birthday",
    detailedContent: [
        "The Wandering Rose mang đến một không gian tổ chức sinh nhật ngoài trời đậm chất thơ, nơi ánh nến lung linh hòa quyện cùng bầu trời đầy sao của Ba Vì. Chúng tôi hiểu rằng mỗi bữa tiệc sinh nhật là một câu chuyện riêng, vì thế đội ngũ sự kiện sẽ thiết kế concept độc bản dựa trên sở thích và cá tính của chủ nhân bữa tiệc.",
        "Khu vực sân vườn rộng rãi cạnh bể bơi là địa điểm lý tưởng để tổ chức tiệc nướng BBQ ấm cúng hay tiệc Buffet sang trọng. Hệ thống âm thanh, ánh sáng chuyên nghiệp được trang bị sẵn sàng để bạn có thể thỏa sức ca hát, nhảy múa cùng bạn bè. Đặc biệt, chúng tôi còn cung cấp dịch vụ ban nhạc Acoustic biểu diễn trực tiếp, tạo nên không khí lãng mạn và đầy cảm xúc.",
        "Ẩm thực là linh hồn của bữa tiệc. Các đầu bếp tài hoa của chúng tôi sẽ chuẩn bị thực đơn phong phú từ các món Âu tinh tế đến đặc sản núi rừng Ba Vì đậm đà hương vị. Bánh sinh nhật handmade, tháp ly rượu sâm panh và những bó hoa tươi thắm được hái trực tiếp từ vườn... tất cả sẽ góp phần tạo nên một ngày sinh nhật hoàn hảo không thể nào quên."
    ],
    highlights: [
        "Trang trí theo Concept riêng (Vintage, Boho, Luxury...)",
        "Tiệc nướng BBQ / Buffet ngoài trời với thực đơn đa dạng",
        "Hệ thống âm thanh, ánh sáng & Karaoke ngoài trời",
        "Bánh sinh nhật & Hoa tươi trang trí",
        "Chụp ảnh check-in & Quay phim sự kiện (theo yêu cầu)",
        "Ban nhạc Acoustic (theo yêu cầu)"
    ]
  },
  {
    id: 2,
    title: "Teambuilding",
    description: "Sân cỏ rộng lớn và không khí trong lành tại The Wandering Rose là địa điểm lý tưởng cho các hoạt động Teambuilding gắn kết. Với các kịch bản trò chơi đa dạng, từ vận động nhẹ nhàng đến thử thách thể lực, chúng tôi giúp doanh nghiệp xây dựng tinh thần đồng đội vững mạnh và tái tạo năng lượng cho nhân viên.",
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    slug: "teambuilding",
    detailedContent: [
        "Rời xa văn phòng ngột ngạt, hãy để The Wandering Rose tái tạo năng lượng cho đội ngũ của bạn bằng những hoạt động Teambuilding đầy hứng khởi giữa thiên nhiên. Với lợi thế sân cỏ tự nhiên rộng hơn 500m2 và địa hình đa dạng bao gồm đồi dốc, suối chảy, chúng tôi có thể tổ chức nhiều loại hình trò chơi từ vận động trường (Amazing Race) đến các game trí tuệ, khéo léo.",
        "Mỗi chương trình Teambuilding đều được thiết kế riêng ('Tailor-made') để phù hợp với văn hóa doanh nghiệp và mục tiêu gắn kết. Sau những giờ phút vận động hết mình, cả đoàn có thể quây quần bên lửa trại, cùng nhau nướng khoai, ngô và chia sẻ những câu chuyện, giúp xóa nhòa khoảng cách giữa sếp và nhân viên, giữa các phòng ban.",
        "Chúng tôi cung cấp trọn gói dịch vụ từ MC hoạt náo, dụng cụ chơi game, âm thanh di động đến dịch vụ y tế và bảo hiểm du lịch, đảm bảo sự an toàn và vui vẻ tuyệt đối cho mọi thành viên. Kết hợp với dịch vụ lưu trú và ăn uống đẳng cấp, chuyến đi của công ty bạn sẽ trở thành một kỳ nghỉ dưỡng kết hợp đào tạo nội bộ hiệu quả nhất."
    ],
    highlights: [
        "Sân cỏ tự nhiên rộng 500m2 cho các hoạt động ngoài trời",
        "Kịch bản trò chơi đa dạng, thiết kế riêng cho từng doanh nghiệp",
        "MC chuyên nghiệp, nhiệt huyết & Dụng cụ game đầy đủ",
        "Lửa trại & Tiệc Gala Dinner ấm cúng",
        "Dịch vụ quay phim, chụp ảnh flycam ghi lại khoảnh khắc",
        "Hỗ trợ y tế & An ninh 24/7"
    ]
  },
  {
    id: 3,
    title: "Tiệc cưới nhỏ",
    description: "Một đám cưới lãng mạn, riêng tư dưới ánh hoàng hôn Ba Vì là giấc mơ của nhiều cặp đôi. Chúng tôi chuyên tổ chức các tiệc cưới quy mô nhỏ (Intimate Wedding), chú trọng vào sự tinh tế, ấm cúng và cảm xúc. Mỗi chi tiết từ hoa tươi, bàn tiệc đến âm nhạc đều được chăm chút để kể lại câu chuyện tình yêu của bạn.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    slug: "wedding",
    detailedContent: [
        "Xu hướng 'Intimate Wedding' (Tiệc cưới thân mật) đang lên ngôi, và The Wandering Rose tự hào là địa điểm hoàn hảo để hiện thực hóa đám cưới trong mơ của bạn. Không ồn ào, không phô trương, chỉ có cô dâu chú rể và những người thân yêu nhất cùng chứng kiến khoảnh khắc thiêng liêng trao lời thề nguyện dưới ánh hoàng hôn rực rỡ của núi rừng.",
        "Không gian làm lễ (Ceremony) được set-up giữa rừng thông hoặc bên cạnh bể bơi vô cực, trang trí bằng hoa tươi theo tông màu chủ đạo mà bạn yêu thích. Cổng hoa, lối đi trải cánh hồng, ghế Tiffany sang trọng... mọi thứ đều được chuẩn bị tỉ mỉ đến từng chi tiết nhỏ. Sau phần lễ, bữa tiệc chiêu đãi (Reception) sẽ diễn ra trong không gian ấm cúng với nến, rượu vang và những bản nhạc Jazz du dương.",
        "Chúng tôi cung cấp phòng Tân hôn (Honeymoon Suite) đặc biệt dành cho cặp đôi với bồn tắm rải hoa hồng, nến thơm và champagne. Đội ngũ Wedding Planner của chúng tôi sẽ đồng hành cùng bạn từ khâu lên ý tưởng, chọn thực đơn đến điều phối chương trình, để bạn có thể thảnh thơi tận hưởng ngày hạnh phúc nhất cuộc đời."
    ],
    highlights: [
        "Không gian làm lễ lãng mạn giữa thiên nhiên (Rừng thông/Bể bơi)",
        "Trang trí hoa tươi cao cấp & Concept tiệc cưới tinh tế",
        "Tiệc bàn Âu (Fine Dining) hoặc Buffet nướng thượng hạng",
        "Phòng Tân hôn Honey Moon trang trí đặc biệt",
        "Hệ thống âm thanh ánh sáng tiêu chuẩn sự kiện",
        "Đội ngũ Wedding Planner & Điều phối viên chuyên nghiệp"
    ]
  },
  {
    id: 4,
    title: "Lễ kỷ niệm",
    description: "Dù là kỷ niệm ngày cưới, ngày gặp mặt hay lễ mừng thọ, không gian sang trọng và ấm áp của Villa sẽ là phông nền hoàn hảo cho những khoảnh khắc sum vầy. Hãy để chúng tôi giúp bạn lưu giữ những cột mốc quan trọng của cuộc đời bằng những bữa tiệc được chuẩn bị chu đáo và tận tâm nhất.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    slug: "anniversary",
    detailedContent: [
        "Cuộc sống là một chuỗi những cột mốc đáng nhớ, và Lễ kỷ niệm (Anniversary) là dịp để chúng ta nhìn lại chặng đường đã qua. Tại The Wandering Rose, chúng tôi biến những ngày kỷ niệm bình thường trở nên phi thường. Dù là kỷ niệm 10 năm ngày cưới (Tin Wedding), tiệc mừng thọ ông bà, hay lễ kỷ niệm thành lập công ty, chúng tôi đều có những giải pháp không gian và kịch bản phù hợp.",
        "Không gian phòng khách Villa sang trọng với lò sưởi ấm áp là nơi tuyệt vời cho những bữa tiệc gia đình thân mật vào mùa đông. Vào mùa hè, khu vườn xanh mát dưới ánh đèn dây lung linh sẽ là nơi mọi người cùng nâng ly chúc mừng. Chúng tôi chú trọng vào sự riêng tư và cảm xúc, giúp các thành viên trong gia đình hoặc tổ chức có cơ hội gắn kết sâu sắc hơn.",
        "Đặc biệt, dịch vụ 'Private Chef' (Đầu bếp riêng) sẽ mang đến trải nghiệm ẩm thực đỉnh cao ngay tại bàn tiệc. Bạn có thể yêu cầu trình chiếu video kỷ niệm, tổ chức các nghi thức tri an hay tặng quà bất ngờ. Hãy để chúng tôi giúp bạn ghi dấu ấn thời gian bằng sự chu đáo và tận tâm nhất."
    ],
    highlights: [
        "Không gian riêng tư, ấm cúng và sang trọng",
        "Thực đơn tiệc thiết kế riêng theo khẩu vị (Á/Âu)",
        "Trang trí bàn tiệc theo chủ đề kỷ niệm",
        "Hỗ trợ trình chiếu Video/Slide kỷ niệm",
        "Dịch vụ chụp ảnh gia đình/tập thể",
        "Quà tặng đặc biệt từ The Wandering Rose"
    ]
  }
];

export const tours: Tour[] = [
  { 
    id: 1, 
    title: "Tour khám phá Vườn Quốc gia Ba Vì", 
    description: "Hành trình đưa bạn về với thiên nhiên hoang sơ, hùng vĩ. Khám phá hệ động thực vật phong phú, check-in tại Nhà Kính Xương Rồng, Đền Thượng và tận hưởng không khí mát lạnh tại cốt 1100m. Một trải nghiệm không thể bỏ qua cho những ai yêu thích trekking và khám phá.",
    imageUrl: "https://images.unsplash.com/photo-1533035332515-56456f481a5a?auto=format&fit=crop&q=80&w=800",
    slug: "ba-vi-park",
    detailedContent: [
        "Vườn Quốc gia Ba Vì, lá phổi xanh phía Tây Hà Nội, là một kho tàng thiên nhiên và lịch sử đang chờ bạn khám phá. Tour khởi hành từ The Wandering Rose sẽ đưa bạn lên độ cao 1.100m, xuyên qua những cánh rừng nguyên sinh rậm rạp, nơi sương mù bảng lảng quanh năm tạo nên khung cảnh huyền ảo như chốn thần tiên.",
        "Điểm dừng chân đầu tiên là Nhà Kính Xương Rồng, một kiến trúc độc đáo nằm giữa lưng chừng núi, nơi lưu giữ hơn 1.200 giống xương rồng từ khắp nơi trên thế giới. Tiếp đó, bạn sẽ chinh phục những bậc thang đá rêu phong để lên Đền Thượng thờ Thánh Tản Viên Sơn Tinh, nơi giao thoa giữa đất và trời, phóng tầm mắt ngắm nhìn dòng sông Đà uốn lượn.",
        "Hành trình còn đưa bạn đến phế tích Nhà thờ cổ Pháp, một vẻ đẹp ma mị và cổ kính bị thời gian lãng quên giữa rừng già. Tại đây, ánh nắng xuyên qua những tán cây cổ thụ chiếu rọi lên những bức tường đá đổ nát tạo nên những góc check-in 'triệu like'. Chúng tôi chuẩn bị sẵn bữa trưa Picnic nhẹ nhàng để bạn thưởng thức giữa không gian trong lành của núi rừng."
    ],
    highlights: [
        "Xe đưa đón khứ hồi từ Resort lên Vườn Quốc gia",
        "Vé tham quan các điểm: Nhà kính Xương Rồng, Đền Thượng, Nhà thờ đổ",
        "Hướng dẫn viên am hiểu lịch sử & văn hóa địa phương",
        "Set Picnic trưa (Bánh mì, trái cây, nước ép) giữa rừng thông",
        "Bảo hiểm du lịch & Nước uống suối"
    ]
  },
  { 
    id: 2, 
    title: "Tour Ao Vua", 
    description: "Khu du lịch sinh thái Ao Vua nổi tiếng với cảnh quan sơn thủy hữu tình, thác nước hùng vĩ và nhiều trò chơi giải trí hấp dẫn. Tour thích hợp cho cả gia đình, kết hợp giữa tham quan thắng cảnh và vui chơi giải trí, mang lại những tiếng cười sảng khoái.",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    slug: "ao-vua",
    detailedContent: [
        "Gắn liền với truyền thuyết Sơn Tinh - Thủy Tinh, Ao Vua không chỉ là một danh thắng mà còn là một không gian văn hóa đặc sắc. Tour Ao Vua được thiết kế đặc biệt cho các gia đình có trẻ nhỏ, kết hợp hoàn hảo giữa nghỉ dưỡng, khám phá thiên nhiên và vui chơi giải trí năng động.",
        "Bạn sẽ được chiêm ngưỡng hệ thống thác nước hùng vĩ đổ xuống từ trên cao, tạo thành những hồ nước trong xanh mát lạnh. Tắm mình dưới dòng suối mát, lắng nghe tiếng chim hót và hít thở bầu không khí trong lành là liệu pháp tuyệt vời để xua tan cái nóng mùa hè. Bên cạnh đó, các bé sẽ vô cùng thích thú với khu vui chơi hiện đại: tàu lượn siêu tốc, thảm bay, vũ trụ bay...",
        "Đặc biệt, tour bao gồm dịch vụ tắm thảo dược người Dao đỏ giúp thư giãn gân cốt, phục hồi sức khỏe sau những giờ vui chơi. Bữa trưa tại nhà hàng Ao Vua với các món đặc sản như gà đồi, lợn mán sẽ làm hài lòng cả những thực khách khó tính nhất."
    ],
    highlights: [
        "Vé vào cổng & Trọn gói các trò chơi tại Ao Vua",
        "Tham quan hệ thống thác nước & Hang động",
        "Tắm thảo dược người Dao đỏ thư giãn",
        "Bữa trưa đặc sản tại nhà hàng khu du lịch",
        "Xe điện di chuyển trong khu du lịch"
    ]
  },
  { 
    id: 3, 
    title: "Khoang Xanh – Suối Tiên", 
    description: "Tận hưởng cảm giác thư giãn tuyệt đối với dịch vụ tắm bùn khoáng nóng, bể bơi tạo sóng và khám phá các thác nước tuyệt đẹp. Tour Khoang Xanh - Suối Tiên là liệu pháp hoàn hảo để phục hồi sức khỏe và tinh thần sau những ngày làm việc căng thẳng.",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    slug: "khoang-xanh",
    detailedContent: [
        "Nếu bạn đang tìm kiếm một trải nghiệm nghỉ dưỡng kết hợp trị liệu sức khỏe, Tour Khoang Xanh - Suối Tiên chính là lựa chọn hoàn hảo. Nổi tiếng với nguồn nước khoáng nóng tự nhiên và bùn khoáng vô tận, nơi đây được ví như 'thiên đường spa' giữa lòng đại ngàn Ba Vì.",
        "Điểm nhấn của hành trình là trải nghiệm tắm bùn khoáng nóng trong bể bơi lớn nhất Việt Nam. Bùn khoáng tại đây chứa nhiều vi chất có lợi, giúp làm đẹp da, hỗ trợ điều trị các bệnh xương khớp và giải tỏa căng thẳng hiệu quả. Sau khi thư giãn, bạn có thể thử thách bản thân tại 'Âm cung huyền bí' hoặc trải nghiệm cảm giác mạnh tại Động trượt tuyết - nơi bạn có thể chạm vào tuyết thật ngay giữa mùa hè nhiệt đới.",
        "Hệ thống Thác Mơ, Thác Mâm Xôi với dòng chảy trắng xóa ngày đêm cũng là những điểm check-in không thể bỏ qua. Chúng tôi cam kết mang đến cho bạn một ngày trọn vẹn của sự thư thái, tái tạo năng lượng tích cực từ sâu bên trong."
    ],
    highlights: [
        "Vé tắm khoáng nóng & Tắm bùn khoáng cao cấp",
        "Tham quan Thác Mơ, Thác Mâm Xôi, Thác Hòa Lan",
        "Vé tham quan Động trượt tuyết (Bắc Cực thu nhỏ)",
        "Khám phá Âm cung huyền bí & Thung lũng khủng long",
        "Bữa ăn theo thực đơn sức khỏe (Healthy Food)"
    ]
  },
  { 
    id: 4, 
    title: "Các trải nghiệm bản địa", 
    description: "Hòa mình vào cuộc sống của người dân địa phương với các hoạt động thú vị: thăm đồi chè, học cách hái và sao chè khô, tham quan trang trại bò sữa Ba Vì và thưởng thức các sản phẩm từ sữa tươi ngon. Một cách tuyệt vời để hiểu thêm về văn hóa và con người nơi đây.",
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800",
    slug: "local-exp",
    detailedContent: [
        "Ba Vì không chỉ có núi rừng mà còn có những nét văn hóa nông nghiệp đặc sắc. Tour Trải nghiệm bản địa được thiết kế để bạn 'sống như một người dân địa phương' thực thụ. Buổi sáng, chúng ta sẽ cùng các cô bác nông dân đeo gùi lên đồi chè, học cách hái những búp chè 'một tôm hai lá' tươi ngon nhất khi sương sớm còn đọng trên lá.",
        "Sau đó, bạn sẽ được nghệ nhân hướng dẫn quy trình sao chè thủ công bằng chảo gang, cảm nhận hương thơm ngào ngạt của chè búp lan tỏa trong không gian. Thành quả là ấm trà xanh chát nhẹ, ngọt hậu do chính tay bạn làm ra. Hành trình tiếp tục với chuyến thăm Trang trại bò sữa Ba Vì nổi tiếng. Tại đây, bạn sẽ tận mắt chứng kiến quy trình chăn nuôi bò sữa sạch, thậm chí tự tay cho bò ăn cỏ và vắt sữa.",
        "Kết thúc tour là bữa tiệc nhẹ với các sản phẩm từ sữa: sữa chua nếp cẩm, bánh sữa, caramen... thơm béo, trọn vẹn hương vị đồng quê. Đây là hoạt động giáo dục tuyệt vời cho trẻ em và là trải nghiệm bình yên khó quên cho người lớn."
    ],
    highlights: [
        "Trải nghiệm hái chè & Học sao chè cùng nghệ nhân",
        "Tham quan Trang trại bò sữa & Trải nghiệm vắt sữa bò",
        "Thưởng thức tiệc trà & Các sản phẩm từ sữa Ba Vì",
        "Giao lưu văn hóa với người dân tộc Mường/Dao",
        "Quà tặng mang về: 1 gói chè sạch hoặc bánh sữa"
    ]
  }
];

// Special articles for Home Page Sections
export const introArticles: News[] = [
  {
    id: 101, // Unique IDs
    title: "Vị trí đắc địa & Không gian xanh",
    category: "Giới thiệu",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    date: "01/01/2024",
    description: "Khám phá vị trí độc bản và kiến trúc xanh tại The Wandering Rose.",
    content: [
      "Nằm ẩn mình giữa sườn núi Ba Vì hùng vĩ, The Wandering Rose sở hữu vị trí đắc địa với tầm nhìn bao quát núi rừng. Chỉ cách trung tâm Hà Nội chưa đầy 50km, nơi đây như một ốc đảo bình yên, tách biệt hoàn toàn với sự ồn ào, náo nhiệt của phố thị.",
      "Không gian được thiết kế mở, tận dụng tối đa ánh sáng tự nhiên và gió trời. Các căn biệt thự được xây dựng nương theo địa hình tự nhiên, ẩn hiện dưới những tán cây cổ thụ trăm năm tuổi. Chúng tôi hạn chế tối đa việc bê tông hóa, ưu tiên sử dụng các vật liệu thân thiện với môi trường như đá, gỗ, kính để công trình hòa tan vào thiên nhiên.",
      "Điểm nhấn của The Wandering Rose chính là những khu vườn xanh mát được chăm sóc tỉ mỉ. Từ vườn hoa hồng cổ rực rỡ sắc hương, vườn thảo mộc thơm ngát đến những thảm cỏ xanh mướt trải dài. Tại đây, mỗi bước chân của bạn đều chạm vào thiên nhiên, mỗi hơi thở đều căng tràn nhựa sống.",
      "Hệ thống đường dạo bộ quanh co men theo suối, những chòi nghỉ chân xinh xắn hay bể bơi vô cực view rừng... tất cả đều được bố trí hài hòa, tạo nên một tổng thể kiến trúc cảnh quan tuyệt mỹ. Đây không chỉ là nơi để nghỉ ngơi, mà là nơi để bạn trở về, kết nối với Mẹ Thiên Nhiên và tìm lại sự cân bằng trong cuộc sống."
    ]
  },
  {
    id: 102,
    title: "Hoà mình vào thiên nhiên",
    category: "Trải nghiệm",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    date: "01/01/2024",
    description: "Đánh thức mọi giác quan và chữa lành tâm hồn giữa đại ngàn.",
    content: [
      "Hãy để thiên nhiên chữa lành tâm hồn bạn. Tại The Wandering Rose, mỗi buổi sáng thức dậy là một bản giao hưởng của thiên nhiên: tiếng chim hót líu lo, tiếng gió reo qua kẽ lá và tiếng suối chảy róc rách vui tai. Mở cửa sổ ra, bạn sẽ đón nhận bầu không khí trong lành, mát lạnh đặc trưng của vùng núi Ba Vì.",
      "Trải nghiệm 'tắm rừng' (Shinrin-yoku) là liệu pháp tuyệt vời mà chúng tôi mang đến cho du khách. Tản bộ chậm rãi dưới tán rừng, hít thở hương thơm của gỗ thông, của đất ẩm sau mưa sẽ giúp giảm căng thẳng, tăng cường hệ miễn dịch và cải thiện tâm trạng đáng kể.",
      "Bạn có thể chọn một góc yên tĩnh bên bờ suối để đọc sách, thiền định hoặc tập Yoga chào ngày mới. Hay đơn giản là thả mình trên chiếc ghế dài ngắm mây trôi lãng đãng trên đỉnh núi. Không deadline, không khói bụi, không tiếng còi xe – chỉ có bạn và thiên nhiên đối thoại.",
      "Buổi tối, không gian trở nên lung linh huyền ảo dưới ánh đèn vàng ấm áp. Quây quần bên bếp lửa trại, thưởng thức khoai nướng, ngô nướng và ngắm nhìn bầu trời đầy sao – những trải nghiệm giản dị nhưng vô cùng xa xỉ đối với người thành phố. Hãy đến và cảm nhận sự bình yên trọn vẹn tại The Wandering Rose."
    ]
  }
];

export const news: News[] = [
  { 
    id: 1, 
    title: "Đêm nhạc Acoustic giữa rừng thông", 
    category: "Sự kiện âm nhạc", 
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    date: "24/10/2023",
    description: "Hòa mình vào giai điệu du dương giữa không gian núi rừng Ba Vì hùng vĩ.",
    content: [
      "Bạn đã bao giờ tưởng tượng mình đang ngồi dưới tán thông reo, bên cạnh là ly vang nồng nàn và trước mắt là một ban nhạc Acoustic đang phiêu lãng cùng những bản tình ca? Tại The Wandering Rose, chúng tôi biến khung cảnh thơ mộng đó thành hiện thực vào mỗi tối thứ Bảy hàng tuần.",
      "Đêm nhạc 'Melody of the Forest' không chỉ là một sự kiện âm nhạc đơn thuần, mà là một hành trình chữa lành tâm hồn. Giữa cái se lạnh của khí hậu Ba Vì, ánh lửa bập bùng từ khu vực BBQ và ánh đèn vàng ấm áp giăng mắc trên những cành thông tạo nên một không gian huyền ảo, tách biệt hoàn toàn với khói bụi thành phố.",
      "Chương trình bắt đầu từ 19:30 với tiệc nướng BBQ ngoài trời, nơi bạn thưởng thức những món ăn đặc sản địa phương được chế biến bởi đầu bếp 5 sao. Đến 20:30, khi màn đêm buông xuống, những nốt nhạc đầu tiên sẽ vang lên. Từ những bản nhạc Trịnh sâu lắng đến những ca khúc Pop Ballad hiện đại, tất cả đều được phối khí lại theo phong cách Acoustic mộc mạc, gần gũi.",
      "Đây là dịp tuyệt vời để các cặp đôi hâm nóng tình cảm, hay các nhóm bạn cùng nhau quây quần, chia sẻ những câu chuyện đời thường. Hãy để âm nhạc và thiên nhiên xoa dịu mọi mệt mỏi, đánh thức những xúc cảm tươi mới trong bạn."
    ]
  },
  { 
    id: 2, 
    title: "Ưu đãi mùa thu: Giảm 20% đặt phòng sớm", 
    category: "Khuyến mãi", 
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
    date: "20/10/2023",
    description: "Cơ hội trải nghiệm nghỉ dưỡng đẳng cấp với mức giá ưu đãi nhất trong năm.",
    content: [
      "Mùa thu Ba Vì mang một vẻ đẹp quyến rũ khó cưỡng với sắc vàng của lá, sắc xanh của trời và không khí trong lành, mát mẻ. Để chào đón mùa đẹp nhất trong năm, The Wandering Rose gửi tặng quý khách chương trình ưu đãi đặc biệt: 'Thu Sang - Rộn Ràng Ưu Đãi'.",
      "Giảm ngay 20% cho tất cả các đặt phòng được thực hiện trước 30 ngày. Chương trình áp dụng cho toàn bộ các hạng phòng, từ Wooden House ấm cúng, Rose House lãng mạn đến Villa sang trọng.",
      "Ngoài ưu đãi về giá phòng, quý khách còn nhận được gói quà tặng trị giá 1.000.000đ bao gồm: Miễn phí nâng hạng phòng (tùy thuộc tình trạng phòng trống), Voucher giảm giá 10% dịch vụ ăn uống tại nhà hàng The Rose Garden, và một set trà chiều thưởng thức tại ban công phòng.",
      "Thời gian áp dụng đặt phòng: Từ 01/09 đến 30/11. Thời gian lưu trú: Từ 01/10 đến 31/12. Đừng bỏ lỡ cơ hội tận hưởng kỳ nghỉ dưỡng tuyệt vời tại 'Đà Lạt thu nhỏ' ngay sát Hà Nội với chi phí tiết kiệm nhất. Liên hệ ngay hotline 092 981 6699 để được tư vấn và hỗ trợ đặt phòng."
    ]
  },
  { 
    id: 3, 
    title: "Workshop: Nghệ thuật cắm hoa & Trà chiều", 
    category: "Hoạt động", 
    imageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
    date: "15/10/2023",
    description: "Một buổi chiều thư giãn với hoa, trà và những câu chuyện nghệ thuật đầy cảm hứng.",
    content: [
      "Dành cho những tâm hồn yêu cái đẹp và sự tinh tế, Workshop 'The Art of Blooming' là hoạt động được mong chờ nhất tháng này tại The Wandering Rose. Chúng tôi mời đến đây nghệ nhân cắm hoa nổi tiếng để chia sẻ về nghệ thuật sắp đặt hoa, cách phối màu và ý nghĩa của từng loài hoa trong cuộc sống.",
      "Workshop diễn ra vào chiều Chủ Nhật, từ 14:00 đến 17:00, tại không gian nhà kính ngập tràn ánh sáng. Bạn sẽ được tự tay lựa chọn những bông hoa tươi nhất được hái từ vườn của resort, học cách cắt tỉa, cắm hoa theo phong cách tự nhiên và mang thành phẩm của mình về làm quà tặng hoặc trang trí.",
      "Xen kẽ trong buổi workshop là tiệc trà chiều kiểu Anh. Thưởng thức những tách trà Earl Grey thơm lừng, nhâm nhi bánh ngọt Macaron, Scone và Sandwich nhỏ xinh trong khi ngắm nhìn tác phẩm của mình và trò chuyện cùng những người bạn mới. Đây không chỉ là lớp học kỹ năng, mà là khoảng thời gian để bạn sống chậm lại, nuôi dưỡng tâm hồn và tìm thấy niềm vui từ những điều giản dị nhất.",
      "Số lượng tham gia giới hạn chỉ 15 người/buổi để đảm bảo chất lượng. Phí tham gia: 500.000đ/người (đã bao gồm toàn bộ nguyên liệu hoa và tiệc trà). Miễn phí cho khách lưu trú tại hạng phòng Villa."
    ]
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Làm thế nào để đặt phòng?",
    answer: "Quý khách có thể đặt phòng trực tiếp trên website của chúng tôi bằng cách chọn ngày và loại phòng, hoặc liên hệ qua hotline 092 981 6699 để được hỗ trợ nhanh nhất."
  },
  {
    id: 2,
    question: "Chính sách hủy phòng như thế nào?",
    answer: "Hủy phòng trước 14 ngày sẽ được hoàn 100% tiền cọc. Hủy từ 7-14 ngày hoàn 50%. Hủy trong vòng 7 ngày không hoàn tiền cọc."
  },
  {
    id: 3,
    question: "Có dịch vụ đưa đón sân bay không?",
    answer: "Chúng tôi cung cấp dịch vụ xe đưa đón sân bay và từ trung tâm Hà Nội với mức phí ưu đãi. Vui lòng liên hệ trước ít nhất 24h để đặt xe."
  },
  {
    id: 4,
    question: "Giờ nhận phòng và trả phòng là mấy giờ?",
    answer: "Giờ nhận phòng là 14:00 và giờ trả phòng là 12:00 trưa hôm sau. Quý khách có thể yêu cầu nhận phòng sớm hoặc trả phòng muộn tùy thuộc vào tình trạng phòng trống."
  },
  {
    id: 5,
    question: "Villa có cho phép mang thú cưng không?",
    answer: "Rất tiếc, để đảm bảo vệ sinh và không gian chung cho tất cả khách hàng, chúng tôi hiện chưa có chính sách cho phép mang thú cưng vào khu nghỉ dưỡng."
  },
  {
    id: 6,
    question: "Bữa sáng có bao gồm trong giá phòng không?",
    answer: "Tất cả các hạng phòng đều đã bao gồm bữa sáng tự chọn tại nhà hàng của khu nghỉ dưỡng."
  },
  {
    id: 7,
    question: "Có khu vui chơi cho trẻ em không?",
    answer: "Chúng tôi có khu vui chơi ngoài trời an toàn cho trẻ em và các hoạt động trải nghiệm thiên nhiên thú vị dành cho các bé."
  },
  {
    id: 8,
    question: "Tôi có thể tổ chức tiệc BBQ tại villa không?",
    answer: "Mỗi căn villa đều được trang bị bếp nướng BBQ và khu vực ăn uống ngoài trời. Chúng tôi cũng cung cấp dịch vụ set up tiệc và chuẩn bị thực phẩm nếu quý khách có nhu cầu."
  }
];

export const galleryImages = [
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1506434304575-afbb9622d130?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1501854140884-074bf6b24363?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504280509243-48907c0c9645?auto=format&fit=crop&q=80&w=600",
];

export const galleryVideos = [
  {
      id: 1,
      thumbnailUrl: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80&w=800",
      videoUrl: "#"
  },
  {
      id: 2,
      thumbnailUrl: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800",
      videoUrl: "#"
  },
    {
      id: 3,
      thumbnailUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      videoUrl: "#"
  },
  {
      id: 4,
      thumbnailUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      videoUrl: "#"
  }
];