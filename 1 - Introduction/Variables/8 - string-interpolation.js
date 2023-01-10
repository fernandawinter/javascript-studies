// In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

// const myPet = 'armadillo';
// console.log(`I own a pet ${myPet}.`);
// // Output: I own a pet armadillo.
// Notice that:

// a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
// Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
// When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
// One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don’t have to worry about escaping double quotes or single quotes.



// Create a variable called myName and assign it your name.

// Create a variable called myCity and assign it your favorite city’s name.

// Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:

// My name is NAME. My favorite city is CITY.
// Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.


const myName = 'Fernanda'
const myCity = 'Porto Alegre'
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
