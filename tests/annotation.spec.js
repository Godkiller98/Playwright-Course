
import {test, expect} from '@playwright/test'

test.skip('skip', async({page})=>{
    //This test will be skipped
})

test('not yet ready', async({page})=> {
    test.fail();
  });

test.fixme('test to be fixed', async({page})=> {
});

test('slow test', async({page})=> {
    test.slow();
  });

  test.only('focus this test', async({page})=> {
    // Run only focused tests in the entire project
  });

  test('skip this test', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');
  });