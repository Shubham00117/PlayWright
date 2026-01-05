import { test, Locator } from "@playwright/test";

test("Verify Auto Suggested DropDown", async ({ page }) => {

  await page.goto("https://www.flipkart.com/");

  await page.locator('[name="q"]').fill("IPhone");

  // wait for auto-suggestion dropdown to appear
  await page.locator("ul>li").first().waitFor();

  const options: Locator = page.locator("ul>li");
  const count = await options.count();
  console.log(count);

  // get all option texts at once
  const allOptions: string[] = await options.allTextContents();

  for (const option of allOptions) {
    console.log(option);
  }

  for (let i = 0; i < count; i++) {
    const option = (await options.nth(i).innerText()).toLowerCase().trim();

    if (option.includes("iphone 17")) {
      await options.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(5000);

});