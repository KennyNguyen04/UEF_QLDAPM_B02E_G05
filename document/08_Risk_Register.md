# RISK REGISTER
## The Wandering Rose - Villa Booking System

---

## 1. RISK SUMMARY

| Metric | Value |
|--------|-------|
| **Tổng số rủi ro** | 12 |
| **Critical** | 2 |
| **High** | 3 |
| **Medium** | 5 |
| **Low** | 2 |

---

## 2. RISK REGISTER TABLE

| ID | Rủi ro | Category | Prob | Impact | Score | Response | Owner | Status |
|----|--------|----------|:----:|:------:|:-----:|----------|-------|--------|
| R01 | **Timeline quá ngắn** (21 ngày) | Schedule | 3 | 3 | **9** | Mitigate: Ưu tiên MVP, không scope creep | SM (B) | ✅ Closed |
| R02 | **Integration frontend-backend fail** | Technical | 2 | 3 | **6** | Mitigate: API contract sớm, mock data | D, E | ✅ Closed |
| R03 | **Thiếu kinh nghiệm Scrum** | Resource | 2 | 2 | **4** | Mitigate: SM coaching, daily standup | SM (B) | ✅ Closed |
| R04 | **Yêu cầu thay đổi giữa chừng** | Scope | 2 | 2 | **4** | Accept: Change management process | PO (A) | ✅ Closed |
| R05 | **Calendar picker phức tạp** | Technical | 3 | 2 | **6** | Mitigate: Allocate thêm thời gian | C | ✅ Closed |
| R06 | **Team member nghỉ không báo** | Resource | 2 | 2 | **4** | Mitigate: Cross-training, pair programming | SM (B) | ⚪ Open |
| R07 | **Scope creep** | Scope | 2 | 2 | **4** | Avoid: No changes during Sprint | PO (A) | ✅ Closed |
| R08 | **Code quality kém** | Quality | 2 | 2 | **4** | Mitigate: Code review bắt buộc | All | ✅ Closed |
| R09 | **Testing không đủ** | Quality | 2 | 2 | **4** | Mitigate: 20+ test cases required | F | ✅ Closed |
| R10 | **Documentation thiếu** | Process | 2 | 1 | **2** | Accept: Allocate time cuối project | A, B | ✅ Closed |
| R11 | **Docker/deployment issues** | Technical | 2 | 1 | **2** | Mitigate: Test locally trước | E | ✅ Closed |
| R12 | **Nghỉ lễ 01/01** ảnh hưởng tiến độ | Schedule | 3 | 2 | **6** | Accept: Plan around holidays | SM (B) | ✅ Closed |

---

## 3. RISK DETAIL

### R01: Timeline quá ngắn
| Attribute | Value |
|-----------|-------|
| **Mô tả** | Dự án chỉ có 21 ngày, rất ngắn cho full-stack app |
| **Trigger** | Không hoàn thành Sprint commitments |
| **Impact** | Không delivery đúng hạn, điểm thấp |
| **Mitigation** | Focus MVP, không thêm features, tăng work hours nếu cần |
| **Status** | ✅ Closed - Delivered on time |

### R02: Integration Issues
| Attribute | Value |
|-----------|-------|
| **Mô tả** | Frontend và Backend không kết nối được |
| **Trigger** | API errors, CORS issues |
| **Impact** | App không hoạt động end-to-end |
| **Mitigation** | Define API contract sớm, mock controller cho dev |
| **Status** | ✅ Closed - Integration thành công |

### R05: Calendar Picker Phức Tạp
| Attribute | Value |
|-----------|-------|
| **Mô tả** | Custom calendar picker khó hơn dự kiến |
| **Trigger** | Complex date logic, UX requirements |
| **Impact** | Booking flow bị delay |
| **Mitigation** | Pair programming, extra 2 days buffer |
| **Status** | ✅ Closed - Completed with minor delay |

### R12: Nghỉ lễ 01/01
| Attribute | Value |
|-----------|-------|
| **Mô tả** | Mất 1 ngày do nghỉ Tết Dương lịch |
| **Trigger** | National holiday |
| **Impact** | Giảm capacity Sprint 2 |
| **Mitigation** | Factor in khi planning, tăng effort các ngày khác |
| **Status** | ✅ Closed - Compensated |

---

## 4. RISK TREND

```
Sprint 1 Start (19/12):  [========] 8 Open Risks
Sprint 1 End (29/12):    [====    ] 4 Open Risks  
Sprint 2 End (08/01):    [=       ] 1 Open Risk (R06 - không xảy ra)
```

---

## 5. LESSONS LEARNED

| Risk | Lesson |
|------|--------|
| R01 | Luôn có buffer time cho unexpected issues |
| R02 | API contract trước khi dev là quan trọng |
| R05 | UI components phức tạp cần estimate cao hơn |
| R12 | Factor holidays vào planning |

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
