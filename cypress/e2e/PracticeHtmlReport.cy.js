describe('My practice html report test',()=>{

    it('Positive test case',()=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            cy.get("input[placeholder='Username']").type("Admin");
            cy.get("input[placeholder='Password']").type("admin123");

            cy.get("button[type='submit']").click();

            cy.title().should('eq',"OrangeHRM");

    })

    it('Negative test case',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");

        cy.get("button[type='submit']").click();

        cy.title().should('eq',"StrangeHRM");

})





})