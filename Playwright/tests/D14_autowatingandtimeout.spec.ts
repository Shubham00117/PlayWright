import { test, expect } from "@playwright/test"

test("Verify wating,timeout,forcing", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  //explicit timeout
  // test.setTimeout(50000);//50sec
  test.slow();//3x timeout 90 sec

  //assertion
  //assertion auto wait works
  // max timeout 5 sec if not mentioned
  // Verify correct URL (auto-retry until matched or timeout)
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/", { timeout: 10000 });
  expect(page.getByAltText('Tricentis Demo Web Shop').isVisible({ timeout: 10000 }));

  //Actions
  //Actions auto wait works
  //max timeout 30 sec if not mentioned
  // Playwright auto-waits to ensure the element exists, is visible, enabled, stable, not covered, and scrolled into view before acting
  await page.locator("#small-searchterms").fill("Laptop");
  // Force click bypasses safety checks
  await page.locator(" [value='Search']").click({ force: true });//clicking on search button- force actions



})