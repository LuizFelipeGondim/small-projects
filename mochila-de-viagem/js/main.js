const form = document.getElementById("novoItem")
const list = document.getElementById("lista")
const items = JSON.parse(localStorage.getItem("items")) || []

items.forEach( (element) => {
    addElement(element)
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements["nome"]
    const amount = event.target.elements["quantidade"]

    const currentItem = {
        "name": name.value,
        "amount": amount.value  
    }

    addElement(currentItem)


    items.push(currentItem)

    localStorage.setItem("items", JSON.stringify(items))

    name.value = ""
    quantidade.value = ""

})

function addElement(item) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const numberItem = document.createElement("strong")
    numberItem.innerHTML = item.amount

    newItem.appendChild(numberItem)
    newItem.innerHTML += item.name

    list.appendChild(newItem)
}