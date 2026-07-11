import { expect,test} from "@playwright/test";

test("Radio button Interactions",async({page})=>{

    await page.goto("https://leafground.com/radio.xhtml");

    //Fav Browser
    const browserItems = await page.locator('(//table[contains(@id,"console1")]//input)');
    const browserItemsCount = await browserItems.count();  
    let browserEnableStatusCount = 0;
    for(let i = 1; i<= browserItemsCount;i++){
        const favBrowserName = await page.locator(`(//table[contains(@id,"console1")]//input)[${i}]/parent::div/parent::div/following-sibling::label`).innerText();
        const browserEnableStatus = await page.locator(`(//table[contains(@id,"console1")]//input)[${i}]`).isEnabled();
        if(browserEnableStatus)
        {
            browserEnableStatusCount+=1;
        }

        await expect(await page.locator(`(//table[contains(@id,"console1")]//input)[${i}]`)).toBeEnabled();
        
        if(favBrowserName === "Safari")
        {
            await page.locator(`(//table[contains(@id,"console1")]//input)[${i}]/parent::div/parent::div/following-sibling::label`).click();
        }
    }
    if(browserEnableStatusCount === 4)
    {
        console.log("All the Fav browser options are enabled");
    }

    //Cities
    await page.getByText("Bengaluru").click();
    
    //Find default browser and select other option
    const items = await page.locator('(//table[contains(@id,"console2")]//input)');
    const browserCount = await items.count();
    for(let i =1;i<=browserCount;i++)
    {
        const value = await page.locator(`(//table[contains(@id,"console2")]//input)[${i}]`).getAttribute('checked');
        if(value)
        {
            const defaultOption = await page.locator(`(//table[contains(@id,"console2")]//input)[${i}]/parent::div/parent::div/following-sibling::label`).innerText();
            console.log(`The default check box :${defaultOption}`);
            await expect(defaultOption).toBe("Safari");
            break;
        }

    }
    for(let i =1;i<=browserCount;i++)
    {
        const value1 = await page.locator(`(//table[contains(@id,"console2")]//input)[${i}]/parent::div/parent::div/following-sibling::label`).innerText();
        if(value1 === "Firefox")
        {
            await page.locator(`(//table[contains(@id,"console2")]//input)[${i}]/parent::div/parent::div/following-sibling::label`).click();
            break;
        }

    }

    //Find default Age group and select one option
    const ageItems = await page.locator('//div[contains(@id,"age")]//input');
    const ageCount = await ageItems.count();
    for (let i = 1;i <= ageCount ;i++){
        const checkStatus = await page.locator(`(//div[contains(@id,"age")]//input)[${i}]`).getAttribute('checked');
        if (checkStatus)
        {
            const defaultAge = await page.locator(`(//div[contains(@id,"age")]//input)[${i}]/parent::div/parent::div/following-sibling::label`).innerText();
            console.log(`The default age group:${defaultAge}`)
            expect(defaultAge).toBe('21-40 Years');
            break;
        }
    }
    await page.getByText("1-20 Years").click();


    await page.pause();


})