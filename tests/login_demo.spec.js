import {test, expect}from '@playwright/test';
import { timeout } from '../playwright.config';

test('Demo login Test 1',async({page})=>{

    await page.goto("https://demo.applitools.com/");
    await page.locator("//input[@id='username']").fill('standard_user');
    await page.locator( "//input[@id='password']").fill('secret_sauce');
 
    await page.locator("text=Sign in").visible;
    await page.locator('text=Sign in').click();
    // await page.getByRole('link', { name: 'Sign in' }).click();
    // await page.waitForSelector("//div[@class='balance-value']", {timeout: 5000});
   
    // await page.pause();
});

test.only('Demo login Test 2',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByText('Antonio Estrellas').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
     await page.pause();
});