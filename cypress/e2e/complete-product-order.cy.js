/// <reference types='cypress' />
import loginPage from "../pages/login-page";
import inventoryPage from "../pages/inventory-page";
import productDetailPage from "../pages/product-detail-page";
import cartPage from "../pages/cart-page";
import checkoutPageOne from "../pages/checkout-page-one";
import checkoutPageTwo from "../pages/checkout-page-two";


describe('LT Exercise', () => {

  let userdata;
  beforeEach('Access Sauce Demo Login Page', () => {

    cy.fixture('userdata').then((data) => {

      userdata = data;

    })

    // 1. Go to https://www.saucedemo.com/
    cy.visit('/');
    loginPage.elements.usernameField().should('be.visible');
    loginPage.elements.pswField().should('be.visible');
    loginPage.elements.loginBtn().should('be.visible');

  })

  it('Order product workflow', function() {

    // 2. Log in to the application with the “standard_user” user.
    loginPage.enterUsername(userdata.username);
    loginPage.enterPassword(userdata.password);
    loginPage.clickOnLoginBtn();

    // 3. Add any product to the cart.
    inventoryPage.clickOnARandomProduct();
    productDetailPage.clickOnAddToCartBtn();
  
    // 3.1. Get the text value (name of the item – the one red highlighted) of the item you add to the cart. 
    productDetailPage.getProductsName().then(($value) => {
      let productName = $value.text();
      cy.wrap(productName).as('prodNameDetailPage');
    })

    // 4. Go to the cart page.
    productDetailPage.clickOnCartIconBtn();

    // 4.1.  Validate that the item name text is the same that you got in step 3.1
    cartPage.getProductName().then(($value) => {
      let productName = $value.text();
      cy.get('@prodNameDetailPage').then((prodNameDetailPage) => {
        expect(productName).to.be.equal(prodNameDetailPage);
      });
    });

    // 4.2. Click on Checkout.
    cartPage.clickOnCheckOutBtn();

    // 5. Fill in the information and continue to the next page.
    checkoutPageOne.enterFirstName(userdata.firstName);
    checkoutPageOne.enterLastName(userdata.lastName);
    checkoutPageOne.enterZipCode(userdata.zipCode);
    checkoutPageOne.clickOnContinueBtn();

    // 6. In the “CHECKOUT: OVERVIEW” page, validate that the item name text is the same that you got in step 3.1
    checkoutPageTwo.getProductName().then(($value) => {
      let productName = $value.text();
      cy.get('@prodNameDetailPage').then((prodNameDetailPage) => {
        expect(productName).to.be.equal(prodNameDetailPage);
      });
    });

    // 7. Finish the order.
    checkoutPageTwo.clickOnFinishButton();

    // 8. Validate that you finish the order.
    cy.get('.title').should('be.visible')
                    .and('contain', 'Checkout: Complete!')
                    .url().should('be.equal', 'https://www.saucedemo.com/checkout-complete.html')
    
  })

})