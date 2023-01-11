const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem("items")) || []
const clear = document.querySelector(".clear")
const check_all = document.querySelector(".check")
const uncheck_all = document.querySelector(".uncheck")

function addItem(e){
    //stops the page from refreshing
    e.preventDefault()
    const text = (this.querySelector("[name=item]")).value
    const item = {
        text : text, 
        done : false
    }
    items.push(item)
    populateList(items, itemsList)
    //we can only use strings in local storage
    localStorage.setItem("items", JSON.stringify(items))
    this.reset()
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) =>{
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}"
            ${plate.done ? "checked" : ""}>
            <label for="item${i}">${plate.text}</label>
        </li>
        `
    }).join("")
}

function toggleDone(e){
    if(!e.target.matches("input")) return
    const elem = e.target
    const index = elem.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem("items", JSON.stringify(items))
    populateList(items, itemsList)
}

function deleteAll(){
    localStorage.setItem("items", JSON.stringify([]))
    populateList([], itemsList)
}

function checkAll(){
    items.forEach(item => item.done = true)
    localStorage.setItem("items", JSON.stringify(items))
    populateList(items, itemsList)
}

function uncheckAll(){
    items.forEach(item => item.done = false)
    localStorage.setItem("items", JSON.stringify(items))
    populateList(items, itemsList)
}

addItems.addEventListener("submit", addItem)
itemsList.addEventListener("click", toggleDone)
clear.addEventListener("click", deleteAll)
check_all.addEventListener("click", checkAll)
uncheck_all.addEventListener("click", uncheckAll)

populateList(items, itemsList)


