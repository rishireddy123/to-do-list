const Input = document.getElementById("input");
const listInput = document.getElementById("list-container");

function addEventt() {
    if(Input.value=='') {
        alert("you must enter an event");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = Input.value;
        listInput.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    Input.value='';
    storeData();
}

listInput.addEventListener("click",function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
},false);

function storeData() {
    localStorage.setItem("tasks",listInput.innerHTML);
}
function showTasks() {
    listInput.innerHTML = localStorage.getItem("tasks");
}

showTasks();

