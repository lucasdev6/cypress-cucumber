import homePage from "../pageObjects/HomePage";

Given("acesso o site BugerEats", ()=>{
    homePage.acessarSite()
})

When("clicar no botão de cadastro de entregador", ()=>{
    homePage.clicarBotaoFormulario()
})

Then("devo ser redirecionado para o formulario de cadastro", ()=>{
    homePage.visualizarFomulario()
})