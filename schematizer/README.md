# Schematizer

The schematizer is a function that compares two objects: an schema and
an object passed for the user. For example:

`schematizer(sum, {name: {type: "function", value: function(a, b){a + b}}})`

It will compare the object to the expectations of the schema, and return the object with a success/failure message. Conditions:
1. If the object passes but is incomplete, it will be filled with default values.
2. If it fails, it is returned whole.

The user can create as many Objects as they like and then call them as the first
argument of the schematizer function. To use the one provide as an example, just
type `schematizer(example, andYourObject)`

The user can access to their new Object calling `myObject` if the Object matched
the schema.
