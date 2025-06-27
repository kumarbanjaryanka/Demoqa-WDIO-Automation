  import Page from './page';
import { $ } from '@wdio/globals';
class AlertsPage extends Page {     
    

    public async validateNewWindow() {
        const newWindowButton = await $('button#windowButton');
        await newWindowButton.click();
        const newWindowHandles = await browser.getWindowHandles();
        expect(newWindowHandles.length).toBe(2); 
        await browser.switchToWindow(newWindowHandles[1]); 
        const newWindowText = await $('h1#sampleHeading').getText();
        expect(newWindowText).toBe('This is a sample page'); 
        await browser.closeWindow(); 
        await browser.switchToWindow(newWindowHandles[0]);
    }
    public async validateNewTab() {
        const newTabButton = await $('button#tabButton');
        await newTabButton.click(); 
        const handles = await browser.getWindowHandles();
        expect(handles.length).toBe(2); 
        await browser.switchToWindow(handles[1]);
        const newTabText = await $('h1#sampleHeading').getText();
        expect(newTabText).toBe('This is a sample page'); 
        await browser.closeWindow(); 
        await browser.switchToWindow(handles[0]); 
    }

    public async validateMessageBox() {
    const messageBoxButton = await $('button#messageWindowButton'); 
    await messageBoxButton.click();

    
    await browser.waitUntil(async () => {
        const handles = await browser.getWindowHandles();
        return handles.length === 2;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected a second window to open'
    });

    const handles = await browser.getWindowHandles();
    expect(handles.length).toBe(2); 

   
    await browser.switchToWindow(handles[1]);

   
    await browser.waitUntil(async () => {
        const text = await browser.execute(() => document.body.innerText);
        return text.length > 0;
    }, {
        timeout: 3000,
        timeoutMsg: 'Expected body text to be loaded in the new window'
    });

    const newTabText = await browser.execute(() => document.body.innerText);
    const expectedText = 'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.';

    expect(newTabText.trim()).toBe(expectedText); 

    // Close the new window and return to original
    await browser.closeWindow(); 
    await browser.switchToWindow(handles[0]); 
               
    }
}

export default new AlertsPage();