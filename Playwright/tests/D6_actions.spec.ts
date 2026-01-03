import { test, expect, Locator } from "@playwright/test";

test("Input text Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Text Input / Text Box / Input Box
  //Radio Buttons
  //Check Boxes
  const firstNameInputBox: Locator = page.locator("#name");

  await expect(firstNameInputBox).toBeVisible();
  await expect(firstNameInputBox).toBeEnabled();

  const maxlength: string | null = await firstNameInputBox.getAttribute(
    "maxlength"
  );
  expect(maxlength).toBe("15");

  await firstNameInputBox.fill("John Keeper");

  console.log(
    "The Input Value of firstName: ",
    await firstNameInputBox.textContent()
  ); //return empty value

  const input_element: string = await firstNameInputBox.inputValue(); //use to capture input box value

  console.log("The Input Value of firstName: ", input_element); //return value

  expect(input_element).toBe("John Keeper");
});

test("Radio Button Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const maleRadioButton: Locator = page.locator("//input[@id='male']");
  const femaleRadioButton: Locator = page.locator("//input[@id='female']");
  await expect(maleRadioButton).toBeVisible();
  await expect(maleRadioButton).toBeEnabled();

  await maleRadioButton.check(); //select radio button Male
  await maleRadioButton.isChecked(); //check male button is selected

  await femaleRadioButton.check(); //select radio button Female
  await femaleRadioButton.isChecked(); //check female button is selected
});

test.only("Check Box Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // const checkboxDays: Locator = page.getByLabel("Sunday");

  // await checkboxDays.check(); //select chebox sunday

  //select all checkbox
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));
  expect(checkboxes.length).toBe(7);

  // passing value of variable to the getByLabel simple logic
  // for (const day of days) {
  //   await page.getByLabel(day).check();
  //   expect(page.getByLabel(day).isChecked());
  // }

  //check all checkboxes
  for (const checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  //Uncheck last three checkboxes
  for (const checkbox of checkboxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  //select check box which is not selected and uncheck checkbox which is selected.
  //Toggle Checkboxes if checked:unchecked and unchecked:checked. Assert state flipped
  for (const checkbox of checkboxes) {
    if (await checkbox.isChecked()) {
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    } else {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }

  //random checkbox seletetion
  const indexes: number[] = [1, 2, 3];

  for (const index of indexes) {
    await checkboxes[index].check();
    await expect(checkboxes[index]).toBeChecked();
  }

  //check random single checkboxes
  for (const day of days) {
    if (day.toLowerCase() === "Thursday".toLowerCase()) {
      const checkbox = page.getByLabel(day);
      checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }
  await page.waitForTimeout(5000);
});
