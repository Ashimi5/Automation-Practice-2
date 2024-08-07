import Login from "../PajeObjectsDemo/LoginPage.js";
import Login2 from "../PajeObjectsDemo/LoginPage2.js";

describe('Login Page OrangeHRM',()=>{

    //General approach

    it('LoginTest General Approach',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.title().should('eq',"OrangeHRM");

     })

     //After making POM class now using POM
     // First of all import the class at the top
     //First Approach

    it('LoginTest First approach pom',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     const ln = new Login();

     ln.setUserName("Admin")
     ln.setPassword("admin123")
     ln.clickSubmit();
     ln.verifyLogin();


    })

    it('LoginTest second approach pom',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     const ln = new Login2();

     ln.setUserName("Admin")
     ln.setPassword("admin123")
     ln.clickSubmit();
     ln.verifyLogin();


    })


    it.only('LoginTest third approach pom using fixture',()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.fixture('orangehrm').then((data) => {
 
    const ln = new Login2();

     ln.setUserName(data.username)  // From fixtures data 
     ln.setPassword(data.password)
     ln.clickSubmit();
     ln.verifyLogin();
    
    })


    })


})
 