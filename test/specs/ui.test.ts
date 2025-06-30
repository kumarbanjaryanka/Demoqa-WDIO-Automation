import HomePage from "../pageobjects/home.page";
import ElementsMenu from "../pageobjects/elements.menu";
import CheckboxPage from "../pageobjects/checkbox.page";
import FormsPage from "../pageobjects/forms.page";
import AlertsPage from "../pageobjects/alerts.page";
import {expectedCheckedBoxes}  from "../testdata/chkbox-test-data.json";
import  {mobileNumbers}  from "../testdata/userNumber-test-data.json";
import menuItems from "../testdata/menu-test-data.json";
import submenuItems from "../testdata/submenu-test-data.json";

describe("DemoQA scenarios to automate using WebdriverIO", () => {
    

     it("Select dynamically elements page menu option", async () => {
        await HomePage.open();
        await HomePage.clickElements();
        await ElementsMenu.getElementsMenu(menuItems .CheckBox);
        await CheckboxPage.clickChevron(expectedCheckedBoxes[0]);
        await CheckboxPage.clickChevron(expectedCheckedBoxes[1]);
        await CheckboxPage.clickChevron(expectedCheckedBoxes[4]);
        await CheckboxPage.clickChevron(expectedCheckedBoxes[5]);
        await CheckboxPage.clickChevron(expectedCheckedBoxes[9]);
        await CheckboxPage.clickChevron(expectedCheckedBoxes[14]);
        await CheckboxPage.clickChkBox(expectedCheckedBoxes[0]);
        await CheckboxPage.validateChkBoxesChecked(expectedCheckedBoxes);
    });

    it("Navigate to practice form and validate mobile number filed", async () => {
        await ElementsMenu.getMenu(menuItems .Forms);
        await ElementsMenu.getElementsMenu(submenuItems.practiceForm);
        await FormsPage.clickSubmit();
        await FormsPage.validUserNumber(mobileNumbers.valid);
        await FormsPage.invalidUserNumber(mobileNumbers.invalid);
    });

    it("Navigate to Alerts and validate three button functionality", async () => {
        await ElementsMenu.getMenu(menuItems .Alerts);
        await ElementsMenu.getElementsMenu(submenuItems.browserWindows);
        await AlertsPage.validateNewTab();
        await AlertsPage.validateNewWindow();
        await AlertsPage.validateMessageBox();
    });
});
