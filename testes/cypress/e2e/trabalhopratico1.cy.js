/// <reference types="cypress"/>

describe ('Criando cenário de teste para o site Aprendendo a Testar', () => {

it('Caso de teste: Testando botão "História e Conceitos de Testes"', () => {

  cy.visit('http://www.aprendendotestar.com.br/index.html')
  cy.get(':nth-child(1) > a > .caption').click()
  cy.get('.title').should('have.text', 'História dos Testes de Software')

})

it('Caso de teste: Testando botão "Comunidade de Testadores"', () => {

  cy.visit('http://www.aprendendotestar.com.br/index.html')
  cy.get(':nth-child(2) > a > .caption').click()
  cy.get('.title').should('have.text', 'Comunidades de Testadores de Software')

})

it('Caso de teste: Testando botão "Gestão de Testes"', () => {

  cy.visit('http://www.aprendendotestar.com.br/index.html')
  cy.get(':nth-child(5) > a > .caption').click()
  cy.get('.title').should('have.text', 'Gestão de Testes de Software')

})

it('Caso de teste: Registro de Dado no site com sucesso', () => {

  cy.visit('http://www.aprendendotestar.com.br/index.html')
  cy.get(':nth-child(6) > a > .caption > .work_title > h1').click()
  cy.get(':nth-child(61) > a').click()
  cy.get(':nth-child(2) > td > input').type('teste1')
  cy.get(':nth-child(4) > td > input').type('teste1')
  cy.get(':nth-child(6) > td > input').type('teste1')
  cy.get('td > .btn').click()
  cy.get('tbody > :nth-child(1) > :nth-child(5)').should('contain.text', 'Ação')
})

it('Caso de teste: Testando botão "Ferramentas para Testes"', () => {

  cy.visit('http://www.aprendendotestar.com.br/index.html')
  cy.get(':nth-child(4) > a > .caption').click()
  cy.get('.title').should('have.text', 'Ferramentas de Testes de Software')

})


//Caso Negativo
it('Caso de teste: Registro de Dado no site com falha (com campo nome "em branco")', () => {

  cy.visit('http://www.aprendendotestar.com.br/index.html')
  cy.get(':nth-child(6) > a > .caption > .work_title > h1').click()
  cy.get(':nth-child(61) > a').click()
  cy.get(':nth-child(2) > td > input').type('teste1')
  cy.get(':nth-child(4) > td > input').type('teste1')
  cy.get('td > .btn').click()
  cy.get(':nth-child(7) > td').should('have.text', 'Existem campos em branco.') 
})


})



