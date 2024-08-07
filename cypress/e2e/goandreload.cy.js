describe('mysuite',()=>{

    it('Navigation Test',()=>{

        cy.visit("https://demo.nopcommerce.com/");
        cy.get(".ico-login").click();
        cy.get("#Email").type("test@gmail.com");
        cy.get("#Password").type("test123");
        cy.get("button[class='button-1 login-button']").click();

        cy.get("div[class='news-list-homepage'] div:nth-child(1) div:nth-child(3) a:nth-child(1)").click();

        cy.get("div[class='page-title'] h1").should('have.text',"New online store is open!")
        
        cy.go('back');

        cy.go('forward');
        


    })


    //nopCommerce demo store

})