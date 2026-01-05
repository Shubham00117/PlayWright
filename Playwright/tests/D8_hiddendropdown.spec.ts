import { test, Locator } from "@playwright/test";

test("Verify Hidden DropDown", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByText('PIM').click();

  // open hidden dropdown
  await page.locator("form i").nth(2).click();

  const options: Locator = page.locator("div[role='listbox'] span");

  // ✅ wait for dropdown options to appear
  await options.first().waitFor();

  const count: number = await options.count();
  console.log(count);

  console.log(await options.allTextContents());
  for (let i = 0; i < count; i++) {
    const text = (await options.nth(i).innerText()).trim();

    if (text === "Automation Tester") {
      await options.nth(i).click();
      break;
    }
  }


});