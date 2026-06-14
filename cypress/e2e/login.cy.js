describe('Login Functionality', () => {

  beforeEach(() => {
    cy.visit('/#/login')
  })

  it('should not display sidebar or logout before login', () => {

    cy.get('[data-testid="nav-transactions"]')
      .should('not.exist')

    cy.get('[data-testid="nav-fruit"]')
      .should('not.exist')

    cy.get('[data-testid="nav-settings"]')
      .should('not.exist')

    cy.get('[data-testid="logout-button"]')
      .should('not.exist')

  })

  it('should display an error message for invalid credentials', () => {

  cy.get('[data-testid="username-input"]')
    .type('wronguser')

  cy.get('[data-testid="password-input"]')
    .type('wrongpassword')

  cy.get('[data-testid="login-button"]')
    .click()

  cy.get('[data-testid="login-error"]')
    .should('be.visible')
    .and('contain', 'Invalid')

})

  it('should display an error message when credentials are empty', () => {

    cy.get('[data-testid="login-button"]')
      .click()

    cy.get('[data-testid="login-error"]')
      .should('be.visible')

  })

  it('should login successfully with valid credentials', () => {

    cy.get('[data-testid="username-input"]')
      .type('testuser')

    cy.get('[data-testid="password-input"]')
      .type('testpassword')

    cy.get('[data-testid="login-button"]')
      .click()

    cy.get('[data-testid="logout-button"]')
      .should('be.visible')

    cy.get('[data-testid="nav-transactions"]')
      .should('be.visible')

    cy.get('[data-testid="nav-fruit"]')
      .should('be.visible')

    cy.get('[data-testid="nav-settings"]')
      .should('be.visible')

  })

})