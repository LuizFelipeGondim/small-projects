import validaCPF from "./validaCPF.js"
import validaMaioridade from "./validaMaioridade.js"

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach( campo => {
    campo.addEventListener("blur", () => verificaCampo(campo))
})

function verificaCampo(campo) {
    if (campo.name === "cpf" && campo.value.length >= 11) {
        validaCPF(campo)
    }

    if (campo.name == "aniversario" && campo.value != "") {
        validaMaioridade(campo)
    }
}