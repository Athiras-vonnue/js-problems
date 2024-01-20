//function to reverse a string

function reverseString(str) {
  if (str.length > 0) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    return reverse;
  }
  return -1;
}

//test cases

function testReverseString() {
  const tcs = [
    {
      input1: "helloall",
      exp: "llaolleh",
    },
    {
      input1: "12345",
      exp: "54321",
    },
    {
      input1: [],
      exp: -1,
    },
    {
      input1: 2,
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = reverseString(tcs[i].input1);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testReverseString();
