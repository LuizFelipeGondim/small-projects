const form = document.getElementById("novoItem")
const list = document.getElementById("lista")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = event.target.elements["nome"].value
    let amount = event.target.elements["quantidade"].value

    addElement(name, amount)
})

function addElement(name, amount) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const numberItem = document.createElement("strong")
    numberItem.innerHTML = amount

    newItem.appendChild(numberItem)
    newItem.innerHTML += name

    list.appendChild(newItem)
}