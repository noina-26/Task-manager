let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        id: Date.now(),
        content: taskInput.value
    };

    tasks.push(newTask);
    renderTasks();

    taskInput.value = "";
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function viewTask(id) {
    const task = tasks.find(task => task.id === id);
    alert(task.content);
}

function updateTask(id) {
    const task = tasks.find(task => task.id === id);
    const updatedTask = prompt("Update task:", task.content);
    
    if (updatedTask !== null && updatedTask.trim() !== "") {
        task.content = updatedTask.trim();
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.content;

        const viewButton = document.createElement("button");
        viewButton.textContent = "View";
        viewButton.onclick = () => viewTask(task.id);

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.onclick = () => updateTask(task.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(task.id);

        li.appendChild(viewButton);
        li.appendChild(updateButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Initial rendering
renderTasks();
