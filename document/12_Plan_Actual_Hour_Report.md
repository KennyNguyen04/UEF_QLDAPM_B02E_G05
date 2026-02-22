# PLAN / ACTUAL HOUR REPORT
## The Wandering Rose - Villa Booking System

---

## 1. TỔNG QUAN

| Thông tin | Chi tiết |
|-----------|----------|
| **Dự án** | The Wandering Rose - Villa Booking |
| **Thời gian** | 19/12/2025 - 08/01/2026 |
| **Team size** | 6 người |
| **Giờ làm/ngày** | 4 giờ/người |
| **Tổng ngày** | 21 ngày (nghỉ 01/01) |

---

## 2. PLAN / ACTUAL HOUR BY FUNCTION GROUP

| No | Function Group | Plan (Hrs) | Actual (Hrs) | Variance | Status |
|----|----------------|------------|--------------|----------|--------|
| 1 | Project Setup & Planning | 16 | 16 | 0 | ✅ Completed |
| 2 | Database Design & EF Models | 20 | 22 | +2 | ✅ Completed |
| 3 | Backend API - Rooms & Zones | 16 | 18 | +2 | ✅ Completed |
| 4 | Backend API - Booking | 20 | 24 | +4 | ✅ Completed |
| 5 | Backend API - Services & Tours | 12 | 12 | 0 | ✅ Completed |
| 6 | Backend API - Contact & FAQ | 8 | 8 | 0 | ✅ Completed |
| 7 | Frontend - Home & Navigation | 16 | 16 | 0 | ✅ Completed |
| 8 | Frontend - Room Categories & Detail | 20 | 22 | +2 | ✅ Completed |
| 9 | Frontend - Booking Calendar UI | 24 | 28 | +4 | ✅ Completed |
| 10 | Frontend - Checkout & Confirmation | 16 | 18 | +2 | ✅ Completed |
| 11 | Frontend - Services & Tours Pages | 12 | 12 | 0 | ✅ Completed |
| 12 | Frontend - Contact, FAQ, Gallery | 12 | 12 | 0 | ✅ Completed |
| 13 | API Integration | 20 | 22 | +2 | ✅ Completed |
| 14 | Docker Deployment | 12 | 14 | +2 | ✅ Completed |
| 15 | Testing & Bug Fixes | 20 | 24 | +4 | ✅ Completed |
| 16 | Documentation | 24 | 28 | +4 | ✅ Completed |
| 17 | Code Review | 12 | 14 | +2 | ✅ Completed |
| 18 | Meetings & Communication | 20 | 20 | 0 | ✅ Completed |
| | **TOTAL** | **300** | **330** | **+30** | ✅ |

---

## 3. PHÂN TÍCH VARIANCE

### 3.1 Tổng hợp

| Metric | Plan | Actual | Variance | % |
|--------|------|--------|----------|---|
| Total Hours | 300 | 330 | +30 | +10% |
| Person-Days (4h/day) | 75 | 82.5 | +7.5 | +10% |

### 3.2 Nguyên nhân Variance (+30 giờ)

| Function Group | Variance | Nguyên nhân |
|----------------|----------|-------------|
| Database Design | +2 | Learning EF Core migrations |
| Booking API | +4 | Complex date availability logic |
| Booking Calendar UI | +4 | Custom calendar picker phức tạp |
| Checkout & Confirmation | +2 | Price calculation logic |
| Room Categories | +2 | Image gallery optimization |
| API Integration | +2 | CORS configuration issues |
| Docker Deployment | +2 | Multi-container setup |
| Testing | +4 | Thêm regression testing |
| Documentation | +4 | Nhiều management plans hơn dự kiến |
| Code Review | +2 | Refactoring sau review |
| **Total Variance** | **+30** | |

---

## 4. PLAN / ACTUAL BY SPRINT

### Sprint 1: Backend & Database Setup (19-25/12)

| Function Group | Plan (Hrs) | Actual (Hrs) | Variance |
|----------------|------------|--------------|----------|
| Project Setup & Planning | 16 | 16 | 0 |
| Database Design & EF Models | 20 | 22 | +2 |
| Figma Analysis & Assets | 8 | 8 | 0 |
| useApi.ts Hooks | 6 | 6 | 0 |
| **Sprint 1 Total** | **50** | **52** | **+2** |

### Sprint 2: API Integration & Core UI (26-31/12)

| Function Group | Plan (Hrs) | Actual (Hrs) | Variance |
|----------------|------------|--------------|----------|
| Backend API - Rooms & Zones | 16 | 18 | +2 |
| Backend API - Booking | 20 | 24 | +4 |
| Frontend - Home & Navigation | 16 | 16 | 0 |
| Frontend - Booking Calendar UI | 24 | 28 | +4 |
| API Integration (partial) | 10 | 12 | +2 |
| **Sprint 2 Total** | **86** | **98** | **+12** |

### Sprint 3: Deployment & Final (02-08/01)

