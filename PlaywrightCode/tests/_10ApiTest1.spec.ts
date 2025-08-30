import { test, expect } from '@playwright/test';

test('API Test initial', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
});