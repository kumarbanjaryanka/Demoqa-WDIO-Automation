import ApiHelper from '../apihelper/books';

describe('API Validation Tests', () => {
    it('should validate book data from API against UI', async () => { 

    ApiHelper.getBookTitles();
    ApiHelper.getUiBookTitles();
    ApiHelper.validateBookTitles();
    });
});
