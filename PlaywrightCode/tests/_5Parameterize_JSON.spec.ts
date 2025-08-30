import { test, expect } from '@playwright/test';
import * as fs from "fs";
import * as path from "path";

test('Parameterize with JSON file values', async ({ page }) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login');

    const fName = await page.getByRole('textbox', {name: "First name"});
    const sName = await page.getByRole('textbox', {name: "Surname"});
    const emailTxtBox = await page.getByRole('textbox', {name: "Mobile number or email address"});

    const jsonFilePath = path.join(__dirname, "testData.json");
    const jsonTestData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

    for(const jsonObj of jsonTestData){
        await fName.clear();
        await fName.fill(jsonObj.fname);
        await page.waitForTimeout(1000);

        await sName.clear();
        await sName.fill(jsonObj.sname);
        await page.waitForTimeout(1000);

        await emailTxtBox.clear();
        await emailTxtBox.fill(jsonObj.emailID);
        await page.waitForTimeout(2000);
    }

});