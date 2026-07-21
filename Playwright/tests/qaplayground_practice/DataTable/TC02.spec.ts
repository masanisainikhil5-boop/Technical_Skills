import {test, expect} from '@playwright/test'

test("TC02: Count the total number of rows in the data table", async({page}) =>{
    await page.goto("https://qaplayground.com/practice/data-table")

    const rowhead = page.locator("table").first().locator("tbody tr")
    await expect(rowhead).toHaveCount(10)

    const innerrows = await rowhead.allInnerTexts()
    console.log(innerrows);

    
    
})