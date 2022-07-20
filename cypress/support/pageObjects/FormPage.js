
import formElements from "../elements/FormElements"

class FormPage {

    preencherFomulario(){
        cy.get(formElements.campoNome()).type('Lucas Silva')
        cy.get(formElements.campoCpf()).type('29198866060')
        cy.get(formElements.campoEmail()).type('lucas@teste.com')
        cy.get(formElements.campoWhatsapp()).type('00000000000')
        cy.get(formElements.campoCep()).type('76381131')
        cy.get(formElements.botaoBuscarCep()).click()
        cy.get(formElements.verificarRua()).should('have.value', 'Rua 27')
        cy.get(formElements.campoNumero()).type('001')
        cy.get(formElements.campoComplemento()).type('casa')
        cy.get(formElements.verificarBairro()).should('have.value', 'São Cristóvão')
        cy.get(formElements.verificarCidade()).should('have.value', 'Goianésia/GO')
        cy.contains(formElements.botaoMetodo(), 'Moto').click()
        cy.get(formElements.uploadCnh()).attachFile('/assets/' + 'cnh-digital.jpg')
    }

    salvarFormulario(){
        cy.get(formElements.botaoFinalizarCadastro()).click()
        cy.get(formElements.validacaoCadastro()).should('contain', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
    }

}

export default new FormPage