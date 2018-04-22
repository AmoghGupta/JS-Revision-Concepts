// But in this example, the variable assignment overrides the function declaration
var myName = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.

function myName() {
    console.log("Rich");
}

console.log(typeof myName); // string
