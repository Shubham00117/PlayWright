
/*
open app
-- beforeAll()
login -- beforeEach()
find products
logout
- afterEach()
login
logout
add product to cart
close app -- afterAll()
*/
import { test, expect, Page } from '@playwright/test';


let page: Page
test.beforeAll("Before All test", async ({ browser }) => {
  console.log("Before All test");
  page = await browser.newPage();

  await page.goto("https://demoblaze.com/")
  console.log("Navigate to Page");


})

test.afterAll("After All test", async () => {
  console.log("After All test");
  console.log("All test execute Successfully");

})

test.beforeEach("Before Each test", async () => {
  console.log("Before each test");
  console.log("Login Successful")
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill("Shubham_117");
  await page.locator('#loginpassword').fill("Okokok@123");
  await page.getByRole('button', { name: 'Log in' }).click();
})

test.afterEach("After Each test", async () => {
  console.log("After each test");
  await page.getByRole('link', { name: 'Log out' }).click();
  console.log("Logout successful")
})
//to run group use this command
//npx playwright test  D16_hooks2.spec.ts --grep group1
test.describe("group1", () => {
  test("Count Total Product", async () => {

    const products = page.locator(".container h4");
    const numberofproduct = await products.count();
    console.log("Total Number of Product: ", numberofproduct);
  })

  test("Add product to cart", async () => {

    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    //Register a dialog handler
    page.on('dialog', (dialog) => {
      expect(dialog.message()).toContain("Product added.");
      console.log(dialog.message());
      dialog.accept();
    });

    await page.getByRole('link', { name: 'Add to cart' }).click();

  })
})

