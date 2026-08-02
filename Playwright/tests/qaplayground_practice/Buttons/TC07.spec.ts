import {test,expect} from '@playwright/test'

test('Right click the button', async({page}) =>{
    await page.goto('https://qaplayground.com/practice/buttons')

    await page.getByText('Right Click Me').click({ button: 'right' })
    const result =  page.locator('#result-s08')

    await expect(result).toHaveText('Context menu triggered!')
})