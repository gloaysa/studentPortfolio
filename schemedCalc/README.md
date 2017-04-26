# schemaCalc

The idea of this project is to create an object capable of create and store new objects based in a schema, to operate with them later on. If needed, the schema can be modified.

This project contains these items:

**schemaCalc**: Is the main object, containing all the objects, arrays and functions within.

+ SCHEMA: An object used to valide future operation objects. Its key/value pairs are:  
    * NAME: Object containing the name and description of the operation. It's required.  
      PROPERTIES:  - VALUE: A string indicating the name of the operation.  

    * NUMARGS: Object containing the numbers of arguments that the operation takes. It's optional.
       PROPERTIES:  - VALUE: A number.  

    * OPERATION: Object containing the function to be operated. It's required.  
       PROPERTIES: - VALUE: A full operational function.

> NOTE for the user changing the schema: the objects 'name', 'numArgs' and 'operation' accept more key/value pairs, but the 'value => default' ones are mandatory.

+ OPERATIONS: It's an array where the new succesfully created object is stored.

+ ADDTO: Function that matches the object passed as an argument with the schema. If the object success, addTo return the operations array along with a message to the user. If it fails, return the object passed and a message letting the user know why it failed.  
Example:   

```
schema.Calc.addTo({
    name: {value: "sum", does: "Add up to 3 numbers"},
    numArgs: {value: 3, does: "Give the numbers of args that operation takes"},
    operation: {value: function(a, b, c = 0){return a + b + c}}
  })
```

> NOTE: the object passed can contain more key/value pairs inside each property than the schema (a description, for example), but a valid 'value' key is required.

+ OPERATE: Function that accepts 4 arguments (a string with the name of the operation to be operated a three numbers) and searches for an operation passed as argument in the operations array. If find it, executes the function with the arguments passed along and returns the result. If doesn't find it, prompt the user to add the new function and operates the numbers passed before.  
Example:

```
schemaCalc.operate("sum", 1, 2) // return 3
```

+ CHANGESCHEMA: Function that reset the schema adding the object passed as argument.

---



## How to use it

 To add a new operation object, just type `schemaCalc.addTo({your object}`. It has to match with the schema, which is `{name: {value: "name of operation"}, numArgs: {value: 1}, operation: {value: function(){}}`.

 **Note**: 'name' and 'operation' are mandatories when adding new objects.

 The user can create as many operation objects as they like. They'll be stored at the operations array. If the user wants to check all their operations, just type `schemaCalc.operations`.

 To operate the objects stored in operations[] the user can call the operate function, passing it the name of the operation and the number to execute. This function accepts up to 4 arguments. To use it, type `schemaCalc.operate("operation", number1, number2, number3)`. If the operation passed is not found, it will prompt to the user to add the new operation. The user will only have to add the objects without the brackets: `name: {value: "added for user"}, function: {value: function(){}}`. The new object will be operate with the numbers passed on the previous attempt.
 To reset the schema the user can call the function `schemaCalc.changeSchema({new schema})`. It isn't strict at all, so **the user have to make sure that their new schema contains the 'value' key** within their objects to let the other functions work.
 ---

### Resources

[.this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) | [.hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) | [The 'arguments' object](https://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)

### Hints:
You can reuse some code of the previous exercises, just modify them a bit :)
