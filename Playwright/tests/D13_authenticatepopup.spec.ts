import { test, expect, Locator, chromium, Page } from '@playwright/test';
test("tabs", async ({ browser }) => {


  const context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } });//pass login credentials

  //creating page
  const page = await context.newPage();//page 1 created

  //Approach 1
  /*
  //"https://username:password@the-internet.herokuapp.com/basic_auth" how to pass username and passowrd
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  const login: Locator = page.getByText('Congratulations! You must have the proper credentials.');
  await expect(login).toHaveText("Congratulations! You must have the proper credentials. ");
  */

  //Approach 2
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  const login: Locator = page.getByText('Congratulations! You must have the proper credentials.');
  await expect(login).toHaveText("Congratulations! You must have the proper credentials. ");

  await page.waitForTimeout(5000);


});