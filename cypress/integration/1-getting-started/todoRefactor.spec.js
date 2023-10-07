/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />

describe('example to-do app refactor', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })
  Cypress._.times(30, () => {
    it('exibe dois itens de tarefas por padrão', () => {
      cy.get('.todo-list li')
        .should('have.length', 2)
        .first()
        .should('have.text', 'Pay electric bill')
    })

    it('pode adicionar novos itens de tarefas', () => {
      const novoItem = 'Alimentar o gato'
      cy.get('[data-test=new-todo]')
        .type(`${novoItem}{enter}`)
      cy.get('.todo-list li')
        .should('have.length', 3)
        .last()
        .should('have.text', novoItem)
    })
    it('pode marcar um item como concluído', () => {
      cy.contains('Pay electric bill')
        .parent()
        .within(() => {
          cy.get('input[type=checkbox]')
            .check()
            .parents('li')
            .should('have.class', 'completed')
        })
    })
    context('com uma tarefa marcada', () => {
      beforeEach(() => {
        cy.contains('Pay electric bill')
          .parent()
          .within(() => {
            cy.get('input[type=checkbox]').check()
          })
      })
      it('pode filtrar tarefas concluídas', () => {
      // Clicar na opção "Completed"
        cy.contains('Completed',{timeout:2000}).click()
        // Verificar se apenas uma tarefa está visível
        cy.get('.todo-list li')
          .should('have.length', 1)
          .should('contain', 'Pay electric bill') // Verifica se a tarefa é "Pay electric bill"
        // Verificar se a tarefa "Walk the dog" não existe
        cy.contains('Walk the dog').should('not.exist')
      })
      //Cypress._.times(10, () => {
      it('pode excluir todas as tarefas concluídas', () => {
        cy.contains('Clear completed', {timeout: 2000}).click()
        // Espera até que a lista de tarefas não contenha mais o texto "Pay electric bill" e tenha comprimento 0
        cy.get('.todo-list li')
          .should('not.contain.text', 'Pay electric bill')
          .should('have.length', 1)
        // Espera até que o botão "Clear completed" não exista mais
        cy.contains('Clear completed').should('not.exist')
      })
    })
  })
})
