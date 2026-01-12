# GANTT CHART REPORT
## The Wandering Rose - Villa Booking System

---

## 1. TỔNG QUAN TIẾN ĐỘ

| Thông tin | Chi tiết |
|-----------|----------|
| **Ngày bắt đầu** | 19/12/2025 |
| **Ngày kết thúc** | 08/01/2026 |
| **Tổng thời gian** | 21 ngày |
| **Số Sprint** | 2 |
| **Trạng thái** | ✅ Hoàn thành 100% |

---

## 2. GANTT CHART - TỔNG QUAN

```
TASK                          |Dec 19-25    |Dec 26-Jan 01|Jan 02-08    |
                              |S1 Week 1    |S1-S2 Trans  |S2 Week 2    |
──────────────────────────────┼─────────────┼─────────────┼─────────────┤
PROJECT MANAGEMENT            |             |             |             |
├─ Project Kickoff            |██           |             |             |
├─ Sprint 1 Planning          |██           |             |             |
├─ Daily Standups             |███████████████████████████████████████ |
├─ Sprint 1 Review            |             |██           |             |
├─ Sprint 2 Planning          |             |██           |             |
├─ Sprint 2 Review            |             |             |          ██ |
└─ Documentation              |             |             |      ██████ |
                              |             |             |             |
SPRINT 1 DEVELOPMENT          |             |             |             |
├─ Project Setup              |████         |             |             |
├─ Database Design            |  ██████     |             |             |
├─ API Setup                  |    ██████   |             |             |
├─ Home Page                  |    ██████   |             |             |
├─ Room Categories            |      ██████ |             |             |
├─ Room Detail                |        ████ |██           |             |
├─ Booking Calendar           |          ██ |████         |             |
└─ Sprint 1 Testing           |             |████         |             |
                              |             |             |             |
SPRINT 2 DEVELOPMENT          |             |             |             |
├─ Checkout Flow              |             |  ████       |██           |
├─ Payment View               |             |    🎄       |████         |
├─ Confirmation               |             |    🎄       |  ████       |
├─ Services Page              |             |    🎄       |    ████     |
├─ Tours Page                 |             |    🎄       |      ████   |
├─ Contact & FAQ              |             |    🎄       |        ████ |
├─ Integration Testing        |             |             |        ████ |
└─ Bug Fixes                  |             |             |          ██ |
──────────────────────────────┴─────────────┴─────────────┴─────────────┘
```

> 🎄 = Nghỉ Tết Dương lịch (01/01/2026)

---

## 3. MILESTONE 1 REPORT (29/12/2025)

### 3.1 Planned vs Actual

| Deliverable | Planned | Actual | Status |
|-------------|---------|--------|--------|
| Project Setup | 21/12 | 20/12 | ✅ Early |
| Database Design | 23/12 | 23/12 | ✅ On time |
| API Setup | 25/12 | 25/12 | ✅ On time |
| Home Page | 25/12 | 24/12 | ✅ Early |
| Room Categories | 27/12 | 27/12 | ✅ On time |
| Room Detail | 28/12 | 28/12 | ✅ On time |
| Booking Calendar | 29/12 | 29/12 | ✅ On time |

### 3.2 Sprint 1 Metrics

| Metric | Value |
|--------|-------|
| Planned Story Points | 40 |
| Completed Story Points | 38 |
| Velocity | 38 points |
| Completion Rate | 95% |

### 3.3 Earned Value at M1

| Metric | Value | Target |
|--------|-------|--------|
| PV | 36,636,600 | - |
| EV | 35,227,500 | ≥ PV |
| SPI | 0.96 | ≥ 1.0 |
| Status | ⚠️ Slightly behind | - |

### 3.4 Issues & Actions

| Issue | Impact | Action |
|-------|--------|--------|
| Booking Calendar phức tạp hơn dự kiến | 2 points debt | Carry to Sprint 2 |
| 01/01 nghỉ lễ | Lost 1 day | Increase effort other days |

---

## 4. FINAL MILESTONE REPORT (08/01/2026)

### 4.1 Final Delivery Status

| Deliverable | Status |
|-------------|--------|
| ✅ Frontend Complete | 21 components |
| ✅ Backend API | 5 controllers, 13 entities |
| ✅ Booking Flow | End-to-end working |
| ✅ Services & Tours | Form submission working |
| ✅ Docker Setup | docker-compose ready |
| ✅ Documentation | All artifacts complete |

### 4.2 Sprint 2 Metrics

| Metric | Value |
|--------|-------|
| Planned Story Points | 35 |
| Completed Story Points | 37 |
| Velocity | 37 points |
| Completion Rate | 106% |

### 4.3 Project Totals

| Metric | Sprint 1 | Sprint 2 | Total |
|--------|----------|----------|-------|
| Story Points | 38 | 37 | 75 |
| Bugs Found | 8 | 5 | 13 |
| Bugs Fixed | 8 | 5 | 13 |
| Test Cases | 12 | 11 | 23 |

### 4.4 Final EVM

| Metric | Value | Status |
|--------|-------|--------|
| PV | 70,455,000 | - |
| EV | 70,455,000 | 100% |
| AC | 69,500,000 | Under budget |
| SPI | 1.00 | ✅ On schedule |
| CPI | 1.01 | ✅ Under budget |

---

## 5. RECOVERY PLAN (Đã thực hiện)

### Vấn đề tại Milestone 1:
- SPI = 0.96 (trễ 4%)

### Giải pháp đã áp dụng:
1. ✅ Không thêm scope mới trong Sprint 2
2. ✅ Tăng pair programming cho tasks phức tạp
3. ✅ Giảm meeting time, focus vào development
4. ✅ Team members hỗ trợ cross-functional

### Kết quả:
- Final SPI = 1.00 ✅
- All features delivered on time ✅

---

## 6. LESSONS LEARNED

| Category | Lesson |
|----------|--------|
| **Estimation** | Calendar picker phức tạp hơn expected, cần buffer time |
| **Holiday** | Factor in holidays trong planning |
| **Teamwork** | Pair programming hiệu quả cho tasks khó |
| **Scope** | Keep features trong scope, không creep |

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
