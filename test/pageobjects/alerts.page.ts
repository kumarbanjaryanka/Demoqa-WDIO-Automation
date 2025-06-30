import Page from "./page";
import { $ } from "@wdio/globals";
class AlertsPage extends Page {
    

    private async switchToNewWindowAndValidateText(expectedText: string, selector: string = 'h1#sampleHeading') {
        const handles = await browser.getWindowHandles();
        expect(handles.length).toBe(2);
        await browser.switchToWindow(handles[1]);
        const actualText = await $(selector).getText();
        expect(actualText).toBe(expectedText);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }

    private async waitForNewWindowToOpen(timeout: number = 5000) {
        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length === 2,
            {
                timeout,
                timeoutMsg: "Expected a second window to open",
            }
        );
    }

    public async validateNewWindow() {
        await $("button#windowButton").click();
        await this.switchToNewWindowAndValidateText("This is a sample page");
    }

    public async validateNewTab() {
        await $("button#tabButton").click();
        await this.switchToNewWindowAndValidateText("This is a sample page");
    }

    public async validateMessageBox() {
        await $("button#messageWindowButton").click();

        await this.waitForNewWindowToOpen();

        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);

        await browser.waitUntil(
            async () => {
                const text = await browser.execute(() => document.body.innerText);
                return text.trim().length > 0;
            },
            {
                timeout: 3000,
                timeoutMsg: "Expected body text to be loaded in the new window",
            }
        );

        const actualText = await browser.execute(() => document.body.innerText);
        const expectedText =
            "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.";

        expect(actualText.trim()).toBe(expectedText);

        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }
}

export default new AlertsPage();
