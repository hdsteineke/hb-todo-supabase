import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');
const loadingEl = document.querySelector('.loading-spinner');


function toggleLoadingSpinner() {
    loadingEl.classList.toggle('invisible');
}

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const data = new FormData(todoForm);

    await createTodo({
        todo: data.get('todo'),
        complete: false,
    });

    //*****Add function to display Todos
    displayTodos();


    todoForm.reset();

});

async function displayTodos() {
    // fetch the todos
    toggleLoadingSpinner();

    todosEl.textContent = '';

    const todos = await getTodos();
    
    // display the list of todos
    for (let todo of todos) {
        const todoEl = renderTodo(todo);

        // be sure to give each todo an event listener
        if (todo.complete === false) {
            todoEl.addEventListener('click', async () => {
                await completeTodo(todo.id);
                displayTodos();
            });
        
            
            // on click, complete that todo
        }
        todosEl.append(todoEl);
    }
    toggleLoadingSpinner();
}


// add an on load listener that fetches and displays todos on load
window.addEventListener('load', () => {
    displayTodos();
});


logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    await deleteAllTodos();
    // then refetch and display the updated list of todos
    await displayTodos();
});