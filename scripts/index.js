let tasks = [];

function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" id="task${index}" ${task.completed ? 'checked' : ''}>
            <label for="task${index}">${task.text}</label>
        `;
        todoList.appendChild(listItem);
    });
}

function addTask() {
    const taskText = prompt("Enter task:");
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
    }
}

function deleteTask() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedBoxes.forEach(box => {
        const index = parseInt(box.id.replace('task', ''));
        tasks.splice(index, 1);
    });

    // After deleting tasks, update the IDs of the checkboxes to match the indices in the tasks array
    tasks.forEach((task, index) => {
        const checkbox = document.getElementById(`task${index}`);
        checkbox.id = `task${index}`;
    });

    renderTasks();
}


function updateTask() {
    const index = parseInt(prompt("Enter the index of the task to update:"));
    if (!isNaN(index) && index >= 0 && index < tasks.length) {
        const newText = prompt("Enter the new task text:");
        if (newText) {
            tasks[index].text = newText;
            renderTasks();
        }
    }
}

renderTasks();
