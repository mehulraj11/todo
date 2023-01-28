// alert("hello");
var addButton = document.querySelector("#add-task");
var container = document.querySelector(".container-items");
var taskEntry = document.querySelector(".work");
addButton.addEventListener("click", function(){
    var newdiv = document.createElement("div");
    newdiv.classList.add("task-left");
    var divChecbox = document.createElement("input");
    divChecbox.type = "checkbox";
    divChecbox.classList.add("checkbox");
    var task = document.createElement("input");
    task.type = "text";
    task.classList.add("task");
    container.append(newdiv);
    newdiv.append(divChecbox);
    newdiv.append(task);
    var taskRegister = document.querySelector(".task");
    taskRegister.value = taskEntry.value;
    taskEntry.value = "";
})