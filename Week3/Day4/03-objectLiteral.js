// let firstName :string ="Ravi"
// let lastName = "R"
// let mobNumber =89789797
// let user = { // user is the object 
//     firstName : "Ravindran", // firstName --> key and "Ravindran" --> value
//     lastName : "R",
//     mobNumber : 80980989
// }
// console.log(user.firstName); // dot Notation
// console.log(user.lastName);
// console.log(user.mobNumber);
// let user: { // explicit inference in object 
//     firstName: string, // firstName --> key and "Ravindran" --> value
//     lastName: string,
//     mobNumber: number
// } = {
//     firstName: "Ravindran", // firstName --> key and "Ravindran" --> value
//     lastName: "R",
//     mobNumber: 80980989
// }
// console.log(user.firstName);
var user = {
    firstName: "Ravindran", // firstName --> key and "Ravindran" --> value
    lastName: "R",
    "#mobNumber": 80980989
};
console.log(user["#mobNumber"]); // Square bracket notation
