describe('Login Functionality', () => {

  beforeEach(() => {
    cy.visit('/#/login')
  })

  it('should show error for invalid credentials', () => {

    cy.get('[data-testid="username-input"]')
      .type('wronguser')

    cy.get('[data-testid="password-input"]')
      .type('wrongpassword')

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
  })

})