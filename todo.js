var add_value = document.getElementById("add_value");
var view_item = document.getElementById("view_item");

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
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        view_item.innerHTML += `
            <div class="flex bg-gray-200 mt-3 p-3 rounded-lg item" style="align-items: center;">
                <h1 class="w-4/5">${task}</h1>
                <div class="flex gap-2 sm:gap-3">
                    <button class="bg-violet-500 text-white px-5 rounded-lg h-7" onclick="editItem(this.parentNode.parentNode)">Edit</button>
                    <button class="bg-violet-500 text-white px-5 rounded-lg h-7" onclick="deleteItem(this.parentNode.parentNode)">Delete</button>
                </div>
            </div>
        `;
    });
}

function addItem() {
    if (add_value.value == "") {
        alert("Please enter a task");
    } else {
        view_item.innerHTML += `
            <div class="flex bg-gray-200 mt-3 p-3 rounded-lg item" style="align-items: center;">
                <h1 class="w-4/5">${add_value.value}</h1>
                <div class="flex gap-2 sm:gap-3">
                    <button class="bg-violet-500 text-white px-5 rounded-lg h-7" onclick="editItem(this.parentNode.parentNode)">Edit</button>
                    <button class="bg-violet-500 text-white px-5 rounded-lg h-7" onclick="deleteItem(this.parentNode.parentNode)">Delete</button>
                </div>
            </div>
        `;
        // Save to localStorage
        saveTasks();
    }
}

function deleteItem(item) {
    item.parentNode.removeChild(item);
    // Save to localStorage
    saveTasks();
}

function editItem(item) {
    var taskText = item.querySelector("h1").textContent;
    var newText = prompt("Edit Task", taskText);
    if (newText !== null) {
        item.querySelector("h1").textContent = newText;
        // Save to localStorage
        saveTasks();
    }
}