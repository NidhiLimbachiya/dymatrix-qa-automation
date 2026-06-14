describe('Sidebar Navigation', () => {

  it('should not display sidebar before login', () => {

    cy.visit('/')

    cy.get('[data-testid="nav-transactions"]')
      .should('not.exist')

    cy.get('[data-testid="nav-fruit"]')
      .should('not.exist')

    cy.get('[data-testid="nav-settings"]')
      .should('not.exist')

    cy.get('[data-testid="logout-button"]')
      .should('not.exist')

  })

  it('should display sidebar after successful login', () => {

    cy.login()

    cy.get('[data-testid="nav-transactions"]')
      .should('be.visible')

    cy.get('[data-testid="nav-fruit"]')
      .should('be.visible')

    cy.get('[data-testid="nav-settings"]')
      .should('be.visible')

    cy.get('[data-testid="logout-button"]')
      .should('be.visible')

  })

})