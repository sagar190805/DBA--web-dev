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
    let complete = document.createElement("button");
    complete.innerHTML= "complete"
    Object.assign(complete.style ,{
        color:"red",
        backgroundColor:"blue",
    })
    complete.addEventListener("click", ()=>{
        li.style.textDecoration="line-through"
    })
    let dlt = document.createElement("button")
    dlt.innerHTML="delete"
    dlt.addEventListener("click", ()=>{
        li.remove();
    })
    task.value=""
    li.appendChild(complete)
    li.appendChild(dlt)
    list.appendChild(li)
    }
})


