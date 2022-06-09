const list = document.querySelector('.list');
const listItems = list.children;
const template = document.querySelector('#checklist-template').content;
const newItemTemplate = template.querySelector('.checklist-item');
const listLabel = list.querySelectorAll('label');
const message = document.querySelector('.message');
const form = document.querySelector('.input-text');
const text = form.querySelector('input');
let storage;
let count = 0;

/*function init() {

  if (localStorage.getItem('todo-list')) {
    list.innerHTML = localStorage.getItem('todo-list');

    for (let i = 0; i < listItems.length; i++) {
      onChange(listItems[i])
    }

  }

}*/

function toLocal() {
  storage = list.innerHTML;
  localStorage.setItem('todo-list', storage);
}

function onChange(item) {
  const listCheckbox = item.querySelector('.checkbox');
  const deleteButton = item.querySelector('.delete-button')

  listCheckbox.addEventListener('change', function () {
    item.classList.toggle('checked');
  })

  deleteButton.addEventListener('click', function() {
    item.remove();
  })
  
  toLocal();
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let itemText = text.value;
  let clone = newItemTemplate.cloneNode(true);
  let description = clone.querySelector('span');
  description.textContent = itemText;
  onChange(clone);
  list.append(clone);
  text.value = '';
  toLocal();
})
/*init();*/
