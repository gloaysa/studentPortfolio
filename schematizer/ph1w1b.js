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
