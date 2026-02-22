# NỘI DUNG THUYẾT TRÌNH - PHÂN CHIA CHO 6 NGƯỜI
## The Wandering Rose - Villa Booking System

---

# TỔNG QUAN PHÂN CHIA

| STT | Người thuyết trình | Phần trình bày | Thời gian |
|-----|-------------------|----------------|-----------|
| 1 | **Nguyễn Hoàng Dũng** (PO/PM) | Giới thiệu dự án, Project Charter, Timeline | 5 phút |
| 2 | **Nguyễn Xuân Hiếu** (SM/Tester) | Scrum Process, Testing, CPI | 5 phút |
| 3 | **Đặng Gia Khánh** (Backend Lead) | Backend Architecture, Database, API | 5 phút |
| 4 | **Nguyễn Thành Trung** (Backend Dev) | API Controllers, Data Seeding | 3 phút |
| 5 | **Phạm Công Khánh** (Frontend Lead) | UI/UX Design, Frontend Components | 5 phút |
| 6 | **Bùi Trần Hoàng Huy** (Frontend Dev) | Booking Flow, API Integration, Demo | 5 phút |
| | **TỔNG CỘNG** | | **28-30 phút** |

---

# PHẦN 1: NGUYỄN HOÀNG DŨNG (Product Owner / PM)
## 📌 Giới thiệu dự án, Project Charter, Timeline
### Thời lượng: 5 phút

---

### SLIDE 1: Tiêu đề
```
THE WANDERING ROSE
Hệ thống đặt phòng Villa trực tuyến

Nhóm: [Tên nhóm]
Môn học: ITE1140E - Software Project Management
Giảng viên: [Tên GV]
```

**Lời dẫn:**
> "Kính chào thầy/cô và các bạn. Hôm nay nhóm chúng em xin trình bày đồ án cuối kỳ: Hệ thống đặt phòng Villa trực tuyến - The Wandering Rose. Em là Nguyễn Hoàng Dũng, Product Owner kiêm PM của dự án."

---

### SLIDE 2: Thành viên nhóm

| Thành viên | MSSV | Vai trò Scrum | Vai trò Kỹ thuật |
|------------|------|---------------|------------------|
| Nguyễn Hoàng Dũng | 22505192 | Product Owner | PM / Fullstack |
| Nguyễn Xuân Hiếu | 22505350 | Scrum Master | BA / Tester |
| Đặng Gia Khánh | 22505366 | Developer | Backend Lead / DB Designer |
| Nguyễn Thành Trung | 22505140 | Developer | Backend Dev |
| Phạm Công Khánh | 22505378 | Developer | Frontend Lead / UI Designer |
| Bùi Trần Hoàng Huy | 22505060 | Developer | Frontend Dev |

---

### SLIDE 3: Lý do thực hiện dự án

**Bối cảnh:**
> "Khu nghỉ dưỡng sinh thái The Wandering Rose tại Ba Vì đang quản lý đặt phòng thủ công qua điện thoại và email. Điều này gây ra nhiều vấn đề..."

**Các vấn đề:**
- ❌ Khó theo dõi tình trạng phòng trống real-time
- ❌ Dễ xảy ra double booking
- ❌ Khó quản lý thông tin khách hàng
- ❌ Không có hệ thống báo cáo doanh thu

**Giải pháp:**
> "Vì vậy, chúng em xây dựng hệ thống web cho phép đặt phòng online 24/7, hiển thị thông tin phòng minh bạch, và tự động hóa quy trình booking."

---

### SLIDE 4: Project Charter

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên dự án** | The Wandering Rose - Villa Booking System |
| **Mã dự án** | TWR-2025 |
| **Ngày bắt đầu** | 19/12/2025 |
| **Ngày kết thúc** | 08/01/2026 |
| **Thời lượng** | 21 ngày (3 Sprints) |
| **Số thành viên** | 6 người |

**Lời dẫn:**
> "Dự án được thực hiện trong 21 ngày, chia thành 3 Sprint. Mỗi Sprint khoảng 7 ngày."

---

### SLIDE 5: Công nghệ sử dụng

| Layer | Công nghệ |
|-------|-----------|
| **Frontend** | React 18 + TypeScript + Vite + TailwindCSS |
| **Backend** | ASP.NET Core Web API (.NET 9) |
| **Database** | SQL Server 2022 |
| **Containerization** | Docker + Docker Compose |
| **Process** | Scrum + Agile |

---

### SLIDE 6: Gantt Chart - Tổng quan

