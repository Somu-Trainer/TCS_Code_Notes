import { test, expect } from '@playwright/test';

test.beforeEach('Before each test', async ({ page }) => {
    console.log("Starting The Test");
  await page.goto('https://playwright.dev/');
});

test.afterEach('Before each test', async ({ page }) => {
    console.log("Done with This Test");
});

test.beforeAll('Before All Tests', async ({ page }) => {
console.log("Before all tests");
});

test.afterAll('After all tests', async ({ page }) => {
console.log("After all tests");
});

test.describe('This is a test grouping / suite', () => {
    test.describe.configure({retries: 3});
    test('has title4', async ({ page }) => {
  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });

    test('has title5', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });

    test('has title6', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });
  });

test('has title1', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
    test.step('has title1', () => {
        expect(page).toHaveTitle(/Playwright/);
    });
});

//Doesn't work individually
    // test.step('has title1', ({page}) => {
    //     expect(page).toHaveTitle(/Playwright/);
    // });

test('has title2', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title3', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});