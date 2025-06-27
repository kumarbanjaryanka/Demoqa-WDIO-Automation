
import HomePage from '../pageobjects/home.page'
import ElementsMenu from '../pageobjects/elements.menu'
import CheckboxPage from '../pageobjects/checkbox.page'
import FormsPage from '../pageobjects/forms.page'
import AlertsPage from '../pageobjects/alerts.page'


describe('DemoQA scenarios to automate using WebdriverIO', () => {
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

    it('Navigate to practice form and validate mobile number filed', async () => {
        await ElementsMenu.getMenu('Forms')
        await ElementsMenu.getElementsMenu('Practice Form')
        await FormsPage.clickSubmit()
        await FormsPage.validUserNumber(['1234567890'])
        await FormsPage.invalidUserNumber(['1234567', 'abcdefghij', '1a2d4d5g7h', '123456789a', '12345678#!'])
        
    })

    it('Navigate to Alerts and validate three button functionality', async () => {
        await ElementsMenu.getMenu('Alerts, Frame & Windows')
        await ElementsMenu.getElementsMenu('Browser Windows')
        await AlertsPage.validateNewTab(); 
        await AlertsPage.validateNewWindow();
        await AlertsPage.validateMessageBox();
       })
        
    
})