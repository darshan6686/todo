var add_value = document.getElementById("add_value");
var category_value = document.getElementById('category_value')

function addTask() {
    if (add_value.value == "") {
        alert("Please enter a task");
    } else {
        createTask(add_value.value, category_value.value);
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
    var catText = item.querySelector("h2").textContent;

    var newText = prompt("Edit Task", taskText);
    var newCat = prompt("Edit Category", catText);

    if ((newText !== null) && (newCat !== null)) {
        item.querySelector("h1").textContent = newText;
        item.querySelector("h2").textContent = newCat;
        // Save to localStorage
        saveTasks();
    }
}