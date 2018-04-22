function Car(model, colour, year) {
    this.model = model;
    this.colour = colour;
    this.year = year;

    this.toString = function () {
        return "The car " + this.model + " of year " + this.year + " is of colour " + this.colour
    }

    // prototype
    // this.prototype.toString = function () {
    //     return "The car " + this.model + " of year " + this.year + " is of colour " + this.colour
    // }
}

var ford = new Car("Ford", 'red', 1964)
var rr = new Car("Rolls Royce", 'silver', 1978)

console.log(ford.toString());
console.log(rr.toString());