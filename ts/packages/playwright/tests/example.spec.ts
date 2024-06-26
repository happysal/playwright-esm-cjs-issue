import { test, expect } from '@playwright/test';
import { getRandomInt } from 'foobar-esm';

test('has title', async ({ page }) => {
  const param1 = getRandomInt(100);
  const param2 = getRandomInt(100);

  await page.goto(`https://example.com/?foo=${param1}&param=${param2}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Example/);
});
