import {test, expect,chromium} from "@playwright/test";

test("Frame operations", async()=>{
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://leafground.com/frame.xhtml");

    //Button inside frame
    const frame1 = page.frameLocator('[src="default.xhtml"]');
    await frame1.locator('#Click').click();
    const clickButton1 = await frame1.locator('#Click').innerText();
    console.log(clickButton1);
    await expect(clickButton1).toBe("Hurray! You Clicked Me.");

    //Button inside nested frame
    const outerFrame = await page.frameLocator('[src="page.xhtml"]');
    const innerFrame = await outerFrame.frameLocator('[src="framebutton.xhtml"]');
    await innerFrame.locator('#Click').click()
    const clickButton2 = await innerFrame.locator('#Click').innerText();
    console.log(clickButton2);
    await expect(clickButton2).toBe("Hurray! You Clicked Me.");
    
    //Find frame count
    const frames = page.frames();
    console.log(frames.length); //it includes the main page
    await page.pause();

})