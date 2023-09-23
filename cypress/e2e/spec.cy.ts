/* eslint-disable no-undef */
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('template spec', () => {
  it('check if the page is rendering', () => {
    cy.visit('http://localhost:3000/React-TypeScript')
    cy.get('.header').contains('My Todos')
  })
  it('Checks for the Add button functionality', () => {
    cy.visit('http://localhost:3000/React-TypeScript')
    cy.get('.title-input').type('Sample Title',{force: true});
    cy.get('.description-input').type('Sample Description',{force: true});
    cy.get('.add-button').click({force: true})
  })
  it('Checks for the delete button functionality',()=>{
    
  })
})

