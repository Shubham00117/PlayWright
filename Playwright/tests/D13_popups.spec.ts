import { test, expect, Locator, chromium, Page } from '@playwright/test';
test("tabs", async ({ browser }) => {


  const context = await browser.newContext();// create context //2)

  //creating page
  const page = await context.newPage();//page 1 created

  await page.goto("https://testautomationpractice.blogspot.com/");

  //2 statement go parallely
  // context.waitForEvent('popup');//Pending,Fulfilled,Rejected
  // parentpage.getByText('New Tab').click();//Open new tab / New Page

  //Execute 2 statement parallely
  await Promise.all([page.waitForEvent('popup'), page.locator('#PopUp').click()]);


  //Appraoch1: switch between tabs and get title
  const pages: Page[] = context.pages();
  console.log(pages.length);

  console.log("Title of Parent page: ", await pages[0].title());
  console.log("Title of Childe page: ", await pages[1].title());
  // console.log("Title of Childe page: ", await pages[2].title());




  for (const popup of pages) {
    // Execute only for popup pages
    if ((await popup.title()).includes("Playwright")) {
      await popup.getByText('Get started').click();
      // await popup.pause();//pause the window
      await popup.close();//close the window
    }
  }

});