/*
===============================
PLAYWRIGHT CODEGEN COMMANDS
===============================

1) Basic codegen (record test) ✅ WORKING
npx playwright codegen https://demoblaze.com/

2) Codegen with specific browser ✅ WORKING
npx playwright codegen --browser=chromium https://demoblaze.com/
npx playwright codegen --browser=firefox https://demoblaze.com/
npx playwright codegen --browser=webkit https://demoblaze.com/

3) Codegen for mobile device ✅ WORKING
npx playwright codegen --device="iPhone 14" https://demoblaze.com/

4) Codegen and save output to test file ✅ WORKING
npx playwright codegen -o tests/D14_codegen_generate_autofile.spec.ts https://demoblaze.com/

5) Codegen using stored login session ✅ WORKING
npx playwright codegen --load-storage=auth.json https://demoblaze.com/

-------------------------------
IMPORTANT NOTES
-------------------------------
• Codegen ALWAYS runs in headed mode by default
• --headed is NOT supported with codegen
• Use `await page.pause()` for debugging during codegen

===============================
*/
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Shubham_117');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Okokok@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});