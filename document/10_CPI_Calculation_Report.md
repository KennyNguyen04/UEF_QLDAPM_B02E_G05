# BÁO CÁO TÍNH CPI - ĐỒ ÁN CUỐI KỲ
## The Wandering Rose - Villa Booking System

---

## 1. THÔNG TIN DỰ ÁN

| Thông tin | Chi tiết |
|-----------|----------|
| **Mã dự án** | TWR-2025 |
| **Thời gian** | 19/12/2025 - 08/01/2026 |
| **Tổng số ngày** | 21 ngày |
| **Số thành viên** | 6 người |
| **Giờ làm chuẩn** | 4 giờ/ngày/người |

---

## 2. ĐƠN GIÁ LAO ĐỘNG

### 2.1 Đơn giá thường (Standard Rate)
| Thành viên | MSSV | Vai trò | Đơn giá/giờ (USD) |
|------------|------|---------|-------------------|
| Nguyễn Hoàng Dũng | 225051926 | Product Owner / PM | 8 |
| Nguyễn Xuân Hiếu | 225053504 | Scrum Master / BA | 7 |
| Đặng Gia Khánh | 225053665 | Backend Lead | 6 |
| Nguyễn Thành Trung | 225051404 | Backend Developer | 6 |
| Phạm Công Khánh | 225053787 | Frontend Lead | 6 |
| Bùi Trần Hoàng Huy | 225050604 | Frontend Developer | 5 |
| **Trung bình** | - | - | **6.33 USD/giờ** |

### 2.2 Đơn giá OT (Overtime Rate)
| Loại ngày | Đơn giá OT/giờ (USD) |
|-----------|---------------------|
| Ngày thường (T2-T6) | 7 |
| Thứ 7, Chủ nhật, Lễ | 10 |

---

## 3. PHÂN LOẠI NGÀY LÀM VIỆC

### 3.1 Lịch làm việc (19/12/2025 - 08/01/2026)

| Ngày | Thứ | Loại ngày | Ghi chú |
|------|-----|-----------|---------|
| 19/12 | T5 | Thường | Sprint 1 Start |
| 20/12 | T6 | Thường | |
| 21/12 | T7 | **Weekend** | |
| 22/12 | CN | **Weekend** | |
| 23/12 | T2 | Thường | |
| 24/12 | T3 | Thường | |
| 25/12 | T4 | **Lễ (Noel)** | |
| 26/12 | T5 | Thường | |
| 27/12 | T6 | Thường | |
| 28/12 | T7 | **Weekend** | |
| 29/12 | CN | **Weekend** | Sprint 1 End |
| 30/12 | T2 | Thường | Sprint 2 Start |
| 31/12 | T3 | Thường | |
| 01/01 | T4 | **Lễ (Tết DL)** | Nghỉ |
| 02/01 | T5 | Thường | |
| 03/01 | T6 | Thường | |
| 04/01 | T7 | **Weekend** | |
| 05/01 | CN | **Weekend** | |
| 06/01 | T2 | Thường | |
| 07/01 | T3 | Thường | |
| 08/01 | T4 | Thường | Final Delivery |

### 3.2 Thống kê loại ngày
| Loại | Số ngày |
|------|---------|
| Ngày thường (T2-T6) | 13 ngày |
| Weekend (T7, CN) | 6 ngày |
| Ngày lễ | 2 ngày (Noel, Tết DL) |
| **Tổng** | **21 ngày** |

---

## 4. TÍNH TOÁN BUDGET (BAC/PV)

### 4.1 Budget dự kiến (không OT)
```
Budget chuẩn = Số người × Số ngày × Giờ/ngày × Đơn giá trung bình
             = 6 × 21 × 4 × 6.33
             = 3,190.32 USD
```

**BAC (Budget at Completion) = 3,190 USD**

---

## 5. PHÂN TÍCH OT (OVERTIME)

### 5.1 Yêu cầu OT đã được Leader chấp nhận

| Ngày | Thứ | Lý do OT | Giờ OT/người | Người OT | Tổng giờ OT |
|------|-----|----------|--------------|----------|-------------|
| 21/12 | T7 | Database design hoàn thành | 2 | G.Khánh, Trung, C.Khánh | 6 |
| 22/12 | CN | API development | 2 | G.Khánh, Trung | 4 |
| 25/12 | Lễ | Home page hoàn thành | 1 | C.Khánh, Hiếu | 2 |
| 27/12 | T6 | Booking Calendar phức tạp | 2 | C.Khánh, Huy | 4 |
| 28/12 | T7 | Sprint 1 Testing | 3 | Hiếu, C.Khánh, G.Khánh | 9 |
| 29/12 | CN | Sprint 1 Review prep | 2 | Hiếu, G.Khánh, Trung, C.Khánh, Huy | 10 |
| 04/01 | T7 | Services & Tours pages | 2 | C.Khánh, Trung | 4 |
| 05/01 | CN | Integration testing | 3 | Hiếu, Huy, G.Khánh | 9 |
| 07/01 | T2 | Bug fixes trước deadline | 2 | C.Khánh, G.Khánh, Huy, Hiếu | 8 |

