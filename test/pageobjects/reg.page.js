import { $ } from '@wdio/globals'
import Page from './page.js';


class RegPage extends Page {

    get firstName () {
        return $('#firstname');
    }

    get lastName () {
        return $('#lastname');
    }

    get emailAddress () {
        return $('#email_address');
    }

    get password () {
        return $('#password');
    }

    get confirmPassword () {
        return $('#password-confirmation');
    }

    get btnSubmit () {
        return $('button[class="action submit primary"]');
    }

    get btnMenu () {
       return $('button[class="action switch"]');
   }

    get signoutLink () {
        return $("=Sign Out");
    }



    async registration (firstname, lastname, emailAddress, password, confirmPassword) {
        
        
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.emailAddress.setValue(emailAddress);
        await this.password.setValue(password);
        await this.confirmPassword.setValue(confirmPassword);
        await this.btnSubmit.click();
        await this.btnMenu.click();
        await this.signoutLink.click();

    }


    open () {
        return super.open('customer/account/create/');
    }
}

export default new RegPage();
