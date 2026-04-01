

class Browser {

    //properties => data
    browserInfo = "Chrome"
    browserVersion = 121


    //methods => actionables

    launchBrowser(){
        console.log("Launching the Chrome");        
    }

    loadingPage(){
        console.log("Loading the page");
        
    }
}

const objectBrowser = new Browser(); // Create object using "new" keyword inorder acces the properties and methods encapsulated inside class block

console.log(objectBrowser.browserInfo) 
console.log(objectBrowser.browserVersion)

objectBrowser.launchBrowser()
objectBrowser.loadingPage()

/* 
Class
Methods
Properties
Objects 
How to retreive the properties and invoke the methods using object of a class*/