> **Chú thích tên viết tắt:**
> - G.Khánh = Đặng Gia Khánh (Backend Lead)
> - C.Khánh = Phạm Công Khánh (Frontend Lead)
> - Trung = Nguyễn Thành Trung (Backend Dev)
> - Hiếu = Nguyễn Xuân Hiếu (SM/Tester)
> - Huy = Bùi Trần Hoàng Huy (Frontend Dev)
> - Dũng = Nguyễn Hoàng Dũng (PO)

### 5.2 Tổng hợp OT

| Loại ngày OT | Tổng giờ OT | Đơn giá (USD) | Chi phí OT (USD) |
|--------------|-------------|---------------|------------------|
| Ngày thường | 12 giờ | 7 | **84** |
| Weekend/Lễ | 44 giờ | 10 | **440** |
| **Tổng chi phí OT** | **56 giờ** | - | **524 USD** |

---

## 6. TÍNH ACTUAL COST (AC)

### 6.1 Chi phí thường (Standard Cost)
```
Standard Cost = 6 người × 20 ngày làm việc × 4 giờ × 6.33 USD
              = 3,038.40 USD

(Lưu ý: 01/01 nghỉ lễ nên chỉ có 20 ngày làm việc thực tế)
```

### 6.2 Chi phí OT
```
OT Cost = 524 USD (đã tính ở trên)
```

### 6.3 Tổng Actual Cost
```
AC = Standard Cost + OT Cost
   = 3,038.40 + 524
   = 3,562.40 USD
```

**AC (Actual Cost) = 3,562 USD**

---

## 7. TÍNH EARNED VALUE (EV)

### 7.1 % Hoàn thành công việc

| Deliverable | % Kế hoạch | % Hoàn thành thực tế |
|-------------|------------|---------------------|
| Frontend (21 components) | 40% | 40% ✅ |
| Backend (5 controllers, 13 entities) | 25% | 25% ✅ |
| Testing (23 test cases) | 15% | 15% ✅ |
| Documentation (26 files) | 15% | 15% ✅ |
| Integration & DevOps | 5% | 5% ✅ |
| **Tổng** | **100%** | **100%** ✅ |

### 7.2 Tính EV
```
EV = BAC × % Complete
   = 3,190 × 100%
   = 3,190 USD
```

**EV (Earned Value) = 3,190 USD**

---

## 8. TÍNH CPI (Cost Performance Index)

### 8.1 Công thức
```
CPI = EV / AC
    = 3,190 / 3,562
    = 0.90
```

### 8.2 Kết quả

| Chỉ số | Giá trị | Đánh giá |
|--------|---------|----------|
| **CPI** | **0.90** | ⚠️ Vượt ngân sách 10% |
| EV | 3,190 USD | 100% hoàn thành |
| AC | 3,562 USD | Chi phí thực tế |
| BAC | 3,190 USD | Ngân sách dự kiến |

### 8.3 Cost Variance (CV)
```
CV = EV - AC
   = 3,190 - 3,562
   = -372 USD
```

**CV = -372 USD** (Vượt ngân sách 372 USD)

---

## 9. PHÂN TÍCH KẾT QUẢ

### 9.1 Giải thích CPI < 1

| Nguyên nhân | Mô tả | Chi phí phát sinh |
|-------------|-------|-------------------|
| **Booking Calendar phức tạp** | Calendar picker khó hơn dự kiến, cần OT | ~80 USD |
| **Weekend work** | Làm thêm T7/CN để kịp deadline | ~320 USD |
| **Sprint 1 Testing** | Test cases nhiều hơn dự kiến | ~60 USD |
| **Integration issues** | Cần thời gian debug API | ~50 USD |

### 9.2 Biện pháp đã áp dụng
1. ✅ Leader (Nguyễn Hoàng Dũng) đã approve tất cả OT request
2. ✅ Pair programming để tăng hiệu quả
3. ✅ Không thêm scope mới (avoid scope creep)
4. ✅ Delivery đúng hạn 100%

### 9.3 Lessons Learned
- Calendar UI components cần estimate cao hơn 50%
- Nên factor in buffer cho weekend work
- OT weekend có chi phí cao (10 USD/h), nên hoàn thành trong ngày thường

---

## 10. KẾT LUẬN

| Metric | Giá trị | Status |
|--------|---------|--------|
| **CPI** | 0.90 | ⚠️ Slightly over budget |
| **SPI** | 1.00 | ✅ On schedule |
| **Delivery** | 100% | ✅ Complete |
| **Quality** | 23/23 test pass | ✅ High quality |

> **Kết luận:** Dự án hoàn thành đúng tiến độ và chất lượng tốt, tuy nhiên vượt ngân sách 10% do phải OT vào cuối tuần để đảm bảo deadline. Chi phí OT chiếm 14.7% tổng chi phí (524/3,562).

---

*Báo cáo được tạo ngày: 08/01/2026*
*Người lập: Nguyễn Xuân Hiếu (Scrum Master)*
