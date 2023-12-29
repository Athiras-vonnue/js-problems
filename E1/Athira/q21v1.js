function findSum(arr) {
  if (arr.length != 0) {
    let sum = 0;
    for (const element of arr) {
      sum += element;
    }
    return sum;
  }
  return "";
}

function testFindSum() {
  const tcs = [
    {
      input: [1, 2, 3, 4],
      exp: 10,
    },
    {
      input: [5, 10, 34, 1, 90, 65],
      exp: 205,
    },
    {
      input: [7, 3, 6, 3, 5],
      exp: 24,
    },
    {
      input: [],
      exp: "",
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
