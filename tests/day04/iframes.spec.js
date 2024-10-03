import { test, expect } from "@playwright/test";
import exp from "constants";

test.describe("iFrame Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
  });

  test("Locate the iFrame by ID", async ({ page }) => {
    let myFrame = page.frameLocator("#mce_0_ifr"); // locating  the iframe
    // pause for 3 seconds
    await page.waitForTimeout(3000);

    let elementInsideIframe = myFrame.locator("//body[@id='tinymce']"); // locating the element with that is in the iframe

    await elementInsideIframe.clear(); // clearing
    await page.waitForTimeout(3000);

    await elementInsideIframe.fill("Hello Cydeo"); // filling the input
    await page.waitForTimeout(3000);

    expect(await elementInsideIframe.innerText()).toBe("Hello Cydeo");
    await expect(elementInsideIframe).toHaveText("Hello Cydeo");


  });

  test("Locate the iFrame by CSS", async ({ page }) => {
    let myFrame = page.frameLocator("iframe.tox-edit-area__iframe"); // locating  the iframe

    let elementInsideIframe = myFrame.locator("//body[@id='tinymce']"); // locating the element with that is in the iframe

    /*
    await page.waitForTimeout(3000);
    await elementInsideIframe.press("Control+A");
    await page.waitForTimeout(3000);
    await elementInsideIframe.press("Backspace");
    await page.waitForTimeout(3000);
    */
    await elementInsideIframe.press("Control+A", "Backspace");
    elementInsideIframe.fill("Playwright Automation");
    await page.waitForTimeout(3000);
    expect(await elementInsideIframe.innerText()).toBe("Playwright Automation");
  });

  test("Locate the iFrame by XPATH", async ({ page }) => {
    let myFrame = page.frameLocator("iframe.tox-edit-area__iframe"); // locating  the iframe
    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");
/*
    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Control+A");
    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Backspace");
    await page.waitForTimeout(3000);
    */

    await elementInsideTheFrame.press("Control+A", "Backspace");
    await page.waitForTimeout(3000);
    await elementInsideTheFrame.fill("Playwright Automation");
    await page.waitForTimeout(3000);
    expect(await elementInsideTheFrame.innerText()).toBe("Playwright Automation");
  });
});
