import {expect, test} from "@playwright/test";

test("Checkbox Interation", async({page}) =>{

    await page.goto("https://leafground.com/checkbox.xhtml");
    await page.waitForTimeout(2000);
    //Basic
    await page.locator('(//div[@class= "ui-chkbox-box ui-widget ui-corner-all ui-state-default"])[1]').click();

    //Ajax(check and uncheck)
    await page.locator('(//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"])[1]').click();
    await page.locator('(//span[@class="ui-chkbox-icon ui-icon ui-c ui-icon-check"])[2]').click();
    await page.waitForTimeout(1000);
    const textPopupAjax = await page.locator('//span[@class="ui-growl-title"]').textContent();
    await expect(textPopupAjax).toBe("Unchecked");

    //Fav Language
    await page.locator('//label[text()="Java"]').click();
    await page.locator('//label[text()="Python"]').click();
    await page.locator('//label[text()="Javascript"]').click();
    await page.locator('//label[text()="C-Sharp"]').click();

    //Tri-state( focusing state 2 )
    await page.locator('(//div[@class="ui-chkbox ui-widget"])[6]').click();
    await page.locator('(//div[@class="ui-chkbox ui-widget"])[6]').click();
    await page.waitForTimeout(1000);
    const textState = await page.getByText('State =').textContent();
    console.log(textState); 
    await page.waitForTimeout(8000);

    //Toggle switch
    await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
    await page.waitForTimeout(1000);
    const textPopup = await page.locator('//span[@class="ui-growl-title"]').textContent();
    await expect(textPopup).toBe("Checked");

    //Disabled checkbox
    await expect(page.getByLabel("Disabled")).toBeDisabled();

    //Select Multiple
    await page.locator('//span[@class="ui-icon ui-icon-triangle-1-s"]').click();
    await page.locator('(//label[text()="Miami"])[2]').click();
    await page.locator('(//label[text()="London"])[2]').click();
    console.log(await page.locator('(//ul[@class="ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all"])//span[2]').allTextContents());
    await page.pause();

})

