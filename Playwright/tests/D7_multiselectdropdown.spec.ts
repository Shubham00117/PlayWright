import { test, expect, Locator } from "@playwright/test";

test("Multi-Select Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Select multi colour using multi select dropdown

  await page.locator("#colors").selectOption(["Red", "Green", "Blue"]); //using visible text
  await page.locator("#colors").selectOption(["red", "green", "blue"]); //using value attribuate text
  await page
    .locator("#colors")
    .selectOption([{ label: "Red" }, { label: "Green" }, { label: "Blue" }]); //using value attribuate text
  await page
    .locator("#colors")
    .selectOption([{ index: 1 }, { index: 2 }, { index: 3 }]); //using value attribuate text

  //check number of options in dropdown
  await expect(page.locator("#colors>option")).toHaveCount(7); //true

  //print all options in dropdown
  const multiselecdrowdown: string[] = await page
    .locator("#colors>option")
    .allTextContents();
  const trimdropdown: string[] = multiselecdrowdown.map((value) =>
    value.trim()
  );
  console.log(trimdropdown);

  //extract value inside array
  for (const option of trimdropdown) {
    console.log(option);
  }
});
