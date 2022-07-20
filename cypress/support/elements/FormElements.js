class FormElements {
    campoNome = () => {
        return 'input[name="name"]'
    }
    campoCpf = () => {
        return 'input[name="cpf"]'
    }
    campoEmail = () => {
        return 'input[name="email"]'
    }
    campoWhatsapp = () => {
        return 'input[name="whatsapp"]'
    }
    campoCep = () => {
        return 'input[name="postalcode"]'
    }
    botaoBuscarCep = () => {
        return '[value="Buscar CEP"]'
    }
    verificarRua = () => {
        return 'input[name="address"]'
    }
    campoNumero = () => {
        return 'input[name="address-number"]'
    }
    campoComplemento = () => {
        return 'input[name="address-details"]'
    }
    verificarBairro = () => {
        return 'input[name="district"]'
    }
    verificarCidade = () => {
        return 'input[name="city-uf"]'
    }
    botaoMetodo = () => {
        return '.delivery-method li'
    }
    uploadCnh = () => {
        return 'input[accept^="image"]'
    }
    botaoFinalizarCadastro = () => {
        return 'button[type="submit"]'
    }
    validacaoCadastro = () => {
        return '#swal2-html-container'
    }
}

export default new FormElements