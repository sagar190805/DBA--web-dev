let div=document.createElement('div');
h1=document.createElement('h1');

function clock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    h1.innerHTML=`${hours}:${minutes}:${seconds}`;
    h1.innerHTML=`${hours}:${minutes}:${seconds}`;
}
div.appendChild(h1);
document.body.appendChild(div);
clock();