let nextId = 4; 

let tareas = [
  { id: 1, description: 'Viaje a Punta Arenas', completed: true },
  { id: 2, description: 'Viaje a Puerto Natales', completed: false },
  { id: 3, description: 'Viaje a El Calafate', completed: false },
];

const tareaInput = document.getElementById('tareaInput');
const agregaTareaButton = document.getElementById('agregaTareaButton');
const listaTareas = document.getElementById('listaTareas');
const tareasTotales = document.getElementById('tareasTotales');
const tareasCompletas = document.getElementById('tareasCompletas');

function renderTareaList() {
  listaTareas.innerHTML = '';
  tareas.forEach((tarea) => {
    const tareaItem = document.createElement('li');
    tareaItem.className = `task-item ${tarea.completed ? 'completed' : ''}`;
    tareaItem.innerHTML = `
       <span>${tarea.id}. ${tarea.description}</span>
      <div class="task-actions">
        <button onclick="toggleTarea(${tarea.id})">
          <i class="${tarea.completed ? 'fas fa-times' : 'fas fa-check'}"></i>
        </button>
        <button onclick="deleteTarea(${tarea.id})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    listaTareas.appendChild(tareaItem);
  });
  updateTareaCounts();
}

function updateTareaCounts() {
  tareasTotales.textContent = tareas.length;
  tareasCompletas.textContent = tareas.filter(tarea => tarea.completed).length;
}

function addTarea() {
  const tareaDescription = tareaInput.value.trim();
  if (tareaDescription !== '') {
    tareas.push({ id: nextId++, description: tareaDescription, completed: false });
    tareaInput.value = '';
    renderTareaList();
  }
}

function deleteTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
  renderTareaList();
}

function toggleTarea(id) {
  const tarea = tareas.find(tarea => tarea.id === id);
  if (tarea) {
    tarea.completed = !tarea.completed;
    renderTareaList();
  }
}

agregaTareaButton.addEventListener('click', addTarea);

renderTareaList();
