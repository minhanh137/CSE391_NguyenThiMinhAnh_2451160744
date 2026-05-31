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
## Câu A2
1. So sánh

    | innerHTML | textContent |
    |-----------|-------------|
    | Đọc/ghi nội dung dưới dạng HTML | Đọc/ghi nội dung dưới dạng văn bản thuần |
    | Trình duyệt sẽ parse các thẻ HTML | Không parse HTML |
    | Có thể tạo ra các phần tử HTML mới | Chỉ hiển thị đúng chuỗi ký tự |
    | Chậm hơn vì phải phân tích HTML |	Nhanh hơn |
    | Có nguy cơ XSS nếu dữ liệu từ người dùng | An toàn hơn với dữ liệu người dùng |

2. Ví dụ
```js
const box = document.querySelector("#box");
box.innerHTML = `
    <h2>Hello</h2>
    <p>Welcome to website</p>
`;
```
**-> Dùng innerHTML**: Các thẻ HTML được render thành phần tử thật

```js
const box = document.querySelector("#box");
box.textContent = "<h2>Hello</h2>";
```
**-> Dùng textContent**: Trình duyệt không hiểu đây là HTML mà chỉ coi là văn bản
3. Tại sao innerHTML có thể gây lỗ hổng XSS? Viết 1 ví dụ code minh họa
    - XSS xảy ra khi mã JavaScript do kẻ tấn công chèn vào được trình duyệt thực thi.
    - `innerHTML` có thể gây lỗ hổng XSS vì nó coi dữ liệu đầu vào là mã HTML, không phải văn bản thuần.

    - Ví dụ: 
    ```js
    // Giả sử user nhập vào input: <img src=x onerror="alert('Hacked!')">
    const userInput = document.querySelector("#search").value;
    document.querySelector("#result").innerHTML = userInput;  // ← Nguy hiểm!
    // Sau khi render -> ảnh không tồn tại -> sự kiện onerror chạy -> KQ: Hacked!
    ```
    - Cách sửa: 
    ```js
    const userInput = document.querySelector("#search").value;
    document.querySelector("#result").textContent = userInput;
    ```
## Câu A3
```js
document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    // e.stopPropagation();  ← nếu bỏ comment → output thay đổi thế nào?
});
```
```html
<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>
```
1. Không dùng `e.stopPropagation()`
    - Click vào #btn → chạy listener của button
    - Event nổi bọt lên #inner
    - Event tiếp tục nổi bọt lên #outer
    - Output: BUTTON → INNER → OUTER
2. Dùng `e.stopPropagation()`
    - BUTTON được log.
    - `e.stopPropagation()` chặn event tiếp tục bubble lên các phần tử cha.
    - Listener của `inner` và `outer` không được gọi.
    - Output: BUTTON
# PHẦN C
## Câu C1
1. `addEventListener("onclick", ...)` -> Event name sai -> `"click"`
2. `countDisplay = count;` -> Gán vào biến const DOM element -> `countDisplay.textContent = count;`
3. `historyList.innerHTML = null;` -> Gán `null` không đúng -> `historyList.innerHTML = "";`
4. `item.remove;` -> Quên gọi hàm -> `item.remove();`
5. `localStorage.getItem("count")` trả về string -> Count thành chuỗi -> `Number(...)`
6. Không load history từ localStorage -> Mất history sau refresh -> Cần khôi phục `historyList.innerHTML`
7. Các `<li>` load từ localStorage mất event click -> Event không được lưu -> Dùng Event Delegation hoặc bind lại
8. `innerHTML` dùng cho hiển thị số -> Không cần thiết -> Dùng `textContent`
9. Decrement không lưu history -> History không đầy đủ -> Thêm logic lưu
10.	Reset không cập nhật localStorage ngay -> Refresh có thể hiện dữ liệu cũ -> Cập nhật storage sau reset

```js
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

function updateDisplay() {
    countDisplay.textContent = count;
}

function addHistory(message) {
    const li = document.createElement("li");
    li.textContent = message;
    historyList.appendChild(li);
}

document.querySelector("#incrementBtn").addEventListener("click", () => {
    count++;
    updateDisplay();
    addHistory(`Count changed to ${count}`);
});

document.querySelector("#decrementBtn").addEventListener("click", () => {
    count--;
    updateDisplay();
    addHistory(`Count changed to ${count}`);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    updateDisplay();
    historyList.innerHTML = "";
    localStorage.setItem("count", count);
    localStorage.setItem("history", "");
});

historyList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    historyList.innerHTML = "";
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
    count = Number(
        localStorage.getItem("count")
    ) || 0;

    updateDisplay();
    const savedHistory = localStorage.getItem("history");
    if (savedHistory) {
        historyList.innerHTML = savedHistory;
    }
});
```