
import HomePage from '../pageobjects/home.page'
import { expect } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.open()
           
    })
})