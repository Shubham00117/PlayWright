import { test, expect } from "@playwright/test"

test("Hard Vs Soft Assertions", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  // Hard assertions → test stops on first failure
  await expect(page).toHaveTitle("Demo Web Shop");
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
  const logo = page.getByRole('img', { name: 'Tricentis Demo Web Shop' });
  await expect(logo).toBeVisible();

  // Soft assertions → test continues even if an assertion fails
  await expect.soft(page).toHaveTitle("Demo Web Shop1");
  await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");
  const logo1 = page.getByRole('img', { name: 'Tricentis Demo Web Shop' });
  await expect.soft(logo1).toBeVisible();

});