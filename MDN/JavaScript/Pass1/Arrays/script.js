//Arrays

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

//Finding the length of an array

console.log(shopping.length);

//Finding the indexOf an array

const birds = ["Parrot", "Falcon", "Owl"];

console.log(birds.indexOf("Owl"));

//Add an item to an array

birds.push("peacock");
console.log(birds);

console.log(birds.length);

//Removing an item from the array

birds.pop();
console.log(birds);

//Add item at the beginning

birds.unshift("crow");
console.log(birds);

//Remove an Item from the front

birds.shift();
console.log(birds);

//if you know the index of an item, remove an item using splice() method

const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}

if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities);

//Accessing Every item

//by using for

const birds_ = ["Parrot", "Falcon", "Owl"];

for (const bird of birds_) {
  console.log(bird);
}

//by using map

function double(num) {
  return 2 * num;
}

const numbers = [5, 2, 7, 6];

const doubled = numbers.map(double);
console.log(doubled);

//using filter

function isLong(city) {
  return city.length > 8;
}
const Cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = Cities.filter(isLong);
console.log(longer);

//Converting an array to string

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

console.log(data.split(","));

//to string

const dogName = ["Rocket", "Flash", "Bella", "Slugger"];

console.log(dogName.toString());

//Return the item of that index==> at()

const array = [5, 12, 8, 130, 44];
idx = 2;
console.log(`An index of ${idx} returns ${array.at(idx)}`);
console.log(array.at(2));

//Array.concat()

const arry1 = ["a", "b", "c"];
const array2 = ["e", "g", "7"];

console.log(arry1.concat(array2));

//Array.copyWithin()=>shallow copies the parys of an array to another location

const arr1 = ["a", "b", "c", "d", "e"];
console.log(arr1.copyWithin(0, 1, 3));

//example

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

//Array.entries => returns the new array iterator object contains key value pairs of index

const array1 = ["a", "b", "c", "d"];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);

//Examples

const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element);
}

//for...of loops

for (const element of a.entries()) {
  console.log(element);
}

//calling entries() on non-array objects

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}

//Array.every()

const isBelowThreshold = (currentValue) => currentValue < 40;
const array3 = [1, 30, 39, 49, 10, 13];
console.log(array3.every(isBelowThreshold));

//Example- Testing size of all elements

function isBigEnough(element, index, array) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough));
console.log([12, 54, 18, 130, 44].every(isBigEnough));

//check if one array is subset of another array

const isSubset = (arr1, arr2) =>
  arr2.every((element) => arr1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 8]));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 20, 3, 8]));

//using the third argument of callback Fn

const numbers1 = [-2, 4, -8, 16, -32, 40];
const isIncreasing = numbers1
  .filter((element) => element > 0)
  .every((element, idx, array) => {
    if (idx === 0) return true;
    return element > array[idx - 1];
  });
console.log(isIncreasing);

//=> Array.prototype.fill()

const arr2 = [1, 2, 3, 4];

console.log(arr2.fill(0, 2, 4));

//Examples

console.log([1, 2, 3].fill(4));
console.log([1, 2, 3, 4].fill(4, 1));
console.log([1, 2, 3, 4].fill(4, 1, 2));

//using fill() to create matrix of all 1

const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1);
}
arr[0][0] = 10;
console.log(arr[0][0]);
console.log(arr[1][0]);
console.log(arr[2][0]);

//Array.filter()

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

//Filtering small values

function isBigEnough(value) {
  return value >= 10;
}
const filtered = [12, 5, 80, 130].filter(isBigEnough);
console.log(filtered);

//Filter the prime numbers from an array

const arr3 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(arr3.filter(isPrime));

//Array.find()==> return the first element that satisfies the condition

const arr4 = [5, 12, 8, 13, 48];
const found = arr4.find((element) => element > 10);
console.log(found);

//Examples
//Find an object in an array by one of its properties

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 5 },
  { name: "cherries", quantity: 3 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}
console.log(inventory.find(isCherries));

//findIndexOf()
const numArray = [5, 12, 30, 456];
function isLargeNumber(num) {
  return num > 10;
}
console.log(numArray.findIndex(isLargeNumber));

//findLastIndex

const lastArray = [5, 12, 50, 45, 144];

console.log(lastArray.findLast((num) => num > 45));

//Array.flat()

let ex1 = [1, 2, 3, [4, 5]];
console.log(ex1.flat());

let ex2 = [1, 2, [3, 4, [5, 6]]];
console.log(ex2.flat(2));

//flatMap()

const ex3 = [1, 2, 1];

const exResult = ex3.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(exResult);

//pre allocate and explicitly iterate
const ex4 = [1, 2, 3, 4];
console.log(ex4.flatMap((x) => [x, x * 2]));

//Array.forEach

const ex5 = ["a", "b", "c", "d"];
ex5.forEach((element) => console.log(element));

//Array.from()=> sarray shallow cpoied array instance from an array object

console.log(Array.from("foo")); //'f','o','o'
console.log(Array.from(123655)); //return {}s

console.log(Array.from([1, 2, 3], (x) => x * x));

//Returns unique item
let resArray = [1, 1, 2, 4, 23, 42, 412, 1, 24, 2, 1, 21, 1];
console.log(new Set(resArray));

