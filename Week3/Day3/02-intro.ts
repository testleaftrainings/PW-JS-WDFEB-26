
let a:string= "123" // explicit inference



export function addType(x:number,y:number):number{  // a=> local variable is holding the value 10

// function parameters a and b is holding the values 10 and 20 and is passing the values into the function block
    // const a = 10;
    // let b =20
    let c = x+y // 10+20
  //  console.log(`The result is `+c);
  return c
    
}

//console.log(addType(10,20)) // Passing argument while calling the function