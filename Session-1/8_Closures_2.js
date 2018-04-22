
var n;             // we declare a variable on the outer scope beforehand
function f() {
  var b = 'b';
  n = function() { // and then, we assign to that variable
    return b;
  }
}

f();
console.log(n());
