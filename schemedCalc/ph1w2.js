//| schemaCalc is an object containing a schema,   |
//| operation objects and functions that add more  |
//| operation objects, operate those objects       |
//| and change them.                               |
//|________________________________________________|

var schemaCalc = {
  //an schema object used to validate future operation objects
  schema: {
    name: {type: "string", fallback: "I'm the default name"},
    numArgs: {type: "number", fallback: 1},
    operation: {type: "function", fallback: function(){console.log("I'm the default operation")}}
  },
  //operation array to store the operations
  operation: [],

//**FUNCTIONS**

//| addTo is a function that match new objects against   |
//| the schema & add them to operations if they're valid |
//| returning a success/failure msg.                     |
//|______________________________________________________|

  addTo: function(op){
    var myObject = {};
    //the method 'addTo' uses schema objects to validate new objects
    for (key in op) {
    	var llave = op[key];
      if (key in this.schema){
        if (llave.type === this.schema[key].type) {
          myObject[key] = op[key];
          addToCollection = true;
        } else {
          myObject[key] = this.schema[key]
          console.log(llave.type, "isn't in the schema. Default value added".toUpperCase());
        }
      } else {
          addToCollection = false;
          myObject = {};
          console.log(key, " isn't in schema".toUpperCase());
          return op;
       }
    }
    if ('name' in op && 'operation' in op){
      if (addToCollection === true){
        this.operation.push(myObject);
        console.log("New object added to operations ".toUpperCase(), this.operation);
        return myObject
      } else {
        return op
      }
    }
      myObject = {};
      console.log("Property 'name' and 'operation' are required".toUpperCase());
      return op
  },

  //a method 'operate' that searches for an operation with the name passed in
  //contains a string indicating operation to be used and numbers to be operated on

}
