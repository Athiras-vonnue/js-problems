//count the number of occurance

function countOccurances(arr, searchValue) {
  if (arr.length > 0) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchValue) {
        count++;
      }
    }
    return count;
  }
  return -1;
}

//test cases
function testCountOccurances() {
  const tcs = [
    {
      input1: [1, 2, 3, 4, 6, 8, 3, 1,2, 1, 1],
      input2: 1,
      exp: 4,
    },
    {
      input1: [1, 2, 3, 4, 6, 8, 3, 1, 2, 1, 1],
      input2: 9,
      exp: 0,
    },
    {
      input1: ["Mango", "Apple", "Orange", "Cherry", "Mango", "Orange"],
      input2: "Cherry",
      exp: 1,
    },
    {
      input1: [],
      input2: "Cherry",
      exp: -1,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = countOccurances(tcs[i].input1, tcs[i].input2);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testCountOccurances();
