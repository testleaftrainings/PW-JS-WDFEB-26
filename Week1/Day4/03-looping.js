


//looping for, while


// for (let index = 1; index <= 10; index++) {

//     /* Internally :
//     index=1,2
//     index =1 <10
//     gets inside the loop prints the value
//     index++ the value gets incremented by 1 */

//     console.log(index); //1,2,3,   
   
    
// }


//while loop

// let nextPageButton = true

// while (condition) { // until the value turns false the loop keeps prinitng
    
//  //   await page.locator(".navigateButton").click() 
//  //  nextPageButton = await page.locator(".navigateButton").enabled()
  
 
//  if(nextPageButton){
//  console.log("Moving to next page");
 
//  }else {
//     console.log("No more pages");
    
//  }

// }

let number = 10;

while(number<0){ // 10,9,8,7,6,5,..,1 => truthy and 0 = falsy when false it will stop going into the loop and will stop iteration
    console.log(number);
     number--  //10,9,8,7,6,5,..0  
}