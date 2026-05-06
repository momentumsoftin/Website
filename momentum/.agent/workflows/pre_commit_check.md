---
description: Mandatory checklist to run before committing any code to the repository.
---
# Pre-Commit Integrity Check

Before pushing any changes, perform this rigorous audit. If any check fails, **STOP**, fix the issue, and restart the check.

## 1. Traceability Audit (Logging)
*   [ ] **No Raw Logging:** Run `grep -r "console.log" src/`. Remove debugging logs before commit.

## 2. Performance & SEO 
*   [ ] **SEO Optimization:** Do new pages have proper `h1` tags, meta tags, and structure?
*   [ ] **Image Optimization:** Are images sized properly to maintain Lighthouse scores ≥ 90?

## 3. Documentation Audit (Mandatory)
*   [ ] **Knowledge Sync:** Did you add a new page or major component? If YES, you MUST update `KNOWLEDGE.md` at the repository root.
*   [ ] **Protocol Sync:** Check if the changes made require an update to any existing protocol document in `docs/protocols/` (e.g., adding a DB column, API endpoint, or UI component). If YES, you MUST update the corresponding blueprint document before committing.

---
**Verification Command (Example):**
// turbo
grep -r "console.log" src/
