var Module = (function () {

    var _privateMethod = function () {
        console.log('private method')
    };

    return {
        publicMethodOne: function () {
            console.log('public method one');
            // I can call `privateMethod()` you know...
            _privateMethod();

        },
        publicMethodTwo: function () {
            console.log('public method two');
        },
        publicMethodThree: function () {
            console.log('public method three');
        }
    };

})();

Module.publicMethodOne();
