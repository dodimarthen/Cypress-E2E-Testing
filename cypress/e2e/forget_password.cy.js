require('Cypress-xpath'),
//USRFRG_001
it('Testing forget password button visibility', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');

    //verify forget password button is visible
    cy.get('a[href*="/users/password/new"]')
    cy.get('.form__forgot-password')
    .should('exist')
})  
//USRFRG_002
it('Forget password button with valid credentials', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');
    

    //verify forget password button is visible and clickable
    cy.get('a[href*="/users/password/new"]')
    cy.get('.form__forgot-password')
    .should('exist')
    cy.get('.form__forgot-password').click();
    cy.get('[name="user[email]"]').type('johndoealpaca20@gmail.com')
    cy.get('.button.button-primary').click();
    cy.get('.password-reset__heading')
    .should('be.visible')
    .and('have.text', 'Help is on the way!');
    cy.contains('p', 'If a user account is found, we will send an email with more information on how to reset your password')
    .should('be.visible')

})
//USRFRG_003
it('Forget password button with invalid credentials', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');
    

    //verify forget password button is visible and clickable
    cy.get('a[href*="/users/password/new"]')
    cy.get('.form__forgot-password')
    .should('exist')
    cy.get('.form__forgot-password').click();
    cy.get('[name="user[email]"]').type('johndoe@yopmail.com')
    cy.get('.button.button-primary').click();
    cy.get('.password-reset__heading')
    .should('be.visible')
})

//USRFRG_004
it('Forget password but empty the field', () =>{
    cy.visit('https://courses.ultimateqa.com/users/sign_in');
    cy.get('.form__forgot-password')
    .should('exist')
    cy.get('.form__forgot-password').click();
    cy.get('[name="user[email]"]').clear().type(' ');
    cy.get('.button.button-primary').click();
    cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('Please fill out this field');
    })
})