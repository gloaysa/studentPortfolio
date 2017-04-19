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

var newSchema = {
  name: "description",
  arg: 0,
  operation: function(){
    return "this is the default function!";
  }
}

//---- now the function that validates any schema passed

var validation = function(name, arg, op){
  // we store the values to use them later on
  var array = [name, arg, op]
  // we check if the arguments passed are correct
  if (typeof(name) === typeof(newSchema.name) && typeof(arg) === typeof(newSchema.args) && typeof(op) === typeof(newSchema.operation)){
    console.log("The operation " + array + " is correct"),
    // create the object op with the function passed
    console.log("The result of your function is " op() )
  }
// if they aren't correct, we pass the error
  else {
    if (typeof(name)!== typeof(newSchema.name)) { return "Your name isn't a string"}
    else if (typeof(arg) !== typeof(newSchema.args)) { return arg + " is not a number"}
    else { return op + " is not a function"};
  }
}
