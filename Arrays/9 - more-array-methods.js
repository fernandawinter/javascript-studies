// More Array Methods
// There are many more array methods than just .push() and .pop(). You can read about these array methods on the Docs entry for JavaScript Arrays.

// .pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. Be sure to check MDN to understand the behavior of the method you are using.

// Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.

// Below, we will explore some methods that we have not learned yet. We will use these methods to edit a grocery list. As you complete the steps, you can consult the Codecademy Docs to learn what each method does!




// Use the .shift() method to remove the first item from the array groceryList.
// Log the new groceryList to the console.
// Read about .shift() in Docs.

// Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
// After calling .unshift() on groceryList, log groceryList to the console.
// You may wish to delete the console.log() statement from the previous step.
// Read about .unshift() in Docs.

// You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.
// Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.
// Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.
// Read about .slice() in Docs.

// After calling .slice() on groceryList, log the grocery list to the console one more time.
// Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.

// Let’s find the index of a particular element in groceryList using .indexOf().
// Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
// Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.)
// Read about .indexOf() in Docs.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);