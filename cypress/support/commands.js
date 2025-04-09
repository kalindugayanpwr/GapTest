// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('dragAndDrop',()=>{
    const dt = new DataTransfer();
    cy.get('#column-a').trigger('dragstart',{dataTransfer:dt});
    cy.get('#column-b').trigger('drop',{dataTransfer:dt});
});

Cypress.Commands.add('uploadFile', (fileName) => {
    cy.get('#file-upload').click({ force: true }).attachFile(fileName);
    cy.get('#file-submit', { timeout: 10000 }).click({ force: true });
});

Cypress.Commands.add('hoverOverTheImage', () => {
    cy.get('#content > div > div:nth-child(5)').trigger('mouseover');
    cy.get('#content > div > div:nth-child(5) > div').invoke('show');
});

Cypress.Commands.add('horizontalSlider',(value)=>{
    cy.get("#content > div > div > input[type=range]")
    .invoke("val", value)
    .trigger("change")
    .click({ force: true });
});