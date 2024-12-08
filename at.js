console.log('-------what at() method does to an array----------')

//declare variable
const arr1 = [1, 5, 8, 9, 10];

let index = 2;

// at() is an array method that takes an int value as an arguement () and returns the item at that index
// when at() arguement is a negative int it will count back from the last item in the array
console.log(`An index of ${index} return ${arr1.at(index)}`)
// expected Output: An index of 2 returns 8

// change value of variable without creating a new one
index = -2

console.log(`An index of ${index} returns ${arr1.at(index)}`);
// Expected output: an index of -2 returns 9


console.log('-------some use cases returning last value in array---------')
//some use cases are returning the last value in an array
// declare an array
const garage = ['Silverado', 'F150', 'GMC']

// a function that return last item in a array
const returnLast = (arr) => {
    return arr.at(-1); // when at() is a negative number it will count back from the last item
}

// get last item in the array car
const item1 = returnLast(garage);
console.log(item1); // 'GMC'

// add an item to our 'garage' array
garage.push('Mini Cooper');
const item2 = returnLast(garage);
console.log(item2);


//comparing methods
// diferent ways to select the second to last item
// all of them work but the at() method is simpler

// our array with items
console.log('------comparing methods--------')
const colors = ['red', 'green', 'blue']

// using length property
const lengthWay = colors[colors.length - 2]
console.log(lengthWay); // 'green

// using the slice() method
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// using at() method
const atWay = colors.at(-2);
console.log(atWay); // 'green'