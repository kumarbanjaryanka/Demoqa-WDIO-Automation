import axios from 'axios';

describe('API Validation Tests', () => {
    it('should validate book data from API against UI', async () => { 
        const apiResponse = await axios.get('https://demoqa.com/BookStore/v1/Books');
        console.log('API Response:', JSON.stringify(apiResponse.data, null, 2)); 
        const apiBooks = apiResponse.data.books; 

        
        await browser.url('https://demoqa.com/books');
        const bookElements = await $$('div.action-buttons span a'); 
        const uiTitles = await Promise.all(await bookElements.map(el => el.getText()));
        console.log('UI Titles:', uiTitles);
       
        const apiTitles = apiBooks.map((book: { title: any; }) => book.title);
        console.log('API Titles:', apiTitles);
       
        expect(uiTitles).toEqual(apiTitles);
    });
});
