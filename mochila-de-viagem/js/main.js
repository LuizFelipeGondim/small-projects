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

    const exists = items.find(element => element.name === name.value)

    const currentItem = {
        "name": name.value,
        "amount": amount.value  
    }

    if(exists) {
        currentItem.id = exists.id

        editElement(currentItem)

        items[exists.id] = currentItem
    } else {
        currentItem.id = items.length

        addElement(currentItem)
    
        items.push(currentItem)
    }


    localStorage.setItem("items", JSON.stringify(items))

    name.value = ""
    quantidade.value = ""

})

function addElement(item) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const numberItem = document.createElement("strong")
    numberItem.innerHTML = item.amount
    numberItem.dataset.id = item.id

    newItem.appendChild(numberItem)
    newItem.innerHTML += item.name

    list.appendChild(newItem)
}

function editElement(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.amount
}