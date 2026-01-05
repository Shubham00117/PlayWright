import { test, expect, Locator } from "@playwright/test"

test("Static Table", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")

  const table: Locator = page.locator("table[name='BookTable']")

  //locator chaining Row
  const row: Locator = table.locator('tr');//number of rows in this line use locator chaining 
  await expect(row).toHaveCount(7);

  // locator chaining Column
  const column: Locator = table.locator('th');//number of column
  await expect(column).toHaveCount(4);//approch 1
  // expect(await column.count()).toBe(4);//approach 2 

  //Count Total Number of rows and number of column present in table 
  console.log(await row.count());
  console.log(await column.count());

  //read all data from 2nd row
  const secondrowcells: Locator = row.nth(2).locator('td');
  const secondrowtext: string[] = await secondrowcells.allInnerTexts();
  // console.log(secondrowtext);

  await expect(secondrowcells).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);

  //read all the data from table 
  const allrowdata: Locator[] = await row.all();
  // console.log(allrowdata[0].innerText);//returns fist locator text

  // forof
  // console.log(await allrowdata[0].allInnerTexts());//returns all locators
  // for (const rowdata of allrowdata.slice(1)) {
  //   // console.log(await rowdata.locator('td').allInnerTexts());
  //   const data: string[] = await rowdata.locator('td').allInnerTexts();
  //   console.log(data);
  // }
  //for in 
  // for (const i in allrowdata) {
  //   console.log(await allrowdata[i].innerText());
  // }

  //print book name where author is mukesh
  const MukeshBooks: string[] = [];
  for (const rowdata of allrowdata.slice(1)) {
    const cell: string[] = await rowdata.locator('td').allInnerTexts();
    const author = cell[1];
    const book = cell[0];

    if (author === "Mukesh") {
      console.log(`Author: ${author} Book: ${book}`);
      MukeshBooks.push(book);
    }
  }
  console.log("Mukesh Books: ", MukeshBooks);
  expect(MukeshBooks).toHaveLength(2);

})