# Proposed Engineering Tasks

## 1) Typo Fix: Rename "Cookies Consent" label

**Problem**
The legal page title currently uses the phrase **"Cookies Consent"**, which is grammatically awkward and can reduce trust in legal copy quality.

**Scope**
- Update displayed label to one of:
  - `Cookie Consent` (recommended), or
  - `Cookies Policy` (if aligning to policy naming convention).
- Ensure language parity for EN/ES where applicable.

**Files to update**
- `scripts/app.js` (legal content model)

**Acceptance criteria**
- Legal navigation and rendered legal page display updated wording.
- No broken routes or references to prior title string.
- Manual check in both EN and ES contexts passes.

---

## 2) Bug Fix: Form checkbox values are not identifiable

**Problem**
Service checkboxes are rendered with `name="service"` but without unique `value` attributes, making submissions ambiguous and preventing reliable backend parsing.

**Scope**
- Add stable `value` for each service option.
- Add unique `id` and associated `<label for="...">` for better accessibility.
- Keep generated markup backward-compatible with current styles.

**Files to update**
- `scripts/pages/form.js`

**Acceptance criteria**
- Each checkbox submits a distinct semantic value.
- Markup validates for unique IDs in a rendered form.
- Keyboard/screen-reader label association works correctly.

---

## 3) Documentation/Behavior Discrepancy: Cookie preference claims vs implementation

**Problem**
Legal copy states visitors can save/accept/reject optional cookies, but current frontend behavior only persists language preference and has no cookie-consent controls.

**Scope (pick one path)**
1. **Implement** cookie-consent UI/state and preference storage (recommended), or
2. **Revise legal copy** to accurately reflect current capabilities.

**Files to update**
- `scripts/app.js` (legal text)
- `scripts/i18n.js` and/or new consent module if implementing behavior
- Relevant legal HTML pages if static copy is duplicated

**Acceptance criteria**
- Legal statements and actual functionality are aligned.
- If implementing behavior: consent states are persisted and enforce optional cookie behavior.
- If copy-only fix: no statements imply unavailable controls.

---

## 4) Test Improvement: Add regression tests for i18n/nav/form rendering

**Problem**
No automated tests currently cover DOM mutation behavior in language/nav sync or form option rendering, increasing regression risk.

**Scope**
- Add test framework (if absent) and baseline CI test command.
- Add tests for:
  - `syncNavWithFooter` de-duplication and Home insertion behavior.
  - `translateTextNodes` language toggle state and localStorage persistence.
  - `renderForm` service checkbox output structure (including values/ids after bug fix).

**Suggested tooling**
- `vitest` + `jsdom` (lightweight for current static JS architecture)

**Acceptance criteria**
- `npm test` (or equivalent) executes successfully in CI/local.
- Failing regression can be demonstrated by temporarily reverting one target behavior.
- Coverage includes at least one positive and one edge-case assertion per function group.
