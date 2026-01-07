import { test, expect } from "@playwright/test"
/*
3 ways to create trace file(.zip)
1) using playwright.config.ts
2) using command
3) code(programmitically)
npx playwright test mytest.spec.ts --trace on

context.tracing.start({screenshots:true,snapshots:true});
//statements context.tracing.stop({path:'trace.zip'});
To view trace file (3 ways)
1) from html file--› click on trace.zip
2) through command - npx plawright show-|
3) utility ›https://trace.playwright.dev/•..(drag and drop/upload trace.zip file)
*/
test('tracing in playwright.config.ts', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Shubham_117');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Okokok@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log outd' }).click();//wrong path
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

  await page.waitForTimeout(5000);
});

test.only('tracing in test', async ({ page, context }) => {
  //to generate tracing manually  below command 
  // npx playwright test D15_tracing.spec.ts --trace on 

  try {
    // await context.tracing.start({ screenshots: true, snapshots: true });//to generate manually
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('Shubham_117');
    await page.locator('#loginpassword').fill('Okokok@123');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await page.getByRole('link', { name: 'Log outd' }).click(); // intentional failure
  } finally {
    // await context.tracing.stop({ path: 'trace.zip' }); // ✅ always executed
  }
});