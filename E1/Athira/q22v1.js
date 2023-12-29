//Function to remove duplicates of an array

function removeDuplicates(array) {
  const unique = [];
  let res = false;
  if (array.length != 0) {
    if (unique.length == 0) {
      unique[0] = array[0];
    }
    let k = 1;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < unique.length; j++) {
        if (array[i] != unique[i]) {
          unique[k] = array[i];
          k++;
        }
      }
    }
  }

  return unique;

  return -1;
}

function testRemoveDuplicates() {
  const tcs = [
    {
      input: [1, 2, 3, 4, 1, 2],
      exp: (1)[(1, 2, 3, 4)],
    },
    {
      input: [5, 10, 34, 1, 90, 5],
      exp: [5, 10, 34, 1, 90],
    },
    {
      input: [7, 3, 6, 3, 5, 3, 6, 7],
      exp: [7, 3, 6, 5],
    },
    {
      input: [],
      exp: "",
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = removeDuplicates(tcs[i].input);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testRemoveDuplicates();
