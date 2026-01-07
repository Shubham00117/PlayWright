import { test, expect } from "@playwright/test"

test("Assertion Demo", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  //Auto-retrying assertions (automatically retires until it pass or time out)
  expect(page).toHaveURL("https://demowebshop.tricentis.com/");

  //auto retry wait for the element to be visible and the have expected text
  expect(page.getByAltText('Tricentis Demo Web Shop').isVisible());//wait for visible
  await expect(page.locator('strong:has-text("CATEGORIES")')).toHaveText("Categories");

  //2.Not-retrying assertions(execute immediatly no retry)
  const title = await page.title();
  expect(title.includes("Demo Web Shop")).toBeTruthy();//no auto-retry

  const welcometext = await page.locator('h2:has-text("Welcome to our store")').innerText();
  expect(welcometext).toContain("Welcome to our store");

  //negating matcher (applicable for both auto retrying and no auto retrying)
  await expect(page.locator('h2:has-text("Welcome to our store")')).not.toBeVisible();//auto-retry
  expect(welcometext).not.toContain("Welcome to our store");//no auto retry

  await page.waitForTimeout(50000);

})