```
SPRINT 1 (19-25/12): Backend Setup
├─ Database Design, EF Models, Seeder, API hooks

SPRINT 2 (26-31/12): API Integration
├─ 9 Controllers, Core UI, Booking Calendar

SPRINT 3 (02-08/01): Deployment
├─ Docker deploy, Testing, Documentation
```

**Lời dẫn:**
> "Đây là Gantt Chart tổng quan của dự án. Sprint 1 tập trung Backend, Sprint 2 tập trung API Integration, Sprint 3 là Deployment và hoàn thiện."

---

### SLIDE 7: Kết quả đạt được

| Metric | Giá trị |
|--------|---------|
| ✅ Delivery | 100% đúng hạn |
| ✅ Story Points | 75/75 points |
| ✅ Test Pass Rate | 96.9% (31/32 cases) |
| ✅ CPI | 0.90 (vượt 10% budget do OT) |

**Chuyển tiếp:**
> "Bây giờ em xin mời bạn Nguyễn Xuân Hiếu - Scrum Master - trình bày về quy trình Scrum và Testing."

---

# PHẦN 2: NGUYỄN XUÂN HIẾU (Scrum Master / Tester)
## 📌 Scrum Process, Testing, CPI Calculation
### Thời lượng: 5 phút

---

### SLIDE 8: Quy trình Scrum áp dụng

**Lời dẫn:**
> "Xin chào mọi người, em là Nguyễn Xuân Hiếu, Scrum Master của dự án. Em sẽ trình bày về quy trình Scrum mà nhóm đã áp dụng."

**Scrum Events đã thực hiện:**
| Event | Tần suất | Mô tả |
|-------|----------|-------|
| **Daily Standup** | Hàng ngày 9:00 AM | 15 phút, 3 câu hỏi |
| **Sprint Planning** | Đầu Sprint | Phân chia User Stories |
| **Sprint Review** | Cuối Sprint | Demo với stakeholder |
| **Sprint Retrospective** | Cuối Sprint | Lessons Learned |

---

### SLIDE 9: Product Backlog & Velocity

| Sprint | Story Points | Status |
|--------|-------------|--------|
| Sprint 1 | 25 points | ✅ 100% Complete |
| Sprint 2 | 25 points | ✅ 100% Complete |
| Sprint 3 | 25 points | ✅ 100% Complete |
| **Total** | **75 points** | **Velocity = 25 pts/sprint** |

**Lời dẫn:**
> "Nhóm đã hoàn thành 75 Story Points chia đều 3 Sprint. Velocity trung bình là 25 points/sprint."

---

### SLIDE 10: Burndown Chart

```
Sprint 1:  ████████████████ ➔ ✅ On track
Sprint 2:  ██████████████████ ➔ ⚠️ Day 4 behind, recovered
Sprint 3:  ████████████████ ➔ ✅ Completed on time
```

**Lời dẫn:**
> "Sprint 2 có 1 ngày bị delay do Booking Calendar phức tạp hơn dự kiến, nhưng đã recover được nhờ làm thêm giờ weekend."

---

### SLIDE 11: Testing Summary

| Thông số | Giá trị |
|----------|---------|
| **Tổng Test Cases** | 32 cases |
| **Pass** | 31 ✅ |
| **Fail** | 0 |
| **Blocked** | 1 ⏸️ (cần payment gateway thật) |
| **Pass Rate** | 96.9% |

**Các module đã test:**
- Navigation & Home (5 cases)
- Room Categories (5 cases)
- Booking Flow (11 cases)
- Services & Tours (4 cases)
- Contact & FAQ (2 cases)
- Responsive (2 cases)
- API Integration (3 cases)

---

### SLIDE 12: Defects Found & Fixed

| Bug ID | Mô tả | Severity | Status |
|--------|-------|----------|--------|
| BUG-001 | Calendar cho chọn ngày quá khứ | Medium | ✅ Fixed |
| BUG-002 | Price không update realtime | Low | ✅ Fixed |
| BUG-003 | Email validation thiếu | Medium | ✅ Fixed |
| BUG-004 | Menu mobile bị overlap | Low | ✅ Fixed |
| BUG-005 | Calendar close khi click outside | Low | ✅ Fixed |

---

### SLIDE 13: CPI Calculation

**Các chỉ số chi phí:**

| Chỉ số | Giá trị | Ý nghĩa |
|--------|---------|---------|
| **BAC** | 3,190 USD | Budget at Completion |
| **AC** | 3,562 USD | Actual Cost (có OT) |
| **EV** | 3,190 USD | 100% hoàn thành |
| **CPI** | **0.90** | Vượt budget 10% |
| **SPI** | **1.00** | Đúng tiến độ |

