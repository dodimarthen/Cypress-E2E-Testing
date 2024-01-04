require('Cypress-xpath'),

//LGN_001
it('Login with valid credential', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');


    //fullfill sign-in form with valid credential
    cy.get('[name="user[email]"]').type("JohnDoeAlpaca20@gmail.com");
    cy.get('[name="user[password]"]').type("john14045");
    cy.get('button.button.button-primary.g-recaptcha[data-callback="onSubmit"]').click();
    cy.get('a[href*="/collections"]')
    .should('exist');
})  

//LGN_002
it('Login with invalid credentials (wrong password)', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');


    //fullfill sign-in form with valid credential
    cy.get('[name="user[email]"]').type("JohnDoeAlpaca20@gmail.com");
    cy.get('[name="user[password]"]').type("john14046");
    cy.get('button.button.button-primary.g-recaptcha[data-callback="onSubmit"]').click();
    cy.wait(25000)
    cy.get('li.form-error__list-item').contains("Invalid email or password.")
    .should('exist');
})  

//LGN_003
it('Login with invalid credential 2 (wrong email)', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');


    //fullfill sign-in form with valid credential
    cy.get('[name="user[email]"]').type("JohnDoeAlpaca21@gmail.com");
    cy.get('[name="user[password]"]').type("john14045");
    cy.get('button.button.button-primary.g-recaptcha[data-callback="onSubmit"]').click();
    cy.wait(25000)
    cy.get('li.form-error__list-item').contains("Invalid email or password.")
    .should('exist');
})  

//LGN_004
it('Login with invalid credential 3 (leaves both fields empty)', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');


    //fullfill sign-in form with valid credential
    cy.get('[name="user[email]"]').type(" ");
    cy.get('[name="user[password]"]').type(" ");
    cy.get('button.button.button-primary.g-recaptcha[data-callback="onSubmit"]').click();
    cy.wait(25000)
    cy.get('li.form-error__list-item').contains("Invalid email or password.")
    .should('exist');
})  

//LGN_005
it('Login with remember me option selected', () =>{

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');
    //fullfill sign-in form with valid credential
    cy.get('[name="user[email]"]').type("johndoealpaca20@gmail.com");
    cy.get('[name="user[password]"]').type("john14045");
    cy.get('.form__label--checkbox').click();
    cy.get('button.button.button-primary.g-recaptcha[data-callback="onSubmit"]').click();
    cy.wait(25000)
    cy.get('a[href*="/collections"]')
    .should('exist');
    cy.get('#header-dropdown-menu').contains('Sign Out').click({ force: true });
    cy.get('.header__nav-item.header__nav-sign-in a').click();
    cy.wait(15000)
    cy.get('[name="user[email]"]').should('have.value', 'johndoealpaca20@gmail.com');
})