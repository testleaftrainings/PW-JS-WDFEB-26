// //Arrays in JavaScript


// /* 1, Dynamic in size
// Arrays grow and shrink in size as elements are added


// 2. Hetergenous in nature*
// Arrays in JS can store different satatypes like number, string, boolean*/

// //1,push()-> add element to the end of the array

// let letters =["a","b","c","d","e"]
// letters.push("f","g","h")
// console.log(letters);

// /* O/P : 
// [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g', 'h'
// ] */



// //2.pop() ->remove only from the end of the array

// letters.pop();
// console.log(letters);

// /* O/P:
// [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g'
// ] */


// //3. unshift() -> add one or more elements to the beginning of the array

// letters.unshift("x","y","z")
// console.log(letters);

// /* O/P:
// [
//   'x', 'y', 'z', 'a',
//   'b', 'c', 'd', 'e',
//   'f', 'g'
// ] */


// //4.shift() -> remove only one elment from the first part of the array

// letters.shift();
// console.log(letters);

// /* O/p:

// [
//   'y', 'z', 'a',
//   'b', 'c', 'd',
//   'e', 'f', 'g'
// ]*/


//5. slice() -> extract the part of array without modifying the original array

//let arrayVal = ["a","b","c","d","e"] //=>[0,1,2,3,4]

// const resultslice = arrayVal.slice(1,3);//['b','c']
// console.log(resultslice); //[ 'b', 'c' ]


//6. splice()-> add or remove the elements from the array

//array.splice(startIndex,deleteCount,ele1,ele2)

// let arrayVal = ["a","b","c","d","e"] //=>[0,1,2,3,4]
// // arrayVal.splice(1,3,"x","y","z")
// // console.log(arrayVal);//[ 'a', 'x', 'y', 'z', 'e' ]

// arrayVal.splice(2,3,"x","y","z")
//  console.log(arrayVal);//[ 'a', 'b', 'x', 'y', 'z' ]


//7. concatenation -> join to arrays 

//spreadsyntax // modern JS 

let number1 = [1,2,3,4]
let number2 = [5,6,7,8]

let spreadSyntax =[...number1,...number2]
console.log(spreadSyntax);

let concatArray = number1.concat(number2) // Older version of concat
console.log(concatArray);


//8.sort()