**Công thức:**
```
CPI = EV / AC = 3,190 / 3,562 = 0.90
```

**Lời dẫn:**
> "CPI = 0.90 nghĩa là dự án vượt ngân sách 10%. Nguyên nhân chính là do phải làm thêm giờ weekend (44 giờ OT với đơn giá 10 USD/h) để đảm bảo deadline."

---

### SLIDE 14: Risk Management

| Top Risks | Score | Response | Status |
|-----------|:-----:|----------|--------|
| Timeline quá ngắn (21 ngày) | 9 | Focus MVP | ✅ Closed |
| Calendar picker phức tạp | 6 | Extra buffer | ✅ Closed |
| Integration issues | 6 | API contract sớm | ✅ Closed |
| Nghỉ lễ 01/01 | 6 | Plan around | ✅ Closed |

**Chuyển tiếp:**
> "Bây giờ em xin mời bạn Đặng Gia Khánh - Backend Lead - trình bày về kiến trúc Backend."

---

# PHẦN 3: ĐẶNG GIA KHÁNH (Backend Lead / DB Designer)
## 📌 Backend Architecture, Database Design, API
### Thời lượng: 5 phút

---

### SLIDE 15: Backend Architecture

**Lời dẫn:**
> "Xin chào, em là Đặng Gia Khánh, Backend Lead. Em sẽ trình bày về kiến trúc Backend của hệ thống."

**Technology Stack:**
```
┌─────────────────────────────────────────┐
│           ASP.NET Core Web API          │
│               (.NET 9)                  │
├─────────────────────────────────────────┤
│   Controllers → DTOs → Services         │
├─────────────────────────────────────────┤
│   Entity Framework Core 9               │
├─────────────────────────────────────────┤
│        SQL Server 2022                  │
└─────────────────────────────────────────┘
```

---

### SLIDE 16: Database Design - Entity Relationship

**13 Entity Models:**

| Category | Entities |
|----------|----------|
| **Core** | Zone, Room, RoomAmenity |
| **Booking** | Booking, BookingRoom, BookingGuest |
| **Content** | Service, Tour, News, FAQ |
| **User** | ContactMessage, SiteContent, AppConfig |

**Lời dẫn:**
> "Database được thiết kế với 13 entity models, chia thành 4 nhóm: Core entities cho quản lý phòng, Booking entities cho đặt phòng, Content entities cho nội dung website, và User entities cho các tương tác người dùng."

---

### SLIDE 17: Entity Diagram

```
Zone (1) ──────< Room (N)
                   │
                   │ (N:M)
                   ▼
              RoomAmenity

Booking (1) ──────< BookingRoom (N) >───── Room
    │
    └────────────< BookingGuest (N)
```

---

### SLIDE 18: API Controllers

| Controller | Endpoints | Chức năng |
|------------|-----------|-----------|
| **ZonesController** | GET /api/zones | Lấy danh sách zone |
| **RoomsController** | GET /api/rooms | Lấy phòng, tìm available |
| **BookingsController** | POST /api/bookings | Tạo booking mới |
| **ContentController** | GET /api/content | FAQs, News, About |
| **ConfigController** | GET /api/config | App configuration |

---

### SLIDE 19: Data Seeding Strategy

**Lời dẫn:**
> "Để đảm bảo dữ liệu demo, chúng em đã tạo Database Seeder lấy data từ file constants.ts của Frontend."

**Seeded Data:**
| Entity | Records |
|--------|---------|
| Zones | 3 (Wooden House, Rose House, Villa) |
| Rooms | 7 phòng |
| Amenities | 15 tiện nghi |
| Services | 4 dịch vụ sự kiện |
| Tours | 4 tours |
| FAQs | 10 câu hỏi |

**Chuyển tiếp:**
> "Bây giờ em xin mời bạn Nguyễn Thành Trung trình bày chi tiết về API development."

---

# PHẦN 4: NGUYỄN THÀNH TRUNG (Backend Developer)
## 📌 API Controllers, Data Seeding, CORS
### Thời lượng: 3 phút

---

### SLIDE 20: API Development Details

**Lời dẫn:**
> "Em là Nguyễn Thành Trung, Backend Developer. Em sẽ trình bày chi tiết về các API đã phát triển."

