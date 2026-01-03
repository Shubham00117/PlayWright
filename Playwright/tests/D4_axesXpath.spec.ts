import { test, expect, Locator } from "@playwright/test";

test("Verify Axes Xpath", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp");
  //self
  const country: Locator = page.locator("//td[text()='Germany']/self::td");
  await expect(country).toHaveText("Germany");

  //parent
  const parentrow: Locator = page.locator("//td[text()='Germany']/parent::tr");
  await expect(parentrow).toContainText("Alfreds");
  await expect(parentrow).toContainText("Futterkiste	Maria");
  await expect(parentrow).toHaveText("Alfreds Futterkiste	Maria Anders	Germany");
  console.log(await parentrow.textContent());

  //child
  const childaxes: Locator = page.locator(
    "//table[@id='customers']//tr[2]/child::td"
  );
  await expect(childaxes).toHaveCount(3);

  //ancestor

  const ancestor: Locator = page.locator(
    "//td[text()='Germany']/ancestor::table"
  );

  await expect(ancestor).toHaveAttribute("id", "customers");

  //descendant
  const descendant: Locator = page.locator(
    "//table[@id='customers']/descendant::td"
  );

  await expect(descendant).toHaveCount(18);

  //following
  const follwoing: Locator = page.locator(
    "//td[text()='Germany']/following::td[1]"
  );
  await expect(follwoing).toHaveText("Centro comercial Moctezuma");

  //following-sibling
  const rightsibling: Locator = page.locator(
    "//td[text()='Germany']/following-sibling::td"
  );
  await expect(rightsibling).toHaveCount(0); //0 no following sibling

  const followingsibling1: Locator = page.locator(
    "//td[text()='Maria Anders']/following-sibling::td"
  );

  await expect(followingsibling1).toHaveCount(1); //1 one following sibling

  //preceding
  const preceding: Locator = page.locator(
    "//td[text()='Helen Bennett']/preceding::td"
  );

  await expect(preceding).toHaveCount(10);

  console.log(await preceding.nth(0).textContent());
  console.log(await preceding.nth(1).textContent());
  //preceding-sibling
  const leftsibling: Locator = page.locator(
    "//td[text()='Helen Bennett']/preceding-sibling::td"
  );

  await expect(leftsibling).toHaveCount(1);
});
