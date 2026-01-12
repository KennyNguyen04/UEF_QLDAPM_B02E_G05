# SCOPE BASELINE
## The Wandering Rose - Villa Booking System

---

## 1. PROJECT SCOPE STATEMENT

### 1.1 Mô tả sản phẩm
Website đặt phòng trực tuyến cho khu nghỉ dưỡng "The Wandering Rose" tại Ba Vì, Hà Nội. Hệ thống cho phép khách hàng xem thông tin phòng, đặt phòng online, đăng ký dịch vụ sự kiện và tour du lịch.

### 1.2 Deliverables

| ID | Deliverable | Mô tả |
|----|-------------|-------|
| D1 | Frontend Application | React + TypeScript, responsive |
| D2 | Backend API | ASP.NET Core REST API |
| D3 | Database | SQL Server với 13 tables |
| D4 | Docker Setup | docker-compose cho deployment |
| D5 | Documentation | Đầy đủ tài liệu quản lý dự án |

---

## 2. PHẠM VI CHỨC NĂNG

### 2.1 Trong phạm vi (In Scope)

#### Module 1: Quản lý Phòng
| Feature | Mô tả | Priority |
|---------|-------|----------|
| Xem danh sách zones | 3 zones: Wooden House, Rose House, Villa | Must |
| Xem phòng theo zone | Filter phòng theo khu vực | Must |
| Chi tiết phòng | Thông tin, hình ảnh, giá, tiện nghi | Must |
| Tìm phòng trống | Theo ngày check-in/out và số khách | Must |

#### Module 2: Booking Flow
| Feature | Mô tả | Priority |
|---------|-------|----------|
| Chọn ngày check-in/out | Calendar picker | Must |
| Chọn số khách | Adults, children, rooms | Must |
| Hiển thị kết quả tìm kiếm | Danh sách phòng available | Must |
| Checkout process | Điền thông tin khách | Must |
| Xác nhận booking | Hiển thị mã booking | Must |

#### Module 3: Dịch vụ & Sự kiện
| Feature | Mô tả | Priority |
|---------|-------|----------|
| Danh sách sự kiện | Sinh nhật, teambuilding, tiệc cưới, kỷ niệm | Should |
| Chi tiết sự kiện | Mô tả, highlights | Should |
| Form đăng ký | Gửi yêu cầu đặt sự kiện | Should |

#### Module 4: Tour Du lịch
| Feature | Mô tả | Priority |
|---------|-------|----------|
| Danh sách tour | 4 tours địa phương | Should |
| Chi tiết tour | Mô tả, highlights | Should |
| Form đăng ký | Gửi yêu cầu đặt tour | Should |

#### Module 5: Khác
| Feature | Mô tả | Priority |
|---------|-------|----------|
| Trang chủ | Hero, giới thiệu, highlights | Must |
| About Us | Giới thiệu resort | Should |
| Contact | Form liên hệ | Should |
| FAQ | Câu hỏi thường gặp | Could |
| Gallery | Thư viện hình ảnh | Could |

### 2.2 Ngoài phạm vi (Out of Scope)

| Feature | Lý do loại trừ |
|---------|----------------|
| Payment Gateway thực | Yêu cầu tích hợp với ngân hàng, quá phức tạp |
| Admin Dashboard | Thời gian không đủ, không yêu cầu trong đề bài |
| User Authentication | Không bắt buộc cho MVP |
| Email Notifications | Phức tạp, cần SMTP server |
| Mobile Application | Ngoài scope của web application |
| Multi-language | Không yêu cầu |
| Room reviews/ratings | Không yêu cầu |

---

## 3. ACCEPTANCE CRITERIA

### 3.1 Chức năng
- ✅ Tất cả 7 loại phòng hiển thị đúng thông tin
- ✅ Booking flow hoạt động end-to-end
- ✅ Form submissions gửi được data
- ✅ Responsive trên mobile và desktop

### 3.2 Kỹ thuật
- ✅ Frontend build thành công
- ✅ Backend API respond đúng
- ✅ Docker containers chạy được
- ✅ Không có critical bugs

### 3.3 Documentation
- ✅ Đầy đủ 8 artifacts theo yêu cầu
- ✅ Scrum artifacts có đủ dữ liệu
- ✅ 20+ test cases, 10+ risks

---

## 4. CONSTRAINTS

| Loại | Ràng buộc |
|------|-----------|
| Time | 21 ngày (19/12/2025 - 08/01/2026) |
| Budget | Học thuật, không có chi phí thực |
| Technology | Phải dùng React + .NET Core theo skill của team |
| Design | Phải theo Figma đã cho |
| Process | Phải áp dụng Scrum |

---

## 5. ASSUMPTIONS

1. Team đủ skill để hoàn thành trong 21 ngày
2. Không có thay đổi lớn về yêu cầu
3. Công cụ (Trello, GitHub) luôn available
4. Tất cả thành viên commit đủ thời gian

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
