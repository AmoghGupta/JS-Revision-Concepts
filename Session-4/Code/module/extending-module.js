var Module = (function () {

    var privateMethod = function () {
        // private
    };

    var someMethod = function () {
        // public
        console.log('some method');
    };

    var anotherMethod = function () {
        // public
        console.log('another method');
    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    };

})();

var ModuleTwo = (function (Module) {

    Module.extension = function () {
        // another method!
        console.log('extension method');
    };

    return Module;

})(Module || {});       // to prevent errors if Module is undefined

ModuleTwo.extension();