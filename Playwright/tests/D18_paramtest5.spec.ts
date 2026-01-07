import { test, expect } from "@playwright/test";
import * as XLSX from "xlsx";

const excelPath = "testdata/Data.xlsx";

const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const loginData: any[] = XLSX.utils.sheet_to_json(worksheet);

test.describe("Login data driven test", () => {
  loginData.forEach(({ Email, Password, Validity }, index) => {

    const email = (Email ?? "").toString().trim();
    const password = (Password ?? "").toString().trim();
    const validity = (Validity ?? "").toString().trim().toLowerCase();

    test(
      `TC_${index + 1} | Login test with ${email || "empty"} and ${password || "empty"}`,
      async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/login");

        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(password);
        await page.locator('input[value="Log in"]').click();

        // Demo site → all credentials are invalid
        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible({ timeout: 5000 });

        await expect(page).toHaveURL(
          "https://demowebshop.tricentis.com/login"
        );
      }
    );
  });
});