import { test, expect } from "@playwright/test";

test("Verify Page Title", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  let webseitetitle: String = await page.title();
  console.log("Title: " + webseitetitle);

  await expect(page).toHaveTitle("Automation Exercise");
});
