// //Compound Assignment OPerators

// let x=10;
// x+=5 // this means x=x+5 (10+5)
// console.log(x); // 15

// x-=5// x=x-5 (15-5=10)
// console.log(x);

// x*=5// x=x*5 (10*5=50)
// console.log(x); // 50


//Post increment --> value++

let y=10;
console.log(y++); // 10 
console.log(y); //11

/* internally
1. y=10 when printing it takes the value 10
2. Next the value of y is reassigned added with 1 "++" => y+1 = 10+1 = 11  */


//Pre increment --> ++value

console.log(++y); //12
console.log(y);//12


/* internally
1. y=10 when printing it takes ++ operator and gets added to prit   */

//Post decrement --> value--

// let z=10;
// console.log(z--); // 10
// console.log(z); // 9

/* internally
1. y=10 when printing it takes the value 10
2. Next the value of y is reassigned added with 1 "++" => y+1 = 10+1 = 11  */


//Pre decrement --> --value

// console.log(--z); //8
// console.log(z);//8


/* internally
1. y=10 when printing it takes ++ operator and gets added to prit   */

/* Strict Equality "==="
1. Compare the datatype amd 
2. Compare the value */

/* Non-strict Equality (Loose Equality) "==" 
1.Compare the value and not the datatype*/

console.log(1===1); // true
console.log(1==="1");// fail
console.log(1=="1");//true //string 1 gets converted to the number datatype => type coercion
console.log(1==true);// true as 1 // boolean value true gets converted to number 1 => type coercion
console.log(null==undefined); // true
console.log(null===undefined);//false
















