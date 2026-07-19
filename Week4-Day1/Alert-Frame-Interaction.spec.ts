import {test, expect} from "@playwright/test";

test("Alert Interaction", async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    
    //Alert Listener
    page.on("dialog",async(allalert)=>{
    const alertType = allalert.type();
    await console.log(`The type of the alert: ${alertType}`);
    await allalert.accept();
    });
    
    //Interacting with the button inside frame
    const frameItem = await page.frameLocator("#iframeResult");
    await frameItem.getByRole("button",{name: "Try it", exact: true}).click();
    const textOutput = await frameItem.locator("#demo").innerText();
    await expect(textOutput).toBe("You pressed OK!");
    console.log(`The message received: ${textOutput}`);
    await page.pause();
})