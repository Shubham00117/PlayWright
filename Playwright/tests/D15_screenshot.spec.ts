import { test, expect } from "@playwright/test";


test("Capture Screenshot", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  const timestamp = Date.now();
  console.log(timestamp);
  //page screenshot
  await page.screenshot({ path: 'screenshots/' + 'homepage' + timestamp + '.png' })
  //full page
  await page.screenshot({ path: 'screenshots/' + 'fullpage' + timestamp + '.png', fullPage: true })

  //logo screenshot
  await page.getByRole('img', { name: 'Tricentis Demo Web Shop' }).screenshot({ path: 'screenshots/' + 'logo' + timestamp + '.png' });

  //specific area screenshot
  await page.locator(".product-grid.home-page-product-grid").screenshot({ path: 'screenshots/' + 'featureproduct' + timestamp + '.png' });
})


//screenshot on failure
test.only('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Shubham_117');
  await page.locator('#loginpasswordd').click();//screenshot clicked and video recoreded because of wrong password
  await page.locator('#loginpassword').fill('Okokok@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

  await page.waitForTimeout(5000);
});