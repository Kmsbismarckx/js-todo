let list = document.querySelector('.list');
let listItems = list.children;

let template = document.querySelector('#checklist-template').content;
let newItemTemplate = template.querySelector('.checklist-item');

let listLabel = list.querySelectorAll('label');
let message = document.querySelector('.message');
let form = document.querySelector('.input-text');
let text = form.querySelector('input');
let storage;
let count = 0;

function toLocal() {
  storage = list.innerHTML;
  localStorage.setItem('todo-list', storage);
}

function checkChange(item) {
  let listCheckbox = item.querySelector('.checkbox');
  let deleteButton = item.querySelector('.delete-button')

  listCheckbox.addEventListener('change', function () {
    item.classList.toggle('checked');

    isChecked(listCheckbox)? count++ : count--;
    if (count === listItems.length) {
      list.classList.add('complete');
      message.classList.add('complete');
      text.disabled = true;
    } else {
      list.classList.remove('complete');
      message.classList.remove('complete');
      text.disabled = false;
    }
  })

  deleteButton.addEventListener('click', function() {
    item.remove();
  })

  toLocal();
}

function isChecked(item) {
  return item.checked;
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let itemText = text.value;
  let clone = newItemTemplate.cloneNode(true);
  let description = clone.querySelector('span');
  description.textContent = itemText;
  checkChange(clone);
  list.append(clone);
  text.value = '';
  toLocal();
})

if (localStorage.getItem('todo-list')) {
  list.innerHTML = localStorage.getItem('todo-list');
  for (let i = 0; i < listItems.length; i++) {
    checkChange(listItems[i])
  }
}
