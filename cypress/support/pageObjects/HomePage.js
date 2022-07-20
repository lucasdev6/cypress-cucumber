/// <refence type="Cypress"/>

import homeElements from "../elements/HomeElements"
const url = Cypress.config("baseUrl")

class HomePage {
    acessarSite(){
        cy.visit(url)
    }

    clicarBotaoFormulario(){
        cy.get(homeElements.botaoCadastro()).click()
    }

    visualizarFomulario(){
        cy.get(homeElements.tituloTexto()).should('contain', 'Cadastre-se para ')
    }

}

export default new HomePage