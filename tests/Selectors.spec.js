import {test, expect} from "@playwright/test";

test("Selectors Demo", async ({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
 
    // await page.click('//input[@name="user-name"]');
    await page.locator('//input[@name="user-name"]').fill('standard_user');
    // await page.fill('//input[@name="user-name"]', 'standard_user');
    await page.click('//input[@name="password"]');
    await page.fill('//input[@name="password"]', 'secret_sauce');
    await page.click('//input[@type="submit"]');
    await page.pause();

});