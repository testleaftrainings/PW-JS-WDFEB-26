

//Scoping in JS:

//var scoping in block



// if(true){
// var companyName = "Testleaf"
// console.log("Accessing var inside the if block "+companyName);
// }
// console.log("Accessing var outside the if block "+companyName);

// //let scoping in block


// let companyName = "Testleaf"// global variable
// if(true){
//  let companyName = "Testleaf"// local variable
// console.log("Accessing let inside the if block "+companyName);
// }
// console.log("Accessing let outside the if block "+companyName);


//const scoping in block

// if(true){
//  const companyName = "Testleaf"// local variable
// console.log("Accessing const inside the if block "+companyName);
// }
// console.log("Accessing const outside the if block "+companyName);

//function block

//var scoping in function block

// function greet() {

//     var message = "Hello Team"

//     console.log("Accessing var inside function scope", message);

//     if (true) {
//         console.log("Accessing var inside the if block ",message);
//     }

// }


// //var is exposed outside of if block but not exposed outside of function block
// console.log("Accessing var outside of function block",message);
// greet()


//Scoping

//block scoped (if, for,..)=> let and const
//function scoped => var,let and const


function greet() {

    let message = "Hello Team"

    console.log("Accessing let inside function scope", message);

    if (true) {
        console.log("Accessing let inside the if block ",message);
    }

}

greet()

//let is exposed outside of if block but not exposed outside of function block
console.log("Accessing let outside of function block");
