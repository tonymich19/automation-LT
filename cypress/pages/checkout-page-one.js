class CheckoutPageOne {

    elements = {

        firstName : () => cy.get('[data-test="firstName"]'),
        lastName : () => cy.get('[data-test="lastName"]'),
        zipCode : () => cy.get('[data-test="postalCode"]'),
        continueBtn : () => cy.get('[data-test="continue"]')

    }

    enterFirstName(firstName) {
        
        return this.elements.firstName()
                        .click()
                        .type(firstName);

    }

    enterLastName(lastName) {

        return this.elements.lastName()
                        .click()
                        .type(lastName);

    }

    enterZipCode(zipCode) {

        return this.elements.zipCode()
                        .click()
                        .type(zipCode);

    }

    clickOnContinueBtn() {

        return this.elements.continueBtn()
                        .click();
        
    }

}
module.exports = new CheckoutPageOne()