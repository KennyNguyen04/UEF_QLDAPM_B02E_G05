# REQUIREMENT SPECIFICATION
## The Wandering Rose - Villa Booking System

---

## 1. GIỚI THIỆU

### 1.1 Mục đích
Tài liệu này mô tả chi tiết các yêu cầu chức năng và phi chức năng của hệ thống đặt phòng villa trực tuyến.

### 1.2 Phạm vi
Hệ thống web cho phép khách hàng xem thông tin và đặt phòng, dịch vụ sự kiện, tour tại khu nghỉ dưỡng The Wandering Rose.

### 1.3 Định nghĩa
| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Zone | Khu vực phòng (Wooden House, Rose House, Villa) |
| Booking | Đơn đặt phòng |
| Guest | Khách lưu trú |

---

## 2. YÊU CẦU CHỨC NĂNG (FUNCTIONAL REQUIREMENTS)

### 2.1 Module: Quản lý Phòng

| ID | Yêu cầu | Priority |
|----|---------|----------|
| FR-001 | Hệ thống hiển thị danh sách 3 zones | Must |
| FR-002 | Hệ thống hiển thị danh sách phòng theo zone | Must |
| FR-003 | Hệ thống hiển thị chi tiết phòng (tên, giá, diện tích, sức chứa, tiện nghi, hình ảnh) | Must |
| FR-004 | Hệ thống lọc phòng theo ngày và số khách | Must |

### 2.2 Module: Booking Flow

| ID | Yêu cầu | Priority |
|----|---------|----------|
| FR-005 | Người dùng chọn ngày check-in/check-out qua calendar | Must |
| FR-006 | Người dùng chọn số lượng người lớn, trẻ em, số phòng | Must |
| FR-007 | Hệ thống hiển thị danh sách phòng available | Must |
| FR-008 | Người dùng chọn phòng và số lượng | Must |
| FR-009 | Hệ thống hiển thị tổng giá tiền | Must |
| FR-010 | Người dùng nhập thông tin cá nhân (họ tên, email, SĐT) | Must |
| FR-011 | Hệ thống xác nhận booking và hiển thị mã đặt phòng | Must |

### 2.3 Module: Dịch vụ & Sự kiện

| ID | Yêu cầu | Priority |
|----|---------|----------|
| FR-012 | Hệ thống hiển thị danh sách 4 dịch vụ sự kiện | Should |
| FR-013 | Hệ thống hiển thị chi tiết dịch vụ (mô tả, highlights) | Should |
| FR-014 | Người dùng gửi yêu cầu đặt dịch vụ qua form | Should |

### 2.4 Module: Tour Du lịch

| ID | Yêu cầu | Priority |
|----|---------|----------|
| FR-015 | Hệ thống hiển thị danh sách 4 tours | Should |
| FR-016 | Hệ thống hiển thị chi tiết tour (mô tả, highlights) | Should |
| FR-017 | Người dùng gửi yêu cầu đặt tour qua form | Should |

### 2.5 Module: Trang thông tin

| ID | Yêu cầu | Priority |
|----|---------|----------|
| FR-018 | Hệ thống hiển thị trang chủ với hero section | Must |
| FR-019 | Hệ thống hiển thị trang About Us | Should |
| FR-020 | Hệ thống hiển thị trang Contact với form liên hệ | Should |
| FR-021 | Hệ thống hiển thị trang FAQ | Could |
| FR-022 | Hệ thống hiển thị trang Gallery | Could |

---

## 3. YÊU CẦU PHI CHỨC NĂNG (NON-FUNCTIONAL REQUIREMENTS)

### 3.1 Performance

| ID | Yêu cầu | Metric |
|----|---------|--------|
| NFR-001 | Page load time | < 3 giây |
| NFR-002 | API response time | < 500ms |

### 3.2 Usability

| ID | Yêu cầu |
|----|---------|
| NFR-003 | Responsive design (mobile, tablet, desktop) |
| NFR-004 | Giao diện tiếng Việt |
| NFR-005 | Navigation rõ ràng, dễ sử dụng |

### 3.3 Reliability

| ID | Yêu cầu |
|----|---------|
| NFR-006 | Uptime 99% (khi deploy) |
| NFR-007 | Không mất data khi refresh |

### 3.4 Security

| ID | Yêu cầu |
|----|---------|
| NFR-008 | Validate input data |
| NFR-009 | Không lưu thông tin nhạy cảm ở client |

### 3.5 Compatibility

| ID | Yêu cầu |
|----|---------|
| NFR-010 | Hỗ trợ Chrome, Firefox, Safari, Edge |
| NFR-011 | Hoạt động trên Windows, macOS, Linux |

---

## 4. USER STORIES

