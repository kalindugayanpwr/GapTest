export class SignPage {


    openUrl(){
        cy.visit(Cypress.env('url'))
    }

    getDragNDropLink() {
        return cy.xpath("//a[text()='Drag and Drop']");
    }

    getFileUploadLink(){
        return cy.xpath("//a[text()='File Upload']");
    }

    getHoversLink(){
        return cy.xpath("//a[text()='Hovers']");
    }

    getHorizontalSliderLink(){
        return cy.xpath("//a[text()='Horizontal Slider']");
    }

    getNotificationMessagesLink(){
        return cy.xpath("//a[text()='Notification Messages']");
    }

    getNotificationmessagelogo(){
        return cy.get('h3');
    }
    //Actions

    getDragNDropLinkClick() {
        this.getDragNDropLink().click();
        
    }

    getFileUploadLinkClick() {
        this.getFileUploadLink().click();
        
    }

    getHoversLinkClick() {
        this.getHoversLink().click();
        
    }
   
    getHorizontalSliderLinkClick() {
        this.getHorizontalSliderLink().click();
        
    }

    getNotificationMessagesLinkClick() {
        this.getNotificationMessagesLink().click();
        
    }

}












