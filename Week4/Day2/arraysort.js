

let numberArray = [10, 8, 9, 7];
numberArray.sort();
//console.log(numberArray); // [ 10, 7, 8, 9 ]

numberArray.sort((a,b)=>a-b) // ascending
console.log(numberArray);

numberArray.sort((a,b)=>b-a) // descending
console.log(numberArray);

//a=10  and b=8  => 2

//filter method :

let even = numberArray.filter((num)=>num%2===0);
console.log(even);

//map method

//[10, 8, 9, 7]
let squared = numberArray.map((num)=>num*num)
console.log(squared);




