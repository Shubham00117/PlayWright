import { test, expect, Page } from "@playwright/test"

//Run file specific browser
//  npx playwright test D16_paralleltesting.spec.ts --project firefox 
//  npx playwright test D16_paralleltesting.spec.ts --project chromium

//set number workers by command
// npx playwright test D16_paralleltesting.spec.ts --workers 2
// npx playwright test D16_paralleltesting.spec.ts --workers 5

test.describe("Group1", () => {

  test("Test1", async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log("Test 1")
    // await page.waitForTimeout(5000);
  })
  test("Test2", async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log("Test 2")
    // await page.waitForTimeout(5000);
  })
  test("Test3", async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log("Test 3")
    // await page.waitForTimeout(5000);
  })
  test("Test4", async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log("Test 4")

    // await page.waitForTimeout(5000);
  })


});
