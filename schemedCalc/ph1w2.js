// SCHEMADCALC:  object
//   PROPERTIES:
//     OPERATIONS: an array or object that contains operation objects
//     SCHEMA: a schema object used for validating new operation objects
//   METHODS:
//     ADDTOO:
//       ARGS: an operation object
//       RETURNS: a success or failure message
//       BEHAVIOR: uses 'schema' prop to validate new opObjects before adding them to 'operations' if they are valid.
//     OPERATE:
//       ARGS: a string indicating the operation to be used, the numbers to be operated on
//       RETURNS: an array containing a success/failure message and the result of the operation.  if the operation was a failure, return 'undefined' as the result
//       BEHAVIOR: searches for an operation with the name passed in.
//         if it exists, execute the operation on the args.
//         if not, say so
//     CHANGESCHEMA:
//       ARGS: a schema object
//       RETURNS: a success/failure message
//       BEHAVIOR: resets 'this.schema' to the argument.  I can't imagine why this would fail.
// ____________________________________________________

// schemaCalc is an object (we're reusing the example object from ph1w1b)
var schemaCalc = {
  //   it contains an object with operation objects in it
  sum: {
    name: {type: "string", fallback: "sum up to 3 numbers"},
    numArgs: {type: "number", fallback: [1, 2]},
    operation: {type: "function", fallback: function(a, b, c = 0){
      var result = a + b + c;
      return result;
    }
  }},

  sub: {
    name: {type: "string", fallback: "subtract"},
    numArgs: {type: "number", fallback: [2, 1]},
    operation: {type: "function", fallback: function(a, b){
      var result = a - b;
      return result;
    }
  }},

  mul: {
    name: {type: "string", fallback: "Multiply up to 3 numbers"},
    numArgs: {type: "number", fallback: [2, 2]},
    operation: {type: "function", fallback: function(a, b, c = 1){
      var result = a * b * c;
      return result;
    }
  }},

  div: {
    name: {type: "string", fallback: "Divide 2 numbers"},
    numArgs: {type: "number", fallback: [4, 2]},
    operation: {type: "function", fallback: function(a, b){
      var result = a / b;
      return result;
    }
  }},

  ave: {
    name: {type: "string", fallback: "Calculate the average of up to 3 numbers"},
    numArgs: {type: "number", fallback: [2, 3]},
    operation: {type: "function", fallback: function(a, b, c = 0){
      if (c === 0){ return (a + b)/2 }
    }
  }},
  //an schema objects used to validate future operation objects
  example: {
    name: {type: "string", fallback: "I'm the default name"},
    numArgs: {type: "number", fallback: 1},
    operation: {type: "function", fallback: function(){
        console.log("I'm the default operation")
      }
    }},

    //a method 'operate' that searches for an operation with the name passed in
    //contains a string indicating operation to be used and numbers to be operated on
    operate: function(op, a, b, c){
      //if success, returns an array containing success msg and result of operation
      if (op in this) {
        operation = this[op];
        console.log("The operation", op, "was a success!")
        return operation.operation.fallback(a, b, c);
      }//else, msg telling operation was a failure, return undefined
      else {
        console.log("Operation", op,  "hasn't been found :(");
        return undefined
      }

    }
}

//We'll need an 'operation' array to store the valid objects passed to 'addTo()'
operation = []

//the method 'addTo' uses schema objects to validate new objects
function schematizer(schema, op){
  for (key in op) {
    console.log("Key is ", key, " and op[key].type is ", op[key].type);
  	var llave = op[key];
    if (key in schema){
      console.log(key, "is in the ", schema)
      if (llave.type === schema[key].type) {
        myObject[key] = op[key];
        addToCollection = true;
      } else {
        myObject[key] = schema[key]
        console.log(llave.type, "isn't in the schema. Default value added".toUpperCase());
      }
    } else {
        addToCollection = false;
        myObject = {};
        console.log(key, " isn't in schema".toUpperCase());
        return op;
     }
  }
  if ('name' in op){ //Challenge: property required ('name').
    if (addToCollection === true){ //Challenge: remember is an object was valid.
      myCollection.push(myObject); // We made it!!! :)
      console.log("New object added to myCollection ".toUpperCase(), myCollection);
      return myObject
    } else { // if it wasn't valid, just return the Object passed.
      return op
    }
  } // If name doesn't exist, it returns the Object passed
    myObject = {};
    console.log("Property 'name' is required".toUpperCase());
    return op
}
//     it returns a success or failure message
//

//a method 'changeSchema' that resets this.schema to the argument
//  returns success/failure message
