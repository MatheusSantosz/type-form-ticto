
const el = require('./elements').ELEMENTS

class Write {

  naoInserirDados () {
    cy.get(el.btnRegister).contains('Cadastrar').click()
    cy.get(el.alert).should('contain', 'O campo Nome é obrigatório')
    cy.get(el.alert).should('contain', 'O campo Email é obrigatório.')
    cy.get(el.alert).should('contain', 'O campo Password é obrigatório')
  }

  verficaCampoEmail () {
    cy.get('h1').should('contain', 'Formulário')
    cy.get(el.inputName).type('M T')
    cy.get(el.inputEmail).type('email@').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please enter a part following '@'. 'email@' is incomplete.")
    })
    cy.get(el.btnRegister).contains('Cadastrar').click({ force: true })
  }

  inserirDadosSucesso () {
    cy.get('h1').should('contain', 'Formulário')
    cy.get(el.inputName).type('M T')
    cy.get(el.inputEmail).type('email@email.com.br')
    cy.get(el.inputPassword).type('12345678')
    cy.get(el.btnRegister).contains('Cadastrar').click({ force: true })
    cy.get(el.alertSucess).should('contain', 'Usuário cadastrado com sucesso.' )
    cy.get('td.text-truncate').contains('M T').siblings()
    cy.get('.text-truncate')
    .last()
    .contains('email@email.com.br')
  
  }
  editarNome (){
    cy.get('td.text-truncate')
    .contains('M T')
    .siblings()
    .children()
    .filter(':contains("Ações")')
    .click()
    .contains('Editar')
    .click({ force: true })
    cy.get("[value*='M T']")
    .click({ multiple: true })
    .should('have.value', 'M T')
    .clear()
    .type('M')
    cy.get("[class='btn btn-primary']").should('be.visible').click({ force: true, multiple: true })
    cy.get(el.alert).should('contain', 'Insira um Nome e Sobrenome válido')
    cy.get("[value*='M T']")
    .click()
    .should('have.value', 'M T')
    .clear()
    .type('M TS')
    cy.get("[class='btn btn-primary']").should('be.visible').click({ force: true, multiple: true })
    cy.get(el.alertSucess).contains('Usuário salvo com sucesso.')
    
   }

  apagarFor() {
    cy.get('td.text-truncate')
    .contains('M TS')
    .siblings()
    .children()
    .filter(':contains("Ações")')
    .click()
    .contains('Excluir')
    .click({ force: true, multiple: true })
    cy.get("[class='btn btn-danger']").contains('Excluir').click({force: true})
    cy.get(el.alertSucess).contains('Usuário removido com sucesso.')
    // cy.request('DELETE', 'https://qa-test.ticto.io/**')
    
   }
  }


export default new Write()