# HUMAN RESOURCE MANAGEMENT PLAN
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Tài liệu này mô tả cách quản lý nguồn nhân lực dự án, bao gồm:
- Cấu trúc tổ chức
- Vai trò và trách nhiệm
- Phát triển năng lực team
- Quản lý hiệu suất

---

## 2. CẤU TRÚC TỔ CHỨC (ORG CHART)

```
                    ┌─────────────────┐
                    │   GIẢNG VIÊN    │
                    │   (Stakeholder) │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  PRODUCT OWNER  │
                    │       (A)       │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  SCRUM MASTER   │
                    │       (B)       │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼───────┐   ┌───────▼───────┐   ┌───────▼───────┐
│ FRONTEND DEV  │   │ BACKEND DEV   │   │   QA/TESTER   │
│     (C)       │   │   (D, E)      │   │     (F)       │
└───────────────┘   └───────────────┘   └───────────────┘
```

---

## 3. VAI TRÒ VÀ TRÁCH NHIỆM (RACI MATRIX)

### 3.1 Scrum Roles

| Thành viên | Vai trò | Trách nhiệm chính |
|------------|---------|-------------------|
| **A** | Product Owner | - Quản lý Product Backlog<br>- Ưu tiên features<br>- Accept/Reject deliverables |
| **B** | Scrum Master | - Điều phối Scrum events<br>- Loại bỏ blockers<br>- Coaching team |
| **C** | Frontend Developer | - Phát triển UI với React<br>- Responsive design<br>- UX implementation |
| **D** | Backend Developer | - Phát triển API .NET Core<br>- Business logic<br>- Database operations |
| **E** | Full-stack Developer | - Database design<br>- API integration<br>- DevOps (Docker) |
| **F** | QA / Tester | - Test planning<br>- Test execution<br>- Bug reporting |

### 3.2 RACI Matrix

| Hoạt động | A (PO) | B (SM) | C | D | E | F |
|-----------|:------:|:------:|:-:|:-:|:-:|:-:|
| Product Backlog | **R** | C | I | I | I | I |
| Sprint Planning | A | **R** | C | C | C | C |
| Daily Standup | I | **R** | C | C | C | C |
| Frontend Dev | A | I | **R** | C | C | I |
| Backend Dev | A | I | C | **R** | **R** | I |
| Testing | A | I | C | C | C | **R** |
| Sprint Review | **R** | C | C | C | C | C |
| Documentation | A | **R** | C | C | C | C |

> **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed

---

## 4. SKILL MATRIX

| Thành viên | React | .NET | SQL | Docker | Scrum | Testing |
|------------|:-----:|:----:|:---:|:------:|:-----:|:-------:|
| A | ⭐⭐ | ⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ |
| B | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| C | ⭐⭐⭐ | ⭐ | ⭐ | ⭐ | ⭐⭐ | ⭐⭐ |
| D | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ |
| E | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| F | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐ |

> ⭐ = Basic, ⭐⭐ = Intermediate, ⭐⭐⭐ = Advanced

---

## 5. RESOURCE CALENDAR

### Availability
| Thành viên | Available | Nghỉ lễ |
|------------|-----------|---------|
| A | 100% | 01/01/2026 |
| B | 100% | 01/01/2026 |
| C | 100% | 25/12, 01/01 |
| D | 100% | 01/01/2026 |
| E | 100% | 01/01/2026 |
| F | 100% | 01/01/2026 |

### Working Hours
- **Daily:** 4-6 giờ (dự án học thuật)
- **Total capacity:** 6 người × 21 ngày × 5h = 630 person-hours

---

## 6. PERFORMANCE MANAGEMENT

### 6.1 Đánh giá cá nhân
- **Sprint Velocity:** Số story points hoàn thành
- **Code Quality:** Review feedback
- **Collaboration:** Tham gia Daily Standup

### 6.2 Team Performance
| KPI | Target |
|-----|--------|
| Sprint Velocity | 35-40 points/sprint |
| Bug Rate | < 10% |
| Standup Attendance | 100% |
| Code Review Coverage | 100% |

---

## 7. CONFLICT RESOLUTION

### Escalation Path
1. **Level 1:** Team discussion
2. **Level 2:** Scrum Master mediation (B)
3. **Level 3:** Product Owner decision (A)

### Resolution Techniques
- Active listening
- Focus on issues, not people
- Win-win solutions
- Timebox discussions (max 15 min)

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
