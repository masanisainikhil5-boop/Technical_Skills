import {test, expect} from '@playwright/test'


test('TC01: Select Apple from fruit dropdown by visible text', async({page}) =>{
    await page.goto("https://qaplayground.com/practice/dropdowns")
    
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