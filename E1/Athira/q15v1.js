function positiveNumber(number) {
  do {
    //Ask user to enter number
    //let number = Number(prompt("Enter a positive number"));
  } while (number <= 0);
  if (number > 0) {
    return true;
  }
  return false;
}

//testcase function
function testPositiveNumber() {
  const tcs = [
    {
      input: 1,
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
    {
      input: 5,
      exp: true,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = positiveNumber(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testPositiveNumber();
