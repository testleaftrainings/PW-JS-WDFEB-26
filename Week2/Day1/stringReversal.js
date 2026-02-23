

let companName= "madam"
let reverse = ""

for (let index =  companName.length-1; index >= 0; index--) {
    reverse= reverse+companName[index]
}
 console.log(reverse); 

 if (reverse===companName) {
    console.log("Palindrome");
    
 }else{
    console.log("Not a palindrome");
    
 }