var name = "Richard";
function showName() {
	var name = "Jack"; // local variable; only accessible in this showName function​
	console.log (name); // Jack​
}
console.log (name); // Richard: the global variable


var age =50;

function showAge() {
	var age = 90;
	console.log(age);
}

showAge(); // 90​

console.log(age);
*/