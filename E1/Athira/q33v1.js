function findArea(length, breadth) {
  return length * breadth;
}

//test cases

function testFindArea() {
  const tcs = [
    {
      input1: 10,
      input2: 2,
      exp: 20,
    },
    {
      input1: 15,
      input2: 5,
      exp: 75,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = findArea(tcs[i].input1, tcs[i].input2);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFindArea();
