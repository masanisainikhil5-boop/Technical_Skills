# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: qaplayground_practice\alerts\jsalerts.spec.ts >> JS Alerts >> JS Alert 1 - Close Info Alert Dialog
- Location: tests\qaplayground_practice\alerts\jsalerts.spec.ts:8:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Session Notice')
Expected: visible
Error: strict mode violation: getByText('Session Notice') resolved to 3 elements:
    1) <h2 id="info-dialog-title" class="alerts-dialogs-module__nGvyEG__dialogTitle">Session Notice</h2> aka getByRole('heading', { name: 'Session Notice' })
    2) <div class="text-[11.5px] leading-[1.5] text-muted-foreground">…</div> aka getByText('Expected: Heading inside')
    3) <span>Session Notice</span> aka getByLabel('Learn content').getByText('Session Notice')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Session Notice')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - generic [ref=e39]: Alerts & Dialogs
        - generic [ref=e40]:
          - heading "Alerts & Dialogs Automation Practice" [level=1] [ref=e41]
          - paragraph [ref=e42]: Master dialog interactions — open, close, confirm, cancel, backdrop dismiss, Escape key, accessibility assertions, and scoped dialog locators in Selenium, Playwright, and Cypress.
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: "02"
              - text: Intermediate
            - generic [ref=e46]: 15 min
            - generic [ref=e47]: 8 scenarios
            - generic [ref=e48]: 16 test cases
      - generic [ref=e49]:
        - tablist "Practice page tabs" [ref=e50]:
          - generic [ref=e51]:
            - tab "Practice 8" [selected] [ref=e52]:
              - img [ref=e53]
              - generic [ref=e55]: Practice
              - generic [ref=e56]: "8"
            - tab "Test Cases 16" [ref=e57]:
              - img [ref=e58]
              - generic [ref=e61]: Test Cases
              - generic [ref=e62]: "16"
            - tab "Learn" [ref=e63]:
              - img [ref=e64]
              - generic [ref=e66]: Learn
        - tabpanel "Practice 8" [ref=e67]:
          - generic [ref=e68]:
            - generic [ref=e69]:
              - region "Interactive Scenarios" [ref=e70]:
                - paragraph [ref=e71]: Interactive Scenarios
                - generic [ref=e72]:
                  - generic [ref=e73]:
                    - generic [ref=e74]:
                      - generic [ref=e75]: S01
                      - generic [ref=e76]: Close Info Alert Dialog
                    - generic [ref=e78]:
                      - button "Open Info Dialog" [active] [ref=e79] [cursor=pointer]
                      - generic [ref=e80]: No action yet
                      - button "💡 Show Hint" [ref=e81]
                  - generic [ref=e82]:
                    - generic [ref=e83]:
                      - generic [ref=e84]: S02
                      - generic [ref=e85]: Confirm Action in Dialog
                    - generic [ref=e87]:
                      - button "Open Confirm Dialog" [ref=e88] [cursor=pointer]
                      - generic [ref=e89]: Awaiting confirmation
                      - button "💡 Show Hint" [ref=e90]
                  - generic [ref=e91]:
                    - generic [ref=e92]:
                      - generic [ref=e93]: S03
                      - generic [ref=e94]: Cancel and Stay on Page
                    - generic [ref=e96]:
                      - button "Open Unsaved Dialog" [ref=e97] [cursor=pointer]
                      - generic [ref=e98]: Dialog not opened
                      - button "💡 Show Hint" [ref=e99]
                  - generic [ref=e100]:
                    - generic [ref=e101]:
                      - generic [ref=e102]: S04
                      - generic [ref=e103]: Destructive Delete Confirm
                      - generic [ref=e104]: DANGER
                    - generic [ref=e106]:
                      - button "Open Delete Dialog" [ref=e107] [cursor=pointer]
                      - generic [ref=e108]: No deletion yet
                      - button "💡 Show Hint" [ref=e109]
                  - generic [ref=e110]:
                    - generic [ref=e111]:
                      - generic [ref=e112]: S05
                      - generic [ref=e113]: Backdrop Click to Dismiss
                    - generic [ref=e115]:
                      - button "Open Backdrop Dialog" [ref=e116] [cursor=pointer]
                      - generic [ref=e117]: Dialog not opened
                      - button "💡 Show Hint" [ref=e118]
                  - generic [ref=e119]:
                    - generic [ref=e120]:
                      - generic [ref=e121]: S06
                      - generic [ref=e122]: Escape Key to Dismiss
                    - generic [ref=e124]:
                      - button "Open Keyboard Dialog" [ref=e125] [cursor=pointer]
                      - generic [ref=e126]: Dialog not opened
                      - button "💡 Show Hint" [ref=e127]
                  - generic [ref=e128]:
                    - generic [ref=e129]:
                      - generic [ref=e130]: S07
                      - generic [ref=e131]: Assert Dialog Content
                    - generic [ref=e133]:
                      - button "Open Notification" [ref=e134] [cursor=pointer]
                      - generic [ref=e135]: Awaiting acknowledgement
                      - button "💡 Show Hint" [ref=e136]
                  - generic [ref=e137]:
                    - generic [ref=e138]:
                      - generic [ref=e139]: S08
                      - generic [ref=e140]: Scoped Dismiss — Repeated Triggers
                      - generic [ref=e141]: CHALLENGE
                    - generic [ref=e143]:
                      - generic [ref=e144]:
                        - generic [ref=e145]:
                          - generic [ref=e146]: ⚠️ Low Disk Space
                          - button "Dismiss" [ref=e147] [cursor=pointer]
                        - generic [ref=e148]:
                          - generic [ref=e149]: ℹ️ Session Expiring Soon
                          - button "Dismiss" [ref=e150] [cursor=pointer]
                        - generic [ref=e151]:
                          - generic [ref=e152]: 🔒 Security Alert
                          - button "Dismiss" [ref=e153] [cursor=pointer]
                      - generic [ref=e154]: No notification dismissed
                      - button "💡 Show Hint" [ref=e155]
              - complementary [ref=e156]:
                - generic [ref=e157]:
                  - generic [ref=e158]:
                    - generic [ref=e159]: Your Progress
                    - generic [ref=e160]: 0 / 8
                  - generic [ref=e161]:
                    - progressbar "Practice progress"
                  - generic [ref=e162]:
                    - generic [ref=e163]:
                      - generic [ref=e164]: ✓
                      - generic [ref=e165]: Close Info Alert Dialog
                    - generic [ref=e166]:
                      - generic [ref=e167]: ✓
                      - generic [ref=e168]: Confirm Action in Dialog
                    - generic [ref=e169]:
                      - generic [ref=e170]: ✓
                      - generic [ref=e171]: Cancel and Stay on Page
                    - generic [ref=e172]:
                      - generic [ref=e173]: ✓
                      - generic [ref=e174]: Destructive Delete Confirm
                    - generic [ref=e175]:
                      - generic [ref=e176]: ✓
                      - generic [ref=e177]: Backdrop Click to Dismiss
                    - generic [ref=e178]:
                      - generic [ref=e179]: ✓
                      - generic [ref=e180]: Escape Key to Dismiss
                    - generic [ref=e181]:
                      - generic [ref=e182]: ✓
                      - generic [ref=e183]: Assert Dialog Content
                    - generic [ref=e184]:
                      - generic [ref=e185]: ✓
                      - generic [ref=e186]: Scoped Dismiss — Repeated Triggers
                - generic [ref=e187]:
                  - generic [ref=e188]:
                    - generic [ref=e189]: What You'll Learn
                    - img [ref=e190]
                  - generic [ref=e193]:
                    - generic [ref=e194]:
                      - button "Selenium" [ref=e195]
                      - button "Playwright" [ref=e196]
                      - button "Cypress" [ref=e197]
                    - generic [ref=e198]:
                      - generic [ref=e199]: Selenium (Java)
                      - list [ref=e200]:
                        - listitem [ref=e201]:
                          - code [ref=e203]: findElement(By.css('[role=dialog]'))
                        - listitem [ref=e204]:
                          - code [ref=e206]: isDisplayed()
                        - listitem [ref=e207]:
                          - code [ref=e209]: sendKeys(Keys.ESCAPE)
                        - listitem [ref=e210]:
                          - code [ref=e212]: findElement(By.cssSelector("[aria-label]"))
                        - listitem [ref=e213]:
                          - code [ref=e215]: Actions.moveToElement()
                    - generic [ref=e216]:
                      - img [ref=e217]
                      - text: Tutorial video coming soon
                - link "☑️ Radio & Checkbox Toggle radio buttons and checkboxes across different states ›" [ref=e223] [cursor=pointer]:
                  - /url: /practice/radio-checkbox
                  - generic [ref=e224]: ☑️
                  - generic [ref=e225]:
                    - generic [ref=e226]: Radio & Checkbox
                    - generic [ref=e227]: Toggle radio buttons and checkboxes across different states
                  - generic [ref=e228]: ›
            - dialog "Session Notice" [ref=e229]:
              - generic [ref=e230]:
                - generic [ref=e231]:
                  - heading "Session Notice" [level=2] [ref=e232]
                  - button "Close info dialog" [ref=e233] [cursor=pointer]: ×
                - paragraph [ref=e235]: Your session will expire in 30 minutes. Please save your work before the session ends.
                - button "Got It" [ref=e237] [cursor=pointer]
  - contentinfo [ref=e238]:
    - generic [ref=e239]:
      - generic [ref=e240]:
        - generic [ref=e241]:
          - link "QA Playground home" [ref=e242] [cursor=pointer]:
            - /url: /
            - img [ref=e243]
            - generic [ref=e244]: QA Playground
          - paragraph [ref=e245]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e246]:
            - listitem [ref=e247]:
              - link "YouTube" [ref=e248] [cursor=pointer]:
                - /url: https://youtube.com
                - img [ref=e249]
            - listitem [ref=e251]:
              - link "GitHub" [ref=e252] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e253]
            - listitem [ref=e255]:
              - link "X / Twitter" [ref=e256] [cursor=pointer]:
                - /url: https://x.com
                - img [ref=e257]
            - listitem [ref=e259]:
              - link "Telegram" [ref=e260] [cursor=pointer]:
                - /url: https://t.me
                - img [ref=e261]
        - generic [ref=e263]:
          - generic [ref=e264]: Platform
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link "Practice Elements" [ref=e267] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e268]:
              - link "AI Mock Interviews" [ref=e269] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e270]:
              - link "Job Hub & CRM" [ref=e271] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e272]:
              - link "Bank Demo" [ref=e273] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e274]:
              - link "Dashboard" [ref=e275] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e276]:
              - link "QA Tools" [ref=e277] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e278]:
          - generic [ref=e279]: Learn
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link "Blog & Tutorials" [ref=e282] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e283]:
              - link "Resources" [ref=e284] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e285]:
              - link "Interview Questions" [ref=e286] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e287]:
              - link "Automation Framework" [ref=e288] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e289]:
          - generic [ref=e290]: Company
          - list [ref=e291]:
            - listitem [ref=e292]:
              - link "About Us" [ref=e293] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e294]:
              - link "Contact" [ref=e295] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e296]:
              - link "Report an Issue" [ref=e297] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e298]:
              - link "Privacy Policy" [ref=e299] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e300]:
              - link "Login" [ref=e301] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e302]:
        - generic [ref=e303]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e304] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e305]: All rights reserved.
  - alert [ref=e306]
  - button "Send feedback or report an issue" [ref=e307] [cursor=pointer]:
    - img [ref=e308]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('JS Alerts', () => {
  4  |     test.beforeEach(async ({ page }) => {
  5  |         await page.goto('https://qaplayground.com/practice/alerts-dialogs');
  6  |     });
  7  | 
  8  |     test('JS Alert 1 - Close Info Alert Dialog', async ({ page }) => {
  9  |         // 1. Click the button that opens the HTML dialog
  10 |         await page.getByTestId('open-info-dialog').click();
  11 | 
  12 |         // 2. The dialog is part of the HTML, so we locate the "Got It" button and click it
  13 |         // We use getByRole for better accessibility testing
  14 |         const gotItButton = page.getByRole('button', { name: 'Got It' });
  15 |         
  16 |         // Optional: Assert the dialog text is visible before clicking
> 17 |         await expect(page.getByText('Session Notice')).toBeVisible();
     |                                                        ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |         await gotItButton.click();
  20 | 
  21 |         // 3. Verify the result message appears
  22 |         await expect(page.locator('#result-s01')).toHaveText('Info dialog dismissed');
  23 |     });
  24 | });
```