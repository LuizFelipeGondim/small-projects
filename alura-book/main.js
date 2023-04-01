const cep = document.getElementById('cep')

async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""

    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json()
        
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!')
        }
        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf

        return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p class="erro__texto">CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }

}

cep.addEventListener("focusout", () => buscaEndereco(cep.value))