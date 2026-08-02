import { test, expect } from '@playwright/test';
import path from 'path';
import { readCSV } from './csvReader';

test.describe('DDT CSV', () =>{
    const loginData = readCSV(path.join(__dirname, 'login-data.csv'))

    for(const data of loginData){
        test(`Login with: ${data.description}`, async({page}) =>{
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter')

            let emailadd = page.getByRole('textbox', {name: 'Email Address'})
            let password = page.getByRole('textbox', {name: 'Password'})
            let loginbutton = page.getByText('Login to Practice Account')

            await emailadd.fill(data.username)
            await password.fill(data.password)
            await loginbutton.click()

            await expect(page).toHaveURL(data.expectedURL);
        })
    }
})