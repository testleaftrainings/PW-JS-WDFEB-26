/* Datatypes in TypeScript 

1. number
2. string
3. boolean
4 undefined
5 null
6 any --> if you want to turn the behaviour of TS to JS then you can use "any"
7 unknown
8 never
9 tuple*/

// let data = 45634 // implicit inference Here data can hold only number datatype due to the nature of static typing
// // data = "Hello"


// let value : unknown;

// value = 40; // the value comes from a DB ->number datatype
// //value = "Hello" // string datatype

// if(typeof value === "string"){ 

//     console.log(value.toLocaleUpperCase());
    
// }


function logData(data: unknown) {

    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }else{
        console.log("Datatype other than string");        
    }
}

// If you use any, someone can pass:

logData(123);