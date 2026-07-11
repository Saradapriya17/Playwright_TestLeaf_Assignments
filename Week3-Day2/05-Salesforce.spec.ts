import {test,expect} from"@playwright/test";

test("Saleforce Application interaction", async({page})=>{

    //1. Create Lead
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").fill("saradapriya.saravanan.3212fd59b97c@agentforce.com");
    await page.locator("#password").fill("Sara_priya1720");
    await page.locator("#Login").click();
    await page.locator(".slds-icon-waffle").click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//div[@class="slds-app-launcher__tile slds-text-link_reset slds-is-draggable" and @data-name="Sales"]').click();
    await page.locator('//span[@class="slds-truncate" and text()="Leads"]').click();
    await page.getByRole("button", {name : "New", exact: true}).click();
    await page.getByRole("combobox",{name: "Salutation"}).click();
    await page.getByRole("option",{name: "Mrs."}).click();
    await page.locator('[name="lastName"]').fill("S");
    await page.locator('[name="Company"]').fill("Testleaf");
    await page.getByRole("button", {name : "Save",exact: true}).click();
    const nameVerify = await page.locator('//slot[@name="primaryField"]').innerText();
    await expect(nameVerify).toBe("Mrs. S");


    //2.Edit Lead
    await page.locator(".slds-icon-waffle").click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//div[@class="slds-app-launcher__tile slds-text-link_reset slds-is-draggable" and @data-name="Sales"]').click();
    await page.locator('//span[@class="slds-truncate" and text()="Leads"]').click();
    await page.getByRole("button",{name: "Show Actions"}).first().click();
    await page.locator('//a[@title="Edit"]').click();
    await page.locator('[name="lastName"]').fill("SA");
    await page.getByRole("button", {name : "Save",exact: true}).click();
    const nameVerify1 = await page.locator('//slot[@name="primaryField"]').innerText();
    await expect(nameVerify1).toBe("Mrs.  SA");
    

    //3. Create Individual
    await page.locator(".slds-icon-waffle").click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//p[text()="Individuals"]').click();
    await page.getByRole("button",{name: "Individuals List"}).click();
    await page.locator('//span[text()="New Individual"]').click();
    await page.locator('//input[@placeholder="Last Name"]').fill("Sar");
    await page.getByRole("button", {name : "Save",exact: true}).click();
    const nameVerify2 = await page.locator('//div[@class="slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text-slds-plus"]').innerText();
    await expect(nameVerify2).toBe("Sar");
    

    //4. Edit Individual
    await page.locator(".slds-icon-waffle").click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//p[text()="Individuals"]').click();
    await page.getByRole('link', { name: '* Sar' }).click();
    await page.getByRole('searchbox', { name: 'Search this list...' }).fill(`${nameVerify2}`);
    await page.keyboard.press('Enter');
    await page.getByRole('button', { name: 'Show more actions' }).click();
    await page.locator('//div[@title="Edit" and @class="forceActionLink"]').click();
    await page.locator('(//span[text()="--None--"])[1]').click();
    await page.getByRole("option",{name: "Mrs."}).click();
    await page.locator('//input[@placeholder="First Name"]').fill("S");
    await page.getByRole("button", {name : "Save",exact: true}).click();
    const nameVerify3 = await page.locator('(//a[@class="slds-truncate" and @title="S Sar"]/slot/span)[1]').innerText();
    await expect(nameVerify3).toBe("S Sar");

})


