import Page from "./page";
import { $ } from "@wdio/globals";
class AlertsPage extends Page {
    

    private async switchToWindow(handle: string) {
        await browser.switchToWindow(handle);
    }

    get newTabButton() {
        return $("button#tabButton");
    }
    get newWindowButton() {
        return $("button#windowButton");
    }

    get messageWindowButton() {
        return $("button#messageWindowButton");
    }
    get sampleHeading() {
        return $("h1#sampleHeading");
    }

    private async switchToNewWindowAndValidateText(expectedText: string) {
        const windowHandles  = await browser.getWindowHandles();
        expect(windowHandles.length).toBe(2);
        await this.switchToWindow(windowHandles[1]);
        const actualText = await this.sampleHeading.getText();
        expect(actualText).toBe(expectedText);
        await browser.closeWindow();
        await this.switchToWindow(windowHandles[0]);
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
        await this.newWindowButton.click();
        await this.switchToNewWindowAndValidateText("This is a sample page");
    }

    public async validateNewTab() {
        await this.newTabButton.click();
        await this.switchToNewWindowAndValidateText("This is a sample page");
    }

    public async validateMessageBox() {
        await this.messageWindowButton.click();
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
