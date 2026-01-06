import { test, expect, Locator, Page } from "@playwright/test";

async function selectDate(
  month: string,
  date: string,
  year: string,
  page: Page
) {
  while (true) {

    const currentmonth: string = await page
      .locator(".ui-datepicker-month")
      .innerText();

    const currentyear: string = await page
      .locator(".ui-datepicker-year")   // ✅ FIXED
      .innerText();

    if (currentmonth === month && currentyear === year) {
      break;
    } else {
      await page
        .locator("button[aria-label='Next month']")
        .click();                        // ✅ safer selector
    }
  }

  // click select date
  const alldate: Locator[] = await page.locator(".ui-datepicker td").all();

  for (const dt of alldate) {
    if ((await dt.innerText()) === date) {
      await dt.click();                 // ✅ await added
      break;
    }
  }
}

test("jquery data picker", async ({ page }) => {
  await page.goto("https://www.booking.com/index.html");

  const dateInput: Locator = page.getByTestId("date-display-field-start");
  await dateInput.click();

  const month: string = "June";
  const date: string = "15";
  const year: string = "2026";

  await selectDate(month, date, year, page); // ✅ await added
});