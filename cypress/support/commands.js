///<reference types="cypress"/>
require('cypress-xpath');




//Custom command for clicking on link using label

Cypress.Commands.add('clickLink', (label) => {
        cy.get('a').contains(label).click();
});


//Create command for login

Cypress.Commands.add("loginapp",(email,password)=>{

  cy.get("#Email").type(email);
  cy.get("#Password").type(password);

  cy.get("button[class='button-1 login-button']").click();



})





      