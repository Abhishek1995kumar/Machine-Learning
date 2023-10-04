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
// let arr = ["abhishek","archana", "komal", "kajal", "aryan","kumar", "sourabh", "akshay"];
// let inser = 3
// let setv = "vishal"
// for(let x=arr.length-1; x>=0; x--){ 
//     if(x>=inser){
//         arr[x+1] = arr[x]
//         if(x==inser){
//             arr[x] = setv
//         }
//     }
// }
// console.log(arr[0]);




// Array Element Delete 
// let arr = ["abhishek","archana", "komal", "kajal", "aryan","kumar", "sourabh", "akshay"];
// let del = 3
// for(let x=del; x<arr.length-1; x++){ // yaha par -1 dene se ek index number remove ho jata hai array se
//     // 3    4 -- ye loop par nahi depend hai balki ye arr ki value ko le kar increase kar de rha hai
//     // yaha par data delete nhi hua hai 3rd position ki element ko remove kar ke last ki value ka replica kar diya hai
//     arr[x] = arr[x+1]
// }
// arr.length = arr.length-1;
// console.log(arr)




// Array Search
// let arr = ["abhishek","archana", "komal", "kajal", "komal" ,"aryan","kumar", "sourabh", "akshay"];
// let sear = "komal";
// let val=undefined;
// for(let x=0; x<arr.length-1; x++){
//     if(arr[x]==sear){
//         val = sear
//         var v = `${x} -- ${val}`;
//         // agar hamko next komal ko search karna ho tab kya karenge -- val ki value ko increase kar denge
//         var valSec = val 
//         break;
//     }
// }
// console.log(v)





// Merge Array
let arr = ["archana", "komal", "kajal","parul","sagun","sanskriti"];
let arr1 = ["abhishek","aryan","kumar", "sourabh", "akshay"];
let arr2 = ["kanchan", "fatima", "tehsin", "nagma", "shalu khan"];
let arr3 = [];
// 
for(let x=0; x<arr.length; x++){
    arr3[x] = arr[x]
}
for(let y=0; y<arr1.length; y++){
    arr3[arr.length+y] = arr1[y]
}
for(let z=0; z<arr2.length; z++){
    arr3[arr.length+z] = arr2[z]
}
// console.table([arr3, typeof arr3])
console.table(arr3)






