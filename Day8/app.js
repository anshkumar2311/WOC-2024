document.addEventListener("DOMContentLoaded", function () {
    loadTasksFromLocalStorage();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const task = createTaskElement(taskText);
        document.getElementById("todo-list").appendChild(task);
        saveTasksToLocalStorage();
        taskInput.value = "";
    }
}

function createTaskElement(taskText, taskId = null, taskColumn = "todo") {
    const task = document.createElement("div");
    task.classList.add(
        "task",
        "border-2",
        "border-blue-500",
        "p-4",
        "rounded-md",
        "flex",
        "justify-between",
        "items-start",
        "cursor-pointer"
    );

    taskId = taskId || "task-" + new Date().getTime();
    task.setAttribute("id", taskId);
    task.setAttribute("draggable", "true");
    task.setAttribute("ondragstart", "drag(event)");

    const taskContent = document.createElement("span");
    taskContent.classList.add("task-content", "text-white", "max-w-[80%]");
    taskContent.textContent = taskText;
    task.appendChild(taskContent);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add(
        "delete-button",
        "text-white",
        "bg-red-500",
        "px-2",
        "py-1",
        "rounded-md",
        "ml-2"
    );

    deleteButton.addEventListener("click", function () {
        task.remove();
        saveTasksToLocalStorage();
    });
    task.appendChild(deleteButton);

    return task;
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.closest(".task").id);
}

function allowDrop(event) {
    event.preventDefault();
    event.stopPropagation();
}

function drop(event) {
    event.preventDefault();
    event.stopPropagation();

    const targetColumn = event.target;

    if (targetColumn.id === "todo" || targetColumn.id === "inprogress" || targetColumn.id === "done" || targetColumn.id === "backlog") {
        const taskId = event.dataTransfer.getData("text");
        const draggedTask = document.getElementById(taskId);

        if (draggedTask) {
            if (targetColumn.id === "todo") {
                draggedTask.classList.remove("border-red-500", "border-yellow-500", "border-green-500");
                draggedTask.classList.add("border-blue-500");
            } else if (targetColumn.id === "inprogress") {
                draggedTask.classList.remove("border-blue-500", "border-green-500", "border-red-500");
                draggedTask.classList.add("border-yellow-500");
            } else if (targetColumn.id === "done") {
                draggedTask.classList.remove("border-yellow-500", "border-blue-500", "border-red-500");
                draggedTask.classList.add("border-green-500");
            } else if (targetColumn.id === "backlog") {
                draggedTask.classList.remove("border-green-500", "border-blue-500", "border-yellow-500");
                draggedTask.classList.add("border-red-500");
            }

            targetColumn.appendChild(draggedTask);
            saveTasksToLocalStorage();
        }
    }
}

function saveTasksToLocalStorage() {
    const columns = ["todo", "inprogress", "done", "backlog"];
    const tasks = {};

    columns.forEach(column => {
        const columnElement = document.getElementById(column);
        tasks[column] = [];

        columnElement.querySelectorAll(".task").forEach(task => {
            tasks[column].push({
                id: task.id,
                text: task.querySelector(".task-content").textContent
            });
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks) {
        Object.keys(tasks).forEach(column => {
            const columnElement = document.getElementById(column);

            tasks[column].forEach(taskData => {
                const task = createTaskElement(taskData.text, taskData.id, column);
                columnElement.appendChild(task);
            });
        });
    }
}

// Add event listeners for dragover and drop
document.getElementById("todo").addEventListener("dragover", allowDrop);
document.getElementById("inprogress").addEventListener("dragover", allowDrop);
document.getElementById("done").addEventListener("dragover", allowDrop);
document.getElementById("backlog").addEventListener("dragover", allowDrop);

document.getElementById("todo").addEventListener("drop", drop);
document.getElementById("inprogress").addEventListener("drop", drop);
document.getElementById("done").addEventListener("drop", drop);
document.getElementById("backlog").addEventListener("drop", drop);
