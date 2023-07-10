class ProductDetailPage{

    elements = {

        productName : () => cy.get('.inventory_details_name'),
        addToCartBtn : () => cy.get('.inventory_details_desc_container > .btn'),
        cartIconBtn : () => cy.get('.shopping_cart_link')

    }

    
    getProductsName() {
      
        return  this.elements.productName();                    

    }

    clickOnAddToCartBtn() {

        return this.elements.addToCartBtn()
                                .click();

    }

    clickOnCartIconBtn() {

        return this.elements.cartIconBtn()
                                .click();

    }

}

module.exports = new ProductDetailPage();