class LoginPage {
    
    elements ={
        
        usernameField : () => cy.get('[data-test="username"]'),
        pswField : () => cy.get('[data-test="password"]'),
        loginBtn : () => cy.get('[data-test="login-button"]')

    }

    clickOnLoginBtn(){

        return this.elements.loginBtn()
                        .click();

    } 

    enterPassword(psw){
        
        return this.elements.pswField()
                        .click()
                        .type(psw);

    }

    enterUsername(username){

        return this.elements.usernameField()
                        .click()
                        .type(username);

    }
}

module.exports = new LoginPage();