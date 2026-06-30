// let hof(()=>{})
    let num = [1,2,3,4,5,6,7,8,9,10]
    let num2 = num.map((i)=>{
          return i*2})
          console.log(num2);
          // map((value,index,array)=>{
            // })
            ////// filter////////////  3 parameter(val,ind,arr)
            let num3= num.filter((val,ind,arr)=>{
                return val>6
            })
            console.log(num3)

            let num4=num.reduce((acc,val)=>{// (4 parameter  previous value, current val, current index,array {}, initial value)
                return acc+val
            },0)
            console.log(num4);
            //forEach
            let num5=num.forEach((val,ind,arr)=>{})
            //forin
            let obj ={
                name:"sag",
                age:34
            }
            for(const i in obj){
                const element=obj[i]
                console.log(element);
                
            }
            for(i of obj){
                console.log(i);
            }
            
