// what is synchronus: processes executing one after another is called synchronus manner.
// asynchronus: to  achieve parallel execution of the threads we use asynchronus manner.

async function load(){
    try{
        const resp = await fetch("https://fakestoreapi.com/products/")
        if(!resp.ok){
            console.log(` Something is wrong ${resp.status}`)
        }
        let data= await resp.json()
        // console.log(data)
        console.log(typeof(data));
        
        data.map((value)=>{
            if(value.id===1){
                console.log(value.title)
            }
        })

    }
    catch(error){
        console.error("something went wrong")
    }
}
load();
