# DynamiCalculator

This is a simple Dynamic Calculator with 5 simple functions:
 * Sum up to 3 numbers: _sum()_
 * Subtract 2 numbers: _sub()_
 * Multiply up to 3 numbers: _mul()_
 * Divide 2 numbers: _div()_
 * Calculate the average of up to 3 numbers: _ave()_

They all have the properties _name_ and _args_ to access easily to this information (e.g. _sum.name_).

Each of them can be called within the main function _calc()_, that supports up to
4 arguments: the method that is being call and the numbers that are being passed (e.g. _calc(sum, 1, 2)_ will return the sum of 1 + 2).
