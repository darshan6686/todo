// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function saveTasks() {
    var tasks = [];
    var category = [];

    var taskElements = document.querySelectorAll(".item h1");
    var categoryElements = document.querySelectorAll(".item h2");

    taskElements.forEach((taskElement) => {
        tasks.push(taskElement.textContent);
    });

    categoryElements.forEach((categoryElement) => {
        category.push(categoryElement.textContent);
    })

    setValueForLocalStorage("tasks", tasks);
    setValueForLocalStorage("category", category);
}

function loadTasks() {
    var tasks = JSON.parse(getValueForLocalStorage("tasks")) || [];
    var category = JSON.parse(getValueForLocalStorage("category")) || [];
    const fragment = document.createDocumentFragment();

    tasks.forEach((task, index) => {
        fragment.appendChild(createTask(task, category[index]));
    });

    view_task.appendChild(fragment);
}