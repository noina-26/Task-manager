let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = document.getElementById("taskDescription"); // Added description input
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        id: Date.now(),
        content: taskInput.value,
        description: taskDescription.value // Added description property
    };

    tasks.push(newTask);
    renderTasks();

    taskInput.value = "";
    taskDescription.value = ""; // Clear description input after adding task

}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function viewDescription(id) {
    const task = tasks.find(task => task.id === id);
    alert(task.description);
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
        lElei.textContent = task.content;

        const descriptionButton=document.create

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
