import { $ } from '@wdio/globals'

import Page from './page';

class ElementsMenu extends Page {

    /* public get menuElements () {

        let header =  $('div=Elements')
        expect(header).toHaveText('Elements')
        return header;
    }

    public get menuForms () {

       return $('div=Forms')
        
    }

    public get menuAlerts () {

       return $('div=Alerts, Frame & Windows')
        
    }
    public get menuWidgets () {

       return $('div=Widgets')
        
    }
    public get menuInteractions () {

       return $('div=Interactions')
        
    }
    public get menuBookStore () {

       return $('div=Book Store Application')
        
    }


   public async clickMenuElements () {
     
        await this.menuElements.click();
        await this.menuForms.click();
        await this.menuAlerts.click();  
        await this.menuWidgets.click();
        await this.menuInteractions.click();
        await this.menuBookStore.click();
    } */

         
    public getMenu(menuName: string) {
        return $(`div=${menuName}`);
    }

    public async clickMenu(menuName: string) {
        const menu = this.getMenu(menuName);
        await expect(menu).toBeDisplayed();
        await menu.click();
    }

}
export default new ElementsMenu();