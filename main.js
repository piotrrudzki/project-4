const toDoList = [];

const input = document.querySelector('input');
const btnAdd = document.querySelector('.add');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const listItem = document.getElementsByClassName('.item');



const addItem = (event) => {
    event.preventDefault();
    const task = input.value.trim();
    if (task === '') return;
    const item = document.createElement('li');
    item.className = 'item';
    item.innerHTML = task + "<button class='clear'>Usuń</button>";
    toDoList.push(item);
    render();
    ul.appendChild(item);
    input.value = '';
}

form.addEventListener('submit', addItem);


const removeTask = (event) => {
    if (event.target.classList.contains('clear')) {
        event.target.parentNode.remove();
        const indexNumber = event.target.parentNode.dataset.key;
        toDoList.splice(indexNumber, 1)
        render();
    }
}

const render = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

ul.addEventListener('click', removeTask);