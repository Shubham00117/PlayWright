# 🎭 Playwright — TypeScript Automation Training

A comprehensive **19-day training course** for **Playwright** with TypeScript — the modern, cross-browser automation framework by Microsoft. Covers locators, actions, assertions, debugging, parallel testing, and reporting.

---

## 📖 Overview

This repository contains hands-on Playwright test examples organized by training days. Each day introduces new automation concepts with practical TypeScript test files, building a complete web testing skill set.

---

## 📚 Topics Covered

| Day | Topics |
|-----|--------|
| **Day 1** | First Test — Page Title Verification |
| **Day 2** | Locators (Built-in Playwright locators) |
| **Day 3** | XPath Locators |
| **Day 4** | XPath Axes |
| **Day 5** | CSS Locators |
| **Day 6** | Actions (Click, Type, Clear) |
| **Day 7** | Dropdowns — Single, Multi-select, Sort, Contains, Duplicate |
| **Day 8** | Auto-suggested & Hidden Dropdowns |
| **Day 9** | Tables — Static Tables, Comparing Methods |
| **Day 10** | Dynamic Tables, Bootstrap Tables |
| **Day 11** | Date Pickers — Bootstrap & jQuery |
| **Day 12** | Dialogs (Alerts) & Frames |
| **Day 13** | Popups, Tabs, Browser Context, Authenticated Popups |
| **Day 14** | Assertions, Auto-Waiting, Timeouts, Codegen, Hard vs Soft Assertions |
| **Day 15** | Debugging — Screenshots, Tracing, Flaky Tests |
| **Day 16** | Hooks, Grouping, Tagging, Annotations |
| **Day 17** | Parallel Testing |
| **Day 18** | Parameterized Testing (5 approaches) |
| **Day 19** | Reporters (HTML, JSON, Custom) |

---

## 📂 Project Structure

```
PlayWright/
└── Playwright/
    ├── playwright.config.ts            # Playwright configuration
    ├── package.json
    ├── tests/                          # Test spec files
    │   ├── D1_title.spec.ts
    │   ├── D2_locators.spec.ts
    │   ├── ...
    │   └── D19_reporters.spec.ts
    └── node_modules/
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Playwright** | Browser automation framework |
| **TypeScript** | Test scripting language |
| **Playwright Test Runner** | Built-in test runner |
| **HTML Reporter** | Test reporting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm

### Installation
```bash
git clone https://github.com/Shubham00117/PlayWright.git
cd PlayWright/Playwright
npm install
npx playwright install
```

### Running Tests
```bash
# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run specific test
npx playwright test tests/D1_title.spec.ts

# Show report
npx playwright show-report
```

---

## 📜 License

This project is open source and available for educational purposes.
