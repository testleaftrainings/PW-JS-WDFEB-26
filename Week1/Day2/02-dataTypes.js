

/* Different datatypes in JS

1. number
2. bigint
3. boolean
4. string
5. undefined
6. null*/

//numbers

var phoneNumber = 899890890;
console.log(phoneNumber);

var interestRate = 7.5;
console.log(typeof interestRate); // number

//typeof -> an operator used to get/ expose the datatype stored inside a variable.

console.log(typeof phoneNumber); // number

//bigint

var accountNumber = 567356753675637657
console.log(typeof accountNumber); // bigint

/* BigInt
- (2^53 - 1) to (2^53 - 1)
This range is:
-9007199254740991 to 9007199254740991

If you go beyond this range — like using:

let num = 9007199254740992;

JavaScript **can't guarantee accuracy**, and you'll get the `ts(80008)` warning in TypeScript because the value might be **rounded**, **inaccurate**, or **unexpected**.

 */

//boolean -

var accountNumberValid = true
console.log(typeof accountNumberValid);

//string - "",'',``(Back tick -> in the keyborad above tab button)

var username = `ravi123@testleaf.com`
console.log(typeof username);

//undefined

var xyz // declaration memory space created -> default value --> undefined
//var xyz = 123// assignment
console.log(xyz);
console.log(typeof xyz); // undefined


//null
var abc = null
console.log(abc);
console.log(typeof abc);//object // Historical bug created during the development stage of JS 




