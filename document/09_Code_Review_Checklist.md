# CODE REVIEW CHECKLIST
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Checklist để đảm bảo code quality trong quá trình review Pull Requests.

---

## 2. GENERAL CHECKLIST

### Code Style
- [ ] Naming conventions được tuân thủ (camelCase for variables, PascalCase for components)
- [ ] Indentation nhất quán (2 spaces)
- [ ] No unused imports
- [ ] No console.log() trong production code
- [ ] Comments giải thích logic phức tạp

### Functionality
- [ ] Code thực hiện đúng theo requirement
- [ ] Edge cases được handle
- [ ] Error handling đầy đủ
- [ ] No hardcoded values (sử dụng constants)

### Performance
- [ ] No unnecessary re-renders (React)
- [ ] Large lists có pagination/virtualization
- [ ] Images optimized
- [ ] No memory leaks

### Security
- [ ] No sensitive data in code
- [ ] Input validation
- [ ] No SQL injection risks
- [ ] CORS configured properly

---

## 3. FRONTEND SPECIFIC (React)

- [ ] Components có proper typing (TypeScript)
- [ ] Props destructured
- [ ] useEffect có cleanup khi cần
- [ ] Keys unique trong lists
- [ ] Conditional rendering đúng
- [ ] Responsive design checked

---

## 4. BACKEND SPECIFIC (.NET)

- [ ] Controllers thin, logic trong services
- [ ] DTOs cho request/response
- [ ] Async/await đúng cách
- [ ] Exception handling middleware
- [ ] Proper HTTP status codes

---

## 5. REVIEWER SIGNATURE

```
Reviewer: _______________
Date: ___/___/2025
Status: [ ] Approved  [ ] Request Changes
Comments: 
_______________________
_______________________
```

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
