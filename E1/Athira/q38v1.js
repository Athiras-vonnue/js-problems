//Add new property to an existing Object

const Car = {
  make: "Ford",
  model: "Escape",
  year: 2023,
};

function addProperty(Obj, prop, propValue) {
  Obj[prop] = propValue;
  return Obj;
}

addProperty(Car, "isServiced", true);
addProperty(Car, "isFueled", false);
addProperty(Car, "noOfSeats", 4);
