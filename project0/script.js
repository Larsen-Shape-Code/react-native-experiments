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
  let node = document.createElement("LI");
  let delete = document.createElement("")

  let todoTextInput = document.createElement("INPUT");

  let checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "checkTodo(this)");

  checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
  todoTextInput.setAttribute("class", classNames.TODO_TEXT);
  node.appendChild(todoTextInput);
  node.appendChild(checkbox);
  node.setAttribute("class", classNames.TODO_ITEM);
  list.appendChild(node); 
}

function checkTodo(checkbox) {
  return (checkbox.checked ? uncheckedCountSpan.innerHTML-- : uncheckedCountSpan.innerHTML++);
}

function deleteTodo() {
  itemCountSpan.innerHTML--;
}
