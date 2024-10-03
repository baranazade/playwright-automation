import {test} from'@playwright/test';
import { maxHeaderSize } from 'http';

test('Simple Playwright Test', async({page})=> {
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@class='gLFyf']");

    //await searchBox.type("Playwright Automation"); // this will type one by one
   // await page.waitForTimeout(3000);

    await searchBox.fill("Playwright Automation"); // this will send the whole text at once.
    await page.waitForTimeout(3000);

} );