# FUNCTION POINT ANALYSIS (EI, EO, EQ)
## The Wandering Rose - Villa Booking System

---

## 1. TỔNG QUAN

| Thông tin | Chi tiết |
|-----------|----------|
| **Phương pháp** | Function Point Analysis (FPA) |
| **Tiêu chuẩn** | IFPUG Counting Practices Manual |
| **Dự án** | The Wandering Rose - Villa Booking |
| **Ngày tính** | 08/01/2026 |

---

## 2. ĐỊNH NGHĨA

| Loại | Viết tắt | Định nghĩa |
|------|----------|------------|
| **External Input** | EI | Dữ liệu đầu vào từ người dùng (thêm, sửa, xóa) |
| **External Output** | EO | Dữ liệu đầu ra có xử lý logic phức tạp |
| **External Inquiry** | EQ | Truy vấn dữ liệu đơn giản (chỉ đọc) |
| **External Interface File** | EIF | Tham chiếu dữ liệu từ hệ thống ngoài |

---

## 3. BẢNG TÍNH UFP (Unadjusted Function Points)

### 3.1 Transaction Functions

| No | Function Component | Type | DET | FTR | Complexity | UFP |
|----|-------------------|------|-----|-----|------------|-----|
| 1 | View Home Page | EQ | 8 | 2 | Low | 3 |
| 2 | View Zone List | EQ | 5 | 1 | Low | 3 |
| 3 | View Zone Detail | EQ | 10 | 2 | Low | 3 |
| 4 | View Room List by Zone | EQ | 8 | 2 | Low | 3 |
| 5 | View Room Detail | EQ | 15 | 3 | Average | 4 |
| 6 | Search Available Rooms | EQ | 12 | 3 | Average | 4 |
| 7 | Select Booking Dates | EI | 6 | 1 | Low | 3 |
| 8 | Select Guest Count | EI | 4 | 1 | Low | 3 |
| 9 | Add Room to Booking | EI | 8 | 2 | Low | 3 |
| 10 | Fill Customer Info | EI | 10 | 1 | Low | 3 |
| 11 | Process Booking | EI | 12 | 3 | Average | 4 |
| 12 | Calculate Booking Price | EO | 10 | 3 | Average | 5 |
| 13 | Generate Booking Code | EO | 6 | 2 | Low | 4 |
| 14 | Display Booking Confirmation | EO | 12 | 2 | Average | 5 |
| 15 | View Services List | EQ | 6 | 1 | Low | 3 |
| 16 | View Service Detail | EQ | 10 | 2 | Low | 3 |
| 17 | Submit Service Request | EI | 8 | 2 | Low | 3 |
| 18 | View Tours List | EQ | 6 | 1 | Low | 3 |
| 19 | View Tour Detail | EQ | 10 | 2 | Low | 3 |
| 20 | Submit Tour Request | EI | 8 | 2 | Low | 3 |
| 21 | View FAQ List | EQ | 5 | 1 | Low | 3 |
| 22 | Toggle FAQ Answer | EI | 3 | 1 | Low | 3 |
| 23 | Submit Contact Form | EI | 7 | 1 | Low | 3 |
| 24 | View Gallery | EQ | 8 | 1 | Low | 3 |
| 25 | View About Us | EQ | 6 | 1 | Low | 3 |
| 26 | Payment Gateway Integration | EIF | 8 | 1 | Low | 7 |
| | **Sub-total UFP (Trans)** | | | | | **90** |

### 3.2 Chi tiết tính toán

#### Complexity Matrix - EI (External Input)
| DET/FTR | 1-4 | 5-15 | >15 |
|---------|-----|------|-----|
| 0-1 | Low | Low | Average |
| 2 | Low | Average | High |
| >2 | Average | High | High |

**UFP Values:** Low = 3, Average = 4, High = 6

#### Complexity Matrix - EO (External Output)
| DET/FTR | 1-5 | 6-19 | >19 |
|---------|-----|------|-----|
| 0-1 | Low | Low | Average |
| 2-3 | Low | Average | High |
| >3 | Average | High | High |

