# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: qaplayground_practice\alerts\jsalerts.spec.ts >> JS Alerts >> JS Alert 1
- Location: tests\qaplayground_practice\alerts\jsalerts.spec.ts:10:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#result-s01')
Expected: "Info dialog dismissed"
Received: "No action yet"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#result-s01')
    14 × locator resolved to <span id="result-s01" data-testid="result-s01" class="flex min-h-8 min-w-[220px] flex-1 items-center rounded-[6px] border px-2.5 py-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] transition-colors max-sm:min-w-full border-border/50 bg-muted text-muted-foreground">No action yet</span>
       - unexpected value "No action yet"

```

```yaml
- text: No action yet
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | import { log } from 'node:console'
  3  | import { describe } from 'node:test'
  4  | 
  5  | test.describe('JS Alerts', () =>{
  6  |     test.beforeEach(async({page})=>{
  7  |         await page.goto('https://qaplayground.com/practice/alerts-dialogs')
  8  |     })
  9  | 
  10 |     test('JS Alert 1', async({page}) =>{
  11 |         page.once('dialog', async dialog =>{
  12 |             console.log('Dialog type:', dialog.type());
  13 |             console.log('Dialog message:', dialog.message());
  14 |             expect(dialog.message()).toBe('Session Notice')
  15 |             await dialog.accept()
  16 |             
  17 |         })
  18 |         await page.getByTestId('open-info-dialog').click()
> 19 |         await expect(page.locator('#result-s01')).toHaveText('Info dialog dismissed')
     |                                                   ^ Error: expect(locator).toHaveText(expected) failed
  20 | 
  21 |     })
  22 | })
```