// import { getValueForLocalStorage, setValueForLocalStorage } from "./storage";

var add_value = document.getElementById("add_value");
var view_task = document.getElementById("view_task");

function createTask(task_value){
    const newDiv = document.createElement('div');
    newDiv.classList.add('flex', 'bg-gray-200', 'mt-3', 'p-3', 'rounded-lg', 'item');

    let h1 = document.createElement('h1');
    h1.classList.add('w-4/5');
    h1.textContent = `${task_value}`;

    let div = document.createElement('div');
    div.classList.add('flex', 'gap-2', 'sm:gap-3');

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('px-5', 'bg-violet-500', 'text-white', 'rounded-lg', 'h-7');
    btnEdit.textContent = "Edit";
    btnEdit.onclick = function() {
        editItem(this.parentNode.parentNode);
    };

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('px-5', 'bg-violet-500', 'text-white', 'rounded-lg', 'h-7');
    btnDelete.textContent = "Delete";
    btnDelete.onclick = function() {
        deleteItem(this.parentNode.parentNode);
    };

    
    newDiv.appendChild(h1);
    newDiv.appendChild(div);
    
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    view_task.appendChild(newDiv);
    return newDiv
}

function addTask() {
    if (add_value.value == "") {
        alert("Please enter a task");
    } else {
        createTask(add_value.value);
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