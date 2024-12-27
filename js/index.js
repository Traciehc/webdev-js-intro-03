// Prevent us from attempting to use variables
// that are not declared
"use strict"

/*
console.log(10 + 10);   Output: 20
console.log(10 - 10);   Output: 0
console.log(10 = "10"); Output:  1010
WHY?  

The expression console.log(10 + "10"); 
outputs 1010 because of a process called type coercion in JavaScript. 

When you use the + operator with a number and a string, JavaScript converts

the number to a string and then concatenates (joins) them together.

Here's what happens:

The number 10 is converted to the string "10".

The two strings "10" and "10" are then concatenated, resulting in "1010".

console.log(6 - 8 * 2);           Output:  -10
console.log((6 - 8) * 2);         Output:   -4

WHY:

The expression console.log(6 - 8 * 2); evaluates to -10 because of the order of

 operations in mathematics, which JavaScript follows. This order is often

 remembered by the acronym PEMDAS (Parentheses, Exponents, Multiplication and Division

     (from left to right), Addition and Subtraction (from left to right)).

Here's how it breaks down:

Multiplication First: Calculate 8 * 2, which equals 16.

Subtraction Next: Subtract 16 from 6, which equals -10.

console.log(12/5);      Output:  2.4
console.log(12 % 5);    Output:  2  The remainder

console.log(10 == 10);      Output: true
console.log(10 == "10");    Output: true
WHY?  again type coercion

console.log(10 === "10");   Output:  false
WHY?

With the === operator, the comparison only returns true if both the value

and the type are the same. Therefore, 10 (number) is not strictly equal to "10" (string),

and the output will be false.

console.log(10 || 20);      Output:  10

WHY?

The || operator checks the first operand, which is 10.

Since 10 is a truthy value (anything other than 0, null, undefined, false,
    
NaN, or an empty string is truthy), the OR operator doesn't need to evaluate 

the second operand (20).Therefore, console.log(10 || 20); logs 10 because it's the first truthy 

value.

console.log(10 && 20);      Output:  20

WHY?  

The expression console.log(10 && 20); outputs 20 because of how the logical AND (&&) operator works

in JavaScript. The logical AND operator evaluates both operands and returns the second operand if 

both are truthy. If the first operand is falsy, it returns the first operand immediately.

The && operator first evaluates 10, which is a truthy value.

Since 10 is truthy, it then evaluates the second operand, 20.

Because both 10 and 20 are truthy, the AND operator returns the second operand, which is 20.

So, console.log(10 && 20); logs 20 because both values are truthy, and it returns the second operand.

console.log(1 && 2);    Output:  2

This is different that your example? */


