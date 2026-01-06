// An iframe (short for "inline frame") is an HTML element that allows you to embed another HTML document within the current document.
// Iframes are commonly used to embed external content such as videos, maps, or other web pages (as seen here) into a web page with

import { test, expect, Locator, Frame, Page } from '@playwright/test';

test("frames demo", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total number of page in the frame
  const frames: Frame[] = page.frames();
  console.log("Total Number of Frames: ", frames.length)

  //approach 1 : using page frame

  // const frame = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });
  // if (frame) {
  //   // await frame.locator("input[name='mytext1']").fill("Hello World");
  //   await frame.fill("[name='mytext1']", "Hello World");
  // } else {
  //   console.log("Frame is not available")
  // }
  // await page.waitForTimeout(5000);

  //second appraoch using framelocator()
  await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Hello World");

});

test.only("inner/child frames demo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");


  const frame3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });

  if (frame3) {
    await frame3.locator("[name='mytext3']").fill("Welcome");
    const childFrame = frame3?.childFrames();
    console.log("Child Frames inside the Frame: ", childFrame?.length)
    const radio = childFrame[0].getByLabel("I am a human");
    await radio.check();
    await expect(radio).toBeChecked();

  } else {
    console.log("frame 2 is not found");
  }

})