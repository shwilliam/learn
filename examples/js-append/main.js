// Select the HTML elements I will use
const todoList = document.getElementById('todo-list')
const todoButton = document.getElementById('todo-button')
const todoInput = document.getElementById('todo-input')

todoButton.addEventListener('click', function() {
  // All this code will run when the button is clicked.

  const inputText = todoInput.value
  const newTodoEl = document.createElement('li')

  // Make input content the text inside the new `<li>`
  newTodoEl.innerText = inputText

  // Add the new `<li>` to the todo list
  todoList.appendChild(newTodoEl)

  // Clear input text
  todoInput.value = ''
})
