function checkNumber(num) {
  if (num === 0) {
    return 0;
  } else if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  }

  return -1;
}

function testCheckNumber() {
  const tcs = [
    {
      input: 3,
      exp: "positive",
    },
    {
      input: -1,
      exp: "negative",
    },
    {
      input: 0,
      exp: 0,
    },
    {
      input: "a",
      exp: -1,
    },
    {
      input: "",
      exp: -1,
    },
    {
      input: [],
      exp: -1,
    },
    {
      input: ".",
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = checkNumber(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testCheckNumber();
