function positiveNumber(input) {
  if (!input || typeof input !== "number") return null;
  let i = 0;
  let res = true;
  do {
    //let input = prompt("enter a positive number")
    i++;
    res = false;
  } while (!input > 0 && i);
  if (input > 0) {
    res = true;
  }
  return res;
}

//testcase function
function testPositiveNumber() {
  const tcs = [
    {
      input: "1",
      exp: null,
    },
    {
      input: -5,
      exp: false,
    },
    {
      input: -6,
      exp: false,
    },
    {
      input: 5,
      exp: true,
    },
    {
      input: "5",
      exp: null,
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
