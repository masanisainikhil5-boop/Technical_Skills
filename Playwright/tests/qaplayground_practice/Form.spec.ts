import {test, expect} from '@playwright/test'

test('Form Automation Complete',async({page}) =>{

    await page.goto("https://qaplayground.com/practice/forms")

    await page.getByTestId("input-first-name").fill("Mark")
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Johnson')
    await page.getByRole('textbox', { name: 'Email' }).fill('Markson@gmail.com')
    await page.getByRole('textbox', { name: 'Phone' }).fill('115482763')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Johnson')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Johnson')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Johnson')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Johnson')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Johnson')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Johnson')
})