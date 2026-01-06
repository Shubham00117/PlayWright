import { test, expect, Locator } from "@playwright/test"

test("Dynamic Table", async ({ page }) => {

  await page.goto("https://practice.expandtesting.com/dynamic-table");

  const table: Locator = page.locator(".table tbody");
  await expect(table).toBeVisible();

  const rows: Locator[] = await table.locator("tr").all();

  console.log("Total Numbers of Rows in table: ", rows.length);

  expect(rows).toHaveLength(4);

  //For Chrome process get value of CPU load.
  //read each row and check presence.
  let cpuLoad: string = "";

  for (const row of rows) {
    const browserName: string = await row.locator("td").nth(0).innerText();
    if (browserName === "Chrome") {

      // const cpuload: string = await row.locator('td:has-text("%")').innerText();css selector
      cpuLoad = await row.locator("td", { hasText: '%' }).innerText();//playwright selector
      // console.log("cpuLoadTable: ", cpuLoad);
      break;
    }
  }

  let chromecpuLoad = ((await page.locator('#chrome-cpu').innerText()));
  const chromecputable: number = parseFloat(cpuLoad);
  const chromecpunum: number =
    parseFloat(chromecpuLoad.match(/[\d.]+/)![0]);// Extracts the numeric CPU value from UI text (e.g., "Chrome CPU: 7.8%") and converts it to a number for comparison
  console.log("cpuLoadResult: ", chromecpuLoad);
  if (chromecputable === chromecpunum) {
    console.log("Cpu Load of Chrome is Equal");
  }
  else {
    console.log("Cpu Load of Chrome is Not Equla");
  }

  console.log("chromecputable: ", chromecputable);
  console.log("chromecpunum: ", chromecpunum);
})