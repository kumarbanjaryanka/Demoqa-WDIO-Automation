import axios from "axios";
import { browser } from '@wdio/globals';

class ApiHelper {
  public async getBookTitles(): Promise<string[]> {     
    const apiResponse = await axios.get('https://demoqa.com/BookStore/v1/Books');
    const books = apiResponse.data.books;
    return books.map((book: { title: string }) => book.title);
  }
   
  public async getUiBookTitles(): Promise<string[]> {
        await browser.url('https://demoqa.com/books');
        const bookElements = await $$('div.action-buttons span a');
        return Promise.all(await bookElements.map(el => el.getText()));
    }

    public async validateBookTitles(): Promise<void> {
    const apiTitles = await this.getBookTitles();
    const uiTitles = await this.getUiBookTitles();
    console.log('API Titles:', apiTitles);
    console.log('UI Titles:', uiTitles);
    expect(uiTitles.length).toBe(apiTitles.length);
    for (let i = 0; i < uiTitles.length; i++) {
        expect(uiTitles[i]).toBe(apiTitles[i]);
        console.log('API Titles:', apiTitles[i]);
        console.log('UI Titles:', uiTitles[i]);
    }
}

}

export default new ApiHelper();

