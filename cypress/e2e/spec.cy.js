describe('My First Test', () => {
  it('frontend', () => {
    cy.visit('http://localhost:8081/')
    cy.contains('frontend')
  })
})
describe('My Second Test', () => {
  it('toto', () => {
    cy.visit('http://localhost:8081/')
    cy.contains('Welcome to the Task Manager API!')
  })
})
