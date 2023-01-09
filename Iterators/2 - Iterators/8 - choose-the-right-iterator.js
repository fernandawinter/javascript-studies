// Choose the Right Iterator
// There are many iteration methods you can choose. In addition to learning the correct syntax for the use of iteration methods, it is also important to learn how to choose the correct method for different scenarios. The exercises below will give you the opportunity to do just that!

// You’ll see errors pop up in the terminal as you work through this exercise, but by the end the errors will be gone!




// Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

// In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.

// In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.

// In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

// In the fifth method call, replace the word method with a method that will return a boolean value.

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
// OR nums.some(num => num < 0);