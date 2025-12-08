// Seleciona botão e menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Fecha menu se clicar fora (opcional)
  document.addEventListener('click', (e) => {
    if(open && !e.target.closest('.nav-inner')){
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}




console.log('Script carregado com sucesso!');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-task-form');
    const input = document.getElementById('new-task');
    const list = document.getElementById('todo-items');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // evita reload

        const tarefa = input.value.trim();
        if (tarefa === '') return;

        // cria o li
        const li = document.createElement('li');
        li.textContent = tarefa;

        // adiciona na lista
        list.appendChild(li);

        // limpa input
        input.value = '';
        input.focus();
    });
});


const form = document.getElementById("add-task-form");
const input = document.getElementById("new-task");
const todoList = document.getElementById("todo");
const lists = document.querySelectorAll(".task-list");

let draggedItem = null;

// Adicionar nova tarefa
form.addEventListener("submit", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = createTask(text);
  todoList.appendChild(li);
  input.value = "";
});

// Criar tarefa
function createTask(text) {
  const li = document.createElement("li");
  li.draggable = true;

  const span = document.createElement("span");
  span.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.classList.add("delete-btn");

  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);

  addDragEvents(li);
  return li;
}

// Drag no item
function addDragEvents(item) {
  item.addEventListener("dragstart", () => {
    draggedItem = item;
    setTimeout(() => item.style.display = "none", 0);
  });

  item.addEventListener("dragend", () => {
    item.style.display = "flex";
    draggedItem = null;
  });
}

// Drag nas listas
lists.forEach(list => {
  list.addEventListener("dragover", e => {
    e.preventDefault();
    list.classList.add("drag-over");
  });

  list.addEventListener("dragleave", () => {
    list.classList.remove("drag-over");
  });

  list.addEventListener("drop", () => {
    list.classList.remove("drag-over");
    if (draggedItem) list.appendChild(draggedItem);
  });
});

let isLogged = localStorage.getItem("logged") === "true";

const loginModal = document.getElementById("login-modal");
const openLogin = document.getElementById("open-login");
const closeLogin = document.getElementById("close-login");
const loginForm = document.getElementById("login-form");
const addTaskButton = document.getElementById("add-task-button");
const taskInput = document.getElementById("new-task");

// Atualiza UI ao carregar
updateLoginUI();

// Abrir modal
openLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "flex";
});

// Fechar modal
closeLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Login fake
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Aqui poderia validar email/senha
  localStorage.setItem("logged", "true");
  isLogged = true;

  loginModal.style.display = "none";
  updateLoginUI();
});

// Atualiza interface
function updateLoginUI() {
  if (isLogged) {
    openLogin.textContent = "Logout";
    taskInput.disabled = false;
    addTaskButton.disabled = false;
  } else {
    openLogin.textContent = "Login";
    taskInput.disabled = true;
    addTaskButton.disabled = true;
  }
}

// Logout
openLogin.addEventListener("click", () => {
  if (isLogged) {
    localStorage.removeItem("logged");
    isLogged = false;
    updateLoginUI();
  }
});