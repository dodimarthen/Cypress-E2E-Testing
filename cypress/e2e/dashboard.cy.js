require('Cypress-xpath'),

//DSHBRD_001
it('access the dashboard and try the free course', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');


    //fullfill sign-in form with valid credential
    cy.get('[name="user[email]"]').type("JohnDoeAlpaca20@gmail.com");
    cy.get('[name="user[password]"]').type("juju2468");
    cy.get('button.button.button-primary.g-recaptcha[data-callback="onSubmit"]').click();
    cy.wait(20000)
    cy.get('a[href*="/collections"]')
    .should('exist');
    cy.contains('View more courses').click();
    cy.contains('Complete Selenium Webdriver with C# - Build A Framework').click();
})  