import { type Locator, type Page, expect } from "@playwright/test";

export  class FaceBookSignUpPage{
    //By email = By.id("idVal");
    readonly page: Page;
    readonly firstNameTxtBox: Locator;
    readonly surNameTxtBox: Locator;
    readonly emailTxtBox: Locator;
    readonly errorMsg1: Locator;
    readonly signUpBtn: Locator
    
    constructor(page: Page){
        this.page = page;
        this.firstNameTxtBox = page.getByRole('textbox', {name: "First name"});
        this.surNameTxtBox = page.getByRole('textbox', {name: "Surname"});
        this.emailTxtBox = page.getByRole('textbox', {name: "Mobile number or email address"});
        this.errorMsg1 = page.locator("(//div[starts-with(@id, 'js_')])[2]");
        this.signUpBtn = page.locator('//button[@name="websubmit"]');
    }

    async getFaceBookSignUpPage(){
        await this.page.goto('https://www.facebook.com/r.php?entry_point=login');
    }

    async signUpFaceBook(){
        await this.firstNameTxtBox.fill("Rajesh");
        await this.surNameTxtBox.fill("Khanna");
        await this.emailTxtBox.fill("rajesh001@gmail.com");
    }

    async getErrorMsg(){
        await this.signUpBtn.click();
        const errorMsg1 = await this.errorMsg1.innerText();
        console.log(errorMsg1);

        await expect(errorMsg1).toContain("What's your name?");
    }
}