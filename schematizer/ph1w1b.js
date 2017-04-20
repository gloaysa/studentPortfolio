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

var myObject = {}

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
// 			schematizer will take an object and a schema. It will compare
//      the object to the expectations of the schema, and return the object
//      with a success/failure message.
// 			1. If the object passes but is incomplete, it will be filled
//         with default values.
//      2. If it fails, it is returned whole.
//---------------------------------------------------------------------------

function schematizer(schema, op){
  Object.keys(op).forEach(function(key) {
    console.log("Key is ", key, " and op[key].type is ", op[key].type); //Discovered that is not the same
  	var llave = op[key]   ;                 // console.log("text " + Object) and
    console.log("created ", llave.type);   // console.log("text ", Object)
    console.log(op[key]);
    if (key in schema){ //If the key is in the example, we continue
      console.log(key, "is in the ", schema)
      if (llave.type === schema[key].type) { //Is it passed correctly?
        myObject[key] = op[key]; //we add the new Object to our object
      } else { // If not, we give the default value back
        myObject[key] = schema[key]
        console.log(llave.type, "isn't in the schema. Default value added");
      }
    } else { //If key isn't in the example, we stop
       myObject = {}; // empty the object
       console.log(key, " isn't in schema");
       throw op; // stop the forEach loop
     }
  });
}

// TEST SCRIPTS:
//---------------
// test(example, {name: {type: "number", value: "funcionó!!!!"}, numArgs: {type: "number", value: 58}, operation: {type: "function", operation: function(a, b){a+b}}})
// add the default value for propertie name.

// test(example, {name: {type: "string", value: "I'm sure I'm a string"}, numArgs: {type: "number", value: 58}, operation: {type: "function", operation: function(a, b){a+b}}})
// just add the new values to newString{}.

//test(example, {name: {something: "string", value: "I'm sure I'm a string"}, numArgs: {type: "number", value: 58}, operation: {type: "function", operation: function(a, b){a+b}}})
// prompt an error to the user and return the whole Object passed.

// CHALLANGES
//---------------
// have required and non-required fields.
// remeber if an object was valid or not - maybe by storing them in
// different locations, or adding a property, or anything else you can think of
