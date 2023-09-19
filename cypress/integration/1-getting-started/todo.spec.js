/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })
  
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
//pt1 testes refatorados fase 1
  it('displays two todo items by default', () => {
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('can add new todo items', () => {
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
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
  })
  //pt2 testes refatorados fase 1
  it('can check off an item as completed', () => {
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })
    //pt2  testes refatorados fase 1
    it('pode filtrar tarefas não concluídas', () => {
      cy.contains('Active').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('contain.text', 'Walk the dog')
        .should('not.contain.text', 'Pay electric bill')
    })

    it('can filter for completed tasks', () => {
      cy.contains('Completed').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')
      cy.contains('Walk the dog').should('not.exist')
    })
////////////////////////////////////////////////////////////////// até aqui
    it('can delete all completed tasks', () => {
      cy.contains('Clear completed').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')
      cy.contains('Clear completed').should('not.exist')
    })
  })
////////////////////////////////////////////////////////////////// refactor script
    it('pode excluir todas as tarefas concluídas', () => {
      // Marque uma tarefa como concluída
      cy.get('.toggle').check()  
      // Exclua todas as tarefas concluídas
      cy.contains('Clear completed').click()  
      // Verifique se a lista de tarefas não contém mais tarefas concluídas
      cy.get('.todo-list li').should('not.have.text', 'Pay electric bill')  
      // Verifique se o botão "Clear completed" não existe mais
      cy.contains('Clear completed').should('not.exist')
  })
})
