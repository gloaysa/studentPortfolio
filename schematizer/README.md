# Schematizer

This project contains these items:

1. OPERATION: Objects. As many as you like.
 * PROPERTIES:
    NAME: a string that describes what the operation does
    NUMARGS: the number of arguments this operation takes
 * METHODS:
		OPERATION: a function that does the math

2. SCHEME: Another object that contains:
    1. NAME: object
     * PROPERTIES:
      TYPE: a string indicating the type of name
      FALLBACK: a value to be used as 'name' if an operation comes in without one
    2. NUMARGS:  object
     * PROPERTIES:
      TYPE: a string indicating the type of 'args'
      FALLBACK: an value to fall back on if there is no 'args'
    3. OPERATION: object
     * PROPERTIES:
      TYPE: a string indicating the type of 'operation'
      FALLBACK:  a default value for 'operation' if it's not included

Example:
```javascript

sum = {name: {type: "string", value: "I add two numbers"}, numArgs: {type: "number", value: 2}, operation: {type: "function", operation: function(a, b){a+b}}}

```
---
The schematizer is a function that compares two objects: an schema and
an object passed for the user. For example, being *sum* the schema:
```javascript
schematizer(sum, {name: {type: "string", value: "sub"}, numArgs: {type: "number", value: 2}, operation: {type: "function", value: function(a, b){a - b}}})
```

It will compare the object to the expectations of the schema, and return the object with a success/failure message. Conditions:
1. If the object passes but is incomplete, it will be filled with default values.
2. If it fails, it is returned whole.

## CHALLENGES

1. Have required and non-required fields.
2. Remember if an object was valid or not

---

## How to use it

 The user can create as many Objects as they like and then call them as the first
argument of the schematizer function. To use the one provide as an example, just
type `schematizer(example, andYourObject)`

 The user can access to their new Object calling `myObject` if the Object matched
the schema.

 The user can access to their collection of previous passed Objects calling `myCollection`.

 Schematizer return the new Object, so the user can store the result of the function in their own variable.
