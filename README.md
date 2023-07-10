# Details about the exercise
For this exercise we're using:
  1. Javascript as language
  2. Cypress as test framework
  2. Page Objects Model as desing pattern

# The automation runs the following steps

  1. Go to https://www.saucedemo.com/
  2. Log in to the application with the “standard_user” user.
  3. Add any product to the cart.  
  3.1 Get the text value (name of the item – the one red highlighted) of the item you add to the cart. 
  4. Go to the cart page.  
  4.1 Validate that the item name text is the same that you got in step 3.1  
  4.2 Click on Checkout.
  5. Fill in the information and continue to the next page.
  6. In the “CHECKOUT: OVERVIEW” page, validate that the item name text is the same that you got in step 3.1
  7. Finish the order.
  8. Validate that you finish the order.
  9. Validate that you are at the “CHECKOUT: COMPLETE!” page using that text or another one.

# How to run the project

  1. Have NPM installed.
  2. Install Cypress by executing the Command Line `npm install` cypress from the project root.
  3. Execute the tests by:  
    3.1 Opening the Cypress App by executing the command line `npm cy:open` from the project root.  
      3.2 Running Headless mode test by executing the command line `npm cy:run` from the project root.  
