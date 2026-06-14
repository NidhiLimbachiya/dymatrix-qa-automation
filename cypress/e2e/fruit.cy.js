describe('Favourite Fruit Page', () => {

  beforeEach(() => {
    cy.login()

    cy.get('[data-testid="nav-fruit"]')
      .click()
  })

  it('should move fruit into favourite container and update both containers', () => {

    cy.get('[data-testid="container-fruit"]')
      .find('[data-testid="fruit-item"]')
      .its('length')
      .then((availableCount) => {

        cy.get('[data-testid="container-fruit"]')
          .find('[data-testid="fruit-item"]')
          .first()
          .dblclick()

        cy.get('[data-testid="container-fruit"]')
          .find('[data-testid="fruit-item"]')
          .should('have.length', availableCount - 1)

        cy.get('[data-testid="favourite-list"]')
          .children()
          .should('have.length', 1)

      })
  })
})