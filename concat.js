// concat() is an array method that merges 2 or more arrays
// does not mutate the array instead returns a new array

console.log('------what concat does-------')
const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['e', 'f', 'g', 'h'];
const arr3 = ['i', 'j', 'k', 'l'];
const arr4 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr4); // output: ["a", "b", "c", "d", "e", "f", 'g', 'h']
//does not change arr1
console.log(arr1);

console.log('-----concat() multiple different data types together------')
const arr5 = arr1.concat(arr2, arr3);
// you can concat multiple arrays
console.log(arr5);

//you can concat different values
let obj = {
    bruh: 'man',
    dude: 'guy'
}
const alphaNumeric = arr1.concat(1, [2,3] , obj)

console.log(alphaNumeric);