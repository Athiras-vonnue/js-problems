console.clear();
// hi
/*Function to compare arrays*/

const compareArray = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
    return true;
  }
};

//Problem 1:

const testCases = [
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
];

const skipNumbersFromArray = (arr, num) => {
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
};

for (let i = 0; i < testCases.length; i++) {
  const receivedOutput = skipNumbersFromArray(
    testCases[i].input,
    testCases[i].num
  );
  const actualOutput = testCases[i].result;
  let result = compareArray(actualOutput, receivedOutput);
  if (result) {
    console.log("testcase passed");
  } else {
    console.log("testcase failed");
  }
}

console.log(compareArray([1, 0, 3], [1, 0, 3]));
//Problem 2:

console.log("**************Problem 2*********************");

const testCases2 = [
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
/******************************************************************/
const mixNumbers = (A, B, num) => {
  const resultArray = [];

  let i = 0;
  let j = 0;
  if (num > 0) {
    while (i < A.length && j < B.length) {
      for (let k = 0; k < A.length; k++) {
        resultArray.push(A[i]);
        i++;
        let l = 0;
        while (l < num && j < B.length) {
          resultArray.push(B[j]);

          j++;
          l++;
        }
      }
    }
    while (i < A.length) {
      resultArray.push(A[i]);
      i++;
    }
    while (j < B.length) {
      resultArray.push(B[j]);
      j++;
    }
  }
  if (num === 0) {
    return A.concat(B);
  }
  return resultArray;
};

for (let i = 0; i < testCases2.length; i++) {
  const receivedOutput = mixNumbers(
    testCases2[i].input1,
    testCases2[i].input2,
    testCases2[i].num
  );

  const actualOutput = testCases2[i].result;
  let result = compareArray(actualOutput, receivedOutput);
  if (result) {
    console.log("testcase passed");
  } else {
    console.log("testcase failed");
  }
}
