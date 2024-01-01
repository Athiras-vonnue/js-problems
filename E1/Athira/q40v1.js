const student = {
  name: "Ann",
  Age: 17,
  class: 12,
  IsPass: true,
  isHosteller: false,
};

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const ford = new Car("Ford", "Escape", "2023");
const maruti = new Car("Maruti Suzuki", "Swift", "2021");

function isExistProperty() {
  return ford.hasOwnProperty("make");
}

console.log(isExistProperty());

console.log(student.hasOwnProperty("name"));
