import { test, expect } from '@playwright/test';
import { FaceBookSignUpPage } from './FaceBookSignUpPage';

test('Fill values in Face Book Sign Up Page', async ({ page }) => {
     const facebookPage = new FaceBookSignUpPage(page);
     await facebookPage.getFaceBookSignUpPage();
    await expect(page).toHaveTitle(/Sign up for Facebook/);

    //await facebookPage.getErrorMsg();
    //facebookPage.

    await facebookPage.signUpFaceBook();
});