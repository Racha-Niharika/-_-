// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
    }
});

// Create a new task
function createTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);

    // Add event listener to delete button
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
}

// Handle pressing Enter key to add a task
taskInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});

