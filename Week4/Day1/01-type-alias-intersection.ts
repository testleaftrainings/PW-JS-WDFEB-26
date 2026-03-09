

//alias name for datatypes
/* Login scenario filling the username with emailis or mob number */
//Union Type
type userInput = string | number | boolean// userInput is the new customized/ alias name of the 2 datatypes combined together

let username: userInput = "support@testleaf.com"
username = 8908098789
username = true

//alias name for values

type supportedBrowser = "chrome" | "firefox" | "msedge"


function invokeBrowsers(browserName: supportedBrowser) { // browserName is a local variable to fetch the argument value msedge into the function block

    console.log(browserName);
}

invokeBrowsers("chrome")


//intersection --> &

type admin = {
    adminName: string,
    privileges: string[]
}

type employee = {
    name: string,
    empId: number,
    date: string
}

type QA = admin & employee

/* Notes here QA is holding :
   admin : string,
    privileges:string[]
       name:string,
    empId : number,
    date:string

 */


const QAProfile: QA = { //QA Profile is the object and QA is the type that is explicitelt infered
    adminName: "Testleaf",
    privileges: ['server'],
    name: "Ravindran",
    empId: 1001,
    date: "09/03/2026"
}

console.log(QAProfile.adminName);


