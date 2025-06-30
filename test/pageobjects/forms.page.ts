import Page from './page';
import { $ } from '@wdio/globals';

class FormsPage extends Page {

    public async clickSubmit() {
        await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
        await $('#submit').click();

    }

    public async invalidUserNumber(invalidUserNumber: string[]) {
    await this.validateUserNumbers(invalidUserNumber, 'rgba(220,53,69,1)');
   }

    public async validUserNumber(validUserNumber: string[]) {
    await this.validateUserNumbers(validUserNumber, ['rgba(59,155,69,1)', 'rgba(40,167,69,1)']);
   }

   public async validateUserNumbers(numbers: string[], expectedColor: string | string[]) {
    const mobileField = await $('#userNumber');

    for (const number of numbers) {
        await mobileField.click();
        await mobileField.setValue(number);
        await browser.keys('Tab');
        await browser.pause(1000); 

        const borderColor = await mobileField.getCSSProperty('border-color');

        if (Array.isArray(expectedColor)) {
            expect(expectedColor).toContain(borderColor.value);
        } else {
            expect(borderColor.value).toBe(expectedColor);
        }

        await mobileField.clearValue(); 
    }
}

}

export default new FormsPage();
