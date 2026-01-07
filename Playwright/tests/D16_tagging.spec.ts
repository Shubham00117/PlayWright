import { test, expect } from "@playwright/test"
/*1. Run all sanity tests:
npx playwright test D16_tagging.spec.ts --grep "@sanity"

2. Run all regression tests:
npx playwright test D16_tagging.spec.ts --grep "@regression"

3. Run tests which are belongs to both sanity & regression
npx playwright test D16_tagging.spec.ts --grep "(?=.*@sanity) (?=.*@regression)"
(?=. *@sanity)
(?=. *@regression)
(?=.*@sanity) (?=.*@regression)

4. Run tests belongs to either sanity or regressiont
npx playwright test D16_tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression
npx playwright test D16_tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
*/

//using @ anotatin in test title Approach 1
/*
test("@sanity Test", async ({ page }) => {

  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
})

test("@regression Test", async ({ page }) => {

  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
})

test("@sanity @regression Test", async ({ page }) => {

  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
})
*/
test("Test", { tag: '@sanity' }, async ({ page }) => {

  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
})

test("Test1", { tag: '@regression' }, async ({ page }) => {

  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
})

test("Test3", { tag: ['@sanity', '@regression'] }, async ({ page }) => {

  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
})
test("Test4", { tag: ['@sanity', '@smoky'] }, async ({ page }) => {

  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
})

