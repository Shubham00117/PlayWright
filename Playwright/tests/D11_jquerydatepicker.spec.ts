import { test, expect, Locator, Page } from "@playwright/test"

async function selectDate(month: string, date: string, year: string, page: Page, isFuture: boolean) {


  while (true) {

    const currentmonth: Locator = page.locator(".ui-datepicker-month");
    const currentyear: Locator = page.locator(".ui-datepicker-year");

    if (await currentmonth.innerText() === month && await currentyear.innerText() === year) {
      break;


    }

    if (isFuture) {
      await page.getByText('Next').click();
    } else {
      await page.getByText('Prev').click();
    }
  }

  //click select date
  const alldate: Locator[] = await page.locator(".ui-datepicker td").all();

  for (const dt of alldate) {
    if (await dt.innerText() === date) {


      dt.click();
      break;
    }
  }

}


test("jquery data picker", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const dateInput: Locator = page.locator('#datepicker');
  await dateInput.click();
  // await dateInput.fill("06/25/2026");select date using fill meathod

  //feature date
  // const month: string = "January";
  // const date: string = "25";
  // const year: string = "2027"

  //past date
  const month: string = "January";
  const date: string = "15";
  const year: string = "2023"

  // selectDate(month, date, year, page, true);
  selectDate(month, date, year, page, false);


  //capture month and year
  // while (true) {

  //   const currentmonth: Locator = page.locator(".ui-datepicker-month");
  //   const currentyear: Locator = page.locator(".ui-datepicker-year");

  //   if (await currentmonth.innerText() === month && await currentyear.innerText() === year) {
  //     break;


  //   } else {
  //     await page.getByText('Next').click();
  //   }
  // }

  // //click select date
  // const alldate: Locator[] = await page.locator(".ui-datepicker td").all();

  // for (const dt of alldate) {
  //   if (await dt.innerText() === date) {

  //     dt.click();
  //     break;
  //   }
  // }
  await page.waitForTimeout(5000);
})