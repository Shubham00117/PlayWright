import { test, expect } from "@playwright/test"

// npx playwright test D15_Flaky.spec.ts --headed --retries=3
test('flaky', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Shubham_117');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Okokok@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

  // await page.waitForTimeout(5000);
});