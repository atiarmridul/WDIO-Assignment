import { expect } from '@wdio/globals'

import RegPage from '../pageobjects/reg.page.js'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'


describe('My Registration application', () => {
    it('should register with valid credentials', async () => {
        await RegPage.open()

        await RegPage.registration('Mridul','Chy','atiarmridul14@gmail.com', 'Abc123456','Abc123456')
        await expect(SecurePage.flashAlert).toBeExisting()
     

        
    })
})


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

       await LoginPage.login('atiarmridul12@gmail.com', 'Abc123456')
       await expect(SecurePage.flashAlert).toBeExisting()
        
   })

})
