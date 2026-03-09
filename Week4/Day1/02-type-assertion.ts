//Type Assertion

//using angular bracket

let response : any = "Record from server"

let myResponse = <string> response

console.log(myResponse.length);


//using as keyword

let sCode : any = "Sucess"

let statusLength = sCode as string

console.log(statusLength.length);