**UFP Values:** Low = 4, Average = 5, High = 7

#### Complexity Matrix - EQ (External Inquiry)
| DET/FTR | 1-5 | 6-19 | >19 |
|---------|-----|------|-----|
| 0-1 | Low | Low | Average |
| 2-3 | Low | Average | High |
| >3 | Average | High | High |

**UFP Values:** Low = 3, Average = 4, High = 6

#### Complexity Matrix - EIF (External Interface File)
| DET/RET | 1-19 | 20-50 | >50 |
|---------|------|-------|-----|
| 1 | Low | Low | Average |
| 2-5 | Low | Average | High |
| >5 | Average | High | High |

**UFP Values:** Low = 5, Average = 7, High = 10

---

## 4. THỐNG KÊ THEO LOẠI

| Type | Count | Total UFP |
|------|-------|-----------|
| EI (External Input) | 10 | 32 |
| EO (External Output) | 3 | 14 |
| EQ (External Inquiry) | 12 | 37 |
| EIF (External Interface) | 1 | 7 |
| **TOTAL** | **26** | **90** |

---

## 5. VALUE ADJUSTMENT FACTOR (VAF)

### 5.1 General System Characteristics (GSC)

| No | Characteristic | Score (0-5) | Giải thích |
|----|---------------|-------------|------------|
| 1 | Data Communications | 4 | REST API, JSON |
| 2 | Distributed Data Processing | 2 | Frontend-Backend separation |
| 3 | Performance | 3 | Response < 3s |
| 4 | Heavily Used Configuration | 2 | Docker deployment |
| 5 | Transaction Rate | 2 | Moderate traffic |
| 6 | Online Data Entry | 4 | Booking forms, Contact forms |
| 7 | End-User Efficiency | 4 | User-friendly UI |
| 8 | Online Update | 3 | Real-time availability |
| 9 | Complex Processing | 2 | Date/price calculations |
| 10 | Reusability | 3 | Component-based React |
| 11 | Installation Ease | 4 | Docker compose |
| 12 | Operational Ease | 3 | Simple deployment |
| 13 | Multiple Sites | 2 | Single deployment |
| 14 | Facilitate Change | 4 | Modular architecture |
| | **Total Degree of Influence (TDI)** | **42** | |

### 5.2 Tính VAF

```
VAF = 0.65 + (0.01 × TDI)
VAF = 0.65 + (0.01 × 42)
VAF = 0.65 + 0.42
VAF = 1.07
```

---

## 6. ADJUSTED FUNCTION POINTS (AFP)

```
AFP = UFP × VAF
AFP = 90 × 1.07
AFP = 96.3 ≈ 96 FP
```

---

## 7. ƯỚC TÍNH EFFORT

### 7.1 Productivity Rate
- **Assumed Productivity:** 10 FP/person-day (dự án học tập)

### 7.2 Estimated Effort
```
Effort = AFP / Productivity
Effort = 96 / 10
Effort = 9.6 person-days ≈ 10 person-days
```

### 7.3 Với team 6 người
```
Duration = Effort / Team Size
Duration = 10 / 6
Duration ≈ 1.7 ngày (lý thuyết)

Thực tế: 21 ngày (bao gồm learning, documentation, testing)
```

---

## 8. SO SÁNH VỚI THỰC TẾ

| Metric | Estimated | Actual | Variance |
|--------|-----------|--------|----------|
| Function Points | 96 FP | - | - |
| Effort (person-days) | 10 | 126 (6×21) | +116 |
| Duration (days) | 1.7 | 21 | +19.3 |

**Giải thích variance:**
- Dự án học tập: thêm thời gian research, learning
- Documentation: chiếm ~30% effort
- Testing: chiếm ~20% effort
- Meetings/Communication: ~10% effort

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
*Người lập: Nguyễn Xuân Hiếu (BA)*

