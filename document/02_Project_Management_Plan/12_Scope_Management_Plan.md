# SCOPE MANAGEMENT PLAN
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Tài liệu này mô tả cách quản lý phạm vi dự án, bao gồm:
- Cách xác định phạm vi
- Cách tạo WBS (Work Breakdown Structure)
- Cách xác nhận và kiểm soát phạm vi
- Quy trình xử lý thay đổi phạm vi

---

## 2. QUY TRÌNH XÁC ĐỊNH PHẠM VI

### 2.1 Thu thập yêu cầu
- **Nguồn:** Đề bài Topic 1, Figma design, Q&A với giảng viên
- **Phương pháp:** Brainstorming, phân tích Figma
- **Output:** User Stories trong Product Backlog

### 2.2 Xác định phạm vi
Product Owner (A) chịu trách nhiệm:
1. Định nghĩa các Epic và User Stories
2. Ưu tiên hóa theo giá trị kinh doanh
3. Phân bổ vào các Sprint

---

## 3. WORK BREAKDOWN STRUCTURE (WBS)

```
The Wandering Rose Villa Booking System
├── 1. PROJECT MANAGEMENT
│   ├── 1.1 Project Planning
│   ├── 1.2 Sprint Planning (2 sprints)
│   ├── 1.3 Daily Standups
│   └── 1.4 Sprint Reviews & Retrospectives
│
├── 2. FRONTEND DEVELOPMENT
│   ├── 2.1 Home Page
│   ├── 2.2 About Us Page
│   ├── 2.3 Room Categories
│   │   ├── 2.3.1 Zone View
│   │   ├── 2.3.2 Room Detail View
│   │   └── 2.3.3 Room Card Component
│   ├── 2.4 Booking Flow
│   │   ├── 2.4.1 Booking Calendar
│   │   ├── 2.4.2 Booking Result
│   │   ├── 2.4.3 Checkout
│   │   ├── 2.4.4 Payment
│   │   └── 2.4.5 Confirmation
│   ├── 2.5 Services & Events Page
│   ├── 2.6 Tours Page
│   ├── 2.7 Contact Page
│   ├── 2.8 FAQ Page
│   └── 2.9 Gallery Page
│
├── 3. BACKEND DEVELOPMENT
│   ├── 3.1 Database Design
│   │   ├── 3.1.1 Entity Models (13 entities)
│   │   └── 3.1.2 Migrations
│   ├── 3.2 API Controllers
│   │   ├── 3.2.1 Zones Controller
│   │   ├── 3.2.2 Rooms Controller
│   │   ├── 3.2.3 Bookings Controller
│   │   ├── 3.2.4 Content Controllers
│   │   └── 3.2.5 Form Controllers
│   └── 3.3 Business Logic
│
├── 4. INTEGRATION
│   ├── 4.1 Frontend-Backend Integration
│   ├── 4.2 Docker Setup
│   └── 4.3 Nginx Configuration
│
├── 5. TESTING
│   ├── 5.1 Unit Testing
│   ├── 5.2 Integration Testing
│   └── 5.3 User Acceptance Testing
│
└── 6. DOCUMENTATION
    ├── 6.1 Project Charter
    ├── 6.2 Management Plans
    ├── 6.3 Technical Documentation
    └── 6.4 User Guide
```

---

## 4. XÁC NHẬN PHẠM VI (Scope Validation)

| Hoạt động | Người thực hiện | Thời điểm |
|-----------|-----------------|-----------|
| Review User Stories | Product Owner (A) | Sprint Planning |
| Demo features | Dev Team | Sprint Review |
| Chấp nhận deliverables | Giảng viên | Final Review |

---

## 5. KIỂM SOÁT PHẠM VI (Scope Control)

### Quy trình thay đổi phạm vi
1. **Yêu cầu thay đổi** được ghi nhận trong Trello
2. **Đánh giá impact** bởi Scrum Master (B)
3. **Phê duyệt** bởi Product Owner (A)
4. **Cập nhật** Product Backlog nếu được duyệt

### Nguyên tắc
- Không thêm features mới trong Sprint đang chạy
- Scope changes chỉ được thực hiện ở Sprint sau
- Mọi thay đổi phải được document

---

## 6. SCOPE BASELINE

Xem file: `07_Scope_Baseline.md`

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
