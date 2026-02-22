# Q&A DOCUMENT
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Tài liệu ghi lại các câu hỏi và trả lời trong quá trình phát triển dự án, bao gồm:
- Clarification về yêu cầu
- Technical decisions
- Business logic

---

## 2. REQUIREMENT Q&A

### Q1: Phạm vi dự án Topic 1?
**Ngày:** 19/12/2025 | **Người hỏi:** Team

**Trả lời:** Website đặt phòng villa bao gồm:
- Hiển thị phòng theo zone
- Booking flow hoàn chỉnh
- Quản lý dịch vụ sự kiện
- Quản lý tour du lịch
- Không bao gồm admin dashboard

---

### Q2: Figma design có bắt buộc follow 100%?
**Ngày:** 19/12/2025 | **Người hỏi:** C (Frontend Dev)

**Trả lời:** Có, Figma là reference chính cho UI/UX. Tuy nhiên:
- Responsive behavior tự quyết định
- Có thể thêm micro-animations
- Data structure theo thiết kế database team

---

### Q3: Cần tích hợp payment gateway thực không?
**Ngày:** 20/12/2025 | **Người hỏi:** D (Backend Dev)

**Trả lời:** Không bắt buộc. Có thể mock payment flow:
- Hiển thị các options (Bank, Momo, Cash)
- Simulate successful payment
- Focus vào booking flow hoàn chỉnh

---

### Q4: Admin dashboard có cần làm không?
**Ngày:** 20/12/2025 | **Người hỏi:** A (PO)

**Trả lời:** Không cần cho đợt này. Focus vào:
- Customer-facing website
- MVP booking features
- Nếu team > 4 người, cần CRUD master data → Có nhưng basic

---

### Q5: Dữ liệu phòng lấy từ đâu?
**Ngày:** 21/12/2025 | **Người hỏi:** E (Dev)

**Trả lời:** 
- Dựa trên Figma design
- 3 zones: Wooden House, Rose House, Villa
- 7 phòng với thông tin mock
- Giá từ 1,200,000 - 5,000,000 VND

---

## 3. TECHNICAL Q&A

### Q6: Stack công nghệ được sử dụng?
**Ngày:** 19/12/2025 | **Người hỏi:** Team

**Trả lời:**
- Frontend: React + TypeScript + Vite + TailwindCSS
- Backend: ASP.NET Core Web API
- Database: SQL Server
- Deployment: Docker + nginx

---

### Q7: API design style?
**Ngày:** 21/12/2025 | **Người hỏi:** D (Backend Dev)

**Trả lời:** RESTful API:
- GET /api/rooms - List rooms
- GET /api/rooms/{id} - Room detail
- POST /api/bookings - Create booking
- Sử dụng JSON format

---

### Q8: Authentication cần không?
**Ngày:** 22/12/2025 | **Người hỏi:** E (Dev)

**Trả lời:** Không bắt buộc cho MVP:
- Guest checkout allowed
- Không cần login để đặt phòng
- Có thể thêm sau nếu còn thời gian

---

### Q9: Calendar picker dùng library hay custom?
**Ngày:** 23/12/2025 | **Người hỏi:** C (Frontend Dev)

**Trả lời:** Custom để match Figma design:
- Tích hợp vào modal
- Cho phép chọn date range
- Guest selector trong cùng modal

---

### Q10: Làm sao xử lý double booking?
**Ngày:** 24/12/2025 | **Người hỏi:** D (Backend Dev)

**Trả lời:** 
- Check availability trước khi book
- API trả về available rooms only
- Trong scope hiện tại: không concurrent users thực sự

---

## 4. PROCESS Q&A

### Q11: Daily Standup format?
**Ngày:** 19/12/2025 | **Người hỏi:** B (SM)

**Trả lời:** 15 phút qua Zalo:
1. Hôm qua làm gì?
2. Hôm nay làm gì?
3. Có blocker không?

---

### Q12: Sprint length?
**Ngày:** 19/12/2025 | **Người hỏi:** A (PO)

**Trả lời:**
- Sprint 1: 7 ngày (19-25/12)
- Sprint 2: 6 ngày (26-31/12)
- Sprint 3: 7 ngày (02-08/01)
- Tổng 21 ngày (nghỉ lễ 01/01)

---

### Q13: DoD (Definition of Done)?
**Ngày:** 19/12/2025 | **Người hỏi:** F (Tester)

**Trả lời:**
- Code complete & reviewed
- Unit tested
- No critical bugs
- Merged to develop branch

---

## 5. STAKEHOLDER DECISIONS

| # | Decision | Made by | Date |
|---|----------|---------|------|
| 1 | No admin dashboard | GV | 19/12 |
| 2 | Mock payment only | PO | 20/12 |
| 3 | Focus on booking flow | PO | 20/12 |
| 4 | Custom calendar picker | Team | 23/12 |
| 5 | Sprint 1 scope adjustment | PO | 28/12 |

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
