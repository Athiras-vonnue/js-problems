function findArea(length, breadth) {
  if (
    length < 0 ||
    breadth < 0 ||
    typeof breadth !== "number" ||
    typeof length !== "number"
  )
    return "invalid";
  return length * breadth;
}

//test cases

function testFindArea() {
  const tcs = [
    {
      input1: -10,
      input2: 2,
      exp: "invalid",
    },
    {
      input1: 15,
      input2: 5,
      exp: 75,
    },
    {
      input1: 0,
      input2: 5,
      exp: 0,
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
