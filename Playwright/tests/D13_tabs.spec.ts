import { test, expect, Locator, chromium, Page } from '@playwright/test';
test("tabs", async () => {

  const browser = await chromium.launch();// Create Browser //1)
  const context = await browser.newContext();// create context //2)

  //creating page
  const parentpage = await context.newPage();//page 1 created

  await parentpage.goto("https://testautomationpractice.blogspot.com/");

  //2 statement go parallely
  // context.waitForEvent('page');//Pending,Fulfilled,Rejected
  // parentpage.getByText('New Tab').click();//Open new tab / New Page

  //Execute 2 statement parallely
  // [childpage]
  // const numbers = [10, 20, 30];
  // const [first] = numbers;
  // console.log(first); // 10
  const [childpage] = await Promise.all([context.waitForEvent('page'), parentpage.getByText('New Tab').click()]);

  //Appraoch1: switch between tabs and get title
  const pages: Page[] = context.pages();
  console.log(pages.length);

  console.log("Title of Parent page: ", await pages[0].title());
  console.log("Title of Childe page: ", await pages[1].title());
  //Appraoch 2: switch between tabs and get title

  console.log("Title of Parent page: ", await parentpage.title());
  console.log("Title of Childe page: ", await childpage.title());
})