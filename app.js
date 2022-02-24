//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
//we add on the selector event listener, which on event click will fire function addTodo
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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
    //here we want value from todoInput textfield
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHeck mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHeck thrash button
    const thrashButton = document.createElement('button');
    thrashButton.innerHTML = '<i class="fas fa-trash"></i>';
    thrashButton.classList.add("trash-btn");
    todoDiv.appendChild(thrashButton);
    //Append to the list in html document
    todoList.appendChild(todoDiv);
    //clear Todo Input value
    todoInput.value = "";
}

//method for deleting todo item
function deleteCheck(event){
    console.log('delete button was pressed >>' + event.target);
    //grab the item
    //https://www.w3schools.com/jsref/event_target.asp
    const item = event.target;
    //DELETE TDO
    if(item.classList[0] === 'trash-btn'){
        // item.remove();
        //now we can remove parent element
        const todo = item.parentElement;
        //animation and after animation finish we would like to delete element
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            //this function is executed after animation
            todo.remove();
        });
        
        // todo.remove();
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        //after clicking check button we will add css class on this item, so we can change its appearance
        todo.classList.toggle('completed');
    }
}