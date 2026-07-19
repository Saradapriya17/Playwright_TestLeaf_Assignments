import {test, expect} from "@playwright/test";

test("Playwright Locators", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.getByRole("button",{name: "Login", exact : true}).click();
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.getByRole("link",{name: "Leads", exact: true}).click();
    await page.getByRole("link",{name: "Create Lead", exact: true}).click();
    await page.locator("#createLeadForm_companyName").fill("Testleaf");
    await page.locator("#createLeadForm_firstName").fill("Sara");
    await page.locator("#createLeadForm_lastName").fill("Priya");
    await page.locator("#createLeadForm_personalTitle").fill("Ms");
    await page.locator("#createLeadForm_generalProfTitle").fill("Engg");
    await page.locator("#createLeadForm_annualRevenue").fill("200000");
    await page.locator("#createLeadForm_departmentName").fill("IT");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890");
    await page.locator('//input[@value="Create Lead"]').click();
    for(let i=1;i<=4;i++)
    {
        const fieldKey = await page.locator(`(//div[@class="fieldgroup-body"]//span[@class="requiredField"])[${i}]`).innerText();
        const fieldValue = await page.locator(`(//div[@class="fieldgroup-body"]//span[@class="tabletext"])[${i}]`).innerText();
        console.log(`${fieldKey}: ${fieldValue}`);
        if(i === 1)
        {
            await expect(fieldValue).toContain("Testleaf");
        }
        else if(i === 2)
        {
            await expect(fieldValue).toBe("Sara");
        }
        else if(i === 3)
        {
            await expect(fieldValue).toBe("Priya");
        }
        else
        {
            await expect(fieldValue).toBe("Assigned");
        }
    }
    const pageTitle = await page.title();
    console.log(pageTitle);
    await page.pause();
 
})

test("Edit Leads", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.getByRole("button",{name: "Login", exact : true}).click();
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.getByRole("link",{name: "Leads", exact: true}).click();
    await page.getByRole("link",{name: "Find Leads",exact: true}).click();
    await page.getByRole("textbox",{name: "First name:"}).fill("Sara");
    await page.getByRole("button",{name: "Find Leads", exact: true}).click();
    await page.locator('(//td[@class="x-grid3-col x-grid3-cell x-grid3-td-firstName "]/div/a[text()="Sara"])[1]').click();
    await page.getByRole("link",{name: "Edit", exact: true});
    await page.locator("#updateLeadForm_companyName").fill("testleaf1");
    await page.locator("#updateLeadForm_annualRevenue").fill("300000");
    await page.locator("#updateLeadForm_departmentName").fill("Banking");
    await page.locator("#updateLeadForm_description").fill("New updates");
    await page.getByRole("button",{name:"Update", exact: true}).click();

    const compName = await page.locator("#viewLead_companyName_sp").innerText();
    const annualRev = await page.locator("#viewLead_annualRevenue_sp").innerText();
    const deptName = await page.locator("#viewLead_departmentName_sp").innerText();
    const desc = await page.locator("#viewLead_description_sp").innerText();

    await expect(compName).toContain("testleaf1");
    await expect(annualRev).toBe("$300,000.00");
    await expect(deptName).toBe("Banking");
    await expect(desc).toBe("New updates");
    
    const pageTitle1 = await page.title();
    console.log(pageTitle1);
    await page.pause();
})

test("Salesforce",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("Username").fill("saradapriya.saravanan.3212fd59b97c@agentforce.com");
    await page.getByLabel("Password").fill("Sara_priya1720");
    await page.locator("#Login").click();
    const pageTitle2 = await page.title();
    const pageUrl = await page.url();
    await page.locator('[class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click();
    await page.getByRole('dialog').getByText("View All").click();
    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.locator('(//mark[text()="Service"])[1]').click();
    await page.locator('[title="Accounts"]').click();
    await page.getByRole("button",{name: "New", exact: true}).click();
    await page.locator('[name="Name"]').fill("Sarada");
    await page.locator('//button[@name="SaveEdit"]').click();
    const toastMsg = await page.locator('[class="toastMessage slds-text-heading--small forceActionsText"]').allInnerTexts();
    console.log(toastMsg);
    await page.pause();

})
