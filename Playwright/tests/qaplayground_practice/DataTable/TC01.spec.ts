import {test, expect} from '@playwright/test'

test("TC01: Verify all table column headers are present", async({page}) =>{
    await page.goto("https://qaplayground.com/practice/data-table")

    const colhead = await page.locator("thead th").allInnerTexts()
    console.log(colhead," ");
    
})