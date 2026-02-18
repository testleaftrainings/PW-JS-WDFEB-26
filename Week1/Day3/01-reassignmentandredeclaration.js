
//Charateristics of var, let and const

//var declaration

var username = "hello@testleaf.com" // decalration with initilization
var username = "contact@testleaf.com" // redeclaration 

//var reassignmrnt

var x // declaration

var password = "Testleaf#1432" // initialization
password = "Qeagle#1234" // reassignment

//let redeclaration not possible

//let accountBalance = 65 // declaration
//let accountBalance = 8476877// redeclaration is not possible using let keyword


// let reassignment

let accountBalance = 5675//declaration
accountBalance=8968967// reassignment

//const redecalration is not possible

// const accountNumber = 23543254
// const accountNumber = 32432235

// const reassignment 

const accountNumber = 5673567
accountNumber=3456342
console.log(accountNumber); // it creates run time error while you reasssign using const keyword


//Hoisting - It is a behaviour of JS to scan the entite .js file and assigning the variable with undefined value before the execution of the ..js file