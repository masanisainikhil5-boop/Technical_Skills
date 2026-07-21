import {test, expect} from '@playwright/test'


test('TC03: Verify selected value is displayed after selection', async({page}) =>{
    await page.goto("https://qaplayground.com/practice/dropdowns")

    const fruit = await page.getByTestId("dropdown-fruit").click()
    await page.getByText('Banana', { exact: true }).click();

    const selectfruit = page.getByTestId('result-fruit')
    await expect(selectfruit).toContainText("Banana", {ignoreCase: true})


})