//Array.fromAsync()

//Array.includes, takes negative value as second parameter and returns true

const ex6 = [1, 2, 3];
console.log(ex6.includes(2));

//index of
ar = [2, 9, 9, 4];
console.log(ar.indexOf(4));

//isArray
console.log(Array.isArray(5));

//join

const elements = ["fire", "Air", "water"];
console.log(elements.join("-"));

//Array.keys()

const arra1 = ["a", , "c"];
const iterator = arra1.keys();
for (const key of iterator) {
  console.log(key);
}
console.log(Object.keys(arra1)); // ignores the empty
console.log([...arra1.keys()]);
//example 2
//const arr =["a","","c"]

//Last index of

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));

//Array.map()=>return the new array
const arrays1 = [1, 4, 9, 16];
const map1 = arrays1.map((x) => x * 2);
console.log(map1);

//Example

const numbersArray = [1, 4, 9];
const roots = numbersArray.map((num) => Math.sqrt(num));
console.log(roots);

//Array.of ==> create new array from an argument

console.log(Array.of("foo", true, "67", 100));
console.log(Array.of(7));

//push and pop

const plants = ["brocoli", "Cauliflower", "cabbage"];
console.log(plants.pop());
plants.push("carrot");
console.log(plants);

//reduce method ==> returns the single value

const redArray = [10, 2, 3, 4, 5];

const initialValue = 0;
const res = redArray.reduce((acc, curr) => acc + curr + initialValue);
console.log(res);

//find maxValue

const maxVal = redArray.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
  return acc;
});

console.log(maxVal);

//reduceRight()

const arrs1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const resArray1 = arrs1.reduceRight((acc, curr) => acc.concat(curr));
console.log(resArray1);

//Example 2

let resArr = [0, 1, 2, 3, 4].reduceRight(
  (acc, curr, ind, array) => acc + curr,
  10 //initial value
);

console.log(resArr);

//Diff between reduce and reduceRight

const a1 = ["1", "2", "3", "4", "5"];
const left = a1.reduce((prev, curr) => prev + curr);
const right = a1.reduceRight((prev, curr) => prev + curr);

console.log(left);
console.log(right);

const exa1 = ["one", "two", "three"];
console.log(exa1.reverse());

//dont want to change original array
const exnumbers = [3, 2, 4, 1, 5];
const reverted = [...exnumbers].reverse();
console.log(reverted);
console.log(exnumbers);

//Array.shift()

const array1A = [1, 2, 3];
const firstElement = array1A.shift();
console.log(array1A);

//using shift method in while loop

const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}

//slice() method

const animalsArr = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animalsArr.slice(2));

console.log(animalsArr.slice(2, 4));
console.log(animalsArr.slice(1, 5));
console.log(animalsArr.slice(-2));
console.log(animalsArr.slice());

//some method

const arr4A = [1, 2, 3, 4];
const even = (element) => element % 2 === 0;
console.log(arr4A.some(even));

//converting any value to Boolean

const truthyValues = ["true", true, false, 1];

function getTruthyValue(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
    console.log(value);
  }
  return truthyValues.some((t) => t === value);
}

console.log(getTruthyValue(false));

//Array.sort()=>sorting in array in-place

const months = ["March", "Feb", "Dec", "Jan"];
console.log(months.sort());

//problem with numbers
function sortArray(a, b) {
  return b - a;
}

const numArray1 = [10, 1000, 5, 47, 30];
console.log(numArray1.sort(sortArray));

//sorting an arra of objects

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
console.log(items.sort((a, b) => a.value - b.value));

//sort by name desending order
console.log(
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  })
);

//Splice()

const monthsArray = ["Jan", "Mar", "April", "Jun"];
monthsArray.splice(1, 1, "Feb");
console.log(monthsArray);

//toLocaleString

console.log([1, , 3].toLocaleString());

// const revItems = [1, 2, 3];
const revItems = [1, , 3];
const reversedItm = revItems.toReversed();
console.log(reversedItm);
console.log(revItems);

//toSorted()s

const sortedMonth = monthsArray.toSorted();
console.log(sortedMonth);
console.log(monthsArray.toSorted());
console.log(monthsArray);

const nArray = [10, 1, 5, 12, 89];
console.log(nArray.sort((a, b) => a - b));

//toSpliced() method =>version of splice method and it creates a new array

console.log(monthsArray.toSpliced(2, 2));
console.log(monthsArray);

//Array.toString() =>converted to string

const array12 = [1, 2, "a", "1a"];
console.log(array12.toString());
console.log(array12);

//Array.unshift()

const array13 = [1, 2, 3, 4];
console.log(array13.unshift(4, 5));
console.log(array13);

let arrs = [4, 5, 6];
arrs.unshift(1, 2, 3);
console.log(arrs);

//Array.values()

const arrd = ["a", "b", "c", "d", "e", "f", "g"];
const iteration = arrd.values();

for (const value of iteration) {
  // console.log(value);
  if (value == "b") {
    break;
  }
}

for (const value of iteration) {
  console.log(value);
}
//iteration using next()

//Array.with()

const exampleArray = [1, 2, 3, 4, 5];
console.log(exampleArray.with(2, 6).map((x) => x ** 2));
