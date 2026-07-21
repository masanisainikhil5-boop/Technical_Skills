import {test, expect} from '@playwright/test'

test('TC06: Verify disabled button cannot be clicked', async({page}) => {
    await page.goto("https://qaplayground.com/practice/buttons")

    const btndisable =  page.getByTestId("btn-disabled")
    await expect(btndisable).toBeDisabled()
    await btndisable.click({force: true})
    
    const resultmsg = page.locator("#btn-action-result")
    await expect(resultmsg).toContainText("No action performed yet.")
})