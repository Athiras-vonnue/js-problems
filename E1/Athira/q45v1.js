const obj1 = [
  {
    name: "Ann",
    Age: 20,
  },
];
const obj2 = [
  {
    name: "Joan",
    Age: 24,
  },
];

function mergeObject(obj1, obj2) {
  return [...obj1, ...obj2];
}
console.log(mergeObject(obj1, obj2));
