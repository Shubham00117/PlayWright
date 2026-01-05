import { test, expect, Locator } from "@playwright/test";

test("Dropdown is sorted", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");


  //already sorted list 
  // const dropdownoptions: string[] = (await page.locator('#animals>option')
  //     .allTextContents()).map(x => x.trim());

  const dropdownoptions: string[] = (await page
    .locator("#colors>option")
    .allTextContents()).map(x => x.trim());


  // Create a NON-MUTATING copy of the original dropdown options
  // Using spread operator (...) to avoid changing the original array
  const beforesoretd: string[] = [...dropdownoptions];

  // sort() is a MUTATING method, so we apply it on a copied array
  // This keeps the original dropdownoptions array unchanged
  const aftersorted: string[] = [...dropdownoptions].sort();

  console.log("Before Sorted: ", beforesoretd);
  console.log("After Sorted: ", aftersorted);

  expect(beforesoretd).not.toEqual(aftersorted);
});
