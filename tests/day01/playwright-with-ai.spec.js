import { test } from '@playwright/test';

test('My Automation Test', async ({ page }) => {
  // go to google 
       await page.goto('https://www.google.com');

       let searchBox = page.locator("//textarea[@class='gLFyf']");

       await searchBox.fill("Playwright Automation");
   
       //await searchBox.type("Playwright Automation");
   
       await page.waitForTimeout(3000);
   

});