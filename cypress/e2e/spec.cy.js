/// <reference types="cypress" />
import { SignPage } from "../pages/SignPage"

const signPage = new SignPage();
describe('Test Suit', () => {

  beforeEach(() => {
    signPage.openUrl();
  })

  it('Verify that drag and drop function is working', () => {
    signPage.getDragNDropLinkClick();
    cy.dragAndDrop();
    cy.get('#column-a').should('have.text', 'B');
    cy.get('#column-b').should('have.text', 'A');
  })
  it('Verify that file upload function is working', () => {
    signPage.getFileUploadLinkClick();
    cy.uploadFile('image.png');
    cy.get('#uploaded-files').should('contain', 'image.png');
  })
  it('Verify that hovers link is working', () => {
    signPage.getHoversLinkClick();
    cy.hoverOverTheImage();
    cy.get('#content > div > div:nth-child(5) > div').should('be.visible');
  })
  it('Verify that horizontal slider link function is working', () => {
    signPage.getHorizontalSliderLinkClick();
    cy.horizontalSlider(4);
    cy.get('#range').contains(4);
  })
  it('Verify that  notification message function is working', () => {
    signPage.getNotificationMessagesLinkClick();
    cy.xpath('//a[text()="Click here"]', { timeout: 10000 }).click({ force: true });
    cy.wait(2000);
    cy.get('#flash').should('be.visible');
    cy.get('#flash').contains('Action');
  })

})
