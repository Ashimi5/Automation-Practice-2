class Login
{

    setUserName(username)
    {
        cy.get("input[placeholder='Username']").type("Admin");
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type("admin123");
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }

    verifyLogin()
    {

        cy.title().should('eq',"OrangeHRM");

    }

}

export default Login;