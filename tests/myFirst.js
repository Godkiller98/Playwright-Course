const {test, expect} = require("@playwright/test");
 const{hello,helloWorld} = require("./Demo/hello.js");


test("Google", async ({page})=>{
   await page.goto("https://google.com");
   expect(page).toHaveTitle('Google');
   page.pause();
}) 
