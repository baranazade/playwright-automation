import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  let searchBox = page.locator("//input[@name='search_query']");

  await searchBox.click();

  await searchBox.fill("Cydeo");

  await page.waitForTimeout(3000);
  await searchBox.press("Enter");
  await page.waitForTimeout(3000);

  await page.locator('//img[contains(@src,\'mbRWW7GcNtQ\')]');

  await page.waitForTimeout(4000);


  
});


//input[@name='search_query'] '//input[@name=\'search_query\']'

//<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;">