// In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own objects, but for now these “built-in” objects are full of useful functionality.

// For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

// The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

// console.log(Math.random()); // Prints a random number between 0 and 1
// In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 (inclusive) and 1 (exclusive).

// To generate a random number between 0 and 50, we could multiply this result by 50, like so:

// Math.random() * 50;
// The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().

// Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

// Math.floor(Math.random() * 50);
// In this case:

// Math.random() generates a random number between 0 and 1.
// We then multiply that number by 50, so now we have a number between 0 and 50.
// Then, Math.floor() rounds the number down to the nearest whole number.
// If you wanted to see the number printed to the terminal, you would still need to use a console.log() statement:

// console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50



// Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.

// Now, use Math.floor() to make the output a whole number.
// Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().

// Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.
// Use this method with the number 43.8. Log the answer to the console.

// Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.
// Put the number 2017 in the parentheses of the method and use console.log() to print the result.


console.log(Math.floor(Math.random() * 100))

console.log(Math.ceil(43.8))

console.log(Number.isInteger(2017))