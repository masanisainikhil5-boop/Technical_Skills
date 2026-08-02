import {test, expect} from '@playwright/test'
import path from 'path'
import logindata from './registration-data.json'

test.describe('DDT JSON', () =>{
    test.beforeEach(async({page}) =>{
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter')
    })

    test.afterEach(async({}, testinfo) =>{
         console.log(`afterEach: ${testinfo.title} — status: ${testinfo.status}`);
    })

    for( const data of logindata){
        test(`Login with : ${data.description}`, async ({ page }) => {

            const textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            const textboxPassword = page.getByRole("textbox", { name: "Password" })
            const buttonLogin = page.getByRole("button", { name: "Login to Practice Account" })
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLogin.click();

            if (data.shouldPass) {
                await expect(page).not.toHaveURL(/multiple_element_filter/);
            } else {
                await expect(page.getByText(data.expectedError)).toBeVisible();
            }
    })
}
})
