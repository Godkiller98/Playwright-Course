

const { test, expect } = require('@playwright/test');
const { hello, helloWorld } = require("./Demo/hello.js");


test('homepage has title and links to intro page', async ({ page, context }) => {
  
  await context.tracing.start({ screenshots: true, snapshots: true });
  await page.goto('https://Google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Google');
 
  await context.tracing.stop({ path: 'trace1.zip' });
  // // create a locator
  // const getStarted = page.getByRole('link', { name: 'Get started' });

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();

  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);

  await page.pause();
});


