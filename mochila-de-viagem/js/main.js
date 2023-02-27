const form = document.getElementById("novoItem")
const list = document.getElementById("lista")
const items = []

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements["nome"]
    const amount = event.target.elements["quantidade"]

    addElement(name.value, amount.value)

    name.value = ""
    quantidade.value = ""

})

function addElement(name, amount) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const numberItem = document.createElement("strong")
    numberItem.innerHTML = amount

    newItem.appendChild(numberItem)
    newItem.innerHTML += name

    list.appendChild(newItem)

    const item = {
        "name": name,
        "amount": amount  
    }

    items.push(item)

    localStorage.setItem("items", JSON.stringify(items))
}