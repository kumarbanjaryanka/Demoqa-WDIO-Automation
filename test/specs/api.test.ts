import ApiHelper from '../apihelper/books';

describe('API Validation Tests', () => {
    it('should validate book data from API against UI', async () => { 
    await ApiHelper.getApiBookTitles();
    await ApiHelper.getUiBookTitles();
    await ApiHelper.validateBookTitles();
   });
});
