require('Cypress-xpath'),
//REG_001
// it('New User Register Successfully', () =>{

//     //visit the page
//     cy.visit('https://courses.ultimateqa.com/users/sign_in');

//     //verify register or create new account visible
//     cy.get('a[href*="/users/sign_up"]')
//     .should('exist')
//     .click()

//     //fullfill registration form with valid credential
//     cy.get('[name="user[first_name]"]').type("John");
//     cy.get('[name="user[last_name]"]').type("Doe");
//     cy.get('[name="user[email]"]').type("JohnDoeAlpaca20@gmail.com");
//     cy.get('[name="user[password]"]').type("john14045");
//     cy.get('[type="checkbox"]').check();
//     cy.get('[data-callback="onSubmit"]').click();
//     cy.get('a[href*="/collections"]')
//     .should('exist');
// })  

// //REG_002
// it('Registers a New User with an Email that is Already Taken', () =>{ 

//     //visit the page
//     cy.visit('https://courses.ultimateqa.com/users/sign_in');

//     //verify register or create new account visible
//     cy.get('a[href*="/users/sign_up"]')
//     .should('exist')
//     .click()

//     //fullfill registration form with valid credential
//     cy.get('[name="user[first_name]"]').type("John");
//     cy.get('[name="user[last_name]"]').type("Doe");
//     cy.get('[name="user[email]"]').type("JohnDoeAlpaca20@gmail.com");
//     cy.get('[name="user[password]"]').type("john14045");
//     cy.get('[type="checkbox"]').check();
//     cy.get('[data-callback="onSubmit"]').click();
//     cy.wait(25000)
//     cy.get('li.form-error__list-item').contains('Email has already been taken');
    

// })

// //REG_003
// it('Registers a New User with an invalid Email domain', () =>{ 

//     //visit the page
//     cy.visit('https://courses.ultimateqa.com/users/sign_in');

//     //verify register or create new account visible
//     cy.get('a[href*="/users/sign_up"]')
//     .should('exist')
//     .click()

//     //fullfill registration form with valid credential
//     cy.get('[name="user[first_name]"]').type("John");
//     cy.get('[name="user[last_name]"]').type("Doe");
//     cy.get('[name="user[email]"]').type("johndoe01@yopmail.com");
//     cy.get('[name="user[password]"]').type("johndoe123");
//     cy.get('[type="checkbox"]').check();
//     cy.get('[data-callback="onSubmit"]').click();

// })

// //REG_004
// it('Registers a New User with an Empty FirstName', () =>{ 

//     //visit the page
//     cy.visit('https://courses.ultimateqa.com/users/sign_in');

//     //verify register or create new account visible
//     cy.get('a[href*="/users/sign_up"]')
//     .should('exist')
//     .click()

//     //fullfill registration form with valid credential
//     cy.get('[name="user[first_name]"]').type(" ");
//     cy.get('[name="user[last_name]"]').type("Doe");
//     cy.get('[name="user[email]"]').type("marthensitorus@gmail.com");
//     cy.get('[name="user[password]"]').type("johndoe123");
//     cy.get('[type="checkbox"]').check();
//     cy.get('[data-callback="onSubmit"]').click();
//     cy.wait(30000)
//     cy.get('li.form-error__list-item').contains("First name can't be blank");
// })

// //REG_005
// it('Registers a New User with an Empty LastName', () =>{ 

//     //visit the page
//     cy.visit('https://courses.ultimateqa.com/users/sign_in');

//     //verify register or create new account visible
//     cy.get('a[href*="/users/sign_up"]')
//     .should('exist')
//     .click()

//     //fullfill registration form with valid credential
//     cy.get('[name="user[first_name]"]').type("John");
//     cy.get('[name="user[last_name]"]').type(" ");
//     cy.get('[name="user[email]"]').type("marthensitorus@gmail.com");
//     cy.get('[name="user[password]"]').type("johndoe123");
//     cy.get('[type="checkbox"]').check();
//     cy.get('[data-callback="onSubmit"]').click();
//     cy.wait(30000)
//     cy.get('li.form-error__list-item').contains("Last name can't be blank");
// })

// //REG_006
// it('Registers a New User with an Empty all fields', () =>{ 

//     //visit the page
//     cy.visit('https://courses.ultimateqa.com/users/sign_in');

//     //verify register or create new account visible
//     cy.get('a[href*="/users/sign_up"]')
//     .should('exist')
//     .click()

//     //fullfill registration form with valid credential
//     cy.get('[name="user[first_name]"]').type(" ");
//     cy.get('[name="user[last_name]"]').type(" ");
//     cy.get('[name="user[email]"]').type(" ");
//     cy.get('[name="user[password]"]').type(" ");
//     cy.get('[type="checkbox"]').check();
//     cy.get('[data-callback="onSubmit"]').click();
//     cy.wait(30000)
//     cy.get('li.form-error__list-item').contains("First name can't be blank");
//     cy.get('li.form-error__list-item').contains("Last name can't be blank");
//     cy.get('li.form-error__list-item').contains("Terms must be accepted");
//     cy.get('li.form-error__list-item').contains("Email can't be blank");
//     cy.get('li.form-error__list-item').contains("Password can't be blank");
// })

//REG_007
it('Registers a New User with LinkedIn profile', () =>{ 

    //visit the page
    cy.visit('https://courses.ultimateqa.com/users/sign_in');

    //verify register or create new account visible
    cy.get('a[href*="/users/sign_up"]')
    .should('exist')
    .click()
    cy.get('.button.linkedin')
    .click()
    cy.url().should('include', 'https://www.linkedin.com/uas/login?')

})