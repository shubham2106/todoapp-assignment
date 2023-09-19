function addTodo() {
    const todoInput = document.getElementById('addTodoItem');
    const todoText = todoInput.value;

    if (todoText.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('all', 'active', 'todoItem');
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleCompleted(this)">
            <div class="random">
            <span>${todoText}</span>
            <i class="ri-delete-bin-7-line" onclick="removeTodo(this)"></i>
            </div>
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

function removeTodo(i) {
    const listItem = i.parentNode.parentNode;
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

    const addTodoContainer = document.getElementById('addTodo');
    if(addTodoContainer.style.display === 'none')
        addTodoContainer.style.display = 'inline';
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
    const addTodoContainer = document.getElementById('addTodo');
    if(addTodoContainer.style.display === 'none')
        addTodoContainer.style.display = 'inline';
}

function showCompleted() {
    const todoContainer = document.getElementById('todoContainer');
    const deleteAllbtn = document.getElementById('deleteAll');
    if(!todoContainer.contains(deleteAllbtn))
    {
        const newButton = document.createElement('button');
        newButton.id = 'deleteAll';
        newButton.classList.add('deleteAll');
        newButton.innerHTML = `
            <i class="ri-delete-bin-7-line"></i>
            delete all
        `;
        newButton.addEventListener('click', function() {
            deleteAll(this);
        });
        todoContainer.appendChild(newButton);
    }
    const ulElement = document.getElementById('todoList');
    const listItems = ulElement.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if(listItems[i].classList.contains('active'))
            listItems[i].classList.add('hidden')
        if(listItems[i].classList.contains('completed') && listItems[i].classList.contains('hidden'))
            listItems[i].classList.remove('hidden')
    }
    
    const addTodoContainer = document.getElementById('addTodo');
    if(!(addTodoContainer.style.display === 'none'))
        addTodoContainer.style.display = 'none';

}

function deleteAll() {
    const ulElement = document.getElementById('todoList');
    const listItems = ulElement.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if(listItems[i].classList.contains('completed'))
            todoList.removeChild(listItems[i]);
    }
}