describe('Settings Page', () => {

  beforeEach(() => {

    cy.login()

    cy.get('[data-testid="nav-settings"]')
      .click()

  })

  it('should persist logo preference across pages and refresh', () => {

    cy.get('[data-testid="logo-toggle"]')
      .check()

    cy.get('[data-testid="brand-logo"]')
      .should('be.visible')

    cy.reload()

    cy.get('[data-testid="logo-toggle"]')
      .should('be.checked')

    cy.get('[data-testid="brand-logo"]')
      .should('be.visible')

    cy.get('[data-testid="nav-transactions"]')
      .click()

    cy.get('[data-testid="brand-logo"]')
      .should('be.visible')

    cy.get('[data-testid="nav-fruit"]')
      .click()

    cy.get('[data-testid="brand-logo"]')
      .should('be.visible')

    cy.get('[data-testid="nav-settings"]')
      .click()

    cy.get('[data-testid="brand-logo"]')
      .should('be.visible')

  })

})