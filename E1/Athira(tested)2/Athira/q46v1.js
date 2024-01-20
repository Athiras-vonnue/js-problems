const obj1 = {
  name: "Ann",
  Age: 20,
};

const obj2 = {
  name: "Ann",
  Age: 20,
};
const obj3 = {
  name: "John",
  Age: 40,
};

//function to check equality of objects with values

function isEqual(obj1, obj2) {
  for (let prop in obj1) {
    if (obj1[prop] != obj2[prop]) {
      return false;
    }
  }
  return true;
}


//test cases
function testIsEqual() {
  const tcs = [
    {
      input1: obj1,
      input2: obj2,
      exp: true,
    },
    {
      input1: obj1,
      input2: obj3,
      exp: false,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = isEqual(tcs[i].input1, tcs[i].input2);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testIsEqual();
