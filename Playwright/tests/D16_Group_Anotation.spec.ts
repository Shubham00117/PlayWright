import { test, expect } from "@playwright/test"

/*
Playwright Group Annotations (test.describe):

- describe.only   → runs only this test group
- describe.skip   → skips all tests inside the group
- describe.fail   → marks all tests as expected to fail
- describe.fixme  → skips entire group (known broken)
- describe.slow   → marks all tests in group as slow
*/

test.describe("Google Basic Tests", () => {

  test("Test1", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  })

  // test.only("Test2", async ({ page }) => {
  //   await page.goto("https://www.google.com/");
  //   await expect(page).toHaveTitle("Google");
  // })

  test.skip("Test3", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  })

  test.fail("Test4", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  })

  test("Test5", async ({ page, browserName }) => {
    // skip by condition
    test.skip(browserName === "chromium")
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  })

  test.fixme("Test6", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  })

  test("Test7", async ({ page }) => {
    test.slow()
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  })

})