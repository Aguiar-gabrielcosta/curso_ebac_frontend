/// <reference types="cypress" />

describe('Testes na lista de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  after(() => {
    cy.contains('testeAdição').parentsUntil('.contato').parent().find('button.delete').click()
    cy.contains('testeEditado').parentsUntil('.contato').parent().find('button.delete').click()
    cy.contains('testeEdiçãoCancelada').parentsUntil('.contato').parent().find('button.delete').click()
  })

  it('Abre a página de contatos com o header "Agenda de contatos"', () => {
    cy.get('header > h1').should('have.text', 'Agenda de  contatos')
  })

  it('Deve adicionar um novo contato na lista', () => {
    cy.get('input[type="text"]').type('testeAdição')
    cy.get('input[type="email"]').type('exemplo@teste.com')
    cy.get('input[type="tel"]').type('11912345678')
    cy.get('button[type="submit"]').click()

    cy.get('.contato:last ul li:first').should('have.text', 'testeAdição')
  })

  it('Deve adicionar um novo contato na lista, edita-lo e salva-lo', () => {
    cy.get('input[type="text"]').type('testeEdição')
    cy.get('input[type="email"]').type('exemplo@teste.com')
    cy.get('input[type="tel"]').type('11912345678')
    cy.get('button[type="submit"]').click()

    cy.get('.contato:last ul li:first').should('have.text', 'testeEdição')

    cy.get('.contato:last button.edit').click()

    cy.get('input[type="text"]').clear().type('testeEditado')

    cy.get('button.alterar').click()

    cy.get('.contato:last ul li:first').should('have.text', 'testeEditado')
  })

  it('Deve adicionar um novo contato na lista, edita-lo e cancelar', () => {
    cy.get('input[type="text"]').type('testeEdiçãoCancelada')
    cy.get('input[type="email"]').type('exemplo@teste.com')
    cy.get('input[type="tel"]').type('11912345678')
    cy.get('button[type="submit"]').click()

    cy.get('.contato:last ul li:first').should('have.text', 'testeEdiçãoCancelada')

    cy.get('.contato:last button.edit').click()

    cy.get('button.cancelar').click()

    cy.get('.contato:last ul li:first').should('have.text', 'testeEdiçãoCancelada')
  })

  it('Deve adicionar um contato com nome testeDelete e o retirar', () => {
    cy.get('input[type="text"]').type('testeDelete')
    cy.get('input[type="email"]').type('exemplo@teste.com')
    cy.get('input[type="tel"]').type('11912345678')
    cy.get('button[type="submit"]').click()

    cy.get('.contato:last ul li:first').should('have.text', 'testeDelete')

    cy.get('.contato:last button.delete').click()

    cy.get('div.contato:last ul li:first').should('not.have.text', 'testeDelete')
  })
})