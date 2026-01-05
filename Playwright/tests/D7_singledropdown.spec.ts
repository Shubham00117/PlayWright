import { test, expect, Locator } from "@playwright/test";

test("Single Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // 1)select option from the drop down (4 ways)
  const singledropdown: Locator = page.locator("#country");

  // await singledropdown.selectOption("India");// visible text
  // await singledropdown.selectOption({ value: "uk" }); //by using value attribuate
  // await singledropdown.selectOption({ label: "India" }); //by using label
  // await singledropdown.selectOption({ index: 3 }); //by using index

  // 2)check number of options in dropdown count
  const dropdowncount = page.locator("#country>option");
  await expect(dropdowncount).toHaveCount(10);

  // 3)check an option present in the dropdown
  const options: String[] = (await dropdowncount.allTextContents()).map((opt) =>
    opt.trim()
  );
  //check an option present in dropdown
  console.log(options);
  expect(options).toContain("Japan");

  //4)printing option from dropdown
  for (const option of options) {
    console.log(option);
  }

  await page.waitForTimeout(5000);
});
