//find average of an array of numbers

function findAverage(arr) {
  let sum = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return Math.floor(sum / arr.length);
  }
  return " ";
}

console.log(findAverage([90, 80, 85, 23, 48, 89]));
//test cases

function testFindAverage() {
  const tcs = [
    {
      input1: [10, 20, 30, 40, 50],
      exp: 30,
    },
    {
      input1: [90, 80, 85, 23, 48, 89],
      exp: 69,
    },
    {
      input1: [],
      exp: " ",
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = findAverage(tcs[i].input1);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFindAverage();
