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

        items[items.findIndex(element => element.id === exists.id)] = currentItem
    } else {
        currentItem.id = items[items.length-1] ? (items[items.length-1]).id + 1 : 0

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

    newItem.appendChild(deleteButton(item.id))

    list.appendChild(newItem)
}

function editElement(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.amount
}

function deleteButton(id) {
    const buttonElement = document.createElement("button")
    buttonElement.innerText = "X"

    buttonElement.addEventListener("click", function() {
        deleteElement(this.parentNode, id)
    })

    return buttonElement
}

function deleteElement(tag, id) {
    tag.remove()

    items.splice(items.findIndex(element => element.id === id), 1)

    localStorage.setItem("items", JSON.stringify(items))
}