"use strict"
// console.log("hello abhishek")
{
    let a = "hello dear"
}
// console.log(a); // a ko ham bahar se access nhi kar skate hai kyoki let ka scope block ke undar hai iss liye

{
    var b = [1,2,3,4,5,6,7,8,9,10,11,15,18,20]
    // console.log(b);
}
// console.log(b); // b ko ham bahar se access kar skte hai kyoki var ke liye scope ka Rule apply nhi hota hai


// Functional Scope --
// function check(){
//     let c = ["abhi", "aryan", "kumar", "sourabh"]
//     // console.log(c);
// }
// console.log(c); // c ko ham bahar se access nhi kar skate hai kyoki let ka scope function ke undar hai iss liye


// function check(){
//     var d = ["abhi", "aryan", "kumar", "sourabh"]
//     var e = "ye var ka value hai";
//     // console.table();
// }
// console.table(check([d, e])); // d aur e ko ham bahar se access nhi kar skate hai kyoki var ka scope function ke undar hai iss liye



// Array Traversing and Accessing 
// let arr = ["abhi", "komal", "aryan", "kumar", "sourabh"]
// for (let x=0; x<arr.length; x++){
//     let val = `Array ${x} value is -- ${arr[x]}`;
//     let m = 1
//     // if(val[m]){
//     //     console.log("yes")
//     //     break;
//     // }
//     // console.log(val)
// }

// let nm = [1,2,3,4,5,6,7,8,9,10,11,15,18,20];
// for(let x=0; x<nm.length; x++){
//     let val = `${x} value is -- ${nm[x]}`;
//     if(val && typeof parseInt(val) === "number"){
//         console.log(val);
//     }else{
//         console.log("Error for negative indexing !!")
//     }
//     // console.log(val);
// }



// let arr = ["abhishek","archana", "komal", "kajal", "aryan","kumar", "sourabh", "akshay"]
// let setIndex = 5;
// let setVal = "parul";
// for(let x=arr.length-1; x>=0; x--){
//     // yaha par agar ham console kare to last ki value me undefined set kar deta hai usko remove karne
//     // ke liye hamko arr.length - 1 karna hota hai kyoki positive indexing start hoti hai 0 se 
//     // but negative indexing start hoti hai -1 se.
//     // let ln = `${x} == ${arr[x]}`;
//     if(x>=setVal){
//         arr[x+1] = arr[x];
//         if(x==setIndex){
//             arr[x] = setVal
//         }
//     }
// }
// console.log(arr);

// let arr = [1,5,3,7,8,9,10,54,35]
// let setIndex = 5;
// let setVal = 86;
// for(let x=arr.length-1; x>=0; x--){
//     if(x>=setIndex){
//         arr[x+1] = arr[x];
//         if(x==setIndex){
//             arr[x] = setVal
//         }
//     }
// }
// console.log(arr);



// Array Delete specific element
// let arr = ["abhishek","archana", "komal", "kajal", "aryan","kumar", "sourabh", "akshay"];
// let delPos = 3;
// let setVal = 'vishal'
// for(let x=arr.length-1; x>=0; x--){
//     if(x==delPos){
//         arr[x] = setVal
//     }
// }
// console.log(arr)


// Insert data in specific index without remove other element 

let arr = ["abhishek","archana", "komal", "kajal", "aryan","kumar", "sourabh", "akshay"];
let inser = 3
let setv = "vishal"
for(let x=arr.length-1; x>=0; x--){ // 8
    console.log(x);
    arr[x+1] = arr[x]
    
    if(x==inser){
        arr[x] = setv
    }
}
console.log(arr[0]);
