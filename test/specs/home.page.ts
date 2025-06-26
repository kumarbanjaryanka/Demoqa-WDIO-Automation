
import HomePage from '../pageobjects/home.page'
import ElementsMenu from '../pageobjects/elements.menu'
import { expect } from '@wdio/globals'

describe('My Login application', () => {
    it('Select dynamically elements page menu option', async () => {
        await HomePage.open()
        await HomePage.clickElements()
        await ElementsMenu.clickMenu('Elements')
        await ElementsMenu.clickMenu('Forms')
        await ElementsMenu.clickMenu('Alerts, Frame & Windows')
        await ElementsMenu.clickMenu('Widgets')
        await ElementsMenu.clickMenu('Interactions')
        await ElementsMenu.clickMenu('Book Store Application')
              
    })
})