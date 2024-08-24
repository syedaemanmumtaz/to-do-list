function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    let taskList = document.getElementById('task-list');

    let taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(deleteButton);

    taskItem.onclick = () => {
        taskItem.classList.toggle('completed');
    };

    taskList.appendChild(taskItem);

    taskInput.value = '';
}