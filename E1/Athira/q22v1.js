//Function to remove duplicates of an array

function removeDuplicates(array) {
  if (array.length > 0) {
    let unique = [];
    let i = 0;

    if (unique.length == 0) {
      unique[i] = array[i];
      i++;
    }
    if (unique.length > 0) {
      for (let j = 0; j < array.length; j++) {
        let count = 0;
        for (let k = 0; k < unique.length; k++) {
          if (array[j] !== unique[k]) {
            count++;
          }
        }
        if (count === unique.length) {
          unique[i] = array[j];
          i++;
        }
      }
    }
    return unique;
  }
  return [""];
}

//console.log(removeDuplicates([1, 2, 3, 4, 1, 2, 6]));

function testRemoveDuplicates() {
  const tcs = [
    {
      input: [1, 2, 3, 4, 1, 2],
      exp: [1, 2, 3, 4],
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
      exp: [""],
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = removeDuplicates(tcs[i].input);

    if (compareArrays(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
//compare function

function compareArrays(got, exp) {
  if (got.length !== exp.length) {
    return false;
  } else {
    for (let i = 0; i < got.length; i++) {
      if (got[i] === exp[i]) {
        return true;
      }
    }
    return false;
  }
}

testRemoveDuplicates();
