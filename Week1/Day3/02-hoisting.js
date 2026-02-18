/* 

//var x is hoisted and assigned the value undefined in the first place --> 1995
console.log(x);//undefined
var x // x=undefined
var x=10 // 10
var x=20 */


//let x is hoisted and assigned the value undefined in the first place--> 2015 throws reference error while trying to access the value "y" 
// console.log(y);//Reference error when trying to access the value "y" before assigning
// let y// x=undefined
// y=10 // 10
// let x=20

//const z is hoisted and assigned the value undefined in the first place--> 2015 throws reference error while trying to access the value "z" 
console.log(z);////Reference error when trying to access the value "z" before assigning
const z=10 // 
// const z=10 // 10
// const z=20
