// Prompt:
// 	You're a lazy teacher and want to make sure students are writing good
//  operations
//
// Your project will contain these items:
// 	Schema object:
// 		Properties:
// 			Name: a string that describes what the operation does
// 			Args: the number of arguments this operation takes
// 		Methods:
// 			Operation: a function that does the math
// 	Schema validating function:
// 		Arguments:
// 			op: an operation object
// 			schema:  the schema it must match
// 		Return values:
// 			array: containing -
// 				a string: tells if the match was a success or not.
// 					if not it tells what was wrong with the op
// 				an op object: it returns the op object passed in
// 					if defaults were needed it contains those
// 		Behavior:
// 			schematizer will take an object and a schema.  it will compare the
//      object to the expectations of the schema, and return the object with
//      a success/failure message.
// 			if the object passes but is incomplete, it will be filled with
//      default values. if it fails, it is returned whole
// ---------------------------------------------------------------------------

//---- we start with our new Object example with some default values on it
// note that we need every key of the object being an object itself, so we can
// store default values on them

var example = {
  name: {
    whatIs: "string", //what type of data is this?
    value: "sum" //what is going to be it default opeation
  },
  arg: {
    whatIs: 0,
    value: [1, 1]
  },
  operation: {
    whatIs: "function",
    value: function(a, b) {return a + b;}
  }
}

//---- we create an empty object to use later on

var newSchema = {}

//---- Now, our Schema validation function
// where op is going to be an object a match a function
function validation(op) { // waiting to add arg 'match' until 'op' works
  Object.keys(op).forEach(function(key) {
      if (typeof(key) === example[key].whatIs) {
        newSchema[key] = op[key]
      }
  });
}

// function test(op){ // this function adds an empty key called 'key'. WHY?
//   for (key in op) {
//     if (typeof(key) === example[key].whatIs) {
//       newSchema[key] = op[key]
//     }
//   }
// }


// The code below works, but it isn't smart :(


// var newSchema = {
//   name: "description",
//   arg: 0,
//   operation: function(){
//     return "this is the default function!";
//   }
// }
//
// //---- now the function that validates any schema passed
// function confirm(name, arg, op){
//   // we store the values to use them later on
//   var array = [name, arg, op]
//   // we check if the arguments passed are correct
//   // we could use typeof(name) === "string" but it this way if newSchema changes, it's still valid
//   if (typeof(name) === typeof(example.name) && typeof(arg) === typeof(example.args[is]) && typeof(op) === typeof(example.operation.is)){
//     console.log("The operation " + array + " is correct"),
//     // we print to console the result of the user function
//     console.log("The result of you function is " + op() )
//   }
// // if they aren't correct, we pass the error
//   else {
//     if (typeof(name)!== typeof(example.name)) { return "Your name isn't a string"}
//     else if (typeof(arg) !== typeof(example.args[is])) { return arg + " is not a number"}
//     else { return op + " is not a function"};
//   }
// }
