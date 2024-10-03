import { expect, test } from '@playwright/test';


test('Getting the title of the page', async ({ page }) => {
    // goto hhttps://practice.cydeo.com/
    await page.goto('https://practice.cydeo.com/');

    // Get the title of the page
    let actualTitle = await page.title();

    console.log(actualTitle); 
    
    expect(actualTitle).toBe('Practice');

    await page.waitForTimeout(3000);
  
});


test('Getting the current URL of the page', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');

    let currentURL = await page.url();

    console.log(currentURL);

    await page.waitForTimeout(3000);
});


test('Set the window size', async ({ page }) => {
    
    await page.goto('https://practice.cydeo.com/');

    await page.waitForTimeout(3000);

});