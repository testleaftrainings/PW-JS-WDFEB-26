
import { test } from "@playwright/test";

test(`Learn frames using playwright`,async ({page}) => {
    
    await page.goto(`https://leafground.com/frame.xhtml`);

    const allframes = page.frames() // predefined ,method to get the frame objects present in a page

    console.log(allframes.length); // [frame0,frame1,frame2,frame3,frame4].length => 5
   
    for(let tempVal of allframes){
            const title = await tempVal.title();
            console.log(`The title of frames are ${title}`);        
    }

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }

})