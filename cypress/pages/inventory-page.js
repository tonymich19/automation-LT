class InventoryPage {
    
    elements = {

        productName : () => cy.get('.inventory_item_name') 

    }

    clickOnARandomProduct(){
        
        return this.elements.productName().then(products => {
            cy.get(Cypress._.sample([...products])).click();
        });

    }

}

module.exports = new InventoryPage();