# Details about the exercise
For this exercise we're using:
  1. Javascript as language
  2. Cypress as test framework
  2. Page Objects Model as desing pattern

# The automation runs the following steps:

  1. Go to https://www.saucedemo.com/
  2. Log in to the application with the “standard_user” user.
  3. Add any product to the cart.
    3.1 Get the text value (name of the item – the one red highlighted) of the item you add to the cart. 
  4. Go to the cart page.
    1. Validate that the item name text is the same that you got in step 3.1
    2. Click on Checkout.
  5. Fill in the information and continue to the next page.
  6. In the “CHECKOUT: OVERVIEW” page, validate that the item name text is the same that you got in step 3.1
  7. Finish the order.
  8. Validate that you finish the order.
  9. Validate that you are at the “CHECKOUT: COMPLETE!” page using that text or another one.
