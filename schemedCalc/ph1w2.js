//|________________________________________________|
//| schemaCalc is an object containing a schema,   |
//| operation objects and functions that add more  |
//| operation objects, operate those objects       |
//| and change the schema.                         |
//|________________________________________________|

var schemaCalc = {

  //an schema object used to validate future operation objects.
  schema: {
    name: {value: "name of operation"},
    numArgs: {value: 1},
    operation: {value: function(){console.log("I'm the default operation")}}
  },

  //operations array to store the operation objects.
  operations: [],

                    //**FUNCTIONS**
  //|______________________________________________________|
  //| addTo is a function that matches new objects against |
  //| the schema & add them to operations if they're valid,|
  //| returning a success/failure msg.                     |
  //|______________________________________________________|

  addTo: function(obj){
    var myObject = {};
    //the method 'addTo' uses schema objects to validate new objects:
    //it searches for properties inside the object passed,
    for (key in obj) {
    	var opProperty = obj[key];
      //if the property is found inside the schema
      if (key in this.schema){
        //and matches with a schema's property
        if (typeof(opProperty.value) === typeof(this.schema[key].value)) {
          //adds the property to the temporal object.
          myObject[key] = obj[key];
        } else {
          console.log("Value of".toUpperCase(), opProperty.value, "doesn't match.".toUpperCase());
          return obj;
        }
      } else {
          myObject = {};
          console.log("Property".toUpperCase, key, "isn't in schema".toUpperCase());
          return obj;
       }
    }//if everything went ok and property 'name'&'operation' are included
    if ('name' in obj && 'operation' in obj){
      //we add the new object to the collection of operations.
      this.operations.push(myObject);
      console.log("New object added to operations ".toUpperCase());
      return this.operations;
    } else {
      myObject = {};
      console.log("Property 'name' and 'operation' are required".toUpperCase());
      return obj;
    }
  },

  //|____________________________________________________|
  //| operate is a function that searches an operation   |
  //| passed as arg in operations array and operates the |
  //| function inside with the numbers passed as args.   |
  //|____________________________________________________|

  operate: function(op, a, b, c){
    //we search for all the op. objects inside the array
    for (x in this.operations){
      var loop = this.operations[x];
      //we search for a match between op and object names
      if (op === loop.name.value){
        return loop.operation.value(a, b, c);
      }
    }//if we don't find any, we say so and return undefined.
    console.log("Operation not found");
    return undefined;
  },

  //|_______________________________________________|
  //| changeSchema is a function that reset the     |
  //| schema with the object passed as an argument  |
  //|_______________________________________________|

    changeSchema: function(obj){
      this.schema = obj;
      console.log("The schema has been modified");
      return this.schema;
    }

};

//TEST SCRIPT:
example: {
    name: {value: "sum", does: "Add up to 3 numbers"},
    numArgs: {value: 3, does: "Give the numbers of args that operation takes"},
    operation: {value: function(a, b, c = 0){return a + b + c}}
  };