**Booking API Flow:**
```
POST /api/bookings
    │
    ├─ Validate dates (check-in < check-out)
    ├─ Validate room availability
    ├─ Calculate total price
    ├─ Apply weekend surcharge (if any)
    ├─ Generate booking code
    └─ Return confirmation
```

---

### SLIDE 21: CORS & Environment Configuration

**CORS Setup:**
```csharp
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
```

**Environment Variables:**
- `ConnectionStrings__DefaultConnection` → SQL Server
- `ASPNETCORE_ENVIRONMENT` → Development/Production

---

### SLIDE 22: API Response Format

**Standard API Response:**
```json
{
  "success": true,
  "data": {
    "bookingCode": "BK-TWR-20260115-001",
    "totalAmount": 4200000,
    "roomCount": 2,
    "nights": 2
  },
  "message": "Booking created successfully"
}
```

**Chuyển tiếp:**
> "Bây giờ em xin mời bạn Phạm Công Khánh trình bày về Frontend và UI/UX."

---

# PHẦN 5: PHẠM CÔNG KHÁNH (Frontend Lead / UI Designer)
## 📌 UI/UX Design, Frontend Architecture, Components
### Thời lượng: 5 phút

---

### SLIDE 23: Frontend Architecture

**Lời dẫn:**
> "Xin chào, em là Phạm Công Khánh, Frontend Lead kiêm UI Designer. Em sẽ trình bày về kiến trúc Frontend."

**Technology Stack:**
| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool (fast HMR) |
| **TailwindCSS** | Styling |
| **React Router** | Navigation |

---

### SLIDE 24: Component Structure

```
src/
├── components/
│   ├── HomeView.tsx          # Trang chủ
│   ├── RoomCategories.tsx    # Danh sách zone/phòng
│   ├── RoomDetailView.tsx    # Chi tiết phòng
│   ├── BookingCalendar.tsx   # Calendar picker
│   ├── CheckoutView.tsx      # Form đặt phòng
│   ├── ConfirmationView.tsx  # Xác nhận booking
│   ├── ServicesEvents.tsx    # Dịch vụ sự kiện
│   ├── ExperiencesTours.tsx  # Tours
│   ├── ContactUs.tsx         # Liên hệ
│   └── ... (21 components)
├── services/
│   ├── api.ts               # API calls
│   └── useApi.ts            # React hooks
└── types.ts                  # TypeScript types
```

---

### SLIDE 25: UI/UX Design Highlights

**Design từ Figma:**

| Feature | Mô tả |
|---------|-------|
| **Hero Section** | Full-width image với CTA |
| **Zone Cards** | 3-column grid layout |
| **Room Gallery** | Image slider với thumbnails |
| **Booking Calendar** | Custom date picker (không dùng library) |
| **Responsive** | Mobile-first approach |

**Color Palette:**
- Primary: #4A7C59 (Green - Nature theme)
- Secondary: #D4A373 (Gold - Luxury feel)
- Background: #FFF8F0 (Warm white)

---

### SLIDE 26: Responsive Design

| Breakpoint | Layout |
|------------|--------|
| **Mobile** (< 768px) | Single column, hamburger menu |
| **Tablet** (768-1024px) | 2-column grid |
| **Desktop** (> 1024px) | 3-4 column grid |

**Lời dẫn:**
> "Website được thiết kế responsive cho tất cả các thiết bị, từ mobile đến desktop."

**Chuyển tiếp:**
> "Bây giờ em xin mời bạn Bùi Trần Hoàng Huy trình bày về Booking Flow và Demo sản phẩm."

---

# PHẦN 6: BÙI TRẦN HOÀNG HUY (Frontend Developer)
## 📌 Booking Flow, API Integration, Live Demo
### Thời lượng: 5 phút

---

### SLIDE 27: Booking Flow

**Lời dẫn:**
> "Em là Bùi Trần Hoàng Huy, Frontend Developer. Em sẽ trình bày về Booking Flow - chức năng chính của hệ thống."

**User Journey:**
```
1. Chọn Zone       2. Chọn Phòng      3. Chọn Ngày
   │                  │                  │
   ▼                  ▼                  ▼
┌─────────┐      ┌─────────┐      ┌─────────┐
│ Wooden  │      │ Forest  │      │ 15-17   │
│ House   │  →   │ Room    │  →   │ Jan     │
│ Zone    │      │ Detail  │      │ 2026    │
└─────────┘      └─────────┘      └─────────┘
                                       │
                                       ▼
4. Checkout        5. Payment        6. Confirmation
   │                  │                  │
   ▼                  ▼                  ▼
┌─────────┐      ┌─────────┐      ┌─────────┐
│ Fill    │      │ Select  │      │ Booking │
│ Info    │  →   │ Method  │  →   │ Code:   │
│ Form    │      │         │      │ BK-001  │
└─────────┘      └─────────┘      └─────────┘
```

