import { $ } from '@wdio/globals'

import Page from './page';

class CheckboxPage extends Page {

    /**
      * Returns the chevron (expand/collapse button) for the given parent node.
      * @param parentName The label of the parent node in the checkbox tree
      */
    private getChevronElement(parentName: string) {
        return $(`//*[contains(text(),"${parentName}")]/parent::node()/parent::node()/button`);
    }

    /**
     * Clicks the chevron icon next to the specified parent node
     * @param parentName The name of the parent node (visible text)
     */
    public async clickChevron(parentName: string) {
        const chevron = await this.getChevronElement(parentName);
        await expect(chevron).toBeDisplayed();
        await chevron.click();
    }


    /**
     * Returns the checkbox for the given parent node.
     * @param parentName The label of the parent node in the checkbox tree
     */
    private getChkBoxElement(parentName: string) {
        return $(`//*[contains(text(),"${parentName}")]`);
    }

    /**
     * Clicks the checkbox next to the specified parent node
     * @param parentName The name of the parent node (visible text)
     */
    public async clickChkBox(parentName: string) {
        const checkbox = await this.getChkBoxElement(parentName);
        await checkbox.click();
    }

    private getChkBoxStatus(parentName: string) {
        return $(`//*[contains(text(),"${parentName}")]/parent::node()/parent::node()/label/span/*[contains(@class, "rct-icon-check")]`);
    }

    public async validateChkBoxesChecked(parentNames: Record<string, string>) {
        for (const [key, expectedValue] of Object.entries(parentNames)) {
            const isChecked = await this.getChkBoxStatus(expectedValue);
            await expect(isChecked).toBeDisplayed();
            const classAttr = await isChecked.getAttribute('class');
            expect(classAttr).toContain('rct-icon-check');
        }
    }
}

export default new CheckboxPage();