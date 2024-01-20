function leapYear(year) {
  if (typeof year !== "number") return -1;
  if (year > 0) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 4 === 0 && year % 400 == 0)
    ) {
      return true;
    }
    return false;
  }
  return -1;
}

function testLeapYear() {
  const tcs = [
    {
      input: "1996",
      exp: -1,
    },
    {
      input: 1997,
      exp: false,
    },
    {
      input: 2000,
      exp: true,
    },
    {
      input: 0,
      exp: -1,
    },
    {
      input: -3245,
      exp: -1,
    },
    {
      input: "4",
      exp: -1,
    },
    {
      input: 1900,
      exp: false,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = leapYear(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testLeapYear();

/*
correction:
  The ideal condition for testing leap year is a bit longer
*/
