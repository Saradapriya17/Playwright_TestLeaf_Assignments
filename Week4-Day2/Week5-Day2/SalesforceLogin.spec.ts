import {loginProcess} from "./loginProcess.spec";
import {test} from "@playwright/test";

test("Validate Login Page In Salesforce Application using POM", async({page})=>{
    const SalesforceObj = new loginProcess(page);
    await SalesforceObj.loadUrl("https://login.salesforce.com");
    await SalesforceObj.addCredentials("saradapriya.saravanan.3212fd59b97c@agentforce.com","Sara_priya1720")
    await SalesforceObj.clickLogin();
})

//npx playwright test SalesforceLogin.spec.ts