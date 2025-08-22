import { test, expect } from '@playwright/test';

test('Upload files for input type', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    let folderPath = "C:/Users/Lenovo/OneDrive/Desktop/Code N Notes Upto Aug 11 2025/JavaScript Notes PDFs/";
    let file1 = "1 JavaScript Introduction.pdf";
    let file2 = "2 JavaScript Variables, let, const.pdf";

    const uploadElement = await page.locator("#filesToUpload");
    // await uploadElement.setInputFiles(folderPath+file1);
    await uploadElement.setInputFiles([folderPath+file1, folderPath+file2]);
    await page.waitForTimeout(2000);

    const checkUploadedFileName = await page.locator("#fileList");
    console.log(await checkUploadedFileName.textContent());
    await expect(checkUploadedFileName).toHaveText(file1 + file2);
});