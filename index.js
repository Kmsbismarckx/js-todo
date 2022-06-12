const list = document.querySelector('.list');
const listItems = list.children;
const template = document.querySelector('#checklist-template').content;
const newItemTemplate = template.querySelector('.checklist-item');
const listLabel = list.querySelectorAll('label');
const message = document.querySelector('.message');
const form = document.querySelector('.input-text');
const text = form.querySelector('input');
const adviceItems = document.querySelectorAll('.advice-name');
const cache = [];

function toLocal(item) {
  let text = item.querySelector('span').textContent;
  cache.push(localStorage.getItem('todo-list'))
  cache.push(text);
  localStorage.setItem('todo-list', cache);
}

function onChange(item) {
  const listCheckbox = item.querySelector('.checkbox');
  const deleteButton = item.querySelector('.delete-button');

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
  toLocal(clone);
  list.append(clone);
  text.value = '';
})

function init() {

  function adviceChange(item) {
    const adviceCheckbox = item.querySelector('.advice-item__checkbox');

    item.addEventListener('change', function() {
      item.classList.toggle('checked');
    })
  }

  for (let i = 0; i < adviceItems.length; i++) {
    adviceChange(adviceItems[i]);
  }

  /*let temp = localStorage.getItem('todo-list');
  if (temp !== []) {
    temp = temp.split(',');

    for (let item of temp) {
      let memItem = newItemTemplate.cloneNode(true)
      let memDescription = memItem.querySelector('span');
      memDescription.textContent = item;
      list.append(memItem);
      onChange(memItem);
    }
  }*/
}

init()




/*init();*/
