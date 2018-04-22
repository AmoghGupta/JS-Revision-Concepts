var n;
function f(arg) {
  n = function() {
    return arg;
  }
  arg++;
}

f(123);

console.log(n());