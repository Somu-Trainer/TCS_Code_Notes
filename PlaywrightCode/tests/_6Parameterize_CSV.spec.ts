import { test, expect } from '@playwright/test';
import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";

test('Parameterize with CSV file values', async ({ page }) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login');

    const fName = await page.getByRole('textbox', {name: "First name"});
    const sName = await page.getByRole('textbox', {name: "Surname"});
    const emailTxtBox = await page.getByRole('textbox', {name: "Mobile number or email address"});

    const csvFilePath = path.join(__dirname, "testData.csv");
    const csvData = fs.readFileSync(csvFilePath, "utf-8");
    const csvTestData = parse(csvData, {columns: true, skip_empty_lines: true});

    for(const csvdata of csvTestData){
        await fName.clear();
        await fName.fill(csvdata.FirstName);
        await page.waitForTimeout(1000);

        await sName.clear();
        await sName.fill(csvdata.LastName);
        await page.waitForTimeout(1000);

        await emailTxtBox.clear();
        await emailTxtBox.fill(csvdata.EmailID);
        await page.waitForTimeout(2000);
    }

});