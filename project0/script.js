const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  itemCountSpan.innerHTML++;
  uncheckedCountSpan.innerHTML++;
  let listItem = document.createElement("li");

  let todoTextInput = document.createElement("input");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "checkTodo(this)");

  checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
  todoTextInput.setAttribute("class", classNames.TODO_TEXT);
  
  listItem.appendChild(todoTextInput);
  listItem.appendChild(checkbox);
  listItem.setAttribute("class", classNames.TODO_ITEM);
  list.appendChild(listItem); 
}

function checkTodo(checkbox) {
  return (checkbox.checked ? uncheckedCountSpan.innerHTML-- : uncheckedCountSpan.innerHTML++);
}

function deleteTodo() {
  itemCountSpan.innerHTML--;
}
