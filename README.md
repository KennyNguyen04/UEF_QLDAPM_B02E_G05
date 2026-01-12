# 🌹 The Wandering Rose - Villa Booking System

## Đồ án cuối kỳ môn Quản trị dự án phần mềm (ITE1140E)

**Trường Đại học Kinh tế - Tài chính TP.HCM (UEF)**

---

## 📋 Thông tin dự án

| Thông tin | Chi tiết |
|-----------|----------|
| **Mã môn học** | ITE1140E |
| **Tên dự án** | The Wandering Rose - Villa Booking System |
| **Đề tài** | Topic 1: Room booking for villa management |
| **Nhóm** | B02E - G05 |
| **Thời gian** | 19/12/2025 - 08/01/2026 |

---

## 🎯 Mô tả dự án

Hệ thống đặt phòng trực tuyến cho khu nghỉ dưỡng sinh thái "The Wandering Rose" tại Ba Vì, Hà Nội. Website cho phép khách hàng:
- Xem thông tin phòng theo từng khu vực (zone)
- Đặt phòng trực tuyến với lịch check-in/check-out
- Đặt dịch vụ sự kiện (sinh nhật, teambuilding, tiệc cưới)
- Đặt tour du lịch địa phương
- Liên hệ và hỗ trợ khách hàng

---

## 🛠️ Công nghệ sử dụng

### Frontend
- **React** 19.x - Thư viện xây dựng giao diện
- **TypeScript** 5.x - Ngôn ngữ lập trình
- **Vite** 6.x - Build tool và dev server
- **TailwindCSS** - Framework CSS
- **Lucide React** - Thư viện icon

### Backend
- **ASP.NET Core** - Web API Framework
- **Entity Framework Core** - ORM
- **SQL Server 2022** - Hệ quản trị CSDL

### DevOps
- **Docker** - Container hóa ứng dụng
- **Docker Compose** - Orchestration
- **Nginx** - Web server / Reverse proxy

---

## 📁 Cấu trúc thư mục

```
UEF_QLDAPM_B02E_G05/
├── backend/                 # ASP.NET Core API
│   ├── Controllers/         # API Controllers
│   ├── Models/              # Entity Models
│   ├── Data/                # Database Context
│   └── Migrations/          # EF Migrations
│
├── components/              # React Components
├── services/                # API Services
│
├── document/                # Tài liệu dự án
│   ├── 01_Project_Charter.md
│   ├── 02_Project_Management_Plan/
│   ├── 03_Requirement_Specification.md
│   ├── 04_Gantt_Chart_Report.md
│   ├── 05_Test_Cases_Report.md
│   ├── 06_QA_Document.md
│   ├── 07_Scrum_Artifacts/
│   ├── 08_Risk_Register.md
│   └── 09_Code_Review_Checklist.md
│
├── App.tsx                  # Root component
├── types.ts                 # TypeScript types
├── constants.ts             # Mock data
├── docker-compose.yml       # Docker configuration
└── package.json             # Dependencies
```

---

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js 18.x hoặc cao hơn
- npm hoặc yarn
- Docker (tùy chọn)

### Chạy Frontend

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy development server
npm run dev

# 3. Truy cập: http://localhost:5173
```

### Chạy với Docker

```bash
# Build và chạy tất cả services
docker-compose up --build

# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

---

## 👥 Thành viên nhóm

| STT | Họ tên | Vai trò |
|-----|--------|---------|
| 1 | A | Product Owner |
| 2 | B | Scrum Master |
| 3 | C | Frontend Developer |
| 4 | D | Backend Developer |
| 5 | E | Full-stack Developer |
| 6 | F | QA / Tester |

---

## 📊 Quy trình phát triển

Dự án được phát triển theo phương pháp **Scrum**:
- **Sprint 1** (19/12 - 29/12): Core booking flow, Room pages
- **Sprint 2** (30/12 - 08/01): Services, Tours, Testing, Documentation

### Công cụ quản lý
- **Trello**: [Villa Booking Board](https://trello.com/b/4YzW6vma/villa-booking-final-report)
- **GitHub**: Source code management

---

## 📄 Tài liệu

Tất cả tài liệu dự án được lưu trong thư mục `document/`:
- Project Charter
- 13 Management Plans
- Requirement Specification
- Gantt Chart Report
- Test Cases (23 test cases)
- Risk Register (12 risks)
- Scrum Artifacts (Backlog, Burndown, Daily Minutes)

---

## 📝 License

Dự án này được thực hiện cho mục đích học tập tại UEF.

---

*© 2025 UEF - ITE1140E - Nhóm B02E-G05*
