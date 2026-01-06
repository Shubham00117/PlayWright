import { test, expect, Locator } from "@playwright/test";

test("Read data from all the table pages", async ({ page }) => {

  await page.goto("https://datatables.net/");

  const nextButton = page.locator("button[aria-label='Next']");

  while (true) {
    // Read all rows of current page
    const rows = await page.locator("#example tbody tr").all();

    for (const row of rows) {
      console.log(await row.innerText());
    }

    // Check if Next button is disabled
    const classAttr = await nextButton.getAttribute("class");

    if (classAttr?.includes("disabled")) {
      break; // ✅ exit loop when no more pages
    } else {
      // Go to next page
      await nextButton.click();
    }


  }
});

test("Filter the row and check the row count", async ({ page }) => {

  await page.goto("https://datatables.net/");

  const dropdown: Locator = page.locator('#dt-length-0');
  await dropdown.selectOption("25")

  const totaltows: Locator[] = await page.locator("tbody tr").all();

  expect(totaltows).toHaveLength(25);//test case faild return 28 records 



  await page.waitForTimeout(5000);
});

test.only("Search Specific data in table", async ({ page }) => {

  await page.goto("https://datatables.net/");

  const searchuser = page.locator('#dt-search-0');
  await searchuser.fill("Bradley Greer");

  // wait for filtering to finish
  await page.waitForSelector("tbody tr");

  const rows = await page.locator("tbody tr").all();

  let matchCount = 0;

  for (const row of rows) {
    const rowText = await row.innerText();

    if (rowText.includes("Bradley Greer")) {
      console.log("Matched row:", rowText);
      matchCount++;
    }
  }

  expect(matchCount).toBeGreaterThan(0);
});