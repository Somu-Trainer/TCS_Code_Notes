import { test, expect } from '@playwright/test';

test('Upload files for Non-input type', async ({ page }) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login');

    const emailTxtBox = await page.getByRole('textbox', {name: "Mobile number or email address"});

    const emails = ["rajesh001@gmail.com", "rajesh002@gmail.com", "rajesh003@gmail.com"];

    for(const email of emails){
        await emailTxtBox.clear();
        await emailTxtBox.fill(email);
        await page.waitForTimeout(2000);
    }

});