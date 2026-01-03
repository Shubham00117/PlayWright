import { test, expect, Locator } from "@playwright/test";

test("Verify Css Selector", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // ================= ID,CLASS,ATTRIBUTE SELECTOR =================
  //id
  // syntax- "tagName#idname"
  // const searchbox: Locator = page.locator("input#small-searchterms");
  // await searchbox.fill("T-Shirt");

  // await page.locator("input#small-searchterms").fill("T-Shirt");
  // await page.locator("#small-searchterms").fill("T-Shirt"); //without tagname

  //class
  //syntax- "tagnName.classname"
  // .search-box-text
  // await page.locator("input.search-box-text").fill("T-Shirt");
  // await page.locator(".search-box-text").fill("T-Shirt"); //without tag name

  //tag[attribute='value']
  // await page.locator("input[name='q']").fill("T-Shirt");
  await page.locator("[name='q']").fill("T-Shirt");

  // ================= CHILD SELECTORS =================
  // first child
  const firstMenu: Locator = page.locator("ul.top-menu > li:first-child");
  await expect(firstMenu).toBeVisible();

  // last child
  const lastMenu: Locator = page.locator("ul.top-menu > li:last-child");
  await expect(lastMenu).toBeVisible();

  // nth child
  const thirdMenu: Locator = page.locator("ul.top-menu > li:nth-child(3)");
  await expect(thirdMenu).toBeVisible();

  // ================= ATTRIBUTE PATTERN MATCHING =================
  // starts with
  const startsWith: Locator = page.locator("input[id^='small']");
  await expect(startsWith).toBeVisible();

  // ends with
  const endsWith: Locator = page.locator("input[id$='terms']");
  await expect(endsWith).toBeVisible();

  // contains
  const containsValue: Locator = page.locator("input[id*='search']");
  await expect(containsValue).toBeVisible();

  // ================= COMBINING SELECTORS =================
  // tag + class + attribute
  const combined: Locator = page.locator("input.search-box-text[name='q']");
  await expect(combined).toBeVisible();

  // not selector
  const notSelector: Locator = page.locator("input:not([type='submit'])");
  await expect(notSelector).toBeVisible();

  // ================= FOLLOWING SIBLING =================
  // immediate sibling using +
  const followSibling: Locator = page.locator(
    "input#small-searchterms + input"
  );
  await expect(followSibling).toBeVisible();
});
