//Must have:
//          2 types of objects: Operation (contains multiples) & the Calculator:
// 	Operation objects:
// 		Properties:
// 			Name: a string that describes what the operation does
// 			Args: the number of arguments this operation takes
// 		Methods:
// 			Operation: a function that does the math
// 				args: variable - up to you
// 				returns: the result of the math you made it do
// 				behavior: it executes the formula indicated in the 'name' property
// 	Dynamic calculator function:
// 		Arguments:
// 			op: An operation object
// 			a, b, c:  Numbers to be operated on. Each operation object will
//      use as many of them as it needs.
// 		Return values:
// 			A number:  The result of sending the arguments through op.operation().
// 		Behavior:
// 			DynCalc will pass (a), (a,b), or (a,b,c) into ‘op.operation’’
//      depending on the value of ‘op.args’ and return the value of the function call.
// -----------------------------------------------------------------------------------


//We first create our operations methods

var sum = {
  name: "Add 2 or 3 numbers", //We use 'name' & 'args' to describe our object later on
  args: "You can pass up to 3 arguments",
  operation: function(a, b, c = 0){ //Making c = 0 help us to make a 3 numbers sum even if the user just pass 2 arg.
    var result = a + b + c; // it could be done in just one line: return a + b + c;
    return result;
  } 
};

var sub = {
  name: "Subtract 2 numbers",
  args: "2 arguments",
  operation: function(a, b){
    var result = a - b;
    return result;
  }
};

var mul = {
  name: "Multiply up to 3 numbers",
  args: "Up to 3 arguments",
  operation: function(a, b, c = 1){ //Same that we did with sum, but now c = 1.
    var result = a * b * c;
    return result;
  }
};

var div = {
  name: "Divide 2 numbers",
  args: "2 arguments",
  operation: function(a, b){
    var result = a / b;
    return result;
  }
};
// let's makes this funnier
var ave = {
  name: "Calculate the average of up to 3 numbers",
  args: "Up to 3 arguments",
  operation: function(a, b, c = 0){
    if (c === 0){ return (a + b)/2 } // If 3rd arg is not passed, we can still calculate the average of 2 args.
    else { return (a + b +c)/3 }
  }
};

// Now, we create our Calculator. What do we know about it? Reading the instructions
// we know that it's a function and we can pass 4 args: op, a, b & c
var calc = function(op, a, b, c){
  return op.operation(a, b, c);        //We also know that it returns something
}
