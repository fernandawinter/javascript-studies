// Looping Through Objects
// Loops are programming tools that repeat a block of code until a condition is met.We learned how to iterate through arrays using their numerical indexing, but the key - value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the for...in syntax.

//     for...in will execute a given block of code for each property in an object.

// let spaceship = {
//         crew: {
//             captain: {
//                 name: 'Lily',
//                 degree: 'Computer Engineering',
//                 cheerTeam() { console.log('You got this!') }
//             },
//             'chief officer': {
//                 name: 'Dan',
//                 degree: 'Aerospace Engineering',
//                 agree() { console.log('I agree, captain!') }
//             },
//             medic: {
//                 name: 'Clementine',
//                 degree: 'Physics',
//                 announce() { console.log(`Jets on!`) }
//             },
//             translator: {
//                 name: 'Shauna',
//                 degree: 'Conservation Science',
//                 powerFuel() { console.log('The tank is full!') }
//             }
//         }
//     };

// // for...in
// for (let crewMember in spaceship.crew) {
//     console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }
// Our for...in will iterate through each element of the spaceship.crew object.In each iteration, the variable crewMember is set to one of spaceship.crew‘s keys, enabling us to log a list of crew members’ role and name.