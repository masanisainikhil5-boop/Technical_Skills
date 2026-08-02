# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: qaplayground_practice\dropdowns\dropdown.spec.ts >> Dropdowns Practice >> TC01: Select Apple from fruit dropdown by visible text
- Location: tests\qaplayground_practice\dropdowns\dropdown.spec.ts:8:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByTestId('dropdown-fruit')

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.describe('Dropdowns Practice', () =>{
  4  |     test.beforeEach(async({page}) =>{
  5  |     await page.goto("https://qaplayground.com/practice/dropdowns")
  6  |     })
  7  | 
  8  |     test('TC01: Select Apple from fruit dropdown by visible text', async({page}) =>{
  9  |     const drpdwn =  page.getByTestId("dropdown-fruit")
> 10 |     await drpdwn.click(); // Click to open
     |                  ^ Error: locator.click: Test ended.
  11 |     await page.getByRole('option', { name: 'Banana' }).click();  
  12 | 
  13 |     //await expect(drpdwn).toHaveText("Apple");
  14 |     
  15 |     //const selectedValue = await drpdwn.textContent();
  16 |     //console.log("Selected Value is:", selectedValue);
  17 | 
  18 |     const selectfruit = await drpdwn.innerText()
  19 | 
  20 |     const dropmsg = page.getByTestId("result-fruit")
  21 |     await expect(dropmsg).toContainText('Selected: ${selectfruit}', { ignoreCase: true })
  22 |     
  23 |     })
  24 | 
  25 |     test('TC01: Select India from country dropdown by visible text', async({page}) =>{
  26 |     const country = page.getByTestId("dropdown-country")
  27 |     await country.click()
  28 |     await page.getByRole('option', { name: 'India' }).click();  
  29 | 
  30 |     const selectcountry = await country.innerText()
  31 | 
  32 |     const msg = page.getByTestId("result-country")
  33 |     await expect(msg).toContainText(`Value: ${selectcountry}`, { ignoreCase: true })
  34 | 
  35 |     })
  36 | 
  37 |     test('TC03: Verify selected value is displayed after selection', async({page}) =>{
  38 |     const fruit = await page.getByTestId("dropdown-fruit").click()
  39 |     await page.getByText('Banana', { exact: true }).click();
  40 | 
  41 |     const selectfruit = page.getByTestId('result-fruit')
  42 |     await expect(selectfruit).toContainText("Banana", {ignoreCase: true})
  43 | 
  44 |     })
  45 | 
  46 |     test('TC04: Select Last Language and Read All Options', async({page}) =>{
  47 |         await page.getByTestId('language-select').click()
  48 |         await page.getByText('TypeScript', { exact: true}).click()
  49 | 
  50 |         const allvalues = page.locator('#languageSelect').allInnerTexts()
  51 |         await expect(page.locator('#languageSelect')).toHaveValue('Selected TypeScript; options: Python, Java, JavaScript, TypeScript')
  52 | 
  53 |     })
  54 | })
```