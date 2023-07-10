class CheckoutPageTwo {

    elements = { 

        productName : () => cy.get('.inventory_item_name'),
        finishOrderBtn : () => cy.get('[data-test="finish"]')

    }

    getProductName() {

        return this.elements.productName();

    }

    clickOnFinishButton() {

        return this.elements.finishOrderBtn()
                        .click();

    }

}
module.exports = new CheckoutPageTwo();