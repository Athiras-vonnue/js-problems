console.clear();

//function to compare strings

function compareArray(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

//problem 1:select Array

function selectArray(arr, num) {
  let resultArray = [];

  if (num === 0) {
    return arr;
  } else if (num > 0) {
    let number = num + 1;

    for (let i = 0; i < arr.length - 1; i++) {
      if (number * i <= arr.length - 1) {
        resultArray.push(arr[number * i]);
      }
    }
  }

  return resultArray;
}
//call testcase
testCases();

//test case for selectArray
function testCases() {
  const testcases = [
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      num: 0,
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      num: 1,
      result: [1, 3, 5, 7, 9],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      num: 2,
      result: [1, 4, 7, 10],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      num: 3,
      result: [1, 5, 9],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      num: 5,
      result: [1, 7],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      num: 12,
      result: [1],
    },
    {
      input: {},
      num: 20,
      result: [],
    },
  ];

  for (let i = 0; i < testcases.length; i++) {
    const receivedOutput = selectArray(testcases[i].input, testcases[i].num);
    const expected = testcases[i].result;
    let result = compareArray(expected, receivedOutput);
    if (result) {
      console.log(`Test case ${i + 1} is passed`);
    } else {
      console.log(`Test case ${i + 1} is failed`);
    }
  }
}
//Problem 2: mixArray

function mixArray(arr1, arr2, num) {
  const resultArray = [];

  let i = 0;
  let j = 0;
  if (num > 0) {
    while (i < arr1.length && j < arr2.length) {
      for (let k = 0; k < arr1.length; k++) {
        resultArray.push(arr1[i]);
        i++;
        let l = 0;
        while (l < num && j < arr2.length) {
          resultArray.push(arr2[j]);

          j++;
          l++;
        }
      }
    }
    while (i < arr1.length) {
      resultArray.push(A[i]);
      i++;
    }
    while (j < arr2.length) {
      resultArray.push(B[j]);
      j++;
    }
  }
  if (num === 0) {
    return arr1.concat(arr2);
  }
  return resultArray;
}

//call testcase for mixArray
testCases2();

/*Testcase  for mixArray*/

function testCases2() {
  const testcase = [
    {
      input1: [1, 2, 5, 7, 10],
      input2: [3, 4, 0, 5],
      num: 0,
      result: [1, 2, 5, 7, 10, 3, 4, 0, 5],
    },
    {
      input1: [1, 2, 5, 7, 10],
      input2: [3, 4, 0, 5],
      num: 1,
      result: [1, 3, 2, 4, 5, 0, 7, 5, 10],
    },
    {
      input1: [1, 2, 5, 7, 10],
      input2: [3, 4, 0, 5],
      num: 2,
      result: [1, 3, 4, 2, 0, 5, 5, 7, 10],
    },
    {
      input1: [1, 2, 5, 7, 10],
      input2: [3, 4, 0, 5],
      num: 12,
      result: [1, 3, 4, 0, 5, 2, 5, 7, 10],
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    const receivedOutput = mixArray(
      testcase[i].input1,
      testcase[i].input2,
      testcase[i].num
    );

    const expected = testcase[i].result;

    let result = compareArray(expected, receivedOutput);
    if (result) {
      console.log(`Test case ${i + 1} is passed`);
    } else {
      console.log(`Test case ${i + 1} is failed`);
    }
  }
}
