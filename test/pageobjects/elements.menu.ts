import { $ } from "@wdio/globals";

import Page from "./page";

class ElementsMenu extends Page {
    /**
     * Clicks on the specified menu item
     * @param menuName The name of the menu to click
     */
    public async getMenu(menuName: string) {
        return await $(`div=${menuName}`).click();
    }

    /**
     * Clicks on the specified elements option in the Elements menu
     * @param elementsoption The name of the elements option to click
     */

    public async getElementsMenu(elementsoption: string) {
        return await $(`//*[contains(text(),"${elementsoption}")]`).click();
    }

    public pageTitle(expectedTitle: string) {
        return $(`h1=${expectedTitle}`);
    }

    public async validatePageTitle(expectedTitle: string) {
        const actualTitle = await this.pageTitle(expectedTitle).getText();
        expect(actualTitle).toBe(expectedTitle);
    }
}
export default new ElementsMenu();
