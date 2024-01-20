const student = {
  name: "Ann",
  Age: 17,
  class: 12,
  IsPass: true,
  isHosteller: false,
};
//create object
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const ford = new Car("Ford", "Escape", "2023");
const maruti = new Car("Maruti Suzuki", "Swift", "2021");

//function to check property exist in object

function isExistProperty(object, property) {
  for (let prop in object) {
    if (prop === property) {
      return true;
    }
    return false;
  }
}

//test cases
function testIsExistProperty() {
  const tcs = [
    {
      input1: ford,
      input2: "make",
      exp: true,
    },
    {
      input1: ford,
      input2: "isFueled",
      exp: false,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = isExistProperty(tcs[i].input1, tcs[i].input2);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testIsExistProperty();
