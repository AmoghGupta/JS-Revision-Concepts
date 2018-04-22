var printer = (function () {

    var printerInstance, printerState=false;

    function create() {

        function print() {
            // underlying printer mechanics
            console.log('printing...')
        }

        function turnOn() {
            // warm up
            // check for paper
            printerState = true;
        }

        function isOn() {
            // checks whether printer is on or off
            return printerState;
        }

        return {
            // public + private states and behaviors
            print: print,
            turnOn: turnOn,
            isOn: isOn
        };
    }

    return {
        getInstance: function () {
            if (!printerInstance) {
                printerInstance = create();
            }
            return printerInstance;
        }
    };

})();

var printer1 = printer.getInstance();
var printer2 = printer.getInstance();
console.log(printer1 === printer2)

console.log('printer1 state - '+printer1.isOn())
console.log('printer2 state - '+printer2.isOn())

console.log('printer1 turned on')
printer1.turnOn()

console.log('printer1 state - '+printer1.isOn())
console.log('printer2 state - '+printer2.isOn())