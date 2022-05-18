const addlist = document.querySelector('.inputlist')
const ullist = document.querySelector('.ullist')
const addBtn = document.querySelector('.add')


class Todo {
    constructor(content) {
        this.content = content;
        this.state = false;
    }

    changeState() {
        if (this.state == false) {
            this.state = true
        } else {
            this.state = false
        }

    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    additem(content) {
        const todo = new Todo(content)
        this.todoList.push(todo);
    }
    getitems() {
        return this.todoList
    }
    getLeftTodoCount() {
        return this.todoList.filter(todo => todo.state === false).length;
    }
}

const todoManager = new TodoManager();

const li = document.createElement('li');
const input = document.createElement('input');
const btn = document.createElement('button');
const span = document.createElement('span');

addBtn.addEventListener('click', function () {
    ullist.appendChild(li, input, btn, span);
    li.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.classList.add('check');
    li.appendChild(btn);
    btn.classList.add('delete');
    li.appendChild(span);
    span.textContent = addlist.value;
})


/*
todoManager
todoManager.additem('숙제하기')
todoManager.additem('복습하기')
todoManager.additem('프로젝트')
todoManager.getitems();
todoManager.getitems()[0].changeState();
todoManager.getLeftTodoCount();
*/


