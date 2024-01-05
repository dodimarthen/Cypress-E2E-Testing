require('Cypress-xpath'),
//USRFRG_0001
it('Testing forget password button visibility', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');

    //verify forget password button is visible
    cy.get('a[href*="/users/password/new"]')
    cy.get('.form__forgot-password')
    .should('exist')
    

})  