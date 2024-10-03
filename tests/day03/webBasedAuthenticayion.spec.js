import { expect, test, TestInfo } from "@playwright/test";

test("By Passing authentication by embedding the credentials in the URL", async ({
  page,
}) => {
  // https://username:password@url
  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");

  await page.waitForTimeout(5000);

  let congrats = page.locator("//p[contains(text(),'Congratulations!')]");

  expect(await congrats).toBeVisible; // verifies that the element is visible

  await expect(congrats).toBeVisible(); // passing webElement to the expect
});

test("By Passing authentication by encoding credentials in Base64 format", async ({
  page,
}) => {
  // Base64 encoding of username:password
  let encodedCredentials = Buffer.from("admin:admin").toString("base64");

  //set up the athentication header
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });

  await page.goto("https://practice.cydeo.com/basic_auth");

  let congrats = page.locator("//p[contains(text(),'Congratulations!')]");

  await expect(congrats).toBeVisible(); // verifies that the element is visible

  await page.waitForTimeout(5000);
});

