var view_task = document.getElementById("view_task");

function createTask(task_value, category){
    const newDiv = document.createElement('div');
    newDiv.classList.add('flex', 'bg-gray-200', 'mt-3', 'p-3', 'rounded-lg', 'item');

    let h1 = document.createElement('h1');
    h1.classList.add('w-2/5');
    h1.textContent = `${task_value}`;

    let h2 = document.createElement('h2');
    h2.classList.add('w-2/5');
    h2.textContent = `${category}`;

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
    newDiv.appendChild(h2);
    newDiv.appendChild(div);
    
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    view_task.appendChild(newDiv);
    return newDiv
}