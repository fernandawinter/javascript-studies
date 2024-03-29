// Factory Functions
// So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly.Here’s where factory functions come in.A real world factory manufactures multiple copies of an item quickly and on a massive scale.A factory function is a function that returns an object and can be reused to make multiple object instances.Factory functions can also have parameters allowing us to customize the object that gets returned.

//     Let’s say we wanted to create an object to represent monsters in JavaScript.There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier.To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

// const monsterFactory = (name, age, energySource, catchPhrase) => {
//     return {
//         name: name,
//         age: age,
//         energySource: energySource,
//         scare() {
//             console.log(catchPhrase);
//         }
//     }
// };
// In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare().To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

// const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
// ghost.scare(); // 'BOO!'
// Now we have a ghost object as a result of calling monsterFactory() with the needed arguments.With monsterFactory in place, we don’t have to create an object literal every time we need a new monster.Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!




// Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!
// Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.
// Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

// Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.

// Let’s now check what tinCan can do! Call .beep() on tinCan.
// You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! Play around with tinCan to check the other properties!

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    };
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();