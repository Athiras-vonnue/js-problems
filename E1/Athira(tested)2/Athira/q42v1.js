function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const ford = new Car("Ford", "Escape", "2023");
const maruti = new Car("Maruti Suzuki", "Swift", "2021");

//simplest way
//let ford1 = ford;

//let maruti2 = Object.assign({}, maruti);

function cloneObject(obj) {
  if (!obj) return -1;
  let clonedObj = {};
  for (let prop in obj) {
    clonedObj[prop] = obj[prop];
  }
  return clonedObj;
}

//test cases
function testCloneObject() {
  const tcs = [
    {
      input1: ford,
      exp: ford,
    },
    {
      input1: maruti,
      exp: maruti,
    },
    {
      input1: "",
      exp: -1,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = cloneObject(tcs[i].input1);
    if (compareObj(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//compare objects
function compareObj(got, exp) {
  for (let prop in got) {
    if (got[prop] != exp[prop]) {
      return false;
    }
  }
  return true;
}
testCloneObject();
