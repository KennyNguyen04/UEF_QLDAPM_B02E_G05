# PROJECT CHARTER
## The Wandering Rose - Villa Booking System

---

## 1. THÔNG TIN DỰ ÁN

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên dự án** | The Wandering Rose - Villa Booking System |
| **Mã dự án** | TWR-2025 |
| **Loại dự án** | Web Application |
| **Ngày bắt đầu** | 19/12/2025 |
| **Ngày kết thúc** | 08/01/2026 |
| **Thời lượng** | 21 ngày (2 Sprints) |

---

## 2. LÝ DO DỰ ÁN (Reason of Project)

### Bối cảnh
Khu nghỉ dưỡng sinh thái "The Wandering Rose" tại Ba Vì, Hà Nội hiện đang quản lý đặt phòng thủ công qua điện thoại và email, gây ra nhiều bất cập:
- Khó theo dõi tình trạng phòng trống real-time
- Dễ xảy ra double booking
- Khó quản lý thông tin khách hàng
- Không có hệ thống báo cáo doanh thu

### Nhu cầu
Cần xây dựng hệ thống web cho phép:
- Khách hàng đặt phòng online 24/7
- Quản lý booking, sự kiện, tour du lịch
- Hiển thị thông tin phòng, giá cả minh bạch
- Tích hợp thanh toán và xác nhận tự động

---

## 3. MỤC ĐÍCH VÀ RÀNG BUỘC (Purpose & Constraints)

### Mục đích
1. Xây dựng website đặt phòng trực tuyến hoàn chỉnh
2. Cung cấp trải nghiệm người dùng tốt nhất cho khách hàng
3. Tự động hóa quy trình đặt phòng và quản lý
4. Áp dụng quy trình Scrum trong phát triển phần mềm

### Ràng buộc
| Loại | Chi tiết |
|------|----------|
| **Thời gian** | 21 ngày, 2 Sprints |
| **Nhân lực** | 6 thành viên |
| **Công nghệ** | React, ASP.NET Core, SQL Server |
| **Design** | Theo Figma đã cho sẵn |
| **Quy trình** | Scrum + Agile |

---

## 4. CÁC BÊN LIÊN QUAN (Stakeholders)

| Stakeholder | Vai trò | Mức độ quan tâm |
|-------------|---------|-----------------|
| **Giảng viên** | Khách hàng / Người đánh giá | Cao |
| **Chủ resort (giả định)** | Product Owner | Cao |
| **Nhóm phát triển** | Development Team | Cao |
| **Khách du lịch** | End Users | Cao |
| **Nhân viên resort** | Internal Users | Trung bình |

---

## 5. RỦI RO ĐÃ XÁC ĐỊNH (Identified Risks)

| ID | Rủi ro | Xác suất | Tác động | Biện pháp |
|----|--------|----------|----------|-----------|
| R1 | Timeline ngắn (21 ngày) | Cao | Cao | Ưu tiên MVP, Scrum sprints |
| R2 | Thành viên thiếu kinh nghiệm Scrum | Trung bình | Trung bình | Training, Daily standup |
| R3 | Yêu cầu thay đổi giữa chừng | Trung bình | Trung bình | Change management plan |
| R4 | Technical debt | Cao | Thấp | Code review, DoD |
| R5 | Tích hợp frontend-backend | Trung bình | Cao | API contract, testing |

---

## 6. LỢI ÍCH DỰ ÁN (Project Benefits)

### Lợi ích cho Khu nghỉ dưỡng
- ⬆️ Tăng số lượng booking online
- ⬇️ Giảm chi phí nhân sự tiếp nhận đặt phòng
- 📊 Có dữ liệu để phân tích xu hướng khách hàng
- 🔄 Tự động hóa quy trình

### Lợi ích cho Khách hàng
- 🕐 Đặt phòng 24/7, không cần gọi điện
- 👀 Xem thông tin phòng, giá cả minh bạch
- ✅ Nhận xác nhận booking ngay lập tức
- 🗓️ Chọn ngày check-in/out linh hoạt

### Lợi ích học tập
- 📚 Áp dụng Scrum thực tế
- 💻 Phát triển full-stack application
- 🤝 Làm việc nhóm hiệu quả

---

## 7. TÓM TẮT NGÂN SÁCH (Budget Summary)

### Mô hình tính toán: Labo Contract Model

| Hạng mục | Số lượng | Đơn giá (giả định) | Thành tiền |
|----------|----------|-------------------|------------|
| **Nhân công** | 6 người × 21 ngày | 500,000 VND/ngày | 63,000,000 VND |
| **Công cụ** | Trello, GitHub, Figma | Miễn phí | 0 VND |
| **Hosting** | Docker, Local dev | Miễn phí | 0 VND |
| **Dự phòng (10%)** | - | - | 6,300,000 VND |
| **TỔNG CỘNG** | - | - | **69,300,000 VND** |

> **Ghi chú:** Đây là budget ước tính cho mục đích học tập. Thực tế dự án là đồ án môn học không phát sinh chi phí thực.

---

## 8. THÔNG TIN NHÓM DỰ ÁN

| Thành viên | Vai trò Scrum | Trách nhiệm chính |
|------------|---------------|-------------------|
| **A** | Product Owner | Quản lý Product Backlog, ưu tiên features |
| **B** | Scrum Master | Điều phối Scrum events, loại bỏ blockers |
| **C** | Developer | Frontend React development |
| **D** | Developer | Backend ASP.NET Core development |
| **E** | Developer | Database design, API integration |
| **F** | Developer / Tester | Testing, Quality Assurance |

---

## 9. PHẠM VI DỰ ÁN (Scope Overview)

### Trong phạm vi (In Scope)
- ✅ Website đặt phòng villa
- ✅ Hiển thị thông tin phòng theo zone
- ✅ Booking flow hoàn chỉnh
- ✅ Quản lý dịch vụ sự kiện
- ✅ Quản lý tour du lịch
- ✅ Trang liên hệ
- ✅ FAQ

### Ngoài phạm vi (Out of Scope)
- ❌ Payment gateway thực
- ❌ Admin dashboard
- ❌ Mobile app
- ❌ Multi-language

---

## 10. MILESTONES

| Milestone | Ngày | Deliverables |
|-----------|------|--------------|
| **Kickoff** | 19/12/2025 | Project Charter, Product Backlog |
| **Sprint 1 Review** | 29/12/2025 | Core booking flow, Room pages |
| **Sprint 2 Review** | 08/01/2026 | Full features, Testing complete |
| **Final Delivery** | 08/01/2026 | Source code, Documentation |

---

## 11. PHÊ DUYỆT

| Vai trò | Họ tên | Chữ ký | Ngày |
|---------|--------|--------|------|
| Product Owner | A | _________ | ___/___/2025 |
| Scrum Master | B | _________ | ___/___/2025 |
| Giảng viên | _________ | _________ | ___/___/2025 |

---

*Tài liệu được tạo ngày 19/12/2025*
*Phiên bản: 1.0*
