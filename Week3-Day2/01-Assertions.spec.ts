import { expect, test } from "@playwright/test";

test("Assertions", async({page})=>{
    await page.goto("https://leafground.com/input.xhtml");

    await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled();
    await expect(page.locator('//input[@placeholder="Babu Manickam"]')).toBeEditable();
    await page.locator('//input[@placeholder="Babu Manickam"]').fill("DemoName");
    await expect.soft(page.locator('//input[@value="Chennai"]')).toBeDisabled();
    await page.locator('//input[@value="Can you clear me, please?"]').fill("Playwright Learning");
    await page.pause();
})