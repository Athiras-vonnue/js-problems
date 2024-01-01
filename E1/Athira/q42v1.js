function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const ford = new Car("Ford", "Escape", "2023");
const maruti = new Car("Maruti Suzuki", "Swift", "2021");

let ford1 = ford;
console.log(ford1);

let maruti2 = Object.assign({}, maruti);
console.log(maruti2);
