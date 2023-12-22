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
console.log(index, cities);

if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities);
