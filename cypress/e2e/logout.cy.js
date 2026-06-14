describe('Logout Functionality', () => {

  beforeEach(() => {
    cy.login()
  })

  it('should clear session and return to login page', () => {

    cy.get('[data-testid="logout-button"]')
      .click()

    cy.window().then((win) => {
      expect(
        win.sessionStorage.getItem('qaenv.authenticated')
      ).to.be.null
    })

    cy.get('[data-testid="login-form"]')
      .should('be.visible')

    cy.get('[data-testid="nav-transactions"]')
      .should('not.exist')

    cy.get('[data-testid="nav-fruit"]')
      .should('not.exist')

    cy.get('[data-testid="nav-settings"]')
      .should('not.exist')

    cy.get('[data-testid="logout-button"]')
      .should('not.exist')

  })

})