function f() {
    var result = [];                // we set up an array that will contain our functions
  
    for (var i = 0; i < 3 ; i++) {  // we loop three times
      result[i] = function() {      // each time we add a function to the array
        return i;                   // each function returns the sequence number
      }
    }
    return result;
  }
  
  var functions = f();
  
  console.log(functions[0]());
  
  console.log(functions[1]());
  
  console.log(functions[2]());