function findMax(array) {
  if (array.length > 0) {
    let max;
    for (let arr of array) {
      if (typeof arr === "number") {
        max = array[0];
        if (arr > max) {
          max = arr;
        }
      } else {
        continue;
      }
    }
    return max;
  }
  return -1;
}

//console.log(findMax(["5", 10, 34, 1, "90", 40]));

function testFindMax() {
  const tcs = [
    {
      input: [1, 2, 3, "4"],
      exp: 3,
    },
    {
      input: [5, 10, 34, "1", "90", 65],
      exp: 65,
    },
    {
      input: [7, 3, 6, 3, 5],
      exp: 7,
    },
    {
      input: [],
      exp: -1,
    },

    {
      input: {},
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = findMax(tcs[i].input);
    console.log(got);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFindMax();
