import {expect, test} from "@playwright/test";

test("Decathlon", async({page})=>{
    await page.goto("https://www.decathlon.in/");
    const text1 = await page.locator('//span[@data-test-id="search-input-desktop:animation-keyword"]').innerText();
    await page.waitForTimeout(1000);
    const text2 = await page.locator('//span[@data-test-id="search-input-desktop:animation-keyword"]').innerText();
    if(text1 !== text2)
    {
        console.log("The text is dynamic before clicking search");
    }

    const text3 = await page.locator('//input[@type="search"]').getAttribute('placeholder');
    await page.waitForTimeout(1000);
    const text4 = await page.locator('//input[@type="search"]').getAttribute('placeholder');
    if(text3 === text4)
    {
        console.log("The text remains static after clicking search");
    }

    const searchStatus = await page.locator('//input[@type="search"]').isEnabled();
    expect(searchStatus).toBeTruthy();

    await page.getByRole("search").click();
    await page.locator('//input[@type="search"]').fill("Shoes");
    await page.locator('//input[@type="search"]').press('Enter');
    const title = await page.title();
    await console.log(`The title is ${title}`);
    await expect(title).toBe('Search | Shoes');
    await page.waitForTimeout(2000);
    await page.locator('//span[@data-test-id="title:Sport"]').click();
    await page.locator('//label[@data-test-id="filter-item-sport_pratice_en-Running"]').click();
    
    await page.getByRole("button",{name: "Gender"}).click();
    await page.locator('//label[@data-test-id="filter-item-gender_id_en-MEN"]').click();
    await page.getByRole("button",{name: "Size"}).click();
    await page.locator('//label[@data-test-id="filter-item-indian_size-UK 10.5 - EU 45"]').click();
    await page.getByRole("button",{name: "Most relevant"}).click();
    await page.getByRole("option",{name: "Price (high → low) "}).click();
    await page.waitForTimeout(4000);
    await page.locator('//div[@class="overflow-hidden bg-white transition-shadow"][2]').click();

    await page.waitForTimeout(4000);

    await page.getByRole("button",{name: "UK 10.5 - EU 45"}).click();
    await page.getByRole("button",{name: "Add to cart"}).click();


    const popupStatus = await page.locator('//h3[text()="Product(s) added to cart"]').isVisible();
    if(popupStatus)
    {
        console.log("The popup message is displayed");
    }

    await page.waitForTimeout(4000);
    await page.getByLabel("Cart").click();
    
    const totalAmount = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]').innerText();
    await console.log(`Total Amount:${totalAmount}`);


    await page.pause();

})