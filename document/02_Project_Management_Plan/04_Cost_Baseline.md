# COST BASELINE
## The Wandering Rose - Villa Booking System

---

## 1. BUDGET BREAKDOWN

### 1.1 Chi phí nhân công (Labo Contract Model)

| Thành viên | MSSV | Vai trò | Số ngày | Đơn giá/ngày | Thành tiền |
|------------|------|---------|---------|--------------|------------|
| Nguyễn Hoàng Dũng | 225051926 | Product Owner / PM | 21 | 600,000 | 12,600,000 |
| Nguyễn Xuân Hiếu | 225053504 | Scrum Master / BA | 21 | 550,000 | 11,550,000 |
| Đặng Gia Khánh | 225053665 | Backend Lead | 21 | 500,000 | 10,500,000 |
| Nguyễn Thành Trung | 225051404 | Backend Dev | 21 | 500,000 | 10,500,000 |
| Phạm Công Khánh | 225053787 | Frontend Lead | 21 | 500,000 | 10,500,000 |
| Bùi Trần Hoàng Huy | 225050604 | Frontend Dev / Tester | 21 | 400,000 | 8,400,000 |
| | | **Subtotal** | | | **64,050,000** |

### 1.2 Chi phí công cụ

| Công cụ | Mục đích | Chi phí |
|---------|----------|---------|
| Trello | Project Management | Free |
| GitHub | Source Control | Free |
| Figma | Design | Free (Education) |
| VS Code | IDE | Free |
| Docker | Containerization | Free |
| | **Subtotal** | **0 VND** |

### 1.3 Chi phí hạ tầng

| Hạng mục | Chi phí |
|----------|---------|
| Local Development | 0 VND |
| Cloud Hosting | 0 VND (chưa deploy) |
| **Subtotal** | **0 VND** |

---

## 2. TỔNG NGÂN SÁCH

| Hạng mục | Chi phí | % |
|----------|---------|---|
| Nhân công | 64,050,000 | 90% |
| Công cụ | 0 | 0% |
| Hạ tầng | 0 | 0% |
| **Dự phòng (10%)** | 6,405,000 | 10% |
| **TỔNG CỘNG** | **70,455,000 VND** | 100% |

---

## 3. EARNED VALUE BASELINE

### Sprint 1 (19/12 - 29/12)

| Tuần | Ngày | PV Cumulative | % Complete |
|------|------|---------------|------------|
| W1 | 19-25/12 | 22,698,000 | 33% |
| W2 | 26-29/12 | 36,636,600 | 52% |

### Sprint 2 (30/12 - 08/01)

| Tuần | Ngày | PV Cumulative | % Complete |
|------|------|---------------|------------|
| W3 | 30/12-05/01 | 55,409,400 | 79% |
| W4 | 06-08/01 | 70,455,000 | 100% |

---

## 4. EVM TÍNH TOÁN TẠI MILESTONE 1 (29/12/2025)

### Giả định:
- **PV (Planned Value):** 36,636,600 VND (52% × 70,455,000)
- **EV (Earned Value):** 35,227,500 VND (50% hoàn thành thực tế)
- **AC (Actual Cost):** 35,000,000 VND

### Tính toán:
```
SPI = EV / PV = 35,227,500 / 36,636,600 = 0.96
CPI = EV / AC = 35,227,500 / 35,000,000 = 1.01

SV = EV - PV = 35,227,500 - 36,636,600 = -1,409,100 (trễ nhẹ)
CV = EV - AC = 35,227,500 - 35,000,000 = +227,500 (tiết kiệm)
```

### Đánh giá:
| Metric | Value | Status |
|--------|-------|--------|
| SPI | 0.96 | ⚠️ Hơi trễ tiến độ |
| CPI | 1.01 | ✅ Đúng ngân sách |

### Kế hoạch khắc phục:
- Tăng effort Sprint 2 để bù lại
- Không thêm scope mới
- Ưu tiên critical features

---

## 5. BIỂU ĐỒ CHI PHÍ THEO THỜI GIAN

```
70M ─┬────────────────────────────────────────┐
     │                                    ████│ <- Final
60M ─┤                              ██████████│
     │                        ██████          │
50M ─┤                  ██████                │
     │            ██████                      │
40M ─┤      ██████   <- M1                    │
     │  ████                                  │
30M ─┤                                        │
     │                                        │
20M ─┤                                        │
     │                                        │
10M ─┤                                        │
     │                                        │
  0 ─┴────┬────┬────┬────┬────┬────┬────┬────┘
        19/12 22/12 25/12 29/12 02/01 05/01 08/01
```

---

*Phiên bản: 2.0 | Ngày cập nhật: 15/01/2026*
