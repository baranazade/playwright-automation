import { expect, test } from "@playwright/test";

/*
Practice Tasks:
    1. Verify that there are exactly 50 link elements within the <ul> element.

    2. Verify that each of the 50 link elements within the <ul> element is visible.

    3. Verify that each of the 50 link elements within the <ul> element are enabled.

    4. Verify that each of the 50 link elements within the <ul> element have a valid `href` attribute.
*/
test.describe("Array of Elements tests", () => {
  let elements;

  // Create a beforeEach hook to perform setup for all tests in the group
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify that there are exactly 50 link elements within the <ul> element", async ({
    page,
  }) => {
    await page.goto("https://practice.cydeo.com/");

    expect(elements.length).toBe(50);
  });

  test("Verify that each of the 50 link elements within the <ul> element is visible.", async ({
    page,
  }) => {
    await page.goto("https://practice.cydeo.com/");

    for (let element of elements) {
      // expect(await element.isVisible()).toBeTruthy();
      await expect(element).toBeVisible();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> element is enabled.", async ({
    page,
  }) => {
    await page.goto("https://practice.cydeo.com/");

    for (let i = 0; i < elements.length; i++) {
      await expect(elements[i]).toBeEnabled();
      //expect(await elements[i].isEnabled()).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> element have a valid `href` attribute.", async ({
    page,
  }) => {
    for (let element of elements) {
      let href = await element.getAttribute("href");
      expect(href).toBeTruthy();
    }

    //add for each loop
    elements.forEach(async (element) => {
      let href = await element.getAttribute("href");
      expect(href).toBeTruthy();
      console.log(href);
    });
  });
});
