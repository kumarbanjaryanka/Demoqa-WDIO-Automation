import { browser } from '@wdio/globals'

export default class Page {
   
    public async open () {
        return await browser.url(`https://demoqa.com/`)
    }
}
