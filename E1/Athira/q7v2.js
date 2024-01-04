//sum of n numbers

function findSum(n) {
  let sum = 0;
  if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  return null;
}

function testFindSum() {
  const tcs = [
    {
      input: 1,
      exp: 1,
    },
    {
      input: 10,
      exp: 55,
    },
    {
      input: -10,
      exp: null,
    },
    {
      input: "a",
      exp: null,
    },
    {
      input: [],
      exp: null,
    },
    {
      input: {},
      exp: null,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = findSum(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testFindSum();
