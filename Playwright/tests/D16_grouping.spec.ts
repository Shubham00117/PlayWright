import { test, expect } from "@playwright/test"
//Run Specific Group
//npx playwright test  D16_grouping.spec.ts --grep Group1
// npx playwright test  D16_grouping.spec.ts --grep Group2
test.describe("Group1", async () => {
  test("Test1", () => {

    console.log("Test 1")
  })
  test("Test2", () => {

    console.log("Test 2")
  })
})

test.describe("Group 2", async () => {

  test("Test3", () => {

    console.log("Test 1")
  })
  test("Test4", () => {

    console.log("Test 4")
  })
})
