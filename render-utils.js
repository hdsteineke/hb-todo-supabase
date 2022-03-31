export function renderTodo(todo) {
    // create a div and a p tag
    const todoItemEl = document.createElement('div');
    const todoText = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        todoItemEl.classList.add('complete');
    } else {
        todoItemEl.classList.add('incomplete');
    }
    
    
    // add the 'todo' css class no matter what
    todoItemEl.classList.add('todo');

    // put the todo's text into the p tag
    todoText.textContent = todo.todo;

    // append stuff
    todoItemEl.append(todoText);

    // return the div
    return todoItemEl;
}