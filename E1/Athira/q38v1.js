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

//test cases

function testAddProperty() {
  const tcs = [
    {
      input1: Car,
      input2: "isServiced",
      input3: true,
      exp: {
        make: "Ford",
        model: "Escape",
        year: 2023,
        isServiced: true,
      },
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = addProperty(tcs[i].input1, tcs[i].input2, tcs[i].input3);

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

testAddProperty();
