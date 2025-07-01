import { browser } from '@wdio/globals'

export default class Page {

    public async open() {
        await browser.url('/');
        browser.maximizeWindow();
    }
}