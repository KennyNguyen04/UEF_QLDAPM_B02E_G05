# HUMAN RESOURCE MANAGEMENT PLAN
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Tài liệu này mô tả cách quản lý nguồn nhân lực dự án, bao gồm:
- Cấu trúc tổ chức
- Vai trò và trách nhiệm
- Phát triển năng lực team
- Quản lý hiệu suất

---

## 2. CẤU TRÚC TỔ CHỨC (ORG CHART)

```
                        ┌─────────────────────┐
                        │      GIẢNG VIÊN     │
                        │    (Stakeholder)    │
                        └──────────┬──────────┘
                                   │
                        ┌──────────▼──────────┐
                        │    PRODUCT OWNER    │
                        │   Nguyễn Hoàng Dũng │
                        │     (Nhóm trưởng)   │
                        └──────────┬──────────┘
                                   │
                        ┌──────────▼──────────┐
                        │    SCRUM MASTER     │
                        │   Nguyễn Xuân Hiếu  │
                        │      (Thư ký)       │
                        └──────────┬──────────┘
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
┌───────▼───────┐         ┌───────▼───────┐         ┌────────▼────────┐
│  BACKEND TEAM │         │ FRONTEND TEAM │         │    QA/TESTER    │
│               │         │               │         │                 │
│ Đặng Gia Khánh│         │Phạm Công Khánh│         │ Nguyễn Xuân Hiếu│
│   (BE Lead)   │         │   (FE Lead)   │         │    (Tester)     │
│               │         │               │         │                 │
│Nguyễn Thành   │         │Bùi Trần Hoàng │         │                 │
│Trung (BE Dev) │         │Huy (FE Dev)   │         │                 │
└───────────────┘         └───────────────┘         └─────────────────┘
```

---

## 3. VAI TRÒ VÀ TRÁCH NHIỆM (RACI MATRIX)

### 3.1 Scrum Roles & Nhiệm vụ chi tiết

| Thành viên | MSSV | Vai trò | Trách nhiệm chính |
|------------|------|---------|-------------------|
| **Nguyễn Hoàng Dũng** | 225051926 | Product Owner / Fullstack | - Quản lý chung, báo cáo với giảng viên<br>- Setup source code, GitHub<br>- Xử lý booking logic (tránh trùng lịch)<br>- Giải quyết các lỗi khó |
| **Nguyễn Xuân Hiếu** | 225053504 | Scrum Master / BA / Tester | - Quản lý tài liệu, chất lượng sản phẩm<br>- Viết SRS, Use Case<br>- Viết Test Case, thực hiện UAT<br>- Điều phối Scrum events |
| **Đặng Gia Khánh** | 225053665 | Backend Lead / DB Designer | - Thiết kế CSDL (User, Villa, Room, Booking)<br>- Viết API Villa detail, Search<br>- Xử lý thanh toán giả lập |
| **Nguyễn Thành Trung** | 225051404 | Backend Developer | - Code Admin Dashboard<br>- Quản lý danh sách khách hàng<br>- Lịch sử đặt phòng<br>- Xử lý phân quyền |
| **Phạm Công Khánh** | 225053787 | Frontend Lead / UI Designer | - Thiết kế UI/UX (Mockup/Figma)<br>- Code trang chủ, trang Booking<br>- Đảm bảo aesthetic & color scheme |
| **Bùi Trần Hoàng Huy** | 225050604 | Frontend Developer | - Code trang Room detail, Login/Register<br>- Responsive design (mobile)<br>- Liên kết API đổ dữ liệu |

### 3.2 RACI Matrix

| Hoạt động | Dũng (PO) | Hiếu (SM) | G.Khánh (BE) | Trung (BE) | C.Khánh (FE) | Huy (FE) |
|-----------|:---------:|:---------:|:------------:|:----------:|:------------:|:--------:|
| Product Backlog | **R** | C | I | I | I | I |
| Sprint Planning | A | **R** | C | C | C | C |
| Daily Standup | I | **R** | C | C | C | C |
| Database Design | A | I | **R** | C | I | I |
| Backend API | A | I | **R** | **R** | I | I |
| Admin Panel | A | I | C | **R** | I | I |
| UI/UX Design | A | I | I | I | **R** | C |
| Frontend Dev | A | I | I | I | **R** | **R** |
| Responsive | A | I | I | I | C | **R** |
| Testing (UAT) | A | **R** | C | C | C | C |
| Sprint Review | **R** | C | C | C | C | C |
| Documentation | A | **R** | C | C | C | C |

> **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed

---

## 4. SKILL MATRIX

| Thành viên | React | .NET/Laravel | SQL | Docker | Scrum | Testing | UI/UX |
|------------|:-----:|:------------:|:---:|:------:|:-----:|:-------:|:-----:|
| Nguyễn Hoàng Dũng | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Nguyễn Xuân Hiếu | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Đặng Gia Khánh | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ |
| Nguyễn Thành Trung | ⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ |
| Phạm Công Khánh | ⭐⭐⭐ | ⭐ | ⭐ | ⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Bùi Trần Hoàng Huy | ⭐⭐⭐ | ⭐ | ⭐ | ⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ |

> ⭐ = Basic, ⭐⭐ = Intermediate, ⭐⭐⭐ = Advanced

---

## 5. RESOURCE CALENDAR

### Availability
| Thành viên | MSSV | Available | Nghỉ lễ |
|------------|------|-----------|---------|
| Nguyễn Hoàng Dũng | 225051926 | 100% | 01/01/2026 |
| Nguyễn Xuân Hiếu | 225053504 | 100% | 01/01/2026 |
| Đặng Gia Khánh | 225053665 | 100% | 25/12, 01/01 |
| Nguyễn Thành Trung | 225051404 | 100% | 01/01/2026 |
| Phạm Công Khánh | 225053787 | 100% | 01/01/2026 |
| Bùi Trần Hoàng Huy | 225050604 | 100% | 01/01/2026 |

### Working Hours
- **Daily:** 4-6 giờ (dự án học thuật)
- **Total capacity:** 6 người × 21 ngày × 5h = 630 person-hours

---

## 6. PERFORMANCE MANAGEMENT

### 6.1 Đánh giá cá nhân
- **Sprint Velocity:** Số story points hoàn thành
- **Code Quality:** Review feedback
- **Collaboration:** Tham gia Daily Standup

### 6.2 Team Performance
| KPI | Target |
|-----|--------|
| Sprint Velocity | 35-40 points/sprint |
| Bug Rate | < 10% |
| Standup Attendance | 100% |
| Code Review Coverage | 100% |

---

## 7. CONFLICT RESOLUTION

### Escalation Path
1. **Level 1:** Team discussion
2. **Level 2:** Scrum Master mediation (Nguyễn Xuân Hiếu)
3. **Level 3:** Product Owner decision (Nguyễn Hoàng Dũng)

### Resolution Techniques
- Active listening
- Focus on issues, not people
- Win-win solutions
- Timebox discussions (max 15 min)

---

*Phiên bản: 2.0 | Ngày cập nhật: 15/01/2026*
