/*
===============================================================================
INTRODUCTION: PLAYWRIGHT LOCATORS
===============================================================================

Locators are the core of Playwright’s auto-waiting and retry mechanism.
A locator represents a way to find element(s) on the page at ANY moment in time.
Playwright keeps re-querying the DOM until the element is ready or timeout occurs.

DOM – Document Object Model
DOM is the structured representation of the HTML page that Playwright interacts with.

===============================================================================
LOCATOR TYPES (ORDERED BY BEST PRACTICE PRIORITY)
===============================================================================

1) page.getByRole()
   - Locates elements using ARIA roles (explicit or implicit)
   - Best for accessible, interactive elements
   - Example: buttons, links, headings, checkboxes, tables

2) page.getByText()
   - Locates elements using visible text content
   - User-centric, but text changes can break tests

3) page.getByLabel()
   - Locates form controls using associated <label> text
   - Best for inputs, radio buttons, checkboxes

4) page.getByPlaceholder()
   - Locates inputs using placeholder text
   - Useful when labels are missing

5) page.getByAltText()
   - Locates elements (usually images) using alt attribute
   - Important for accessibility testing

6) page.getByTitle()
   - Locates elements using title attribute (tooltips, icons)

7) page.getByTestId()
   - Locates elements using data-testid (or custom test id attribute)
   - MOST STABLE for automation in real projects
===============================================================================
*/

import { test, expect, Locator } from "@playwright/test";

test("Verify locators in Playwright", async ({ page }) => {
  // ===========================================================================
  // NAVIGATION
  // ===========================================================================
  await page.goto("https://demo.nopcommerce.com/");

  // ===========================================================================
  // 5) page.getByAltText() — IMAGE LOCATOR
  // Used to locate images via their alt text (accessibility-friendly)
  // ===========================================================================
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();

  // ===========================================================================
  // 2) page.getByText() — TEXT CONTENT LOCATOR
  // Matches visible text exactly, partially, or via regex
  // ===========================================================================
  const welcomeText: Locator = page.getByText("Welcome to our store");
  await expect(welcomeText).toBeVisible();

  // Other valid variations:
  // await expect(page.getByText("Welcome to")).toBeVisible();                // partial text
  // await expect(page.getByText(/welcome\s+to\s+our\s+store/i)).toBeVisible(); // regex, case-insensitive

  // ===========================================================================
  // 1) page.getByRole() — ROLE-BASED LOCATOR (BEST PRACTICE)
  // Role is NOT an attribute — it comes from HTML semantics & ARIA
  // ===========================================================================
  /*
    Role locators follow W3C ARIA specifications.
    Prefer for:
      - buttons
      - links
      - headings
      - checkboxes
      - tables
  */

  await page.getByRole("link", { name: "Register" }).click();

  /*
    NOTE:
    The Register page is protected by Cloudflare.
    Because of that, the real <h1>Register</h1> page never loads during automation,
    so asserting the heading will fail.

    Example that DOES NOT WORK here:
    await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
  */

  // ===========================================================================
  // 3) page.getByLabel() — FORM CONTROL VIA LABEL TEXT
  // Works only if <label> is properly associated with input
  // ===========================================================================
  await page.getByLabel("First name:").fill("John");
  await page.getByLabel("Last name:").fill("Root");
  await page.getByLabel("Email:").fill("johnroot51@gmail.com");

  // ===========================================================================
  // 4) page.getByPlaceholder() — INPUT VIA PLACEHOLDER TEXT
  // Useful when label is missing
  // ===========================================================================
  await page.getByPlaceholder("Search store").fill("iPhone");

  // ===========================================================================
  // 6) page.getByTitle() — TITLE ATTRIBUTE LOCATOR
  // Common for icons, tooltips, or compact buttons
  // ===========================================================================
  /*
    Example HTML:
    <button title="Add to cart">+</button>
  */
  await expect(page.getByTitle("Add to cart")).toBeVisible();
  await page.getByTitle("Add to cart").click();

  // ===========================================================================
  // 7) page.getByTestId() — MOST STABLE AUTOMATION LOCATOR
  // Recommended for real-world automation frameworks
  // ===========================================================================
  /*
    Example HTML:
    <input data-testid="email-input" />
    <button data-testid="submit-btn">Submit</button>
  */
  await page.getByTestId("email-input").fill("john@example.com");
  await page.getByTestId("submit-btn").click();
});
