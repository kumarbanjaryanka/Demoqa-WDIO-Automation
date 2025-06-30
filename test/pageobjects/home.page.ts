import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {

    /**
     * define selectors using getter methods
     */
    public open() {
        return super.open();
    }

    public get elements() {
        let header = $('h5=Elements')
        expect(header).toHaveText('Elements')
        return header;
    }

    public async clickElements() {
        await this.elements.click();
    }

}

export default new HomePage();
