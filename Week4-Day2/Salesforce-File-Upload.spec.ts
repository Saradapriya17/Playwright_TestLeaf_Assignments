import {test, expect} from "@playwright/test";
import path from "node:path";

test.use({storageState: "Data/LoginBypass.json"})

test("Interactions using Playwright locators and uploading file", async({page})=>{
    await page.goto("https://orgfarm-64de35b545-dev-ed.develop.lightning.force.com/lightning/page/home");
    await page.getByRole("button", {name: "App Launcher" , exact : true }).click();
    await page.getByRole("button", {name: "View All Applications",  exact : true}).click();
    await page.getByRole("combobox",{name: "Search apps or items..."}).fill("Accounts");
    await page.waitForLoadState("domcontentloaded");
    await page.getByRole("link",{name: "Accounts"}).click();
    await page.getByRole("button",{name: "New", exact : true}).click();

    await page.getByRole("textbox",{name: "Account Name", exact : true}).fill("Sara");

    await page.getByRole("combobox",{name: "Rating", exact: true}).click();
    await page.getByTitle("Warm").click();

    await page.locator('//button[@aria-label="Type"]').click();
    await page.getByRole("option",{name: "Prospect", exact: true}).click();

    await page.getByRole("combobox",{name: "Industry", exact: true}).click();
    await page.getByTitle("Banking").click();

    await page.getByRole("combobox",{name: "Ownership", exact : true}).click();
    await page.getByRole("option",{name: "Public", exact: true}).click();

    await page.getByRole("button", {name: "Save", exact : true}).click();

    const accName = await page.locator('//slot[@name="primaryField"]/lightning-formatted-text').innerText();
    expect(accName).toBe("Sara");

    const [fUpload] = await Promise.all([page.waitForEvent("filechooser"), page.getByRole("button", { name:"Upload Files", exact: true }).click()]);
    await fUpload.setFiles(path.join(__dirname,"../Data/logo.png"));
    await page.getByRole("button",{name: "Done", exact: true}).click();
    
    await page.pause();

  

})