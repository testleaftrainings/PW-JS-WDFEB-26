
// function PWFeb26(){

// console.log("Hello Team")

// }

// PWFeb26()


function add(a,b){ 

// function parameters a and b is holding the values 10 and 20 and is passing the values into the function block
    // const a = 10;
    // let b =20
    let c = a+b // 10+20
    console.log(`The result is `+c);
    
}

add(10,20) // Passing argument while calling the function


function sub(x,y){ // x=100 and y=50 x and y are parameter of the fucntion and you dont need declaration
let x=100
let y=50
let z=x-y // 100-50 = 50
return z// z=50 which means sub(x,y) = z 
}

console.log(sub(100,50)) // pasing the argument and calling the name of the function

//when we use return keyword the function name hold the value of the variable for which the returm keyword was used
//sub(100,50) == z == 50