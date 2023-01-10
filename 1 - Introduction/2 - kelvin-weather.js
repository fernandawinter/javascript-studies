// The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
// The value saved to kelvin will stay constant. Choose the variable type with this in mind.

// Write a comment above that explains this line of code.

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

// Write a comment above that explains this line of code.

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
// Fahrenheit = Celsius * (9/5) + 32
// In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.

// Write a comment above that explains this line of code.

// When you convert from Celsius to Fahrenheit, you often get a decimal number.
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

// Write a comment above that explains this line of code.

// Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
// The temperature is TEMPERATURE degrees Fahrenheit.
// Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.

// Run your program to see your results!
// If you want to check your work, open the hint.

// By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.
// What’s 0 Kelvin in Fahrenheit?


// kelvin is constant, so I should use the const type.
const kelvin = 293;
//celsius is constant too
const celsius = kelvin - 273;
// fahrenheit we use let, because celsius may change it's value
let fahrenheit = celsius * (9 / 5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);