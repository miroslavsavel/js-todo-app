//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);

//Function
function addTodo(event){
    //prevent form submitting
    event.preventDefault();
    console.log("button was clicked");
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHeck mark button
    const completedButton = document.createElement('button');
    completedButton.innerText = '<i class="fas fa-check"></i>';
}