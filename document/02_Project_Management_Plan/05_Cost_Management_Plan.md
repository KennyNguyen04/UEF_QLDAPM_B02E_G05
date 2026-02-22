# COST MANAGEMENT PLAN
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Tài liệu này mô tả cách quản lý chi phí dự án, bao gồm:
- Phương pháp ước tính chi phí
- Cách lập ngân sách
- Cách kiểm soát chi phí
- Báo cáo chi phí

---

## 2. PHƯƠNG PHÁP ƯỚC TÍNH CHI PHÍ

### Mô hình: Labo Contract Model

Công thức tính chi phí nhân công:
```
Budget = Unit Cost × Effort (person-days)
```

### Đơn giá tham khảo (giả định cho học thuật)
| Vai trò | Đơn giá/ngày |
|---------|--------------|
| Product Owner | 600,000 VND |
| Scrum Master | 550,000 VND |
| Senior Developer | 500,000 VND |
| Developer | 450,000 VND |
| Tester | 400,000 VND |

---

## 3. COST BASELINE

Xem chi tiết: `04_Cost_Baseline.md`

### Summary
| Hạng mục | Chi phí |
|----------|---------|
| Nhân công | 63,000,000 VND |
| Công cụ | 0 VND (miễn phí) |
| Dự phòng (10%) | 6,300,000 VND |
| **Tổng cộng** | **69,300,000 VND** |

---

## 4. EARNED VALUE MANAGEMENT (EVM)

### Công thức
| Metric | Công thức | Ý nghĩa |
|--------|-----------|---------|
| **PV** (Planned Value) | Budget × % Planned | Giá trị kế hoạch |
| **EV** (Earned Value) | Budget × % Complete | Giá trị thu được |
| **AC** (Actual Cost) | Actual spent | Chi phí thực tế |
| **SPI** | EV / PV | Schedule Performance |
| **CPI** | EV / AC | Cost Performance |

### Thời điểm đo
| Milestone | Ngày | % Planned |
|-----------|------|-----------|
| Sprint 1 Review | 29/12/2025 | 52% |
| Final Delivery | 08/01/2026 | 100% |

---

## 5. COST CONTROL

### 5.1 Ngưỡng cảnh báo
| Variance | Action |
|----------|--------|
| ±5% | Monitor |
| ±10% | Analyze root cause |
| ±15% | Escalate to PO |

### 5.2 Change Control
- Mọi thay đổi ảnh hưởng cost phải qua Change Request
- PO phải approve changes > 5% budget

---

## 6. REPORTING

### Format báo cáo chi phí
- **Frequency:** Cuối mỗi Sprint
- **Content:** PV, EV, AC, SPI, CPI, Variance
- **Audience:** Product Owner, Scrum Master

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
