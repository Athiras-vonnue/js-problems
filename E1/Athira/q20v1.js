function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function testFindMax() {
  const tcs = [
    {
      input: [1, 2, 3, 4],
      exp: 4,
    },
    {
      input: [5, 10, 34, 1, 90, 65],
      exp: 90,
    },
    {
      input: [7, 3, 6, 3, 5],
      exp: 7,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = findMax(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFindMax();
