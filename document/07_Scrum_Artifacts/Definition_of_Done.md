# DEFINITION OF DONE (DoD)
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Definition of Done định nghĩa tiêu chí để xác định một User Story hoặc Task được coi là **HOÀN THÀNH**.

---

## 2. DoD CHO USER STORY

Một User Story được coi là **Done** khi đáp ứng TẤT CẢ các tiêu chí sau:

### Code Quality
- [ ] Code được viết theo coding conventions
- [ ] Không có syntax errors hoặc warnings
- [ ] Code đã được format đúng
- [ ] Không có TODO/FIXME còn lại

### Code Review
- [ ] Pull Request được tạo
- [ ] Ít nhất 1 reviewer approve
- [ ] Feedback được address
- [ ] Merged vào develop branch

### Testing
- [ ] Unit test pass (nếu applicable)
- [ ] Feature tested manually
- [ ] No critical/high bugs
- [ ] Edge cases được test

### Functionality
- [ ] Feature hoạt động đúng Acceptance Criteria
- [ ] Responsive trên mobile/desktop
- [ ] Không break features khác

### Documentation
- [ ] Code comments cho logic phức tạp
- [ ] API documentation (nếu applicable)

---

## 3. DoD CHO SPRINT

Sprint được coi là **Done** khi:

- [ ] Tất cả committed User Stories đạt DoD
- [ ] Sprint Burndown updated
- [ ] Sprint Review conducted
- [ ] Sprint Retrospective conducted
- [ ] Product Backlog được groom

---

## 4. DoD CHO RELEASE

Release được coi là **Done** khi:

- [ ] Tất cả Sprint trong release Done
- [ ] Integration tests pass
- [ ] No critical bugs open
- [ ] Documentation complete
- [ ] Demo ready

---

## 5. CHECKLIST TEMPLATE

```markdown
## DoD Checklist for [User Story ID]

### Code
- [ ] Conventions followed
- [ ] No errors/warnings
- [ ] Properly formatted

### Review
- [ ] PR created
- [ ] Approved by reviewer
- [ ] Merged to develop

### Testing  
- [ ] Manual testing passed
- [ ] No critical bugs

### Functionality
- [ ] Acceptance Criteria met
- [ ] Responsive design OK

### Status: ⬜ Not Done / ✅ Done
```

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
