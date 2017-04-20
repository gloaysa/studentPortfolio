// Your project will contain these items:
// 	OPERATION:   objects.  as many as you like
// 		PROPERTIES:
// 			NAME: a string that describes what the operation does
// 			NUMARGS: the number of arguments this operation takes
// 		METHODS:
// 			OPERATION: a function that does the math
// 	SCHEME:   object
// 		PROPERTIES:
// 			NAME:  object
// 				PROPERTIES:
// 					TYPE: a string indicating the type of name
// 					FALLBACK: a value to be used as 'name' if an operation comes in without one
// 			NUMARGS:  object
// 				PROPERTIES:
// 					TYPE:  a string indicating the type of 'args'
// 					FALLBACK:  an value to fall back on if there is no 'args'
// 			OPERATION:  object
// 				PROPERTIES:
// 					TYPE: a string indicating the type of 'operation'
// 					FALLBACK:  a default value for 'operation' if it's not included
// ---------------------------------------------------------------------------

// 	SCHEME: object {NAME {type, fallback}, NUMARGS{type, fallback}, OPERATION{type, fallback}}
var example = {
  name: {
    type: "string",
    fallback: "I'm the default name"
  },
  numArgs: {
    type: "number",
    fallback: 1
  },
  operation: {
    type: "function",
    fallback: function(){console.log("I'm the default operation")}
  }
}

//---- we create an empty object to use later on

var newSchema = {}

//---- Now, our Schema validation function

// Schema validating function:
// 		Arguments:
// 			op: an operation object
// 			schema:  the schema it must match
// 		Return values:
// 			array: containing -
// 				a string: tells if the match was a success or not.
// 					        if not it tells what was wrong with the op
// 				an op object: it returns the op object passed in
// 					            if defaults were needed, it contains those
// 		Behavior:
// 			schematizer will take an object and a schema.  it will compare
//      the object to the expectations of the schema, and return the object
//      with a success/failure message.
// 			if the object passes but is incomplete, it will be filled with default
//      values. if it fails, it is returned whole
//---------------------------------------------------------------------------

function validation(schema, op){
  for (key in op) {
    if (key in schema) { //Is the key passed in our model?
      if (typeof(op[key].type) === schema[key].type) { //Is it passed correctly?
        newSchema[key] = op[key]; //we add the new Object to our object
        return op
      } else {
        return "nope"
      }
    } else {
      return "your key wasn't in the schema."
    }
  }
}


// TEST SCRIPTS:
//---------------
// if I pass:
// validation(example, {hola: {type: "esto funciona!!!", value: "mimimi"}, numArgs: {type: "string", value: 58}, operation: {type: "function", operation: function(a, b){a+b}}})
// it returns: "your key wasn't in the schema."

// if I pass:
// validation(example, {name: {type: "esta mierda funciona!!!", value: "sum"}, numArgs: {type: "string", value: 58}, operation: {type: "function", operation: function(a, b){a+b}}})
// it's valid, even when numArgs.type is wrong