| Function Group | Plan (Hrs) | Actual (Hrs) | Variance |
|----------------|------------|--------------|----------|
| Backend API - Services, Tours, FAQ | 20 | 20 | 0 |
| Frontend - Remaining Pages | 28 | 30 | +2 |
| Docker Deployment | 12 | 14 | +2 |
| Testing & Bug Fixes | 20 | 24 | +4 |
| Documentation | 24 | 28 | +4 |
| Code Review | 12 | 14 | +2 |
| API Integration (remaining) | 10 | 10 | 0 |
| Meetings | 20 | 20 | 0 |
| **Sprint 3 Total** | **146** | **160** | **+14** |

---

## 5. PLAN / ACTUAL BY TEAM MEMBER

| No | Thành viên | Role | Plan (Hrs) | Actual (Hrs) | Variance |
|----|------------|------|------------|--------------|----------|
| 1 | Nguyễn Hoàng Dũng | PO / PM / Fullstack | 60 | 68 | +8 |
| 2 | Nguyễn Xuân Hiếu | SM / BA / Tester | 52 | 58 | +6 |
| 3 | Đặng Gia Khánh | Backend Lead | 52 | 58 | +6 |
| 4 | Nguyễn Thành Trung | Backend Dev | 44 | 46 | +2 |
| 5 | Phạm Công Khánh | Frontend Lead | 52 | 58 | +6 |
| 6 | Bùi Trần Hoàng Huy | Frontend Dev | 40 | 42 | +2 |
| | **TOTAL** | | **300** | **330** | **+30** |

---

## 6. BIỂU ĐỒ PLAN VS ACTUAL

```
Function Group                    Plan    Actual   Variance
──────────────────────────────────────────────────────────────
Project Setup & Planning      ████████████████ |           0
Database Design               ████████████████████ |██    +2
Backend API - Rooms           ████████████████ |██        +2
Backend API - Booking         ████████████████████ |████  +4
Backend API - Services        ████████████ |               0
Backend API - Contact/FAQ     ████████ |                   0
Frontend - Home               ████████████████ |           0
Frontend - Room Categories    ████████████████████ |██    +2
Frontend - Booking Calendar   ████████████████████████ |████ +4
Frontend - Checkout           ████████████████ |██        +2
Frontend - Services/Tours     ████████████ |               0
Frontend - Contact/FAQ/Gallery████████████ |               0
API Integration               ████████████████████ |██    +2
Docker Deployment             ████████████ |██            +2
Testing & Bug Fixes           ████████████████████ |████  +4
Documentation                 ████████████████████████ |████ +4
Code Review                   ████████████ |██            +2
Meetings                      ████████████████████ |       0
──────────────────────────────────────────────────────────────
TOTAL                         ████████ 300h ████████ 330h  +30
```

---

## 7. OVERTIME ANALYSIS

### 7.1 Giờ OT theo ngày

| Ngày | Loại | Giờ OT | Người tham gia |
|------|------|--------|----------------|
| 21/12 (T7) | Weekend | 6 | G.Khánh, Trung, C.Khánh |
| 22/12 (CN) | Weekend | 4 | G.Khánh, Trung |
| 25/12 (Lễ) | Holiday | 2 | C.Khánh, Hiếu |
| 27/12 (T6) | Weekday | 4 | C.Khánh, Huy |
| 28/12 (T7) | Weekend | 9 | Hiếu, C.Khánh, G.Khánh |
| 29/12 (CN) | Weekend | 10 | Hiếu, G.Khánh, Trung, C.Khánh, Huy |
| 04/01 (T7) | Weekend | 4 | C.Khánh, Trung |
| 05/01 (CN) | Weekend | 9 | Hiếu, Huy, G.Khánh |
| 07/01 (T2) | Weekday | 8 | C.Khánh, G.Khánh, Huy, Hiếu |
| **TOTAL** | | **56** | |

### 7.2 Phân loại OT

| Loại | Giờ OT | % |
|------|--------|---|
| Ngày thường (T2-T6) | 12 | 21% |
| Weekend (T7, CN) | 42 | 75% |
| Ngày lễ | 2 | 4% |
| **Total** | **56** | **100%** |

---

## 8. KẾT LUẬN

### 8.1 Performance Metrics

| Metric | Value | Đánh giá |
|--------|-------|----------|
| **Schedule Variance** | +30 giờ (+10%) | ⚠️ Vượt kế hoạch |
| **OT Rate** | 56/330 = 17% | ⚠️ Cao |
| **Completion Rate** | 100% | ✅ Hoàn thành |

### 8.2 Lessons Learned

| # | Lesson | Action |
|---|--------|--------|
| 1 | Calendar UI phức tạp hơn dự kiến | Estimate +50% cho custom UI components |
| 2 | Booking logic cần nhiều edge cases | Allocate buffer cho business logic |
| 3 | Documentation tốn nhiều thời gian | Plan documentation từ đầu sprint |
| 4 | Code review phát sinh refactoring | Thực hiện incremental review |

### 8.3 Recommendations

1. **Future projects:** Add 15-20% buffer for complex UI
2. **Documentation:** Parallel writing during development
3. **Testing:** Allocate at least 20% of total effort
4. **OT Management:** Limit weekend work to critical issues only

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
*Người lập: Nguyễn Hoàng Dũng (PM)*

