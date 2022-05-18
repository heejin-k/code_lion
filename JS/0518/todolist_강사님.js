class Todo {

    constructor(item, finished) {
        this.item = item;
        this.finished = finished;
    }

    changeState() {
        this.finished = !this.finished
    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    addItem(item, finished = false) {
        // const todo = new Todo(item, finished);
        this.todoList.push(new Todo(item, finished))
    }

    getItems() {
        return this.todoList;
    }

    getLeftTodoCount() {
        return this.todoList.reduce((total, current) => {
            if (current.finished === false) {
                return ++total;
            } else {
                return total;
            }
        }, 0
        );
    }
}


const todoManager = new TodoManager();