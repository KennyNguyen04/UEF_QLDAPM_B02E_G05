# SCHEDULE BASELINE
## The Wandering Rose - Villa Booking System

---

## 1. GANTT CHART OVERVIEW

### Timeline: 19/12/2025 - 08/01/2026 (21 ngày)

```
Week 1 (19-25/12)    Week 2 (26/12-01/01)    Week 3 (02-08/01)
|----Sprint 1--------|-----------|--------Sprint 2----------|
     ████████████████████████        ███████████████████████
```

---

## 2. CHI TIẾT GANTT CHART

### SPRINT 1 (19/12 - 29/12/2025)

| Task | Người | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 |
|------|-------|----|----|----|----|----|----|----|----|----|----|:--:|
| **Sprint Planning** | All | ██ | | | | | | | | | | |
| **Project Setup** | C, E | ██ | ██ | | | | | | | | | |
| **Database Design** | E | | ██ | ██ | ██ | | | | | | | |
| **API Setup** | D, E | | | ██ | ██ | ██ | | | | | | |
| **Home Page** | C | | | ██ | ██ | ██ | | | | | | |
| **Room Categories** | C | | | | | ██ | ██ | ██ | | | | |
| **Room Detail** | C | | | | | | ██ | ██ | ██ | | | |
| **Booking Calendar** | C, D | | | | | | | ██ | ██ | ██ | | |
| **Testing Sprint 1** | F | | | | | | | | | ██ | ██ | |
| **Sprint Review** | All | | | | | | | | | | | ██ |

### SPRINT 2 (30/12 - 08/01/2026)

| Task | Người | 30 | 31 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 |
|------|-------|----|----|:--:|----|----|----|----|----|----|----|
| **Sprint Planning** | All | ██ | | | | | | | | | |
| **Checkout Flow** | C, D | ██ | ██ | 🎄 | ██ | | | | | | |
| **Payment View** | C | | | 🎄 | ██ | ██ | | | | | |
| **Confirmation** | C | | | 🎄 | | ██ | ██ | | | | |
| **Services Page** | C | | | 🎄 | | | ██ | ██ | | | |
| **Tours Page** | C | | | 🎄 | | | | ██ | ██ | | |
| **Contact & FAQ** | C, D | | | 🎄 | | | | | ██ | ██ | |
| **Integration Test** | F, E | | | 🎄 | | | | | ██ | ██ | |
| **Bug Fixes** | All | | | 🎄 | | | | | | ██ | ██ |
| **Documentation** | A, B | | | 🎄 | | | | | | ██ | ██ |
| **Final Review** | All | | | | | | | | | | ██ |

> 🎄 = Nghỉ Tết Dương lịch (01/01/2026)

---

## 3. MILESTONES

| # | Milestone | Ngày | Status |
|---|-----------|------|--------|
| M0 | Project Kickoff | 19/12/2025 | ✅ Completed |
| M1 | Sprint 1 Review | 29/12/2025 | ✅ Completed |
| M2 | Sprint 2 Review | 08/01/2026 | ✅ Completed |
| M3 | Final Delivery | 08/01/2026 | ✅ Completed |

---

## 4. CRITICAL PATH

```mermaid
graph LR
    A[Project Setup] --> B[Database Design]
    B --> C[API Setup]
    C --> D[Room Pages]
    D --> E[Booking Calendar]
    E --> F[Checkout Flow]
    F --> G[Payment/Confirm]
    G --> H[Testing]
    H --> I[Final Delivery]
```

**Đường găng (Critical Path):**
Setup → Database → API → Rooms → Booking → Checkout → Testing → Delivery

**Tổng thời gian:** 21 ngày (không có float time)

---

## 5. RESOURCE ALLOCATION

| Thành viên | Sprint 1 Focus | Sprint 2 Focus |
|------------|----------------|----------------|
| A (PO) | Backlog mgmt | Review, Docs |
| B (SM) | Process, Standup | Process, Docs |
| C (Dev) | Frontend core | Frontend remaining |
| D (Dev) | Backend API | Backend, Integration |
| E (Dev) | Database, API | Integration |
| F (Tester) | Test S1 features | Test S2, Final |

---

## 6. BUFFER TIME

| Loại | Thời gian |
|------|-----------|
| Sprint 1 Buffer | 1 ngày (28/12 - testing day) |
| Sprint 2 Buffer | 1 ngày (07/01 - bug fix day) |
| Total Buffer | 2 ngày (~10% of 21 days) |

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
