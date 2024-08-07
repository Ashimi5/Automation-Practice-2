describe('mysuite',()=>{

    it('Captures Screenshots and Videos',()=>{

       cy.visit("https://www.google.com/");
       cy.screenshot("homepage");


       // cy.get("div[class='c1c6090eff'] div[class='d3c6350bdd eb02592978 ad0b39688b']").screenshot();
    
    })




})