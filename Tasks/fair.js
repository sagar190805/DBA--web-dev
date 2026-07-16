let dis=document.getElementById("distance")
let rat=document.getElementById("rate")
let btn= document.getElementById("btn");
let res=document.getElementById("result")
btn.innerHTML="Calculate"
btn.addEventListener(`click`, ()=>{
    if(dis.value==""|| rat.value=="") alert("Invalid input");
    else{
    function calfare(){
        let dist=Number(dis.value)
        let rate=Number(rat.value)
        let fare= dist*rate
        if(fare>2000)  fare+=100;
        else if(fare>100)  fare= fare- fare*20/100;
        else if(fare>50)   fare= fare - fare*15/100;
        res.innerHTML= `Your fare is : ${fare}`;
    }
    calfare();
}
dis.value=""
rat.value=""
})