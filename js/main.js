function addTodo() {
    const todoInput = document.getElementById('addTodoItem');
    const todoText = todoInput.value;

    if (todoText.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('all', 'active', 'todoItem');
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleCompleted(this)">
            <span>${todoText}</span>
        `;
        // <button onclick="removeTodo(this)">Delete</button>
        const todoList = document.getElementById('todoList');
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}

function toggleCompleted(checkbox) {
    const listItem = checkbox.parentNode;
    if(listItem.classList.contains('completed')){
        listItem.classList.remove('completed');
        listItem.classList.add('active');
    }
    else{
        listItem.classList.remove('active');
        listItem.classList.toggle('completed');
    }
}

function removeTodo(button) {
    const listItem = button.parentNode;
    const todoList = document.getElementById('todoList');
    todoList.removeChild(listItem);
}

function showAll() {
    const ulElement = document.getElementById('todoList');
    const listItems = ulElement.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if(listItems[i].classList.contains('hidden'))
            listItems[i].classList.remove('hidden')
    }
    const todoContainer = document.getElementById('todoContainer');
    const deleteAllbtn = document.getElementById('deleteAll');
    if(todoContainer.contains(deleteAllbtn))
        todoContainer.removeChild(deleteAllbtn);
}

function showActive() {
    const ulElement = document.getElementById('todoList');
    const listItems = ulElement.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if(listItems[i].classList.contains('completed'))
            listItems[i].classList.add('hidden')
        if(!listItems[i].classList.contains('completed') && listItems[i].classList.contains('hidden'))
            listItems[i].classList.remove('hidden')
    }
    const todoContainer = document.getElementById('todoContainer');
    const deleteAllbtn = document.getElementById('deleteAll');
    if(todoContainer.contains(deleteAllbtn))
        todoContainer.removeChild(deleteAllbtn);
}

function showCompleted() {
    const newButton = document.createElement('button');
    newButton.textContent = 'Delete All';
    newButton.id = 'deleteAll';
    newButton.classList.add('deleteAll');
    newButton.addEventListener('click', function() {
        deleteAll();
    });
    const buttonContainer = document.getElementById('todoContainer');
    buttonContainer.appendChild(newButton);

    const ulElement = document.getElementById('todoList');
    const listItems = ulElement.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if(listItems[i].classList.contains('active'))
            listItems[i].classList.add('hidden')
        if(listItems[i].classList.contains('completed') && listItems[i].classList.contains('hidden'))
            listItems[i].classList.remove('hidden')
    }
    

}

function deleteAll() {

}