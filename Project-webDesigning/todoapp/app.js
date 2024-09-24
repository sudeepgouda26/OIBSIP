
document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    // Create a new row for the task
    const taskList = document.getElementById('task-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td><button class="btn-delete">X</button></td>
    `;

    // Add the new row to the task list
    taskList.appendChild(row);

    // Clear input fields after adding the task
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';

    // Add delete functionality to the new task
    row.querySelector('.btn-delete').addEventListener('click', function() {
        taskList.removeChild(row);
    });
});