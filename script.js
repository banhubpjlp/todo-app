const STORAGE_KEY = 'modern-todo-list-v2';
const THEME_KEY = 'theme-mode';

const taskInput = document.getElementById('taskInput');
const taskCategory = document.getElementById('taskCategory');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const themeToggle = document.getElementById('themeToggle');
const totalCount = document.getElementById('totalCount');
const doneCount = document.getElementById('doneCount');
const activeCount = document.getElementById('activeCount');
const filterButtons = document.querySelectorAll('.filter');

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentFilter = 'all';

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function getFilteredTasks() {
  if (currentFilter === 'active') return tasks.filter(task => !task.done);
  if (currentFilter === 'completed') return tasks.filter(task => task.done);
  return tasks;
}

function updateSummary() {
  totalCount.textContent = tasks.length;
  doneCount.textContent = tasks.filter(task => task.done).length;
  activeCount.textContent = tasks.filter(task => !task.done).length;
}

function renderTasks() {
  const filtered = getFilteredTasks();
  taskList.innerHTML = '';

  if (filtered.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty';
    empty.textContent = 'Belum ada tugas untuk ditampilkan.';
    taskList.appendChild(empty);
    updateSummary();
    return;
  }

  filtered.forEach((task, index) => {
    setTimeout(() => {
      const li = document.createElement('li');
      li.className = `task-item ${task.done ? 'done' : ''}`;

      const main = document.createElement('div');
      main.className = 'task-main';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.className = 'task-check';
      checkbox.addEventListener('change', () => toggleTask(task.id));

      const textWrap = document.createElement('div');
      textWrap.className = 'task-text';

      const text = document.createElement('div');
      text.textContent = task.text;

      const category = document.createElement('span');
      category.className = 'task-category';
      category.textContent = task.category;

      textWrap.appendChild(text);
      textWrap.appendChild(category);

      main.appendChild(checkbox);
      main.appendChild(textWrap);

      const actions = document.createElement('div');
      actions.className = 'task-actions';

      const editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => editTask(task.id));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Hapus';
      deleteBtn.addEventListener('click', () => deleteTask(task.id));

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(main);
      li.appendChild(actions);
      taskList.appendChild(li);
    }, index * 50);
  });

  updateSummary();
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.focus();
    return;
  }

  tasks.unshift({
    id: Date.now(),
    text,
    category: taskCategory.value,
    done: false,
    createdAt: new Date().toISOString()
  });

  saveTasks();
  renderTasks();
  taskInput.value = '';
  taskInput.focus();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  saveTasks();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(item => item.id === id);
  if (!task) return;

  const newText = prompt('Edit tugas:', task.text);
  if (newText === null) return;

  const trimmed = newText.trim();
  if (!trimmed) return;

  tasks = tasks.map(item =>
    item.id === id ? { ...item, text: trimmed } : item
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }
}

function setTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem(THEME_KEY, theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

themeToggle.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(nextTheme);
});

initTheme();
renderTasks();

taskInput.focus();