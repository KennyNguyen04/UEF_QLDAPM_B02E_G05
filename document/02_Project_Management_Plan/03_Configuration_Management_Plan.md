# CONFIGURATION MANAGEMENT PLAN
## The Wandering Rose - Villa Booking System

---

## 1. MỤC ĐÍCH

Tài liệu này mô tả cách quản lý cấu hình dự án, bao gồm:
- Quản lý code source
- Quản lý versions
- Quản lý môi trường

---

## 2. VERSION CONTROL

### 2.1 Repository
- **Platform:** GitHub
- **Repository:** `the-wandering-rose`
- **Access:** Team members (read/write)

### 2.2 Branching Strategy

```
main (production)
  │
  ├── develop (integration)
  │     │
  │     ├── feature/booking-calendar
  │     ├── feature/room-detail
  │     └── feature/checkout-flow
  │
  └── release/v1.0
```

### 2.3 Branch Naming Convention
| Type | Format | Example |
|------|--------|---------|
| Feature | `feature/<name>` | `feature/booking-calendar` |
| Bug fix | `fix/<issue-id>` | `fix/123-api-error` |
| Release | `release/<version>` | `release/v1.0` |
| Hotfix | `hotfix/<name>` | `hotfix/critical-bug` |

---

## 3. COMMIT CONVENTIONS

### Format
```
<type>(<scope>): <description>

[optional body]
```

### Types
| Type | Mô tả |
|------|-------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting, missing semicolons |
| `refactor` | Code restructuring |
| `test` | Adding tests |
| `chore` | Maintenance |

### Examples
```
feat(booking): add calendar picker component
fix(api): resolve CORS error on booking endpoint
docs(readme): update installation instructions
```

---

## 4. CODE REVIEW PROCESS

1. Developer creates Pull Request
2. Assign reviewer (minimum 1)
3. Review checklist:
   - [ ] Code follows conventions
   - [ ] No obvious bugs
   - [ ] Tests pass
4. Approve and Merge

---

## 5. RELEASE MANAGEMENT

### Version Format: `v<major>.<minor>.<patch>`

| Version | Trigger |
|---------|---------|
| Major (1.0.0) | Breaking changes |
| Minor (0.1.0) | New features |
| Patch (0.0.1) | Bug fixes |

### Release Schedule
| Version | Date | Content |
|---------|------|---------|
| v0.1.0 | 29/12/2025 | Sprint 1 features |
| v1.0.0 | 08/01/2026 | Final release |

---

## 6. ENVIRONMENT CONFIGURATION

| Environment | Purpose | Branch |
|-------------|---------|--------|
| Development | Local development | feature/* |
| Staging | Integration testing | develop |
| Production | Final delivery | main |

### Environment Variables
```
# .env.local (không commit)
VITE_API_URL=http://localhost:5000/api
GEMINI_API_KEY=<key>
```

---

## 7. CONFIGURATION ITEMS

| Item | Location | Owner |
|------|----------|-------|
| Source Code | GitHub | Dev Team |
| Database Schema | `/backend/Migrations` | E |
| Docker Config | `docker-compose.yml` | E |
| API Specs | `/services/api.ts` | D |
| Environment Vars | `.env.local` | - |

---

*Phiên bản: 1.0 | Ngày tạo: 19/12/2025*
