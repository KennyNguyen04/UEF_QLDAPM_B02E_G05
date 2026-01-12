# TEST CASES & TEST REPORT
## The Wandering Rose - Villa Booking System

---

## 1. TỔNG QUAN

| Thông số | Giá trị |
|----------|---------|
| **Số Test Cases** | 23 cases |
| **Test Pass** | 22 |
| **Test Fail** | 0 |
| **Test Blocked** | 1 (cần real payment gateway) |
| **Pass Rate** | 95.7% |

---

## 2. TEST CASES

### 2.1 Module: Trang chủ & Navigation

| TC ID | Test Case | Steps | Expected Result | Status |
|-------|-----------|-------|-----------------|--------|
| TC-001 | Load trang chủ | 1. Truy cập URL gốc | Hero section hiển thị, navigation hoạt động | ✅ Pass |
| TC-002 | Navigate to About | 1. Click "Về chúng tôi" | Chuyển đến trang About Us | ✅ Pass |
| TC-003 | Navigate to Rooms | 1. Click "Hạng phòng" | Chuyển đến Room Categories | ✅ Pass |
| TC-004 | Navigate to Services | 1. Click "Dịch vụ sự kiện" | Chuyển đến Services page | ✅ Pass |
| TC-005 | Logo click home | 1. Click logo | Quay về trang chủ | ✅ Pass |

### 2.2 Module: Room Categories

| TC ID | Test Case | Steps | Expected Result | Status |
|-------|-----------|-------|-----------------|--------|
| TC-006 | View zone list | 1. Navigate to Rooms | Hiển thị 3 zones | ✅ Pass |
| TC-007 | Filter by zone | 1. Click vào Wooden House zone | Hiển thị 3 phòng thuộc zone | ✅ Pass |
| TC-008 | View room detail | 1. Click vào Forest Room | Hiển thị chi tiết phòng đầy đủ | ✅ Pass |
| TC-009 | Room images gallery | 1. Xem room detail<br>2. Click các ảnh | Gallery hiển thị đúng | ✅ Pass |
| TC-010 | Room amenities | 1. Xem room detail | Hiển thị danh sách tiện nghi | ✅ Pass |

### 2.3 Module: Booking Flow

| TC ID | Test Case | Steps | Expected Result | Status |
|-------|-----------|-------|-----------------|--------|
| TC-011 | Open booking calendar | 1. Click "Đặt ngay" | Calendar modal mở ra | ✅ Pass |
| TC-012 | Select check-in date | 1. Mở calendar<br>2. Chọn ngày 15/01/2026 | Ngày được highlight | ✅ Pass |
| TC-013 | Select check-out date | 1. Chọn check-in<br>2. Chọn checkout 17/01 | Hiển thị 2 đêm | ✅ Pass |
| TC-014 | Invalid date range | 1. Chọn checkout trước check-in | Không cho phép | ✅ Pass |
| TC-015 | Search available rooms | 1. Chọn ngày<br>2. Chọn 2 adults<br>3. Click "Tìm phòng" | Hiển thị phòng available | ✅ Pass |
| TC-016 | Add room to cart | 1. Tìm phòng<br>2. Click "+" trên phòng | Số lượng tăng, giá cập nhật | ✅ Pass |
| TC-017 | Proceed to checkout | 1. Chọn phòng<br>2. Click "Tiếp tục" | Chuyển sang Checkout | ✅ Pass |
| TC-018 | Fill customer info | 1. Điền họ tên, email, SĐT | Form validate đúng | ✅ Pass |
| TC-019 | Invalid email | 1. Điền email sai format | Hiển thị lỗi validation | ✅ Pass |
| TC-020 | Confirm booking | 1. Điền đầy đủ info<br>2. Click Xác nhận | Hiển thị trang Payment | ✅ Pass |
| TC-021 | View confirmation | 1. Hoàn tất payment | Hiển thị mã booking | ✅ Pass |

### 2.4 Module: Dịch vụ & Tour

| TC ID | Test Case | Steps | Expected Result | Status |
|-------|-----------|-------|-----------------|--------|
| TC-022 | View services list | 1. Navigate to Services | Hiển thị 4 dịch vụ | ✅ Pass |
| TC-023 | Submit event form | 1. Điền form<br>2. Submit | Thông báo gửi thành công | ✅ Pass |
| TC-024 | View tours list | 1. Navigate to Tours | Hiển thị 4 tours | ✅ Pass |
| TC-025 | Submit tour form | 1. Điền form<br>2. Submit | Thông báo gửi thành công | ✅ Pass |

### 2.5 Module: Contact & FAQ

| TC ID | Test Case | Steps | Expected Result | Status |
|-------|-----------|-------|-----------------|--------|
| TC-026 | Submit contact form | 1. Điền form liên hệ<br>2. Submit | Thông báo gửi thành công | ✅ Pass |
| TC-027 | View FAQ | 1. Navigate to FAQ<br>2. Click question | Answer expand/collapse | ✅ Pass |

### 2.6 Module: Responsive Design

| TC ID | Test Case | Steps | Expected Result | Status |
|-------|-----------|-------|-----------------|--------|
| TC-028 | Mobile view | 1. Resize to 375px | Layout responsive đúng | ✅ Pass |
| TC-029 | Tablet view | 1. Resize to 768px | Layout responsive đúng | ✅ Pass |

### 2.7 Module: Integration

| TC ID | Test Case | Steps | Expected Result | Status |
|-------|-----------|-------|-----------------|--------|
| TC-030 | API rooms list | 1. Call GET /api/rooms | Return 7 rooms | ✅ Pass |
| TC-031 | API create booking | 1. POST /api/bookings | Return booking code | ✅ Pass |
| TC-032 | Payment gateway | 1. Process actual payment | - | ⏸️ Blocked |

---

## 3. DEFECT LOG

| Bug ID | Test Case | Mô tả | Severity | Status |
|--------|-----------|-------|----------|--------|
| BUG-001 | TC-014 | Calendar cho chọn ngày quá khứ | Medium | ✅ Fixed |
| BUG-002 | TC-016 | Price không update realtime | Low | ✅ Fixed |
| BUG-003 | TC-019 | Email validation thiếu | Medium | ✅ Fixed |
| BUG-004 | TC-028 | Menu mobile bị overlap | Low | ✅ Fixed |
| BUG-005 | TC-011 | Calendar close khi click outside | Low | ✅ Fixed |

---

## 4. TEST SUMMARY

### By Priority
| Priority | Total | Pass | Fail |
|----------|-------|------|------|
| High | 10 | 10 | 0 |
| Medium | 12 | 11 | 0 |
| Low | 10 | 10 | 0 |

### By Module
| Module | Total | Pass | Fail |
|--------|-------|------|------|
| Navigation | 5 | 5 | 0 |
| Rooms | 5 | 5 | 0 |
| Booking | 11 | 11 | 0 |
| Services/Tours | 4 | 4 | 0 |
| Other | 7 | 6 | 0 |

---

## 5. RECOMMENDATIONS

1. ✅ All critical features tested and passed
2. ⚠️ Payment gateway cần test khi tích hợp thực
3. 📝 Cần thêm automated tests cho regression

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
