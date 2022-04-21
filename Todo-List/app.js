const title = document.querySelector('#title')
const description = document.querySelector('#description')
const toDoSection = document.querySelector('.todo-section')

let idCounter = 0;
function keyHandler(e) {
    if (e.keyCode === 27) {
        resetForm();
    }
    const id = "todo-" + idCounter++;
    if (e.keyCode === 13 && !e.shiftKey) {
        createToDoItem(title.value, description.value, id)
        e.preventDefault
    }
}


function createToDoItem(title, description, id) {
    const content = `       
        <div class="title-div">
            <div class="title">
                <b>${title}</b>
            </div>
            <button delete-target="${id}" class="delete-item">Delete</button>
        </div>
        <div class="todo-body todo-body-close">
            <div class="content">${description}</div>
        </div>`

    const itemDiv = document.createElement('div')
    itemDiv.className = 'todo-item'
    itemDiv.id = id
    itemDiv.innerHTML = content
    document.querySelector('.todo-section').appendChild(itemDiv)

    itemDiv.addEventListener('click', () => {
        document.getElementById(id).firstElementChild.nextElementSibling.classList.toggle('todo-body-close')
    })
    resetForm();
}


function resetForm() {
    title.value = ""
    description.value = ""
}


toDoSection.addEventListener('click', (e)=>{
    if (e.target.className == "delete-item") {
        getDeleteItemId = e.target.getAttribute("delete-target");
        document.getElementById(getDeleteItemId).remove()
    }
})

title.addEventListener('keydown', keyHandler)
description.addEventListener('keydown', keyHandler)

document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 90 && e.ctrlKey){
        toDoSection.lastElementChild.remove()
    }
})