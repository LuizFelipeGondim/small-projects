function verificarSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {

        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h1>Game Over!!!</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }

    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorNumero} e ${maiorNumero}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>
                O número secreto é menor
                <i class="fa-solid fa-down-long"></i>
            </div>
        `
    } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>
                O número secreto é maior
                <i class="fa-solid fa-up-long"></i>
            </div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorNumero || numero < menorNumero
}

document.body.addEventListener('click', e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})