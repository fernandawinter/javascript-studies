// Arrow Functions and this
// We saw in the previous exercise that for a method, the calling object is the object the method belongs to.If we use the this keyword in a method then the value of this is the calling object.However, it becomes a bit more complicated when we start using arrow functions for methods.Take a look at the example below:

// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//         console.log('baaa');
//     },
//     diet: () => {
//         console.log(this.dietType);
//     }
// };

// goat.diet(); // Prints undefined
// In the comment, you can see that goat.diet() would log undefined.So what happened ? Notice that the.diet() method is defined using an arrow function.

// Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

// To read more about either arrow functions or the global object check out the MDN documentation of the global object and arrow functions.

// The key takeaway from the example above is to avoid using arrow functions when using this in a method!




// Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

// Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

// After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.

const robot = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();
