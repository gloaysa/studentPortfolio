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

//|schemaCalc is an object containing a schema,         |
//|operation objects and functions that add more        |
//|operation objects, operate those objects             |
//|and change them.                                     |
//_______________________________________________________

var schemaCalc = {
  //an schema object used to validate future operation objects
    name: {type: "string", fallback: "schema"},
    numArgs: {type: "number", fallback: 1},
    operation: {type: "function", fallback: function(){
        console.log("I'm the default operation")
    }
  }
};
  //operation array to store the operations
var operation = [];

    //**FUNCTIONS**

//|addTo is a function that match new objects against   |
//|the schema & add them to operations if they're valid |
//|returning a success/failure msg.                     |
//_______________________________________________________

function addTo(newObj){
  //the method 'addTo' uses schema objects to validate new objects
  for (key in newObj){
    if (key in schemaCalc){
      if (key.type === schemaCalc.key)
      console.log("Your Object has been added to operations");
      operation.push(newObj);
      return operation
    }else {
      console.log("Your object didn't match the schema");
      return undefined
    }
  }
};

    //a method 'operate' that searches for an operation with the name passed in
    //contains a string indicating operation to be used and numbers to be operated on
function operate(op, a, b, c){
  //if success, returns an array containing success msg and result of operation
  for (i = 0; i < operation.length; i++ in operation){
    console.log("i is", i);
    for (i[key] in op){
      console.log("key is", key);
      if ('operation' in operation[i]) {
        console.log("fallback is", operation.fallback);
        if (fallback(a, b, c != NaN)){
          console.log("The operation", op, "was a success!")
          return fallback(a, b, c);
        }else { console.log("Please, pass numbers"); return undefined
        }
      }//else, msg telling operation was a failure, return undefined
      else {
        console.log("Operation", op,  "hasn't been found :(");
        return undefined
      }
    }
  }
};
    //test scripts:
    //schemaCalc.operate("sum", 2, 3, 1); -- 6
    //schemaCalc.operate("sum"); -- undefined
    //schemaCalc.operate("assets", 2, 1); -- undefined



// function schematizer(schema, op){
//   for (key in op) {
//     console.log("Key is ", key, " and op[key].type is ", op[key].type);
//   	var llave = op[key];
//     if (key in schema){
//       console.log(key, "is in the ", schema)
//       if (llave.type === schema[key].type) {
//         myObject[key] = op[key];
//         addToCollection = true;
//       } else {
//         myObject[key] = schema[key]
//         console.log(llave.type, "isn't in the schema. Default value added".toUpperCase());
//       }
//     } else {
//         addToCollection = false;
//         myObject = {};
//         console.log(key, " isn't in schema".toUpperCase());
//         return op;
//      }
//   }
//   if ('name' in op){ //Challenge: property required ('name').
//     if (addToCollection === true){ //Challenge: remember is an object was valid.
//       myCollection.push(myObject); // We made it!!! :)
//       console.log("New object added to myCollection ".toUpperCase(), myCollection);
//       return myObject
//     } else { // if it wasn't valid, just return the Object passed.
//       return op
//     }
//   } // If name doesn't exist, it returns the Object passed
//     myObject = {};
//     console.log("Property 'name' is required".toUpperCase());
//     return op
// }
//     it returns a success or failure message
//

//a method 'changeSchema' that resets this.schema to the argument
//  returns success/failure message
