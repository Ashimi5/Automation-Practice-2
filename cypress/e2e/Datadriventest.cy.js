describe("My Test Suite",(()=>{

    it('Data Driven Test',()=>{

            cy.fixture("orangehrm2").then((data)=>{

                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

                data.forEach((userdata)=>{

                    cy.get("input[placeholder='Username']").type(userdata.username);
                    cy.get("input[placeholder='Password']").type(userdata.password);
                    cy.get("button").click();

                if(userdata.username=='Admin' && userdata.password=="admin123"){

                    cy.get(".oxd-main-menu-item.active").should('have.text',userdata.expected);
                    cy.get(".oxd-userdropdown-name").click();                   
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click();        //for logout

                }
                //else{

            //  cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text",userdata.expected);
               // }
                    

                })


            })

    
    })

}))
