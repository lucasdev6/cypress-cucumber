import formPage from "../pageObjects/FormPage";
import homePage from "../pageObjects/HomePage"


Given("acessar a pagina de formulario", ()=>{
    homePage.acessarSite()
    homePage.clicarBotaoFormulario()
    homePage.visualizarFomulario()
})
When("preencher o formulario", ()=>{
    formPage.preencherFomulario()
})
Then("o sistema deve salvar o formulario preenchido", ()=>{
    formPage.salvarFormulario()
})