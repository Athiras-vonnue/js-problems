function checkNumber(num) {
  if (typeof num != "number") return -1;
  if (num === 0) {
    return "zero";
  } else if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  }
}

function testCheckNumber() {
  const tcs = [
    {
      input: "3",
      exp: -1,
    },
    {
      input: -1,
      exp: "negative",
    },
    {
      input: 0,
      exp: "zero",
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
