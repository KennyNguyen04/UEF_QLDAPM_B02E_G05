<div align="center">

# 🌹 The Wandering Rose Resort

**Website đặt phòng Resort cao cấp**

[![.NET](https://img.shields.io/badge/.NET-9.0-512BD4?logo=dotnet)](https://dotnet.microsoft.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

</div>

---

## 📋 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Cài đặt và chạy](#-cài-đặt-và-chạy)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Triển khai với Docker](#-triển-khai-với-docker)
- [Thành viên nhóm](#-thành-viên-nhóm)

---

## 🌟 Giới thiệu

**The Wandering Rose** là website đặt phòng trực tuyến cho Resort, được phát triển bởi **Nhóm 5 - Lớp B02E** trong môn **Quản lý dự án phần mềm** tại trường **Đại học Kinh tế - Tài chính UEF**.

Website cung cấp trải nghiệm đặt phòng liền mạch với giao diện hiện đại, hỗ trợ xem thông tin phòng theo từng khu vực (Zone), tính năng phụ thu cuối tuần thông minh, và nhiều tiện ích khác.

---

## ✨ Tính năng

### 👤 Khách hàng
| Tính năng | Mô tả |
|-----------|-------|
| 🏠 **Xem danh sách phòng** | Duyệt phòng theo 3 zones: Wooden House, Rose House, Villa |
| 🔍 **Chi tiết phòng** | Xem thông tin chi tiết, hình ảnh, tiện nghi của phòng |
| 📅 **Đặt phòng trực tuyến** | Chọn ngày check-in/check-out với calendar trực quan |
| 💰 **Tính giá tự động** | Tự động tính phụ thu cuối tuần (Weekend Surcharge) |
| 💳 **Thanh toán** | Quy trình checkout và xác nhận đặt phòng |
| 🎉 **Dịch vụ & Sự kiện** | Xem các dịch vụ tổ chức sự kiện tại resort |
| 🗺️ **Tour trải nghiệm** | Khám phá các tour du lịch địa phương |
| 📰 **Tin tức** | Cập nhật tin tức và ưu đãi mới nhất |
| ❓ **FAQ** | Câu hỏi thường gặp |
| 📞 **Liên hệ** | Form liên hệ với resort |

### ⚙️ Quản trị
| Tính năng | Mô tả |
|-----------|-------|
| 🔧 **Cấu hình hệ thống** | Điều chỉnh tỷ lệ phụ thu cuối tuần |
| 📊 **Quản lý đặt phòng** | Xem và quản lý các booking |

---

## 🛠 Công nghệ sử dụng

### Frontend
| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| React | 18.x | UI Library |
| TypeScript | 5.x | Type-safe JavaScript |
| Vite | 5.x | Build tool & Dev server |
| Tailwind CSS | 3.x | Styling |
| Lucide React | - | Icons |

### Backend
| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| ASP.NET Core | 9.0 | Web API Framework |
| Entity Framework Core | 9.x | ORM |
| SQL Server | - | Database |

### DevOps
| Công nghệ | Mục đích |
|-----------|----------|
| Docker | Containerization |
| Docker Compose | Multi-container orchestration |
| Nginx | Reverse proxy & Static files |

---

## 📁 Cấu trúc dự án

```
the-wandering-rose/
├── 📂 backend/                    # ASP.NET Core API
│   ├── Controllers/               # API Controllers
│   │   ├── BookingsController.cs
│   │   ├── RoomsController.cs
│   │   ├── ZonesController.cs
│   │   ├── ConfigController.cs
│   │   └── FormControllers.cs
│   ├── Models/                    # Entity Models
│   │   └── Entities.cs
│   ├── DTOs/                      # Data Transfer Objects
│   │   └── DTOs.cs
│   ├── Data/                      # Database Context
│   │   ├── AppDbContext.cs
│   │   └── DbInitializer.cs
│   ├── Migrations/                # EF Core Migrations
│   ├── Program.cs                 # Entry point
│   └── appsettings.json          # Configuration
│
├── 📂 components/                 # React Components
│   ├── HomeView.tsx              # Trang chủ
│   ├── RoomCategories.tsx        # Danh sách phòng
│   ├── RoomDetailView.tsx        # Chi tiết phòng
│   ├── BookingCalendar.tsx       # Lịch đặt phòng
│   ├── CheckoutView.tsx          # Thanh toán
│   ├── PaymentView.tsx           # Xử lý payment
│   ├── ConfirmationView.tsx      # Xác nhận
│   ├── ServicesEvents.tsx        # Dịch vụ & Sự kiện
│   ├── ExperiencesTours.tsx      # Tours
│   ├── ContactUs.tsx             # Liên hệ
│   ├── FAQView.tsx               # FAQ
│   ├── GalleryView.tsx           # Thư viện ảnh
│   └── AdminConfigView.tsx       # Cấu hình admin
│
├── 📂 services/                   # API Services
│   ├── api.ts                    # API client
│   └── useApi.ts                 # React hooks
│
├── 📂 public/images/              # Static assets
│
├── App.tsx                        # Main App component
├── types.ts                       # TypeScript interfaces
├── constants.ts                   # Constants & mock data
├── utils.ts                       # Utility functions
├── index.tsx                      # Entry point
├── index.html                     # HTML template
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
├── Dockerfile                    # Frontend Docker
├── docker-compose.yml            # Docker orchestration
└── nginx.conf                    # Nginx configuration
```

---

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- **Node.js** >= 18.x
- **.NET SDK** >= 9.0
- **SQL Server** (hoặc SQL Server Express)
- **Docker** (tùy chọn, để deploy)

### 1️⃣ Clone repository

```bash
git clone <repository-url>
cd the-wandering-rose
```

### 2️⃣ Chạy Backend

```bash
# Di chuyển vào thư mục backend
cd backend

# Restore packages
dotnet restore

# Cập nhật database
dotnet ef database update

# Chạy API server
dotnet run
```

API sẽ chạy tại: `https://localhost:5001` hoặc `http://localhost:5000`

### 3️⃣ Chạy Frontend

```bash
# Quay lại thư mục gốc
cd ..

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173`

---

## 📡 API Endpoints

### Zones
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/zones` | Lấy danh sách zones |
| GET | `/api/zones/{id}` | Lấy chi tiết zone |

### Rooms
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/rooms` | Lấy danh sách phòng |
| GET | `/api/rooms/{id}` | Lấy chi tiết phòng |
| GET | `/api/rooms/zone/{zoneId}` | Lấy phòng theo zone |

### Bookings
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/bookings` | Tạo booking mới |
| GET | `/api/bookings/{id}` | Lấy thông tin booking |
| GET | `/api/bookings/code/{code}` | Tìm booking theo mã |

### Config
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/config/weekend-surcharge` | Lấy tỷ lệ phụ thu cuối tuần |
| PUT | `/api/config/weekend-surcharge` | Cập nhật tỷ lệ phụ thu |

### Forms
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/contact` | Gửi form liên hệ |
| POST | `/api/event-booking` | Đặt sự kiện |
| POST | `/api/tour-booking` | Đặt tour |

---

## 🗄 Database Schema

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│    Zone     │────<│    Room     │>────│ BookingRoom │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
┌─────────────┐     ┌─────────────┐            │
│  Customer   │────<│   Booking   │>───────────┘
└─────────────┘     └─────────────┘

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│EventService │     │    Tour     │     │    News     │
└─────────────┘     └─────────────┘     └─────────────┘

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│EventBooking │     │ TourBooking │     │ContactRequest│
└─────────────┘     └─────────────┘     └─────────────┘

┌─────────────┐     ┌─────────────┐
│SystemConfig │     │     FAQ     │
└─────────────┘     └─────────────┘
```

### Entities chính:

| Entity | Mô tả |
|--------|-------|
| `Zone` | Khu vực phòng (Wooden House, Rose House, Villa) |
| `Room` | Thông tin phòng |
| `Customer` | Thông tin khách hàng |
| `Booking` | Đơn đặt phòng |
| `BookingRoom` | Chi tiết phòng trong booking (many-to-many) |
| `SystemConfig` | Cấu hình hệ thống (tỷ lệ phụ thu cuối tuần...) |

---

## 🐳 Triển khai với Docker

### Build và chạy với Docker Compose

```bash
# Build images
docker-compose build

# Chạy containers
docker-compose up -d

# Xem logs
docker-compose logs -f

# Dừng containers
docker-compose down
```

### Cấu trúc Docker

- **Frontend**: Nginx serving static files (port 80)
- **Backend**: ASP.NET Core API (port 5000)
- **Database**: SQL Server (port 1433)

---

## 👥 Thành viên nhóm

| STT | Họ và Tên | MSSV | Vai trò |
|-----|-----------|------|---------|
| 1 | | | Project Manager |
| 2 | | | Developer |
| 3 | | | Developer |
| 4 | | | Developer |
| 5 | | | Tester |

**Lớp:** B02E  
**Môn học:** Quản lý dự án phần mềm  
**Trường:** Đại học Kinh tế - Tài chính UEF  
**Năm học:** 2025 - 2026

---

## 📄 License

Dự án này được phát triển cho mục đích học tập tại trường Đại học Kinh tế - Tài chính UEF.

---

<div align="center">

**Made with ❤️ by Group 5 - B02E - UEF**

</div>
