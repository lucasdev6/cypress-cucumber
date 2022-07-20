Feature: Preencher formulario

    Scenario: Preencher o formulario e cadastrar
        Given acessar a pagina de formulario
        When preencher o formulario
        Then o sistema deve salvar o formulario preenchido 