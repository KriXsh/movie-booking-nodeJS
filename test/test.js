const map = new Map()

const obj =[
{
    key:"krish",
    value: 1
},
{
    key:"krish",
    value: 1
},
{
    key:"krish",
    value: 1
},
{
    key:"krish",
    value: 1
}]

const output ={}

obj.forEach(item =>{
    if(output[item.key]){
        output[item.key].push(item);
    }else{
        output[item.key] = [item];
    }
})
console.log(output)
////////////////////////////
// let onetime =false
const key = ["krish","aman","rahul","shivam"]
// key.forEach((item)=>{
//     if(item){
//         onetime = true
//     }
// });
// if(onetime){
//     console.log(key)
// }
//////////////////////
 if (key.some(item=>item)){
    console.log(key)
 }



const allNames ={}
key.forEach((name=>{
    if(key.name){
        allNames[key].push(name)
    }else{
        allNames[key] = [key]

    }
}))

console.log(allNames)

