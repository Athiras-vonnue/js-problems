function leapYear(year) {
  if (year % 4 === 0) {
    return true;
  }
  return false;
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
