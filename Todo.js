let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
displayItems();

function addTodo() {
    let input = document.querySelector('.Todo');
    let inputDate = document.querySelector('.date');
    let todoItem = input.value; 
    let todoDate = inputDate.value;
    todoList.push({item: todoItem,dueDate: todoDate});
    localStorage.setItem('todoList',JSON.stringify(todoList));
    input.value = '';
    inputDate.value = '';
    displayItems();
}

function displayItems() {
    let items = document.querySelector('.item-container');
    let newHtml = '';
    for(let i = 0;i<todoList.length;i++) {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item,dueDate} = todoList[i];   //alternative of above both 

        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class = "delete" onclick = "todoList.splice(${i},1);localStorage.setItem('todoList', JSON.stringify(todoList)); displayItems();">Delete</button>
        `;
    }
    items.innerHTML = newHtml;
}

