let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = -1;
function saveTasks() { 
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var taskList = document.getElementById("taskList");

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    if (tasks.length === 0) {
        list.innerHTML = "<p>Chưa có công việc!</p>";
        updateStats();
        return;
    }

    tasks.forEach((task, index) => {
        list.innerHTML += `
        <div class="card">
            <h4 class="${task.completed ? 'done' : ''}">
                ${task.title}
            </h4>
            <p>${task.desc}</p>
            <p>📌 ${task.priority}</p>
            <p>📅 ${task.deadline}</p>

            <button onclick="toggleStatus(${index})">✔</button>
            <button onclick="editTask(${index})">Sửa</button>
            <button onclick="deleteTask(${index})">Xóa</button>
        </div>
        `;
    });

    updateStats();
}

function updateStats() {
    document.getElementById("totalTasks").innerText = tasks.length;
    const done = tasks.filter(t => t.completed).length;
    document.getElementById("completedTasks").innerText = done;
}

renderTasks();