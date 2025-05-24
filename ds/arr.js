
// Array declaration using literal syntax
const myArr = [0, 1, 2, 3, 4, 5]  // Creates an array with elements 0 to 5
const myHeors = ["shaktiman", "naagraj"]  // Creates an array of strings (heroes)

// Array declaration using constructor
const myArr2 = new Array(1, 2, 3, 4)  // Creates an array [1, 2, 3, 4]

// console.log(myArr[1]);  // Accesses and prints the element at index 1 (which is 1)

// Array methods

// myArr.push(6)  // Adds 6 to the end of the array
// myArr.push(7)  // Adds 7 to the end of the array
// myArr.pop()    // Removes the last element from the array

// myArr.unshift(9)  // Adds 9 to the beginning of the array
// myArr.shift()     // Removes the first element from the array

// console.log(myArr.includes(9));  // Checks if 9 is present in the array (returns true/false)
// console.log(myArr.indexOf(3));   // Returns the index of element 3 in the array

// const newArr = myArr.join()  // Converts the array to a string, with elements separated by commas

// console.log(myArr);      // Prints the original array
// console.log(newArr);     // Prints the string version of the array

// slice vs splice

console.log("A ", myArr);  // Prints original array before slice/splice

const myn1 = myArr.slice(1, 3)  // Extracts elements from index 1 to 2 (not including 3), returns new array without modifying original

console.log(myn1);  // Prints the result of slice
console.log("B ", myArr);  // Original array remains unchanged after slice

const myn2 = myArr.splice(1, 3)  // Removes 3 elements starting from index 1, modifies the original array

console.log("C ", myArr);  // Prints the array after splice (elements removed)
console.log(myn2);         // Prints the removed elements as a new array
