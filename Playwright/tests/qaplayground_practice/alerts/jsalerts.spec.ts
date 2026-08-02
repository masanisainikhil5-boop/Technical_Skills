import {test, expect} from '@playwright/test'
import { log } from 'node:console'
import { describe } from 'node:test'

test.describe('JS Alerts', () =>{
    test.beforeEach(async({page})=>{
        await page.goto('https://qaplayground.com/practice/alerts-dialogs')
    })

    test('JS Alert 1 - Close Info Alert Dialog', async ({ page }) => {
    await page.getByTestId('open-info-dialog').click();

    // Fix: Specify the role 'heading' to avoid matching multiple elements
    await expect(page.getByRole('heading', { name: 'Session Notice' })).toBeVisible();

    await page.getByRole('button', { name: 'Got It' }).click();

    await expect(page.locator('#result-s01')).toHaveText('Info dialog dismissed');
});

    test('JS Alert 2', async({page}) =>{
        await page.getByRole('button',{name: 'Open Confirm Dialog'}).click()
        await expect(page.locator('#confirm-dialog-title')).toBeVisible()

        await page.getByTestId('confirm-ok-btn').click()

        await expect(page.locator('#result-s02')).toHaveText('Submission confirmed!')

    })

    test('JS Alert 3', async({page}) =>{
        await page.getByTestId('open-unsaved-dialog').click()
        await expect(page.locator('#unsaved-dialog-title')).toBeVisible()

        await page.getByTestId('stay-on-page-btn').click()

        await expect(page.locator('#result-s03')).toHaveText('Stayed — changes preserved')
    })
})