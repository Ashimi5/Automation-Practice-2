describe('Custom commands',()=>{


    it("Handling links",()=>{                           // Tested ok

        cy.visit("https://demo.nopcommerce.com/");

       // Normal method:  cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        //cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');


        // Using custom commands

        cy.clickLink("Apple MacBook Pro 13-inch");          //Using label to locate 
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it("Login command ",()=>{                               // Tested Ok

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("Log in");
        cy.loginapp("hamal@gmail.com","hamal123");

        cy.get('.ico-account').should('have.text',"My account");

    })

})