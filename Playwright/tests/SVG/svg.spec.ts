import {test,expect, Locator} from '@playwright/test'

test.describe('Handle SVG Elements', () =>{
    test.beforeEach(async({page}) =>{
        page.goto('https://www.flipkart.com/search')
    })

    test('Handle SVG', async({page}) =>{
        page.getByPlaceholder('Search for products, brands and more').fill('Macmini')
        
        const svgelements = page.locator('svg')
        await svgelements.first().click()

        const firstresult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]')
        await expect(firstresult.first()).toBeVisible({ timeout: 15000 });

        const titlesResults: Locator = page.locator(
            "//div[contains(@data-id,'CPU') or contains(@data-id,'MP')]/div/a[2]"
        );

        const count: number = await titlesResults.count();
        console.log(`Total products found: ${count}`);

        for (let i = 0; i < count; i++) {
            const title: string | null = await titlesResults.nth(i).textContent();
            console.log(title?.trim());
        }

        await page.waitForTimeout(5000);
    })
})