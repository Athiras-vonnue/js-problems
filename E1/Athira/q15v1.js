function positiveNumber(number) {
  do {
    return false;
  } while (number < 0);
  if (number > 0) {
    return true;
  }
}

//testcase function
function testPositiveNumber() {
  const tcs = [
    {
      input: -5,
      exp: false,
    },
    {
      input: 5,
      exp: true,
    },
    {
      input: -5,
      exp: false,
    },
    {
      input: 0,
      exp: false,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = positiveNumber(tcs[i].input1, tcs[i].input2);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testPositiveNumber();
