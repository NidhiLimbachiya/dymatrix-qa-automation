Cypress.Commands.add('login', () => {

  cy.visit('/#/login')

  cy.get('[data-testid="username-input"]')
    .type('testuser')

  cy.get('[data-testid="password-input"]')
    .type('testpassword')

  cy.get('[data-testid="login-button"]')
    .click()

})