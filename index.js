const userinput = document.querySelector(".userinput");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const filter = document.querySelector(".filter-todo");

btn.addEventListener("click", additem);
list.addEventListener("click", delCheck);
filter.addEventListener("click", filterTodo);
document.addEventListener('DOMContentLoaded', GettingTodo)

function additem(event) {
    //preventing the form from submitting.
    event.preventDefault();
    //todo div in which we add list items
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = userinput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Add data to Local localStorage
    SavingTodo(userinput.value);

    //Creating Checkmark button 
    const checkmarkbtn = document.createElement("button");
    checkmarkbtn.innerHTML = '<i class="material-icons">check_circle</i>';
    checkmarkbtn.classList.add("check-btn");
    todoDiv.appendChild(checkmarkbtn);

    //creating Delete button 
    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = '<i class="material-icons">delete</i>';
    deletebtn.classList.add("deleted-btn");
    todoDiv.appendChild(deletebtn);

    //append items to the List
    list.appendChild(todoDiv);
    userinput.value = "";

}
function delCheck(e) {
    const item = e.target;
    //Working Delete todo 
    if (item.classList[0] === "deleted-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        //animation 
        RemovingTodo(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });

    }

    //Working Check mark
    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("Done");
    }
}

function filterTodo(e) {
    const todo1 = list.childNodes;
    todo1.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "checked":
                if (todo.classList.contains("Done")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "unchecked":
                if (!todo.classList.contains("Done")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function SavingTodo(todo) {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("data"));
    }

    data.push(todo);
    localStorage.setItem("data", JSON.stringify(data));
}

function GettingTodo() {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("data"));
    }
    data.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo")
        // create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        
        //Creating Checkmark button 
        const checkmarkbtn = document.createElement("button");
        checkmarkbtn.innerHTML = '<i class="material-icons">check_circle</i>';
        checkmarkbtn.classList.add("check-btn");
        todoDiv.appendChild(checkmarkbtn);

        //creating Delete button 
        const deletebtn = document.createElement("button");
        deletebtn.innerHTML = '<i class="material-icons">delete</i>';
        deletebtn.classList.add("deleted-btn");
        todoDiv.appendChild(deletebtn);

        //append items to the List
        list.appendChild(todoDiv);
    });
}
function RemovingTodo(todo){
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("data"));
    }
    const index = todo.children[0].innerText;
    data.splice(data.indexOf(index), 1);
    localStorage.setItem("data", JSON.stringify(data));
}