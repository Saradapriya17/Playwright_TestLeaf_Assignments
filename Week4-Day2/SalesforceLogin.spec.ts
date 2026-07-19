import {test} from "@playwright/test";

test("Saleforce Application Login bypass", async({page})=>{

    await page.goto("https://login.salesforce.com");
    await page.locator("#username").fill("saradapriya.saravanan.3212fd59b97c@agentforce.com");
    await page.locator("#password").fill("Sara_priya1720");
    await page.locator("#Login").click();
    await page.getByRole("button", {name: "App Launcher" , exact : true }).click();
    await page.context().storageState({path : "Data/LoginBypass.json"});

})