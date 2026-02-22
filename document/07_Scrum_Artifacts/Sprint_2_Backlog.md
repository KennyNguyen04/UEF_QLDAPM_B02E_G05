# SPRINT 2 BACKLOG
## The Wandering Rose - Villa Booking System
### Sprint 2: 26/12/2025 - 31/12/2025 (API Integration & Core UI)

---

## 1. SPRINT GOAL

> Hoàn thành API Integration: CORS, Controllers, Service Layer và kết nối Core Pages

---

## 2. SPRINT METRICS

| Metric | Planned | Actual |
|--------|---------|--------|
| Duration | 6 days | 6 days |
| Story Points | 25 | 25 |
| Velocity | - | 25 |
| Completion | 100% | 100% |

---

## 3. SPRINT BACKLOG

| ID | Task | Story | Assignee | Est (h) | Status |
|----|------|-------|----------|---------|--------|
| T-020 | Add CORS configuration | US-010 | Nguyễn Thành Trung | 2 | ✅ Done |
| T-021 | Test CORS with React | US-010 | Nguyễn Thành Trung | 1 | ✅ Done |
| T-022 | Add .env configuration | US-011 | Nguyễn Hoàng Dũng | 2 | ✅ Done |
| T-023 | Create RoomsController | US-012 | Đặng Gia Khánh | 3 | ✅ Done |
| T-024 | Create ZonesController | US-012 | Đặng Gia Khánh | 2 | ✅ Done |
| T-025 | Create BookingsController | US-012 | Đặng Gia Khánh | 4 | ✅ Done |
| T-026 | Create VillasController | US-012 | Nguyễn Thành Trung | 3 | ✅ Done |
| T-027 | Create ServicesController | US-012 | Nguyễn Thành Trung | 2 | ✅ Done |
| T-028 | Create ToursController | US-012 | Nguyễn Thành Trung | 2 | ✅ Done |
| T-029 | Create remaining 3 Controllers | US-012 | Đặng Gia Khánh | 3 | ✅ Done |
| T-030 | Create api.ts service layer | US-013 | Bùi Trần Hoàng Huy | 4 | ✅ Done |
| T-031 | Convert HomeView.tsx to use API | US-014 | Phạm Công Khánh | 4 | ✅ Done |
| T-032 | Convert Hero section to API | US-014 | Phạm Công Khánh | 2 | ✅ Done |
| T-033 | Convert RoomCategories.tsx to API | US-015 | Phạm Công Khánh | 4 | ✅ Done |
| T-034 | Convert RoomDetail.tsx to API | US-015 | Bùi Trần Hoàng Huy | 3 | ✅ Done |
| T-035 | Build Booking Calendar UI | US-016 | Bùi Trần Hoàng Huy | 4 | ✅ Done |
| T-036 | Implement date selection logic | US-016 | Bùi Trần Hoàng Huy | 2 | ✅ Done |

---

## 4. BURNDOWN CHART

```
Story Points
   25 │████
      │████████
   20 │████████████
      │████████████████
   15 │████████████████████
      │████████████████████████
   10 │████████████████████████████
      │████████████████████████████████
    5 │████████████████████████████████████
      │████████████████████████████████████████
    0 ├───┬───┬───┬───┬───┬───┘
      26  27  28  29  30  31
                  Days (December)
```

---

## 5. DAILY PROGRESS

| Day | Tasks Done | Points | Notes |
|-----|------------|--------|-------|
| 26/12 | T-020, T-021, T-022 | 3 | CORS + .env done |
| 27/12 | T-023, T-024, T-025 | 5 | Core Controllers - Đặng Gia Khánh |
| 28/12 | T-026, T-027, T-028, T-029 | 5 | Remaining Controllers |
| 29/12 | T-030, T-031 | 5 | Service layer + HomeView |
| 30/12 | T-032, T-033, T-034 | 5 | Pages converted to API |
| 31/12 | T-035, T-036 | 4 | Calendar UI done |

---

## 6. SPRINT REVIEW NOTES

### What was delivered:
- ✅ CORS configured for React frontend
- ✅ Environment configuration (.env)
- ✅ 9 API Controllers implemented
- ✅ api.ts service layer created
- ✅ HomeView.tsx connected to API
- ✅ RoomCategories.tsx connected to API
- ✅ Booking Calendar UI with date selection

### Demo feedback:
- "API integration works smoothly" - Nguyễn Hoàng Dũng
- "Calendar UI is intuitive" - Team consensus
- "Ready for remaining pages" - Phạm Công Khánh

### Team contributions:
| Member | Tasks | Points |
|--------|-------|--------|
| Nguyễn Hoàng Dũng (PO) | T-022 | 2 |
| Đặng Gia Khánh (BE Lead) | T-023, T-024, T-025, T-029 | 8 |
| Nguyễn Thành Trung (BE) | T-020, T-021, T-026, T-027, T-028 | 6 |
| Phạm Công Khánh (FE Lead) | T-031, T-032, T-033 | 6 |
| Bùi Trần Hoàng Huy (FE) | T-030, T-034, T-035, T-036 | 8 |
| Nguyễn Xuân Hiếu (SM) | Facilitation, Testing | - |

---

*Phiên bản: 3.0 | Ngày cập nhật: 15/01/2026*
