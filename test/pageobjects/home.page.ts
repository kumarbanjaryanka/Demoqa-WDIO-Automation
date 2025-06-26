import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {

    /**
     * define selectors using getter methods
     */
    public open () {
        return super.open();
    }
}

export default new HomePage();
