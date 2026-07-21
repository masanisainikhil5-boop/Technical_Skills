import {test,expect} from '@playwright/test'

test.describe('Javascript Alerts', () =>{

    test.beforeEach(async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    })

    test('JS alert 1', async({page}) =>{
        page.once('dialog',async dialog =>{
            console.log('Alert type:', dialog.type());
            console.log('Alert message', dialog.message());
            expect (dialog.message()).toBe('I am a JS Alert')
            await dialog.accept()
            
        })

        await page.getByRole('button', {name: 'Click for JS Alert'}).click()
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    })

    test('JS Alert 2', async({page}) =>{
        page.once('dialog', async dialog =>{
            console.log('Alert type:', dialog.type());
            console.log('Alert message:', dialog.message());
            expect(dialog.message()).toBe('I am a JS Confirm')
            await dialog.accept()
        })
        await page.getByRole('button', {name: 'Click for JS Confirm'}).click()
        await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    })

    test('JS alert 3', async({page})=>{

        const inputText = 'Hello from The Testing Academy';
        page.once('dialog', async dialog =>{
            console.log('Alert type:', dialog.type());
            console.log('Alert message:', dialog.message());
            expect(dialog.message()).toBe('I am a JS prompt')
            await dialog.accept(inputText)
        })

        await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);

    })
})