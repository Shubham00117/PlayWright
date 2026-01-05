import { test, expect, Locator } from "@playwright/test"

test("Comparing Methods", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  // 1)  //innerText() vs textContent()
  const products: Locator = page.locator(".product-title");

  console.log(await products.nth(1).innerText());
  console.log(await products.nth(2).textContent());

  const count = await products.count();
  console.log(count);

  for (let i = 0; i < count; i++) {
    // const productName = await products.nth(i).innerText();
    // console.log(productName);

    // const productName = await products.nth(i).textContent();
    // console.log(productName);

    // const productName: string | null = await products.nth(i).textContent();
    // console.log(productName?.trim());
  }

  // 2)  //allInnerText() Vs allTextContent()

  const productName: string[] = await products.allInnerTexts();
  // console.log(productName);

  // const productName: string[] = await products.allTextContents();
  // console.log(productName);

  // const productName: string[] = (await products.allTextContents()).map(text => text.trim());
  // console.log(productName);

  //****** string immutable concept ******
  // const productName: string[] = await products.allTextContents();//after triming value is same in productName
  // [
  //   '\n            $25 Virtual Gift Card\n        ',
  //   '\n            14.1-inch Laptop\n        ',
  //   '\n            Build your own cheap computer\n        ',
  //   '\n            Build your own computer\n        ',
  //   '\n            Build your own expensive computer\n        ',
  //   '\n            Simple Computer\n        '
  // ]
  // const trimproduct = productName.map(text => text.trim());//trim the product and store another array variable
  // console.log(trimproduct);//print the trim product value 
  // [
  //   '$25 Virtual Gift Card',
  //   '14.1-inch Laptop',
  //   'Build your own cheap computer',
  //   'Build your own computer',
  //   'Build your own expensive computer',
  //   'Simple Computer'
  // ]

  // 3)all
  const productLocators: Locator[] = await products.all();
  console.log(productLocators);

  // for (const product of productLocators) {
  //   const productName: string = await product.innerText();
  //   console.log(productName);

  // }

  for (const i in productLocators) {
    console.log(await productLocators[i].innerText());
  }
})