import { test, expect } from '@playwright/test';

test('form filling / use multiple element types', async ({ page }) => {
    await page.goto('https://www.bing.com/');
    const searchTxtBox = page.getByRole("textbox", {name: 'characters out of 2000'});
    await searchTxtBox.clear();
    await searchTxtBox.fill("Playwright");    
    await page.waitForTimeout(2000);

    const folderPath = "C:/Users/Lenovo/OneDrive/Desktop/Screenshots/";

    //Taking page screenshot
    await page.screenshot({path: folderPath+"Screenshot1.png"});
    //Taking element screenshot
    await searchTxtBox.screenshot({path: folderPath+"Screenshot2.png"});
    await page.waitForTimeout(2000);
});