---

### SLIDE 28: Booking Calendar Component

**Features:**
- ✅ Custom-built (không dùng library)
- ✅ Disable ngày quá khứ
- ✅ Highlight date range
- ✅ Show số đêm và tổng giá
- ✅ Real-time availability check

**Challenge:**
> "Booking Calendar là component phức tạp nhất, tốn thêm 4 giờ so với kế hoạch. Chúng em đã phải custom hoàn toàn để match với design Figma."

---

### SLIDE 29: API Integration

**API Service Layer (api.ts):**
```typescript
export const api = {
  rooms: {
    getAll: () => fetch('/api/rooms'),
    getAvailable: (params) => fetch(`/api/rooms/available?...`),
  },
  booking: {
    create: (data) => fetch('/api/bookings', { method: 'POST', ... }),
  },
  // ...
};
```

**React Hooks (useApi.ts):**
```typescript
export function useRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    api.rooms.getAll().then(setRooms);
  }, []);
  
  return { rooms, loading };
}
```

---

### SLIDE 30: Function Point Analysis

| Type | Count | Total UFP |
|------|-------|-----------|
| EI (External Input) | 10 | 32 |
| EO (External Output) | 3 | 14 |
| EQ (External Inquiry) | 12 | 37 |
| EIF (External Interface) | 1 | 7 |
| **TOTAL** | **26** | **90 UFP** |

**Adjusted Function Points:**
```
AFP = UFP × VAF = 90 × 1.07 = 96 FP
```

---

### SLIDE 31: LIVE DEMO 🎬

**Demo Scenarios:**

1. **View Rooms**
   - Truy cập trang Hạng phòng
   - Click vào Wooden House Zone
   - Xem chi tiết Forest Room

2. **Booking Flow**
   - Click "Đặt ngay"
   - Chọn ngày 15-17/01/2026
   - Chọn 2 adults
   - Thêm 1 phòng
   - Điền thông tin khách hàng
   - Xác nhận booking
   - Nhận mã booking

3. **Responsive**
   - Resize browser to mobile view
   - Show hamburger menu

---

### SLIDE 32: Lessons Learned

| Lesson | Chi tiết |
|--------|----------|
| 1 | Custom UI components cần estimate +50% thời gian |
| 2 | API contract phải define trước khi bắt đầu dev |
| 3 | Daily standup giúp phát hiện blockers sớm |
| 4 | OT weekend có chi phí cao, nên plan buffer |
| 5 | Documentation song song với development |

---

### SLIDE 33: Kết luận

| Thành tựu | Giá trị |
|-----------|---------|
| ✅ Hoàn thành 100% | Đúng deadline 08/01/2026 |
| ✅ 75 Story Points | All Done |
| ✅ 96.9% Test Pass | High quality |
| ✅ Full-stack App | Frontend + Backend + DB |
| ✅ Docker Deploy | Production-ready |

**Lời cảm ơn:**
> "Cảm ơn thầy/cô và các bạn đã lắng nghe. Nhóm chúng em xin sẵn sàng trả lời các câu hỏi."

---

### SLIDE 34: Q&A

```
┌─────────────────────────────────────┐
│                                     │
│        CẢM ƠN THẦY/CÔ              │
│        VÀ CÁC BẠN                  │
│                                     │
│        Q & A                        │
│                                     │
│    GitHub: [repo link]              │
│    Demo: http://localhost:5173      │
│                                     │
└─────────────────────────────────────┘
```

---

# TÓM TẮT PHÂN CHIA

| Người | Slides | Nội dung chính |
|-------|--------|----------------|
| **Nguyễn Hoàng Dũng** | 1-7 | Project Charter, Team, Timeline, Tech Stack |
| **Nguyễn Xuân Hiếu** | 8-14 | Scrum Process, Testing, CPI, Risk |
| **Đặng Gia Khánh** | 15-19 | Backend Architecture, Database, API Design |
| **Nguyễn Thành Trung** | 20-22 | API Details, CORS, Response Format |
| **Phạm Công Khánh** | 23-26 | Frontend Architecture, UI/UX, Responsive |
| **Bùi Trần Hoàng Huy** | 27-34 | Booking Flow, Integration, Demo, Kết luận |

---

*Document version: 1.0 | Created: 21/01/2026*

