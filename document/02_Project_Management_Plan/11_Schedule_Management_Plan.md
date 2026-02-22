# SCHEDULE MANAGEMENT PLAN
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Tài liệu này mô tả cách quản lý lịch trình dự án theo phương pháp Scrum, bao gồm:
- Cách lập kế hoạch Sprint
- Cách ước lượng công việc
- Cách theo dõi tiến độ
- Cách xử lý trễ deadline

---

## 2. PHƯƠNG PHÁP LẬP LỊCH

### 2.1 Sprint-based Scheduling
- **Số Sprint:** 2 Sprints
- **Độ dài Sprint:** 10-11 ngày mỗi sprint
- **Sprint Planning:** Đầu mỗi sprint
- **Daily Standup:** Hàng ngày, 15 phút
- **Sprint Review:** Cuối mỗi sprint

### 2.2 Ước lượng công việc
| Phương pháp | Áp dụng cho |
|-------------|-------------|
| Story Points | User Stories |
| T-shirt sizing (S, M, L, XL) | Tasks |
| Planning Poker | Sprint Planning sessions |

### 2.3 Thang Story Points
| Points | Mô tả | Ví dụ |
|--------|-------|-------|
| 1 | Rất đơn giản | Fix typo |
| 2 | Đơn giản | Thêm 1 field |
| 3 | Trung bình | Tạo component mới |
| 5 | Phức tạp | Tích hợp API |
| 8 | Rất phức tạp | Booking flow |
| 13 | Epic-level | Toàn bộ module |

---

## 3. SPRINT TIMELINE

### Sprint 1: 19/12/2025 - 29/12/2025 (11 ngày)
| Ngày | Hoạt động |
|------|-----------|
| 19/12 | Sprint Planning, Setup project |
| 20/12 | Development |
| 21/12 | Development |
| 22/12 | Development + Daily Standup |
| 23/12 | Development |
| 24/12 | Development |
| 25/12 | Development (nghỉ Noel - optional) |
| 26/12 | Development + Daily Standup |
| 27/12 | Development |
| 28/12 | Testing, Bug fixes |
| 29/12 | **Sprint Review + Retrospective** |

### Sprint 2: 30/12/2025 - 08/01/2026 (10 ngày)
| Ngày | Hoạt động |
|------|-----------|
| 30/12 | Sprint Planning |
| 31/12 | Development |
| 01/01 | Nghỉ Tết Dương lịch |
| 02/01 | Development + Daily Standup |
| 03/01 | Development |
| 04/01 | Development |
| 05/01 | Development + Daily Standup |
| 06/01 | Testing, Integration |
| 07/01 | Bug fixes, Documentation |
| 08/01 | **Sprint Review + Final Delivery** |

---

## 4. VELOCITY TRACKING

### Sprint Velocity Plan
| Sprint | Planned Story Points | Team Capacity |
|--------|---------------------|---------------|
| Sprint 1 | 40 points | 6 × 11 = 66 person-days |
| Sprint 2 | 35 points | 6 × 10 = 60 person-days |
| **Total** | **75 points** | **126 person-days** |

### Velocity Calculation
```
Velocity = Completed Story Points / Sprint Duration
Target Velocity = 35-40 points per sprint
```

---

## 5. THEO DÕI TIẾN ĐỘ

### 5.1 Công cụ
- **Trello:** Kanban board cho tasks
- **Burndown Chart:** Theo dõi points còn lại

### 5.2 Trello Board Columns
```
| Backlog | To Do | In Progress | Review | Done |
```

### 5.3 Daily Standup Format
Mỗi thành viên trả lời 3 câu hỏi:
1. Hôm qua làm gì?
2. Hôm nay sẽ làm gì?
3. Có blocker nào không?

---

## 6. XỬ LÝ TRỄN DEADLINE

### Quy trình Escalation
| Mức độ | Trigger | Hành động |
|--------|---------|-----------|
| **Level 1** | Task trễ 1 ngày | Scrum Master hỗ trợ |
| **Level 2** | Task trễ 2+ ngày | Re-assign hoặc pair programming |
| **Level 3** | Sprint at risk | Giảm scope, thông báo PO |

### Recovery Actions
1. **Scope reduction:** Giảm features không critical
2. **Resource reallocation:** Chuyển người hỗ trợ
3. **Overtime:** Chỉ khi cần thiết (không khuyến khích)

---

## 7. MILESTONES

| Milestone | Ngày | Deliverables | Acceptance |
|-----------|------|--------------|------------|
| M0: Kickoff | 19/12/2025 | Project setup, Charter | SM verify |
| M1: Sprint 1 | 29/12/2025 | Core booking flow | PO demo |
| M2: Final | 08/01/2026 | Complete system | GV review |

---

## 8. SCHEDULE BASELINE

Xem file: `10_Schedule_Baseline.md`

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
