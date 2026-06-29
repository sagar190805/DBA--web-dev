// object is the combination of key : value pair.
//access the value using obj. key.
let obj ={
    name: "sagar",
    age: 30,
    roll:123,
}
console.log(obj.name)
let obj1={
    Course:"Btech",
    branch:{
        cse:"Computer science",
        me:"mechanical",
        content:{
            cse:{
                firstyear:"c",
                secondyear:"java",
                thirdyear:"placement",
                placement:{
                    web_dev:"fullstack",
                    ai:"propogation"
                }
            },
            me:{
                firstyear:"basics of machines",
                secondyear:"fluid mechanics",
                thirdyear:"placement",
                sum:()=>{
                    console.log(8+4)
                }
            }

        }
    }
}
// object drilling 
console.log(obj1.branch.content.cse.thirdyear)
console.log(obj1.branch.content.me.sum())

