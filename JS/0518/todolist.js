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

/*
todoManager
todoManager.additem('숙제하기')
todoManager.additem('복습하기')
todoManager.additem('프로젝트')
todoManager.getitems();
todoManager.getitems()[0].changeState();
todoManager.getLeftTodoCount();
*/


