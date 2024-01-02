//function to create an object

function createObject(make, model, year) {
  let Car = {};
  Car.make = make;
  Car.model = model;
  Car.year = year;
  return Car;
}

//Another way of creating Object using constructor
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
//const ford = new Car("Ford", "Escape", "2023")

//test cases

function testCreateObject() {
  const tcs = [
    {
      input1: "Ford",
      input2: "Escape",
      input3: 2023,
      exp: {
        make: "Ford",
        model: "Escape",
        year: 2023,
      },
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = createObject(tcs[i].input1, tcs[i].input2, tcs[i].input3);

    if (compareObj(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//compare objects
function compareObj(got, exp) {
  for (let i = 0; i < got.length; i++) {
    if (got[i] !== exp[i]) {
      return false;
    }
  }
  return true;
}

testCreateObject();
