let url="https://fakestoreapi.com/products/";
let promise= new Promise((resolve , reject)=>{
    fetch(url)
             .then((response)=>{
               if(response.ok){
                return response.json()
               } reject((error)=>{
                console.log("something went wrong")
               })
               })
               .then((data)=>{
                // console.log(data[19].title)
                data.map((value)=>{
                  if(value.id===14){
                  console.log(value.title);
                  }
                  // console.log(value.id)
                })
               })
             
})
// promise is a higher order function. we have to use .then with promise