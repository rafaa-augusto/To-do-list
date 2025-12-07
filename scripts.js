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
