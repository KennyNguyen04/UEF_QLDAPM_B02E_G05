# PRODUCT BACKLOG
## The Wandering Rose - Villa Booking System

---

## 1. BACKLOG OVERVIEW

| Metric | Value |
|--------|-------|
| **Total User Stories** | 20 |
| **Total Story Points** | 75 |
| **Sprint 1** | 40 points |
| **Sprint 2** | 35 points |

---

## 2. PRODUCT BACKLOG

### Sprint 1 Items (40 points)

| ID | User Story | Priority | Points | Status |
|----|------------|----------|:------:|--------|
| US-001 | **Project Setup**<br>As a Dev, I want project structure setup so that I can start coding | Must | 3 | ✅ Done |
| US-002 | **Database Design**<br>As a Dev, I want database schema designed so that I can store data | Must | 5 | ✅ Done |
| US-003 | **API Controllers Setup**<br>As a Dev, I want API endpoints ready so that frontend can call | Must | 5 | ✅ Done |
| US-004 | **Home Page**<br>As a User, I want to see homepage so that I understand the resort | Must | 5 | ✅ Done |
| US-005 | **Room Categories View**<br>As a User, I want to see room categories so that I can browse | Must | 5 | ✅ Done |
| US-006 | **Room Detail View**<br>As a User, I want to see room details so that I can decide | Must | 5 | ✅ Done |
| US-007 | **Zone Filter**<br>As a User, I want to filter by zone so that I can narrow options | Should | 3 | ✅ Done |
| US-008 | **Booking Calendar**<br>As a User, I want to select dates so that I can book | Must | 8 | ✅ Done |
| US-009 | **Sprint 1 Testing**<br>As a Tester, I want to test features so that quality is ensured | Must | 1 | ✅ Done |

### Sprint 2 Items (35 points)

| ID | User Story | Priority | Points | Status |
|----|------------|----------|:------:|--------|
| US-010 | **Booking Result View**<br>As a User, I want to see available rooms after search | Must | 5 | ✅ Done |
| US-011 | **Checkout Page**<br>As a User, I want to enter my info to complete booking | Must | 5 | ✅ Done |
| US-012 | **Payment View**<br>As a User, I want to see payment options | Must | 3 | ✅ Done |
| US-013 | **Booking Confirmation**<br>As a User, I want to see booking code after confirm | Must | 3 | ✅ Done |
| US-014 | **Services Page**<br>As a User, I want to see event services | Should | 5 | ✅ Done |
| US-015 | **Service Detail**<br>As a User, I want to see service details | Should | 3 | ✅ Done |
| US-016 | **Tours Page**<br>As a User, I want to see tours available | Should | 5 | ✅ Done |
| US-017 | **Tour Detail**<br>As a User, I want to see tour details | Should | 3 | ✅ Done |
| US-018 | **Contact Page**<br>As a User, I want to contact the resort | Should | 2 | ✅ Done |
| US-019 | **FAQ Page**<br>As a User, I want to see FAQs | Could | 1 | ✅ Done |
| US-020 | **Integration Testing**<br>As a Tester, I want to test full flow | Must | 3 | ✅ Done |

---

## 3. STORY DETAILS

### US-008: Booking Calendar (8 points)

**Description:**
```
As a User
I want to select check-in/out dates and guests
So that I can find available rooms
```

**Acceptance Criteria:**
- [x] Calendar modal opens on click
- [x] Can select check-in date
- [x] Can select check-out date
- [x] Validates check-out > check-in
- [x] Can select adults/children count
- [x] Shows number of nights
- [x] "Apply" triggers search

**Notes:** Phức tạp hơn dự kiến, cần 8 points thay vì 5.

---

### US-011: Checkout Page (5 points)

**Description:**
```
As a User
I want to enter my personal information
So that I can complete the booking
```

**Acceptance Criteria:**
- [x] Form fields: Name, Email, Phone
- [x] Input validation
- [x] Shows selected rooms summary
- [x] Shows total price
- [x] Confirm button proceeds to payment

---

## 4. VELOCITY CHART

```
Sprint 1:  ████████████████████████████████████████ 38 pts (Plan: 40)
Sprint 2:  █████████████████████████████████████ 37 pts (Plan: 35)
           ─────────────────────────────────────────────
                                              Total: 75 pts
```

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
