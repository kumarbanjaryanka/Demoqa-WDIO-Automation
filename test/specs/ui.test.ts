import HomePage from "../pageobjects/home.page";
import ElementsMenu from "../pageobjects/elements.menu";
import CheckboxPage from "../pageobjects/checkbox.page";
import FormsPage from "../pageobjects/forms.page";
import AlertsPage from "../pageobjects/alerts.page";
import { expectedCheckedBoxes } from "../testdata/chkbox-test-data.json";
import { mobileNumbers } from "../testdata/userNumber-test-data.json";
import menuItems from "../testdata/menu-test-data.json";
import submenuItems from "../testdata/submenu-test-data.json";

describe("DemoQA scenarios to automate using WebdriverIO", () => {
    it("Navigate to home page and validate title", async () => {
        await HomePage.open();
        await expect(browser).toHaveTitle("DEMOQA");
    });

    it("verify if the checkboxes are selected in the Elements menu", async () => {
        await HomePage.clickElements();
        await ElementsMenu.getElementsMenu(submenuItems.checkbox);
        await CheckboxPage.clickChevron(expectedCheckedBoxes.home);
        await CheckboxPage.clickChevron(expectedCheckedBoxes.desktop);
        await CheckboxPage.clickChevron(expectedCheckedBoxes.documents);
        await CheckboxPage.clickChevron(expectedCheckedBoxes.downloads);
        await CheckboxPage.clickChevron(expectedCheckedBoxes.workspace);
        await CheckboxPage.clickChevron(expectedCheckedBoxes.office);
        await CheckboxPage.clickChkBox(expectedCheckedBoxes.home);
        await CheckboxPage.validateChkBoxesChecked(expectedCheckedBoxes);
    });

    it("Navigate to practice form and validate title", async () => {
        await ElementsMenu.getMenu(menuItems.Forms);
        await ElementsMenu.getElementsMenu(submenuItems.practiceForm);
    });

    it("Validate Mobile number field when valid numbers are entered", async () => {
        await FormsPage.clickSubmit();
        await FormsPage.validUserNumber(mobileNumbers.valid);
    });

    it("Validate Mobile number field when invalid numbers are entered", async () => {
        await FormsPage.invalidUserNumber(mobileNumbers.invalid);
    });

    it("Navigate to Alerts and validate title", async () => {
        await ElementsMenu.getMenu(menuItems.Alerts);
        await ElementsMenu.getElementsMenu(submenuItems.browserWindows);
    });

    it("Validate new tab functionality", async () => {
        await AlertsPage.validateNewTab();
    });

    it("Validate new window functionality", async () => {
        await AlertsPage.validateNewWindow();
    });

    it("Validate new window message functionality", async () => {
        await AlertsPage.validateMessageBox();
    });
});
