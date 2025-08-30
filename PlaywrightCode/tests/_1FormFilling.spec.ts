import { test, expect } from '@playwright/test';

test('form filling / use multiple element types', async ({ page }) => {
    await page.goto('https://www.bing.com/');
    
    const searchTxtBox = page.getByRole("textbox", {name: 'characters out of 2000'});
    await searchTxtBox.clear();
    await searchTxtBox.fill("Playwright");    
    await page.waitForTimeout(2000);
    await page.locator("xpath=//textarea[@name='q']").press('Enter');
    await page.waitForTimeout(3000);
    const textEntered = await page.locator("#sb_form_q").textContent();
    console.log(textEntered);

    //await page.locator('//input[@id="sb_form_q"]').click();
    const breadCrumbs = page.locator('css=#id_sc');
    await breadCrumbs.focus();
    await breadCrumbs.click();
    //await page.waitForTimeout(1000);
    //await page.getByRole('button', {name: "Settings"}).click();
    await page.locator("//div[text()='Settings']").click();
    await page.locator("//div[text()='More']").click();

    await page.locator("#adlt_set_strict").check();

    const chkbox1 = page.locator("#enAS");
    if(await chkbox1.isChecked()){
      await chkbox1.uncheck();
    }    

    await page.waitForTimeout(2000);
    const langDropdown = page.locator("#single_language");
    langDropdown.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await langDropdown.selectOption("English (India)");    
    await page.waitForTimeout(3000);

    await page.mouse.wheel(0, 50);
    await page.waitForTimeout(4000);
    const cancelBtn = page.locator("#cancel_changes_button");
    //page.getByRole("button", {name: "Cancel"});
    cancelBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await cancelBtn.click();
    await cancelBtn.waitFor({ state: 'hidden' });
    await page.waitForTimeout(2000);
});