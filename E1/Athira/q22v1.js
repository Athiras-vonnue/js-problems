//Function to remove duplicates of an array

function removeDuplicates(array) {
  const unique = [];

  if (unique.length == 0) {
    unique[0] = array[0];
  } else {
    let j = 0;
    for (let i = 0; i < unique.length; i++, j++) {
      while (unique[j] !== array[i] && j < unique.length) {
        unique[j] = array[i];
      }
    }
  }
  console.log(unique);
  return unique;
}

console.log(removeDuplicates([1, 2, 3, 4, 1, 2]));

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

//testRemoveDuplicates();
