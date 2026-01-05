import { test, expect, Locator } from "@playwright/test";

test("Verify duplicate options", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // const dropdownoptions: string[] = (await page
  //   .locator("#colors>option")
  //   .allTextContents()).map(x => x.trim());

  // already sorted list
  const dropdownoptions: string[] = (await page.locator('#animals>option')
    .allTextContents()).map(x => x.trim());

  const myset = new Set<string>
  const duplicate: String[] = [];

  //to check duplicate dropdown logic
  for (const option of dropdownoptions) {
    if (myset.has(option)) {

      duplicate.push(option);
    } else {
      myset.add(option);
    }
  }

  console.log("Unique value: ", myset);
  console.log("Duplicate value: ", duplicate);

  if (duplicate.length > 0) {
    console.log("Duplicate found: ", duplicate);
  } else {
    console.log("Duplicate not found: ", myset);
  }

});
