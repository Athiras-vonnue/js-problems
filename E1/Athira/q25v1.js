//function to determine given number is odd/even

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

//test function

function testIsEven() {
  const tcs = [
    {
      input: 4,
      exp: true,
    },
    {
      input: 3,
      exp: false,
    },
    {
      input: 0,
      exp: true,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = isEven(tcs[i].input);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testIsEven();
