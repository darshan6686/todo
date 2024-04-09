// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});


function saveTasks() {
    var tasks = [];
    var taskElements = document.querySelectorAll(".item h1");
    taskElements.forEach(function(taskElement) {
        tasks.push(taskElement.textContent);
    });
    setValueForLocalStorage("tasks", tasks);
}

function loadTasks() {
    var tasks = JSON.parse(getValueForLocalStorage("tasks")) || [];
    const fragment = document.createDocumentFragment(); 

    tasks.forEach(function(task) {
        fragment.appendChild(createTask(task));
    });

    view_task.appendChild(fragment);
}