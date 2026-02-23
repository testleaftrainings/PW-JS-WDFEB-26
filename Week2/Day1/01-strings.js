/* String declaration - '',"",`` */

/* 1.String declaration
2. Object literal */


//String literal : 

let companyName = "Testleaf"; // address : 100
let firmName = "Testleaf"; // address : 100

//Object literal :

let companyNameObj = new String(`Testleaf`) // address : 101
let firmNameObj = new String(`Testleaf`)  // address : 102

//String methods

//Escape sequence : \,\n,\t -> \n=> newLine and \t => space (tab)


// let testEsc = 'It\'s a \n regression \t testing'
// console.log(testEsc);

// let testEscDob = "Hello this is a \"double quote\""


//Concatenataion -> Using concat() method and '+'

// let testCase = "Create a new Lead";
// let testCaseId =123; // number datatype 123 => "123" concat()

// let resultConcat = testCase.concat(testCaseId);
// console.log(resultConcat);

// let resultConcatString = testCaseId.toString().concat(testCase);//"123""Create a new Lead"
// console.log(resultConcatString);

// let resultPlus = testCaseId+" - "+testCase +" passed the execution"
// console.log(resultPlus);

//Template literal - `${}`

// function funName(x){ // x => function parameter assigned the value 123 at the run time

//     let output = `There are ${x} testacases`
//      console.log(output);
// }

// let inputValue = process.argv[2] //[node .\01-strings.js 456] // node = 0, .\01-strings.js = 1, 456=2
// console.log(inputValue);

// funName(inputValue) // function argument


//length - property

// let course = "Playwright";
// console.log(`The length of the string is ${course.length}`);

// //charAt()

// console.log(`The charAt of 3 of the string is ${course.charAt(3)}`);//y

// //indexOf()

// console.log(`The indexof() "y" of the string is ${course.indexOf('y')}`); // 3


//Slice
 
let course = "Playwright"//

let outputSlice = course.slice(2,5)//(startIndex,EndIndex)//ayw
console.log(outputSlice);


let outputSlice1 = course.slice(4,-2)//(startIndex,EndIndex)//wrig
console.log(outputSlice1);

let outputSlice3 = course.slice(5,2)//(startIndex,EndIndex)//" " empty string
console.log(outputSlice3);


/* Notes Slice :
1. Start index is included and end index is not included(optional) 
2. Start index is greater than end index it give empty string "" 
3. Negative index is allowed*/

//Substring()

let outSubstring = course.substring(2,5) //ayw
console.log(outSubstring);

let outSubstring1 = course.substring(5,2) //ayw
console.log(outSubstring1);

let outputSubstring3 = course.substring(4,9)//(startIndex,EndIndex)// Play// in substring it will taken as (4,0)
console.log(outputSubstring3);

/* Notes
 1. Start index is included and end index is not included(optional) 
2. Start index is greater than end index it get swapped 
3. Negative index is ignored*/

//Class room acitvity : reverse a string and check for palindrom
//companyname="Testleaf" => example of palindrom =>madam=madam 

