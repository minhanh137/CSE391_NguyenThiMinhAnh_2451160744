# PHẦN A
## Câu A1
```html
<div id="app">
    <header>
        <h1>Todo App</h1>
        <nav>
            <a href="#" class="active">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
        </nav>
    </header>
    <main>
        <form id="todoForm">
            <input id="todoInput" type="text">
            <button type="submit">Add</button>
        </form>
        <ul id="todoList">
            <li class="todo-item">Learn HTML</li>
            <li class="todo-item completed">Learn CSS</li>
        </ul>
    </main>
</div>
```

1. DOM tree
```
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
```

2. querySelector
    - Chọn thẻ `<h1>`: `document.querySelector("h1");`
    - Chọn `input` trong `form` : `document.querySelector("#todoInput");`
    - Chọn tất cả `.todo-item`: `document.querySelectorAll(".todo-item");`
    - Chọn link đang `active`: `document.querySelector("a.active");`
    - Chọn `<li>` đầu tiên trong `#todoList`: `document.querySelector("#todoList li:first-child");`
    - Chọn tất cả `<a>` bên trong `<nav>`: `document.querySelectorAll("nav a");`