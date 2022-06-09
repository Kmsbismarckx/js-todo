const list = document.querySelector('.list');
const listItems = list.children;
const template = document.querySelector('#checklist-template').content;
const newItemTemplate = template.querySelector('.checklist-item');
const listLabel = list.querySelectorAll('label');
const message = document.querySelector('.message');
const form = document.querySelector('.input-text');
const text = form.querySelector('input');
const cache = [];

/*function init() {

  if (localStorage.getItem('todo-list')) {
    list.innerHTML = localStorage.getItem('todo-list');

    for (let i = 0; i < listItems.length; i++) {
      onChange(listItems[i])
    }

  }

}*/

function toLocal(item) {
  cache.push(item);
  console.log(cache);
  localStorage.setItem('todo-list', JSON.stringify(cache))
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
  toLocal(clone);
})
/*init();*/
