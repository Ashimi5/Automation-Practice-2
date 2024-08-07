describe("Fixtures",(()=>{

    it.skip('Without using fixtures Demo ',()=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[placeholder='Username']").type("Admin");
            cy.get("input[placeholder='Password']").type("admin123");
            cy.get("button[type='submit']").click();

            cy.get(".oxd-main-menu-item.active").should('have.text',"Dashboard");
          
    })

    it.skip('Users Fixtures Demo  ',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orangehrm').then( (data)=>{


        cy.get(".oxd-main-menu-item.active").should('have.text',data.expected);
      
        })


    })

    let userdata;
    before( ()=>{                       // The before block's variable can be accesed by multiple it blocks

        cy.fixture("orangehrm").then((data)=>{

            userdata = data;
        })
    })

    it('FixturesDemoTest',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        
        cy.get("input[placeholder='Username']").type(data.username);  // username from fixture orangehrm.json file
        cy.get("input[placeholder='Password']").type(data.password);
        cy.get("button[type='submit']").click();

        cy.get(".oxd-main-menu-item.active").should('have.text',data.expected);

    })


}))

