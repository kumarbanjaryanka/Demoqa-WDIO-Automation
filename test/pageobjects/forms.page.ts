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
           // await mobileField.clearValue();
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

           // const borderColor = await mobileField.getCSSProperty('border-color');
           // expect(borderColor.value).toContain('rgba(59,155,69,1)'| 'rgba(40,167,69,1)'); // green border rgba(59,155,69,1)rgba(113,120,69,1)rgba(82,140,69,1)rgba(82,140,69,1) rgba(40,167,69,1)
          //  await mobileField.clearValue();
        }
        
    }

    public async clickSubmit() {
        await browser.scroll(1000, 900)
        await $('#submit').click();
      
        }
   
}

export default new FormsPage();
