//selectors DOM
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listeners
//we add on the selector event listener, which on event click will fire function addTodo
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//filterOption.addEventListener("click", filterTodo);
filterOption.addEventListener("change", filterTodo);

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
    //add todo to localstorage
    saveLocalTodos(todoInput.value);
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


// method for filtering todos
function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
    // we would like response only if clicking on the option
    todos.forEach(function(todo){
        //this suggest User on the github https://github.com/developedbyed/vanilla-todo/issues/3
        //https://stackoverflow.com/questions/61541582/element-style-and-element-classlist-is-undefined
        const mStyle = todo.style;
        if (mStyle != undefined && mStyle != null) 
        {
            // in this switch we access the value of html select element, e.g all
            switch(e.target.value){
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    // we check every elements that have class completed on it
                    if(todo.classList.contains("completed")){
                        // if they have it, show them
                        todo.style.display = "flex";
                    }else{
                        //if they dont have class completed
                        todo.style.display = "none";
                    }  
                    break;
                case "uncompleted":
                    console.log("uncompleted");
                    if(!todo.classList.contains('completed')){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    
            }
        }
    });
}

function saveLocalTodos(todo){
    //check if I already have thing in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    //this is how we are saving
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

