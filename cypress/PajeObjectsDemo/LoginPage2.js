class Login2
{
    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblmsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";


    setUserName(username)
    {
        cy.get(this.txtUserName).type("Admin");
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type("admin123");
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin()
    {

        cy.get(this.lblmsg).should('have.text','Dashboard');

    }

}

export default Login2;