import {test, expect} from '@playwright/test'


test('TC01: Select Apple from fruit dropdown by visible text', async({page}) =>{
    await page.goto("https://qaplayground.com/practice/dropdowns")

    const country = page.getByTestId("dropdown-country")
    await country.click()
    await page.getByRole('option', { name: 'India' }).click();  

    const selectcountry = await country.innerText()

    const msg = page.getByTestId("result-country")
    await expect(msg).toContainText(`Value: ${selectcountry}`, { ignoreCase: true })


})