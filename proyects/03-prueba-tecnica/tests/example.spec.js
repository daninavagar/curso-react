// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'

test('app go to url', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  const firstWord = textContent?.split(' ')[0]
  const keyWord = imageSrc?.split('/').pop()
  console.log(imageSrc);
  await expect(firstWord).toEqual(keyWord);

})
