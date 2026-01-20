# SPRINT 1 BACKLOG
## The Wandering Rose - Villa Booking System
### Sprint 1: 19/12/2025 - 25/12/2025 (Backend & Database Setup)

---

## 1. SPRINT GOAL

> Xây dựng nền tảng Backend: Database, Entity Models, Seeder và React Hooks

---

## 2. SPRINT METRICS

| Metric | Planned | Actual |
|--------|---------|--------|
| Duration | 7 days | 7 days |
| Story Points | 25 | 25 |
| Velocity | - | 25 |
| Completion | 100% | 100% |

---

## 3. SPRINT BACKLOG

| ID | Task | Story | Assignee | Est (h) | Status |
|----|------|-------|----------|---------|--------|
| T-001 | Analyze React/Vite project structure | US-001 | Nguyễn Hoàng Dũng | 4 | ✅ Done |
| T-002 | Identify components and data models | US-001 | Nguyễn Hoàng Dũng | 2 | ✅ Done |
| T-003 | Create implementation plan document | US-002 | Nguyễn Hoàng Dũng | 3 | ✅ Done |
| T-004 | Define User entity model | US-003 | Đặng Gia Khánh | 2 | ✅ Done |
| T-005 | Define Villa entity model | US-003 | Đặng Gia Khánh | 2 | ✅ Done |
| T-006 | Define Room entity model | US-003 | Đặng Gia Khánh | 2 | ✅ Done |
| T-007 | Define Booking entity model | US-003 | Đặng Gia Khánh | 2 | ✅ Done |
| T-008 | Define remaining 9 entity models | US-003 | Đặng Gia Khánh | 4 | ✅ Done |
| T-009 | Configure DbContext | US-004 | Đặng Gia Khánh | 2 | ✅ Done |
| T-010 | Configure SQL Server connection | US-004 | Đặng Gia Khánh | 2 | ✅ Done |
| T-011 | Generate EF migration | US-005 | Đặng Gia Khánh | 2 | ✅ Done |
| T-012 | Create tables via migration | US-005 | Đặng Gia Khánh | 1 | ✅ Done |
| T-013 | Create database seeder class | US-006 | Đặng Gia Khánh | 3 | ✅ Done |
| T-014 | Seed initial data from constants.ts | US-007 | Nguyễn Thành Trung | 4 | ✅ Done |
| T-015 | Implement data validation | US-007 | Nguyễn Thành Trung | 2 | ✅ Done |
| T-016 | Phân tích Figma design | US-008 | Phạm Công Khánh | 3 | ✅ Done |
| T-017 | Export assets từ Figma | US-008 | Phạm Công Khánh | 2 | ✅ Done |
| T-018 | Create useApi.ts React hooks | US-009 | Bùi Trần Hoàng Huy | 3 | ✅ Done |
| T-019 | Test API hooks | US-009 | Bùi Trần Hoàng Huy | 1 | ✅ Done |

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
    0 ├───┬───┬───┬───┬───┬───┬───┘
      19  20  21  22  23  24  25
                  Days (December)
```

---

## 5. DAILY PROGRESS

| Day | Tasks Done | Points | Notes |
|-----|------------|--------|-------|
| 19/12 | T-001, T-002, T-003 | 4 | Sprint start - Analysis |
| 20/12 | T-004, T-005, T-006, T-007 | 4 | Entity models - Đặng Gia Khánh |
| 21/12 | T-008, T-009 | 3 | Remaining models + DbContext |
| 22/12 | T-010, T-011, T-012 | 3 | SQL Server + Migration |
| 23/12 | T-013, T-014 | 4 | Seeder - Nguyễn Thành Trung |
| 24/12 | T-015, T-016, T-017 | 4 | Validation + Figma - Phạm Công Khánh |
| 25/12 | T-018, T-019 | 3 | Hooks done - Bùi Trần Hoàng Huy (Xmas) |

---

## 6. SPRINT REVIEW NOTES

### What was delivered:
- ✅ 13 Entity Framework models defined
- ✅ Database configured with SQL Server
- ✅ EF Migration generated and applied
- ✅ Database seeder with initial data
- ✅ Figma assets exported
- ✅ useApi.ts React hooks created

### Demo feedback:
- "Database structure looks solid" - Nguyễn Hoàng Dũng
- "Ready for API development" - Team consensus

### Team contributions:
| Member | Tasks | Points |
|--------|-------|--------|
| Nguyễn Hoàng Dũng (PO) | T-001, T-002, T-003 | 6 |
| Đặng Gia Khánh (BE Lead) | T-004 to T-013 | 11 |
| Nguyễn Thành Trung (BE) | T-014, T-015 | 4 |
| Phạm Công Khánh (FE Lead) | T-016, T-017 | 3 |
| Bùi Trần Hoàng Huy (FE) | T-018, T-019 | 3 |
| Nguyễn Xuân Hiếu (SM) | Facilitation | - |

---

*Phiên bản: 3.0 | Ngày cập nhật: 15/01/2026*
