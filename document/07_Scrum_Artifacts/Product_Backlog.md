# PRODUCT BACKLOG
## The Wandering Rose - Villa Booking System

---

## 1. BACKLOG OVERVIEW

| Metric | Value |
|--------|-------|
| **Total User Stories** | 24 |
| **Total Story Points** | 75 |
| **Sprint 1** | 25 points |
| **Sprint 2** | 25 points |
| **Sprint 3** | 25 points |

---

## 2. PRODUCT BACKLOG

### Sprint 1 Items - Backend & Database Setup (25 points)
*Thời gian: 19/12 - 25/12/2025 (7 ngày)*

| ID | User Story | Priority | Points | Assignee | Status |
|----|------------|----------|:------:|----------|--------|
| US-001 | **Analyze React/Vite Project**<br>As a Dev, I want to analyze existing project so that I understand the codebase | Must | 3 | Nguyễn Hoàng Dũng | ✅ Done |
| US-002 | **Create Implementation Plan**<br>As a PM, I want implementation plan so that team has direction | Must | 2 | Nguyễn Hoàng Dũng | ✅ Done |
| US-003 | **Define EF Models**<br>As a Dev, I want 13 Entity Framework models so that data is structured | Must | 5 | Đặng Gia Khánh | ✅ Done |
| US-004 | **Configure DbContext & SQL Server**<br>As a Dev, I want database configured so that data can be stored | Must | 3 | Đặng Gia Khánh | ✅ Done |
| US-005 | **Create EF Migration**<br>As a Dev, I want database tables created via migration | Must | 2 | Đặng Gia Khánh | ✅ Done |
| US-006 | **Create Database Seeder**<br>As a Dev, I want seeder so that initial data exists | Must | 3 | Đặng Gia Khánh | ✅ Done |
| US-007 | **Seed Data from constants.ts**<br>As a Dev, I want data seeded from frontend constants | Must | 2 | Nguyễn Thành Trung | ✅ Done |
| US-008 | **Analyze Figma & Export Assets**<br>As a Designer, I want assets exported so that UI matches design | Should | 3 | Phạm Công Khánh | ✅ Done |
| US-009 | **Create useApi.ts Hooks**<br>As a Dev, I want React hooks so that API calls are standardized | Must | 2 | Bùi Trần Hoàng Huy | ✅ Done |

### Sprint 2 Items - API Integration & Core UI (25 points)
*Thời gian: 26/12 - 31/12/2025 (6 ngày)*

| ID | User Story | Priority | Points | Assignee | Status |
|----|------------|----------|:------:|----------|--------|
| US-010 | **Add CORS for React Frontend**<br>As a Dev, I want CORS configured so that frontend can call API | Must | 2 | Nguyễn Thành Trung | ✅ Done |
| US-011 | **Add .env Configuration**<br>As a Dev, I want env config so that settings are manageable | Must | 1 | Nguyễn Hoàng Dũng | ✅ Done |
| US-012 | **Implement 9 Controllers**<br>As a Dev, I want API controllers so that data is accessible | Must | 8 | Đặng Gia Khánh, Nguyễn Thành Trung | ✅ Done |
| US-013 | **Create api.ts Service Layer**<br>As a Dev, I want service layer so that API calls are organized | Must | 3 | Bùi Trần Hoàng Huy | ✅ Done |
| US-014 | **Convert HomeView.tsx to API**<br>As a User, I want homepage to show real data | Must | 4 | Phạm Công Khánh | ✅ Done |
| US-015 | **Convert RoomCategories.tsx to API**<br>As a User, I want rooms from database | Must | 4 | Phạm Công Khánh | ✅ Done |
| US-016 | **Build Booking Calendar UI**<br>As a User, I want to select dates for booking | Must | 3 | Bùi Trần Hoàng Huy | ✅ Done |

### Sprint 3 Items - Deployment & Final Features (25 points)
*Thời gian: 02/01 - 08/01/2026 (7 ngày)*

| ID | User Story | Priority | Points | Assignee | Status |
|----|------------|----------|:------:|----------|--------|
| US-017 | **Deploy to Docker Production**<br>As a DevOps, I want app deployed so that it's accessible | Must | 5 | Nguyễn Hoàng Dũng | ✅ Done |
| US-018 | **Convert ContactUs.tsx to API**<br>As a User, I want contact form to submit data | Should | 3 | Bùi Trần Hoàng Huy | ✅ Done |
| US-019 | **Convert ServicesEvents.tsx to API**<br>As a User, I want services from database | Should | 3 | Phạm Công Khánh | ✅ Done |
| US-020 | **Convert FAQView.tsx to API**<br>As a User, I want FAQs from database | Could | 2 | Bùi Trần Hoàng Huy | ✅ Done |
| US-021 | **Convert ExperiencesTours.tsx to API**<br>As a User, I want tours from database | Should | 3 | Phạm Công Khánh | ✅ Done |
| US-022 | **Code Review**<br>As a Dev, I want code reviewed so that quality is ensured | Must | 2 | Nguyễn Hoàng Dũng | ✅ Done |
| US-023 | **Execute Final Testing**<br>As a Tester, I want full testing so that bugs are found | Must | 4 | Nguyễn Xuân Hiếu | ✅ Done |
| US-024 | **Write User Guide / Documentation**<br>As a User, I want documentation so that I can use the system | Must | 3 | Nguyễn Xuân Hiếu | ✅ Done |

---

## 3. VELOCITY CHART

```
Sprint 1:  █████████████████████████ 25 pts (Plan: 25) - Backend Focus
Sprint 2:  █████████████████████████ 25 pts (Plan: 25) - API Integration
Sprint 3:  █████████████████████████ 25 pts (Plan: 25) - Deployment & Final
           ─────────────────────────────────────────────────────────────────
                                                              Total: 75 pts
```

---

## 4. SPRINT GOALS

| Sprint | Goal | Key Deliverables |
|--------|------|------------------|
| **Sprint 1** | Backend foundation ready | Database, Models, Seeder, Hooks |
| **Sprint 2** | API integration complete | Controllers, CORS, Core pages connected |
| **Sprint 3** | Production deployment | Docker, Testing, Documentation, All pages |

---

*Phiên bản: 3.0 | Ngày cập nhật: 15/01/2026*
