const addTaskBtn = document.getElementById('addTaskBtn');
const modalOverlay = document.getElementById('modalOverlay');
const taskModal = document.getElementById('taskModal'); // Flashy modal content
const cancelTask = document.getElementById('cancelTask');
const saveTask = document.getElementById('saveTask');
const taskList = document.getElementById('taskList');
const tabs = document.querySelectorAll('.tab');

let tasks = [];
let currentFilter = 'today';
let editMode = false;
let editTaskIndex = null;

// ✅ Show modal for Add Task
addTaskBtn.addEventListener('click', () => {
    editMode = false;
    editTaskIndex = null;
    modalOverlay.classList.add('active'); // Show flashy modal
    document.querySelector('.flashy-modal h2').innerText = "Add Task";

    // Clear inputs
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskPriority').value = 'medium';
});

// ✅ Cancel button closes modal
cancelTask.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// ✅ Close modal by clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// ✅ Save button (Add or Edit)
saveTask.addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value.trim();
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;

    if (!title || !date) return;

    if (editMode && editTaskIndex !== null) {
        // Update existing task
        tasks[editTaskIndex] = {
            ...tasks[editTaskIndex],
            title,
            date,
            priority
        };
    } else {
        // Add new task
        const id = Date.now();
        tasks.push({ id, title, date, priority, completed: false });
    }

    renderTasks();
    modalOverlay.classList.remove('active'); // ✅ Close modal after save
});

// ✅ Edit Task
function editTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return;

    editMode = true;
    editTaskIndex = index;

    const task = tasks[index];
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDate').value = task.date;
    document.getElementById('taskPriority').value = task.priority;

    document.querySelector('.flashy-modal h2').innerText = "Edit Task";
    modalOverlay.classList.add('active'); // ✅ Open flashy modal
}

// ✅ Handle filter tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
        currentFilter = tab.dataset.filter;
        renderTasks();
    });
});

// ✅ Render tasks
function renderTasks() {
    taskList.innerHTML = '';
    const today = new Date().toISOString().split('T')[0];

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'today') {
            return task.date === today && !task.completed;
        } else if (currentFilter === 'pending') {
            return task.date > today && !task.completed;
        } else if (currentFilter === 'overdue') {
            return task.date < today && !task.completed;
        }
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';

        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
                <span class="task-title">${task.title}</span>
            </div>
            <span class="task-date">
                <i class="fa-regular fa-clock"></i> ${new Date(task.date).toDateString()}
            </span>
            <button class="edit-btn" onclick="editTask(${task.id})">
                <i class="fa-solid fa-pencil"></i>
            </button>
            <div class="priority ${task.priority}"></div>
        `;
        taskList.appendChild(li);
    });

    // Add checkbox listeners dynamically
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            toggleComplete(id);
        });
    });
}

function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}
