import {test} from "@playwright/test";

test.use({storageState: "../Data/LoginBypass.json"});

test("Salesforce Homepage", async({page}) =>{

    await page.goto("https://orgfarm-64de35b545-dev-ed.develop.lightning.force.com/lightning/page/home");
    //await page.getByRole("button", {name: "App Launcher" , exact : true }).click();
    await page.getByRole("button", {name: "Show more navigation items",  exact : true}).click();
    await page.locator('//span[text()="Cases"]/parent::span').click();
    const caseRow = await page.locator("tr").filter({hasText: "00001035"});
    await caseRow.getByRole("button").click();
    await page.getByRole("menuitem", {name: "Edit", exact: true }).click();
    await page.getByRole("combobox", {name: "Status"}).click();
    await page.getByRole("option", {name: "Working"}).click();
    await page.getByRole("combobox", {name: "Priority"}).click();
    await page.getByRole("option", {name: "Low"}).click();
    await page.getByRole("combobox", {name: "Case Origin"}).click();
    await page.getByRole("option", {name: "Phone"}).click();
    await page.getByRole("combobox", {name: "SLA Violation"}).click();
    await page.getByRole("option", {name: "No", exact: true}).click();
    await page.getByRole("button", {name: "Save", exact: true}).click();
    await page.pause();

})