var Browser = /** @class */ (function () {
    function Browser() {
        //properties => data
        this.browserInfo = "Chrome";
        this.browserVersion = 121;
    }
    //methods => actionables
    Browser.prototype.launchBrowser = function () {
        console.log("Launching the Chrome");
    };
    Browser.prototype.loadingPage = function () {
        console.log("Loading the page");
    };
    return Browser;
}());
var objectBrowser = new Browser(); // Create object using "new" keyword inorder acces the properties and methods encapsulated inside class block
console.log(objectBrowser.browserInfo);
console.log(objectBrowser.browserVersion);
objectBrowser.launchBrowser();
objectBrowser.loadingPage();
