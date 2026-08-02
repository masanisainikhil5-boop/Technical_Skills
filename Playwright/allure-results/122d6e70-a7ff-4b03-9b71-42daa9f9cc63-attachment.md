# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: qaplayground_practice\dropdowns\dropdown.spec.ts >> Dropdowns Practice >> TC04: Select Last Language and Read All Options
- Location: tests\qaplayground_practice\dropdowns\dropdown.spec.ts:46:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Select Last') resolved to 4 elements:
    1) <span class="min-w-0 flex-1 text-[14px] font-semibold text-foreground">Select Last Language and Read All Options</span> aka getByTestId('scenario-select-language').getByText('Select Last Language and Read')
    2) <button type="button" id="selectLastLanguageBtn" class="dropdowns-module__P6SCTq__actionBtn" aria-label="Select last programming language">Select Last</button> aka getByRole('button', { name: 'Select last programming' })
    3) <span>Select Last Language and Read All Options</span> aka getByTestId('progress-widget').getByText('Select Last Language and Read')
    4) <div class="mb-1 font-[family-name:var(--font-space-grotesk)] text-[16px] font-bold text-foreground">3. Select last option and read all options</div> aka getByText('3. Select last option and')

Call log:
  - waiting for getByText('Select Last')

```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('#languageSelect')
    - locator resolved to <select name="language" id="languageSelect" data-testid="language-select" data-list-id="language-options-2026" class="dropdowns-module__P6SCTq__practiceSelect">…</select>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "QA Playground home" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e6]
        - generic [ref=e7]: QA Playground
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
        - listitem [ref=e11]:
          - link "Practice" [ref=e12] [cursor=pointer]:
            - /url: /practice
        - listitem [ref=e13]:
          - link "Demo Apps" [ref=e14] [cursor=pointer]:
            - /url: /demo
        - listitem [ref=e15]:
          - link "Challenges" [ref=e16] [cursor=pointer]:
            - /url: /challenges
        - listitem [ref=e17]:
          - link "Blogs" [ref=e18] [cursor=pointer]:
            - /url: /blog
      - generic [ref=e19]:
        - button "Switch to dark mode" [ref=e20] [cursor=pointer]:
          - img [ref=e22]
        - link "Log in / Sign up" [ref=e24] [cursor=pointer]:
          - /url: /auth/sign-in
  - main [ref=e25]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - navigation "Breadcrumb" [ref=e31]:
          - generic [ref=e32]:
            - link "Home" [ref=e33] [cursor=pointer]:
              - /url: /
            - generic [ref=e34]: /
          - generic [ref=e35]:
            - link "Practice" [ref=e36] [cursor=pointer]:
              - /url: /practice
            - generic [ref=e37]: /
          - generic [ref=e39]: Dropdowns
        - generic [ref=e40]:
          - heading "Dropdown Automation Practice" [level=1] [ref=e41]
          - paragraph [ref=e42]: Master native select, multi-select, custom listbox, and searchable combobox interactions in Selenium, Playwright, and Cypress.
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: "01"
              - text: Beginner
            - generic [ref=e46]: 12 min
            - generic [ref=e47]: 6 scenarios
            - generic [ref=e48]: 14 test cases
      - generic [ref=e49]:
        - tablist "Practice page tabs" [ref=e50]:
          - generic [ref=e51]:
            - tab "Practice 6" [selected] [ref=e52]:
              - img [ref=e53]
              - generic [ref=e55]: Practice
              - generic [ref=e56]: "6"
            - tab "Test Cases 14" [ref=e57]:
              - img [ref=e58]
              - generic [ref=e61]: Test Cases
              - generic [ref=e62]: "14"
            - tab "Learn" [ref=e63]:
              - img [ref=e64]
              - generic [ref=e66]: Learn
        - tabpanel "Practice 6" [ref=e67]:
          - generic [ref=e69]:
            - region "Interactive Scenarios" [ref=e70]:
              - paragraph [ref=e71]: Interactive Scenarios
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]:
                    - generic [ref=e75]: S01
                    - generic [ref=e76]: Select Fruit by Visible Text
                  - generic [ref=e78]:
                    - generic [ref=e79]:
                      - generic [ref=e80]: Select Fruit
                      - combobox "Select Fruit" [ref=e81]:
                        - option "Select Fruit" [selected]
                        - option "Apple"
                        - option "Banana"
                        - option "Orange"
                    - generic [ref=e82]: No fruit selected
                    - button "💡 Show Hint" [ref=e83]
                - generic [ref=e84]:
                  - generic [ref=e85]:
                    - generic [ref=e86]: S02
                    - generic [ref=e87]: Select Country by Value Attribute
                  - generic [ref=e89]:
                    - generic [ref=e90]:
                      - generic [ref=e91]: Select Country
                      - combobox "Select Country" [ref=e92]:
                        - option "Select Country" [selected]
                        - option "Argentina"
                        - option "India"
                        - option "Japan"
                        - option "United States"
                    - generic [ref=e93]: No country selected
                    - button "💡 Show Hint" [ref=e94]
                - generic [ref=e95]:
                  - generic [ref=e96]:
                    - generic [ref=e97]: S03
                    - generic [ref=e98]: Select Last Language and Read All Options
                  - generic [ref=e100]:
                    - generic [ref=e101]:
                      - generic [ref=e102]: Select Language
                      - combobox "Select Language" [ref=e103]:
                        - option "Python"
                        - option "Java"
                        - option "JavaScript"
                        - option "TypeScript" [selected]
                    - button "Select last programming language" [ref=e104] [cursor=pointer]: Select Last
                    - generic [ref=e105]: "Selected language: TypeScript"
                    - button "💡 Show Hint" [ref=e106]
                - generic [ref=e107]:
                  - generic [ref=e108]:
                    - generic [ref=e109]: S04
                    - generic [ref=e110]: Multi-Select Superheroes
                  - generic [ref=e112]:
                    - generic [ref=e113]:
                      - generic [ref=e114]: Select Superheroes
                      - listbox "Select Superheroes" [ref=e115]:
                        - option "Ant-Man" [ref=e116]
                        - option "Aquaman" [ref=e117]
                        - option "The Avengers" [ref=e118]
                        - option "Batman" [ref=e119]
                    - generic [ref=e120]: No heroes selected
                    - button "💡 Show Hint" [ref=e121]
                - generic [ref=e122]:
                  - generic [ref=e123]:
                    - generic [ref=e124]: S05
                    - generic [ref=e125]: Custom Dropdown Listbox
                  - generic [ref=e127]:
                    - button "Choose priority v" [ref=e129] [cursor=pointer]
                    - generic [ref=e130]: Priority not selected
                    - button "💡 Show Hint" [ref=e131]
                - generic [ref=e132]:
                  - generic [ref=e133]:
                    - generic [ref=e134]: S06
                    - generic [ref=e135]: Searchable City Combobox
                  - generic [ref=e137]:
                    - generic [ref=e138]:
                      - generic [ref=e139]: City
                      - generic [ref=e140]:
                        - combobox "City" [ref=e141]
                        - generic: empty
                    - generic [ref=e142]: No city selected
                    - button "💡 Show Hint" [ref=e143]
            - complementary [ref=e144]:
              - generic [ref=e145]:
                - generic [ref=e146]:
                  - generic [ref=e147]: Your Progress
                  - generic [ref=e148]: 1 / 6
                - generic [ref=e149]:
                  - progressbar "Practice progress"
                - generic [ref=e150]:
                  - generic [ref=e151]:
                    - generic [ref=e152]: ✓
                    - generic [ref=e153]: Select Fruit by Visible Text
                  - generic [ref=e154]:
                    - generic [ref=e155]: ✓
                    - generic [ref=e156]: Select Country by Value Attribute
                  - generic [ref=e157]:
                    - generic [ref=e158]: ✓
                    - generic [ref=e159]: Select Last Language and Read All Options
                  - generic [ref=e160]:
                    - generic [ref=e161]: ✓
                    - generic [ref=e162]: Multi-Select Superheroes
                  - generic [ref=e163]:
                    - generic [ref=e164]: ✓
                    - generic [ref=e165]: Custom Dropdown Listbox
                  - generic [ref=e166]:
                    - generic [ref=e167]: ✓
                    - generic [ref=e168]: Searchable City Combobox
              - generic [ref=e169]:
                - generic [ref=e170]:
                  - generic [ref=e171]: What You'll Learn
                  - img [ref=e172]
                - generic [ref=e175]:
                  - generic [ref=e176]:
                    - button "Selenium" [ref=e177]
                    - button "Playwright" [ref=e178]
                    - button "Cypress" [ref=e179]
                  - generic [ref=e180]:
                    - generic [ref=e181]: Selenium (Java)
                    - list [ref=e182]:
                      - listitem [ref=e183]:
                        - code [ref=e185]: Select(WebElement)
                      - listitem [ref=e186]:
                        - code [ref=e188]: selectByVisibleText()
                      - listitem [ref=e189]:
                        - code [ref=e191]: selectByValue()
                      - listitem [ref=e192]:
                        - code [ref=e194]: getOptions()
                      - listitem [ref=e195]:
                        - code [ref=e197]: getAllSelectedOptions()
                  - generic [ref=e198]:
                    - img [ref=e199]
                    - text: Tutorial video coming soon
              - link "DT Data Table Read, filter, sort, and assert row data ›" [ref=e205] [cursor=pointer]:
                - /url: /practice/data-table
                - generic [ref=e206]: DT
                - generic [ref=e207]:
                  - generic [ref=e208]: Data Table
                  - generic [ref=e209]: Read, filter, sort, and assert row data
                - generic [ref=e210]: ›
  - contentinfo [ref=e211]:
    - generic [ref=e212]:
      - generic [ref=e213]:
        - generic [ref=e214]:
          - link "QA Playground home" [ref=e215] [cursor=pointer]:
            - /url: /
            - img [ref=e216]
            - generic [ref=e217]: QA Playground
          - paragraph [ref=e218]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e219]:
            - listitem [ref=e220]:
              - link "YouTube" [ref=e221] [cursor=pointer]:
                - /url: https://youtube.com
                - img [ref=e222]
            - listitem [ref=e224]:
              - link "GitHub" [ref=e225] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e226]
            - listitem [ref=e228]:
              - link "X / Twitter" [ref=e229] [cursor=pointer]:
                - /url: https://x.com
                - img [ref=e230]
            - listitem [ref=e232]:
              - link "Telegram" [ref=e233] [cursor=pointer]:
                - /url: https://t.me
                - img [ref=e234]
        - generic [ref=e236]:
          - generic [ref=e237]: Platform
          - list [ref=e238]:
            - listitem [ref=e239]:
              - link "Practice Elements" [ref=e240] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e241]:
              - link "AI Mock Interviews" [ref=e242] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e243]:
              - link "Job Hub & CRM" [ref=e244] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e245]:
              - link "Bank Demo" [ref=e246] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e247]:
              - link "Dashboard" [ref=e248] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e249]:
              - link "QA Tools" [ref=e250] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e251]:
          - generic [ref=e252]: Learn
          - list [ref=e253]:
            - listitem [ref=e254]:
              - link "Blog & Tutorials" [ref=e255] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e256]:
              - link "Resources" [ref=e257] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e258]:
              - link "Interview Questions" [ref=e259] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e260]:
              - link "Automation Framework" [ref=e261] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e262]:
          - generic [ref=e263]: Company
          - list [ref=e264]:
            - listitem [ref=e265]:
              - link "About Us" [ref=e266] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e267]:
              - link "Contact" [ref=e268] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e269]:
              - link "Report an Issue" [ref=e270] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e271]:
              - link "Privacy Policy" [ref=e272] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e273]:
              - link "Login" [ref=e274] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e275]:
        - generic [ref=e276]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e277] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e278]: All rights reserved.
  - alert [ref=e279]
  - button "Send feedback or report an issue" [ref=e280] [cursor=pointer]:
    - img [ref=e281]
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
  10 |     await drpdwn.click(); // Click to open
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
  47 |         const langdrop = page.locator('#languageSelect')
> 48 |         langdrop.click()
     |                  ^ Error: locator.click: Test ended.
  49 |         langdrop.selectOption('TypeScript')
  50 | 
  51 |         await page.getByText('Select Last').click()
  52 | 
  53 |         const allvalues = page.locator('#languageSelect').allInnerTexts()
  54 |         await expect(page.locator('#languageSelect')).toHaveValue('Selected TypeScript; options: Python, Java, JavaScript, TypeScript')
  55 | 
  56 |     })
  57 | })
```