let task = document.getElementById("task")
let list = document.getElementById("list")
let btn = document.getElementById("btn").addEventListener("click", ()=>{
    console.log(task);
    if(task.value==""){
        alert("enter something")
        return;
    }else{
    let li=document.createElement("li");
    li.innerHTML= `${task.value}`
    list.appendChild(li);
    }
})
