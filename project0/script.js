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
  let deleteButton = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "checkTodo(this.checked)");
  checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
  deleteButton.setAttribute("onclick", "deleteTodo(this.parentNode.id)");
  deleteButton.setAttribute("class", classNames.TODO_DELETE)
  deleteButton.innerHTML = "Delete";

  todoTextInput.setAttribute("class", classNames.TODO_TEXT);
  
  listItem.appendChild(todoTextInput);
  listItem.appendChild(checkbox);
  listItem.appendChild(deleteButton);
  listItem.setAttribute("class", classNames.TODO_ITEM);
  listItem.setAttribute("id", (itemCountSpan.innerHTML));
  list.appendChild(listItem);
}

function checkTodo(checkbox) {
  return (checkbox ? uncheckedCountSpan.innerHTML-- : uncheckedCountSpan.innerHTML++);
}

function deleteTodo(parentId) {
  itemCountSpan.innerHTML--;
  let itemToDelete = document.getElementById(parentId);
  if (!itemToDelete.children[1].checked) {
    uncheckedCountSpan.innerHTML--;
  }
  itemToDelete.remove();
}
