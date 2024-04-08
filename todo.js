var add_value = document.getElementById("add_value");
var view_item = document.getElementById("view_item");

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
  }
}

function deleteItem(item) {
    item.parentNode.removeChild(item);
}

function editItem(item) {
    var taskText = item.querySelector("h1").textContent;
    var newText = prompt("Edit Task", taskText);
    if (newText !== null) {
        item.querySelector("h1").textContent = newText;
    }
}