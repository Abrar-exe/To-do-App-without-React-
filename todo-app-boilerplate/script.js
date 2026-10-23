
// Add your JavaScript here
const addButton = document.getElementById("addButton")
const taskList = document.getElementById("taskList")
const inputTask = document.getElementById("taskinput")
function addTask(){
    if (inputTask.value == ""){
        alert("its Empty")
    }
    else{
        const li = document.createElement("li")
        li.innerHTML =inputTask.value;
        taskList.appendChild(li)
        inputTask.value=""
        li.onclick=function(){
            li.style.textDecoration= "line-through";
        }
        const span = document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
        span.addEventListener("click" ,  function () {
           li.remove();
        })
    }
}
