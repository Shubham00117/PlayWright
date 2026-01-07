/*
Pre-requisite:
npm install csv-parse
*/

import { test, expect } from "@playwright/test";
import * as fs from "fs";
import { parse } from "csv-parse/sync";

// Read CSV file
const csvPath = "testdata/Data.csv";
const fileContent = fs.readFileSync(csvPath, "utf-8");

// Parse CSV data
const records: any[] = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
});

test.describe("Login data driven test", () => {

  records.forEach((data, index) => {

    const email = data.email || "";
    const password = data.password || "";
    const validity = (data.validity || "").toLowerCase();

    test(
      `TC_${index + 1} - Login with ${email || "empty"} / ${password || "empty"}`,
      async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/login");

        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(password);
        await page.locator('input[value="Log in"]').click();

        if (validity === "valid") {
          const logoutLink = page.locator('a[href="/logout"]');
          await expect(logoutLink).toBeVisible();
        } else {
          const errorMessage = page.locator(".validation-summary-errors");
          await expect(errorMessage).toBeVisible();
          await expect(page).toHaveURL(
            "https://demowebshop.tricentis.com/login"
          );
        }
      }
    );
  });

});