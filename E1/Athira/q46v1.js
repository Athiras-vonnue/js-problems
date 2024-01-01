const obj1 = [
  {
    name: "Ann",
    Age: 20,
  },
];
const obj2 = [
  {
    name: "Ann",
    Age: 26,
  },
];

function isEqual(obj1, obj2) {
  //   obj2 = obj1;
  //   if (obj1 === obj2) {
  //     return true;
  //   }
  //   false;

  if (obj1[0].name != obj2[0].name) {
    return false;
  }

  return true;
}

console.log(isEqual(obj1, obj2));
