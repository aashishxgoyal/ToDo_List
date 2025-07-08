let listContainer = document.querySelector(".listContainer")
let addInput = document.querySelector("#addInput")
let addBtn = document.querySelector(".addBtn")
let list = [];

function renderList(arr) {
    listContainer.innerHTML = ""
    arr.map(obj => {
        let divElem = document.createElement("div");
        divElem.classList.add("list")
        divElem.innerHTML = `
    <p>${obj.text}</p>
    `
    let buttonElem = document.createElement("button");
    buttonElem.innerText = "Delete";
    divElem.appendChild(buttonElem);
    divElem.onclick = () =>{
        handleRemoveList(obj.id)
    }
        listContainer.append(divElem);
    })
}

renderList(list);

function handleAddList(){
    let obj = {
        id: Date.now(),     // date object hai .now ek method hai
        text: addInput.value
    }
    list.unshift(obj);
    renderList(list)
    addInput.value = "";
}

function handleRemoveList(id) {
    let filteredList = list.filter(obj =>{
        return obj.id !== id
    })
    list = filteredList
    renderList(list)
}

addBtn.addEventListener("click", handleAddList)