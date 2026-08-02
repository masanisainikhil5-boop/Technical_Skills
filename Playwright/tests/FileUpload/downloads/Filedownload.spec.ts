import {test, expect, Download} from '@playwright/test'
import path from 'path'

test.describe('File Upload and Download Scenarios', () =>{
    test.beforeEach(async({page}) =>{
        page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download")
    })

    test('Demo: Upload and Download the files:', async({page}) =>{

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-text').click()       
        ])

        expect(download.suggestedFilename()).toContain('tta-notes')
        await download.saveAs(path.join(__dirname,'downloads','tta-notes.txt'))
    })

    test('Demo: StaticDownload', async({page}) =>{
        const[StaticDownload] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()

        ])
        await StaticDownload.saveAs('out/' + StaticDownload.suggestedFilename())
    })
    
})