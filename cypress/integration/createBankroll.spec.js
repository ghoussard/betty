/// <reference types="cypress" />

describe('Create bankroll', () => {
  it('it creates a bankroll', async () => {
    cy.intercept({
      method: 'POST',
      url: '/api/bankroll/create',
    }).as('createBankroll')

    cy.visit('http://localhost:3000/bankrolls/create')
    cy.get('input[name="name"]')
      .type('A bankroll')
      .should('have.value', 'A bankroll')
    cy.get('input[name="currency"]').type('EUR').should('have.value', 'EUR')
    cy.get('input[name="initialCapital"]')
      .type('{upArrow}')
      .should('have.value', '1')
    cy.get('form').submit()

    cy.wait('@createBankroll').then(() =>
      cy.location('pathname').should('eq', '/')
    )
  })
})
