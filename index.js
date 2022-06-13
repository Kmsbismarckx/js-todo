const list = document.querySelector('.list');
const listItems = list.children;
const template = document.querySelector('#checklist-template').content;
const newItemTemplate = template.querySelector('.checklist-item');
const listLabel = list.querySelectorAll('label');
const message = document.querySelector('.message');
const form = document.querySelector('.input-text');
const text = form.querySelector('input');
const adviceNames = document.querySelectorAll('.advice-name')
const adviceItems1 = document.querySelector('.advice-item-1');
const adviceNames1 = adviceItems1.querySelectorAll('.advice-name');
const adviceItems2 = document.querySelector('.advice-item-2')
const adviceNames2 = adviceItems2.querySelectorAll('.advice-name');
const cache = [];

/*function toLocal(item) {
  let text = item.querySelector('span').textContent;
  cache.push(localStorage.getItem('todo-list'))
  cache.push(text);
  localStorage.setItem('todo-list', cache);
}*/

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
  list.append(clone);
  text.value = '';
})

function init() {

  adviceNames.forEach((name) => {
    const adviceCheckbox = name.querySelector('.advice-item__checkbox');
    name.addEventListener('change', () => {
      name.classList.toggle('checked');
    })
  });

  //for (let i = 0; i < adviceNames.length; i++) {
  //  adviceNameChange(adviceNames[i]);
  //}

  function adviceCheck(value) {
    const adviceNameTemp = value.querySelectorAll('.advice-name');
    const arr = [];
    adviceNameTemp.forEach((item) => {
      arr.push(item.querySelector('.advice-item__checkbox'))
    });
    arr.forEach((item) => {
      item.addEventListener('change', (item) => {
      if (arr.filter((item) => (item.checked)).length === arr.length) {
        value.style.backgroundColor = '#00aeef';
      } else {
        value.style.backgroundColor = 'white';
      }
    });
  });


    /*const adviceCheckbox = name.querySelectorAll('.advice-item__checkbox');
    adviceCheckbox.forEach((item) => {
      console.log(item.checked)
    });*/
  }

  adviceCheck(adviceItems1);
  adviceCheck(adviceItems2);

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