### Epic 1: Xem thông tin phòng

**US-001: Xem danh sách zones**
```
As a khách hàng
I want xem danh sách các khu vực phòng
So that tôi có thể chọn khu vực phù hợp

Acceptance Criteria:
- Hiển thị 3 zones: Wooden House, Rose House, Villa
- Mỗi zone có hình ảnh, tên, mô tả ngắn
- Click vào zone để xem chi tiết
```

**US-002: Xem chi tiết phòng**
```
As a khách hàng
I want xem thông tin chi tiết của một phòng
So that tôi biết phòng có phù hợp không

Acceptance Criteria:
- Hiển thị tên, giá, diện tích, sức chứa
- Hiển thị danh sách tiện nghi
- Hiển thị gallery hình ảnh
- Có nút "Đặt phòng"
```

### Epic 2: Đặt phòng

**US-003: Chọn ngày đặt phòng**
```
As a khách hàng
I want chọn ngày check-in và check-out
So that tôi có thể tìm phòng trống

Acceptance Criteria:
- Calendar cho phép chọn từ ngày hôm nay trở đi
- Check-out phải sau check-in
- Hiển thị số đêm lưu trú
```

**US-004: Tìm phòng trống**
```
As a khách hàng
I want xem danh sách phòng trống
So that tôi có thể chọn phòng phù hợp

Acceptance Criteria:
- Lọc theo ngày và số khách
- Hiển thị giá mỗi đêm
- Hiển thị tổng giá
- Cho phép chọn nhiều phòng
```

**US-005: Xác nhận đặt phòng**
```
As a khách hàng
I want nhận xác nhận booking
So that tôi biết đặt phòng thành công

Acceptance Criteria:
- Nhập thông tin cá nhân (họ tên, email, SĐT)
- Hiển thị tóm tắt đơn đặt
- Hiển thị mã booking sau khi xác nhận
```

### Epic 3: Dịch vụ & Tour

**US-006: Xem và đặt dịch vụ sự kiện**
```
As a khách hàng
I want xem và đặt dịch vụ tổ chức sự kiện
So that tôi có thể tổ chức event tại resort

Acceptance Criteria:
- Hiển thị 4 loại dịch vụ
- Chi tiết dịch vụ có mô tả và highlights
- Form đăng ký với thông tin liên hệ
```

**US-007: Xem và đặt tour**
```
As a khách hàng
I want xem và đặt tour du lịch địa phương
So that tôi có thể trải nghiệm vùng Ba Vì

Acceptance Criteria:
- Hiển thị 4 tours
- Chi tiết tour có lịch trình và highlights
- Form đăng ký với thông tin liên hệ
```

---

## 5. USE CASE DIAGRAM

```
                    ┌─────────────────────────────────────┐
                    │       Villa Booking System          │
                    │                                     │
   ┌──────┐         │  ┌─────────────────────────────┐   │
   │      │         │  │     View Room Categories    │   │
   │      │────────►│  └─────────────────────────────┘   │
   │      │         │                                     │
   │      │         │  ┌─────────────────────────────┐   │
   │      │────────►│  │      View Room Details      │   │
   │      │         │  └─────────────────────────────┘   │
   │      │         │                                     │
   │ User │         │  ┌─────────────────────────────┐   │
   │      │────────►│  │       Book a Room           │   │
   │      │         │  └─────────────────────────────┘   │
   │      │         │                                     │
   │      │         │  ┌─────────────────────────────┐   │
   │      │────────►│  │     Book Event Service      │   │
   │      │         │  └─────────────────────────────┘   │
   │      │         │                                     │
   │      │         │  ┌─────────────────────────────┐   │
   │      │────────►│  │        Book a Tour          │   │
   │      │         │  └─────────────────────────────┘   │
   │      │         │                                     │
   │      │         │  ┌─────────────────────────────┐   │
   │      │────────►│  │      Submit Contact         │   │
   └──────┘         │  └─────────────────────────────┘   │
                    │                                     │
                    └─────────────────────────────────────┘
```

---

## 6. DATA REQUIREMENTS

### Rooms Table
| Field | Type | Required |
|-------|------|----------|
| id | int | Yes |
| name | string | Yes |
| maxPeople | int | Yes |
| area | int | Yes |
| price | decimal | Yes |
| zone | string | Yes |
| imageUrl | string | Yes |
| description | string | No |
| features | json | No |

### Bookings Table
| Field | Type | Required |
|-------|------|----------|
| id | int | Yes |
| bookingCode | string | Yes |
| checkIn | date | Yes |
| checkOut | date | Yes |
| totalPrice | decimal | Yes |
| status | string | Yes |
| customerId | int | Yes |

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
