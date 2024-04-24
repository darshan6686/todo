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
    const categoryText = item.querySelector('h2').textContent;
    const categoryElements = category_element.querySelectorAll('p');
    categoryElements.forEach(category => {
        if (category.textContent === categoryText) {
            category.remove();
        }
    });
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
        item.querySelector("a"),textContent = newCat;
        // Save to localStorage
        saveTasks();
    }
}

function openSidebar(sidebarID){
    if(sidebarID){
        document.getElementById('sideBar').style.display = 'block';
    }
    else{
        document.getElementById('sideBar').style.display = 'none';
    }
}