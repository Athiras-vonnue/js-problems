function leapYear(year) {
  if (year > 0) {
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }
  return -1;
}

function testLeapYear() {
  const tcs = [
    {
      input: 1996,
      exp: true,
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
      input: "",
      exp: -1,
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
