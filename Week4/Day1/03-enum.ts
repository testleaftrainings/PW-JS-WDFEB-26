

// //enum type : numeric enum, string enum, heterogenius enum

// enum TestResults {
//     Pass="Passed",
//     Fail="Failed",
//     Skip="Skipped"
// }

// function logtestResults(result:TestResults){

// console.log(`Test result : ${result}`);

// }

// logtestResults(TestResults.Pass)


// //Example 2

// enum environment {
//     qa="https://qa.com",
//     prod="https://prod.com",
// }

// function testexecution(env:environment){

// console.log(`Test environment : ${env}`);

// }

// testexecution(environment.prod)


//Numeric enum/ Heterogenous enum

enum BrowserStatus {
   Open,
   Incognito,
   crash="Crashed",
   close="Closed",
   loading=1
}

function reportBrowserStatus(status:BrowserStatus){

console.log(`Current status of the browser ${status}`);

}

reportBrowserStatus(BrowserStatus.Open)


