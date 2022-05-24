/// <reference types="cypress" />
import whrite from '../support/pages/components'

describe('Teste Técnico - Analista QA', () => {
  beforeEach(() => {
    /// hooks que sao executados antes e depois do teste.
    cy.visit('/')
  })
 it('Quando eu não inserir dados e clicar no botão Cadastrar, então devo verificar as mensagens de campos obrigatorio', () => {
    whrite.naoInserirDados()
  });
  it('Quando eu não inserir email corretamente e clicar no botão Cadastrar, então devo verificar a mensagem no campo de email', () => {
    whrite.verficaCampoEmail()
  });
   

 it('Quando eu inserir os dados corretamente e finalizar o cadastro, então meu cadastro deve aparecer no formulario', () => {
   whrite.inserirDadosSucesso()
 }); 

 it('Quando eu inserir os dados corretamente devo editar e verificar a mensagem', () => {
   whrite.editarNome()
 });

it('Quando eu editar e salvar o formulario então devo apagar meu Registro', () => {
  whrite.apagarFor()
});

});