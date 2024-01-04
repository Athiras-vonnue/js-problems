const obj1 = {
  name: "Ann",
  Age: 20,
};

const obj2 = {
  isAlive: true,
  hadLicense: false,
};
const mergedObj = {
  name: "Ann",
  Age: 20,
  isAlive: true,
  hadLicense: false,
};

//function to merge two objects in to new object

function mergeObject(obj1, obj2) {
  let mergedObj = {};

  for (let prop in obj1) {
    mergedObj[prop] = obj1[prop];
  }
  for (let prop in obj2) {
    mergedObj[prop] = obj2[prop];
  }
  return mergedObj;
}

//test cases

function testMergeObject() {
  const tcs = [
    {
      input1: obj1,
      input2: obj2,
      exp: mergedObj,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = mergeObject(tcs[i].input1, tcs[i].input2);
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
testMergeObject();
