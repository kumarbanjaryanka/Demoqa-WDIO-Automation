 import Page from './page';
import { $ } from '@wdio/globals';

class FormsPage extends Page {

    public async invalidUserNumber(invalidUserNumber: string[]) {
        for (const number of invalidUserNumber) {
            const mobileField = $('#userNumber');
            await mobileField.click();
            await mobileField.setValue(`${number}`);
            await browser.keys('Tab'); 
            const borderColor = await mobileField.getCSSProperty('border-color');
            expect(borderColor.value).toBe('rgba(220,53,69,1)'); // red border
           
        }
    }
    

    
    

    public async validUserNumber(validUserNumber: string[]) {
        for (const number of validUserNumber) {
            await browser.pause(3000);
            const mobileField = $('#userNumber');
            await mobileField.click();
            await mobileField.setValue(`${number}`);
            await browser.keys('Tab'); 
            const borderColor = await mobileField.getCSSProperty('border-color');
            expect(['rgba(59,155,69,1)', 'rgba(40,167,69,1)']).toContain(borderColor.value);

               }
        
    }

    public async clickSubmit() {
        await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
        await $('#submit').click();
      
        }
   
}

export default new FormsPage();
