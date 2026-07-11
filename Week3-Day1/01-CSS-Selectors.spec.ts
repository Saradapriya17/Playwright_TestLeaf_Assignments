import { test } from "@playwright/test";

test("Interacting with elements with CSS", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.locator('//a[contains(text(),"Leads")]').click();
    await page.locator('//a[contains(text(),"Create Lead")]').click();

    await page.locator("#createLeadForm_companyName").fill("Testleaf");
    await page.locator("#createLeadForm_firstNameLocal").fill("DemoFirstname");
    await page.locator("#createLeadForm_lastNameLocal").fill("DemoLastname");
    await page.locator("#createLeadForm_personalTitle").fill("DemoSalutation");
    await page.locator("#createLeadForm_generalProfTitle").fill("DemoTitle");
    await page.locator("#createLeadForm_annualRevenue").fill("DemoAR");
    await page.locator("#createLeadForm_departmentName").fill("DemoDept");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890");
    await page.locator(".smallSubmit").click();
    const title = await page.title();
    console.log(`Title of the page: ${title}`);
})

