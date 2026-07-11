import {expect,test} from "@playwright/test";

test("Dropdown Interactions", async({page}) =>{
    await page.goto("https://leafground.com/select.xhtml");

    //Fav UI Automation tool
    const options = await page.locator('(//select[@class="ui-selectonemenu"]/option)');
    const count = await options.count();
    console.log(`Number of options: ${count}`);
    console.log("The options are:");
    for(let i = 1;i<=count;i++)
    {
        const text = await page.locator(`(//select[@class="ui-selectonemenu"]/option[${i}])`).innerText();
        console.log(text);
    }
    await page.locator('//select[@class="ui-selectonemenu"]').selectOption('Playwright');

    //Preferred country
    await page.locator('(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[1]').click();
    await page.getByRole("option" ,{name:"India"}).click();
    await page.waitForTimeout(3000);

    //Cities belonging to country
    await page.locator('(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[2]').click();
    await page.waitForTimeout(6000);
    await page.getByRole("option" ,{name:"Chennai"}).click();
    const cities = await page.locator('//div[contains(@id,"city_panel")]//li').allInnerTexts();
    await console.log(cities);
    
    //Course
    await page.locator('//span[@class = "ui-button-icon-primary ui-icon ui-icon-triangle-1-s"]').click();
    await page.waitForTimeout(2000);
    await page.locator('[data-item-label="Playwright"]').click();

    await page.locator('//span[@class = "ui-button-icon-primary ui-icon ui-icon-triangle-1-s"]').click();
    await page.waitForTimeout(2000);
    await page.locator('[data-item-label="Selenium WebDriver"]').click();

    await page.locator('//span[@class = "ui-button-icon-primary ui-icon ui-icon-triangle-1-s"]').click();
    await page.waitForTimeout(2000);
    await page.locator('[data-item-label="PostMan"]').click();
    await page.waitForTimeout(2000);

    //Language
    await page.locator('(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[3]').click();
    await page.locator('[data-label="English"]').click();
    const y = await page.locator('//div[contains(@id,"lang_panel")]//li').allInnerTexts();
    await console.log(y);
    
    //Select two
    await page.locator('(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[4]').click();
    await page.locator('[data-label="Two"]').click();
    await page.pause();



})