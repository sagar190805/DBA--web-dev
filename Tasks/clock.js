let div = document.createElement("div");
let h1=document.createElement("h1");
let h2=document.createElement("h1");
const clock=()=>{
    let date= new Date();
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();
    h1.innerHTML=`${hours}:${minutes}:${seconds} `;
    h2.innerHTML=`${hours}:${minutes}:${seconds}`;
}
div.appendChild(h1);
Object.assign(div.style, {
    color:"green",
    height:"100vh",
    width:"100wh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
// div.style.display = "flex";
// div.style.height="100vh";
// div.style.width="100wh";
// div.style.alignItems="center";
// div.style.justifyContent="center";
// div.style.color="red";
document.body.appendChild(div);
clock();
let Interval = setInterval(clock,1000);
let btn= document.createElement("button");
let time = Number(prompt("enter time in seconds")*1000)
btn.innerHTML="Start time ";

div.appendChild(btn);
btn.addEventListener("click",()=>{    
setTimeout(()=>{
    clearInterval(Interval);
    alert("Your time limit has been reached")
},time)
})
let btn2= document.createElement("button")
div.appendChild(btn2)
btn2.innerHTML= "stop";
btn2.addEventListener("click",()=>{
    clearInterval(Interval);
})
