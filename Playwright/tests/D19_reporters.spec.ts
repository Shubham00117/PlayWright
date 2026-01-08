// ===============================
// Playwright Inbuilt Reporters
// ===============================
/*
reporter: [

  // 1️⃣ HTML Report
  // Generates a detailed, interactive HTML report
  // View using: npx playwright show-report
  ['html'],

  // 2️⃣ List Report
  // Shows test execution details in terminal
  ['list'],

  // 3️⃣ Dot Report
  // Prints one dot per test (minimal output)
  // ['dot'],

  // 4️⃣ Line Report
  // Updates test status in a single console line
  // ['line'],

  // 5️⃣ JSON Report
  // Useful for custom reporting or integrations
  // ['json', { outputFile: 'test-results/report.json' }],

  // 6️⃣ JUnit (XML) Report
  // Commonly used in CI/CD tools like Jenkins
  ['junit', { outputFile: 'test-results/junit-report.xml' }],

  // 7️⃣ GitHub Actions Report
  // Enhances logs when running inside GitHub Actions
  // ['github'],

  // 8️⃣ Blob Report
  // Used for merging reports from parallel runs
  // ['blob'],

],
*/

/**
 * ================================
 * Allure Report Setup – Playwright
 * ================================
 *
 * 1) Install dependencies (one time):
 *    npm install -D allure-playwright
 *    brew install allure
 *
 * 2) Configure reporter in playwright.config.ts:
 *    reporter: [
 *      ['html'],
 *      ['allure-playwright'],
 *    ]
 *
 * 3) Run tests:
 *    npx playwright test
 *
 *    → Generates raw results in:
 *      allure-results/
 *
 * 4) Generate Allure HTML report:
 *    allure generate allure-results --clean
 *
 *    → Creates:
 *      allure-report/
 *
 * 5) Open Allure report in browser:
 *    allure open allure-report
 *
 * Notes:
 * - Run `allure generate` after every execution
 * - Screenshots/videos auto-attach if enabled
 * - Industry-standard reporting used in CI/CD
 */
import { test, expect, Locator } from "@playwright/test"


test.beforeEach("Lunch url", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/")

});


test("Test 1 Verify Title", async ({ page }) => {

  expect(await page.title()).toContain("Demo Web Shop");

});

test("Test 2 Verify logo", async ({ page }) => {
  const logo: Locator = page.getByRole('img', { name: 'Tricentis Demo Web Shops' })

  await expect(logo).toBeVisible();

});

test("Test 3 Search Product", async ({ page }) => {

  await page.locator('#small-searchterms').fill("Laptop");

  await page.locator('input.button-1.search-box-button').click();

  const searchproduct = page.locator('a:has-text("14.1-inch Laptop")')
  expect(await searchproduct.innerText()).toContain("Laptop");

});
