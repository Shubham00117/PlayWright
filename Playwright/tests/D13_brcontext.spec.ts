//Browser ---> chromium, firefox, webkit
//Contexts ---› we can have multiple contexts for multiple users/apps for the same browser
//provide a way to operate multiple independent browser sessions.
//page ---> New Tab, Window,popup
import { test, expect, chromium, } from "@playwright/test"

test("Browser Context", async ({ }) => {//1)Browser-->2)Context-->3)Page

  const browser = await chromium.launch();// Create Browser //1)
  const context = await browser.newContext();// create context //2)

  //creating 2 page
  const page1 = await context.newPage();//page 1 created
  const page2 = await context.newPage();//page 2 created 

  console.log("No of pages created:", context.pages().length);//2

  await page1.goto("https://playwright.dev/");
  await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

  await page2.goto("https://www.selenium.dev/");
  await expect(page2).toHaveTitle("Selenium");

  await page1.waitForTimeout(5000);
  await page2.waitForTimeout(5000);

})