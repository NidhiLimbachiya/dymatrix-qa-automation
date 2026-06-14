describe('Transactions Page', () => {

  beforeEach(() => {

    cy.login()

    cy.get('[data-testid="nav-transactions"]')
      .click()

  })

  it('should display transactions table with data', () => {

    cy.get('[data-testid="transactions-table"]')
      .should('be.visible')

    cy.get('[data-testid="transaction-row"]')
      .should('have.length.greaterThan', 0)

    cy.get('[data-testid="page-info"]')
      .should('be.visible')

  })

  it('should update page indicator when navigating to next page', () => {

    cy.get('[data-testid="current-page"]')
      .invoke('text')
      .then((currentPage) => {

        cy.get('[data-testid="next-page"]')
          .click()

        cy.get('[data-testid="current-page"]')
          .should(($newPage) => {

            expect($newPage.text())
              .not.equal(currentPage)

          })

      })

  })

  it('should change transaction rows when page changes', () => {

    cy.get('[data-testid="transaction-row"]')
      .first()
      .invoke('text')
      .then((firstRowText) => {

        cy.get('[data-testid="next-page"]')
          .click()

        cy.get('[data-testid="transaction-row"]')
          .first()
          .should(($newRow) => {

            expect($newRow.text())
              .not.equal(firstRowText)

          })

      })

  })

})