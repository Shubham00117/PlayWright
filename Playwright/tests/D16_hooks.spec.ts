import { test, expect } from "@playwright/test"

test.beforeAll("Before all test", async ({ }) => {
  console.log("Before All")
})

test.afterAll("After All test", async () => {
  console.log('After All');
})
test.beforeEach("Before Each test", async () => {
  console.log('Before Test');
})

test.afterEach("After Each test", async () => {
  console.log('After Test');
})

test("Test1", () => {

  console.log("Test 1");
})
test("Test2", () => {

  console.log("Test 2");
})

test("Test3", () => {

  console.log("Test 3");
})
test("Test4", () => {

  console.log("Test 4");
})