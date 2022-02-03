/// <reference types="cypress" />

describe('Hello world', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays hello world', () => {
    cy.get('body').contains('Hello world!')
  })
})
