import {test, expect} from '@playwright/test'

test.describe('Dropdowns Practice', () =>{
    test.beforeEach(async({page}) =>{
    await page.goto("https://qaplayground.com/practice/dropdowns")
    })

    test('TC01: Select Apple from fruit dropdown by visible text', async({page}) =>{
    const drpdwn =  page.getByTestId("dropdown-fruit")
    await drpdwn.click(); // Click to open
    await page.getByRole('option', { name: 'Banana' }).click();  

    //await expect(drpdwn).toHaveText("Apple");
    
    //const selectedValue = await drpdwn.textContent();
    //console.log("Selected Value is:", selectedValue);

    const selectfruit = await drpdwn.innerText()

    const dropmsg = page.getByTestId("result-fruit")
    await expect(dropmsg).toContainText('Selected: ${selectfruit}', { ignoreCase: true })
    
    })

    test('TC01: Select India from country dropdown by visible text', async({page}) =>{
    const country = page.getByTestId("dropdown-country")
    await country.click()
    await page.getByRole('option', { name: 'India' }).click();  

    const selectcountry = await country.innerText()

    const msg = page.getByTestId("result-country")
    await expect(msg).toContainText(`Value: ${selectcountry}`, { ignoreCase: true })

    })

    test('TC03: Verify selected value is displayed after selection', async({page}) =>{
    const fruit = await page.getByTestId("dropdown-fruit").click()
    await page.getByText('Banana', { exact: true }).click();

    const selectfruit = page.getByTestId('result-fruit')
    await expect(selectfruit).toContainText("Banana", {ignoreCase: true})

    })

    test('TC04: Select Last Language and Read All Options', async({page}) =>{
        const langdrop = page.locator('#languageSelect')
        await langdrop.selectOption('TypeScript')

        await page.locator('#selectLastLanguageBtn').click()

        const allvalues = await langdrop.locator('option').allInnerTexts()
        await expect(page.locator('#languageSelect')).toHaveValue('typescript')

        console.log(allvalues);
        
    })
})