import { test, expect } from '@playwright/test';

test('Upload files for Non-input type', async ({ page }) => {
    await page.goto('https://www.ilovepdf.com/pdf_to_word');

    let folderPath = "C:/Users/Lenovo/OneDrive/Desktop/Code N Notes Upto Aug 11 2025/JavaScript Notes PDFs/";
    let file1 = "1 JavaScript Introduction.pdf";
    let file2 = "2 JavaScript Variables, let, const.pdf";

    const fileChooserPromise = page.waitForEvent('filechooser');
    const fileUploadBtn = await page.locator("#pickfiles");
    await fileUploadBtn.click();

    const filechooser = await fileChooserPromise;
    //await filechooser.setFiles([folderPath+file1, folderPath+file2]);
    await filechooser.setFiles(folderPath+file1);
    await page.waitForTimeout(2000);

    const fileExistDtls = await page.locator('//div[@id="dropArea"]/following-sibling::div[3]/div/div[3]/span');
    await expect(fileExistDtls).toHaveText(file1);
    console.log(`verified the file uploaded ${file1} is listed`);

});