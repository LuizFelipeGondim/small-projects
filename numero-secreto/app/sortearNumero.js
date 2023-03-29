const menorNumero = 20
const maiorNumero = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorNumero + 1)
}

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorNumero

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorNumero
