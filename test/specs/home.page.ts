
import HomePage from '../pageobjects/home.page'
import ElementsMenu from '../pageobjects/elements.menu'
import CheckboxPage from '../pageobjects/checkbox.page'


describe('My Login application', () => {
    it('Select dynamically elements page menu option', async () => {
        await HomePage.open()
        await HomePage.clickElements()
        await ElementsMenu.getElementsMenu('Check Box')
        await CheckboxPage.clickChevron('Home')
        await CheckboxPage.clickChevron('Desktop') 
        await CheckboxPage.clickChevron('Documents') 
        await CheckboxPage.clickChevron('WorkSpace')
        await CheckboxPage.clickChevron('Office')
        await CheckboxPage.clickChevron('Downloads')
        await CheckboxPage.clickChkBox('Home')
        await CheckboxPage.validateChkBoxesChecked(['Home', 'Desktop','Notes','Commands','Documents', 'WorkSpace', 'React','Angular','Veu','Office', 'Public','Private','Classified','General','Downloads','Word File.doc', 'Excel File.doc'])
        
    })
})