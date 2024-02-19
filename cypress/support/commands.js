// Создание пользователя
Cypress.Commands.add("createUser", (user) => {
    cy.request('POST', '/user', user);
  });
  
  // Изменение пользователя
  Cypress.Commands.add("updateUser", (username, user) => {
    cy.request('PUT', `/user/${username}`, user);
  });
  
  // Удаление пользователя
  Cypress.Commands.add("deleteUser", (username) => {
    cy.request('DELETE', `/user/${username}`);
  });
   

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