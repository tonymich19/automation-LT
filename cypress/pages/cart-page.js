class CartPage {

    elements = {

        productName : () => cy.get('.inventory_item_name'),
        checkOutBtn : () => cy.get('[data-test="checkout"]'),

    }

    getProductName() {

        return this.elements.productName()

    }

    clickOnCheckOutBtn() {

        return this.elements.checkOutBtn().click();

    }

}

module.exports = new CartPage();