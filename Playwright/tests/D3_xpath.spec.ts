import { test, expect, Locator } from "@playwright/test";

test("Varify Locators", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  //Absolute Xpath

  let absouleteLogo: Locator = page.locator(
    "//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]"
  );
  await expect(absouleteLogo).toBeVisible();

  //Relative Xpath
  let relativeLogo: Locator = page.locator(
    "//img[@alt='Tricentis Demo Web Shop']"
  );
  await expect(relativeLogo).toBeVisible();

  let products: Locator = page.locator("//div/h2[@class='product-title']");

  let totalproduct: number = await products.count();
  console.log("Total Product For Sell: ", totalproduct);

  //access coumpter by methods
  console.log("Access product by number:");
  console.log("first Computer: ", await products.first().textContent());
  console.log("last Computer: ", await products.last().textContent());
  console.log("Nth number Computer: ", await products.nth(2).textContent());
  let allproduct: String[] = await products.allTextContents();

  console.log("All product name for sell");
  for (const product of allproduct) {
    console.log(product);
  }

  await page.goto("https://books.toscrape.com/");

  // (1) contains() — books containing "Travel"
  const travelBooks = page.locator('//article[contains(.,"Travel")]');
  console.log("Travel books count:", await travelBooks.count());

  // (2) starts-with() — books starting with "A"
  const booksStartWithA = page.locator(
    '//article[h3/a[starts-with(text(),"A")]]'
  );
  console.log("Books starting with A:", await booksStartWithA.count());

  // (3) exact text() — category link exactly "Travel"
  const travelCategory = page.locator(" //a[normalize-space(text())='Travel']");
  await expect(travelCategory).toBeVisible();

  //total book count
  let totalbooks = page.locator(
    "//section/div/ol/li[@class='col-xs-6 col-sm-4 col-md-3 col-lg-3']/article/h3"
  );

  console.log(await totalbooks.count());

  let booksName: string[] = await totalbooks.allTextContents();
  for (const books of booksName) {
    console.log(books);
  }
});
