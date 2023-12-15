//function to compare two arrays

function compareNumbers(get, expec) {
  if (get !== expec) {
    return false;
  } else {
    return true;
  }
}

//Add two numbers

function addNumbers(num1, num2) {
  let res = num1 + num2;
  if (isNaN(res)) {
    return false;
  } else {
    return res;
  }
}

//Multiply two  numbers

function multiplyNumbers(num1, num2) {
  let res = 0;
  if (num2 < 0 && num1 < 0) {
    num2 = -num2;
    num1 = -num1;
  } else if (num2 < 0 && num1 > 0) {
    num2 = -num2;
    num1 = -num1;
  }

  for (let i = 0; i < num2; i++) {
    res = addNumbers(num1, res);
  }

  return res;
}

//call testcases
testCase1();
testCase2();

//Testcases

function testCase1() {
  const testcase = [
    {
      input1: 1,
      input2: 3,
      expected: 4,
    },
    {
      input1: -1,
      input2: 3,
      expected: 2,
    },
    {
      input1: 1,
      input2: -3,
      expected: -2,
    },
    {
      input1: -8,
      input2: -3,
      expected: -11,
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let get = addNumbers(testcase[i].input1, testcase[i].input2);
    let got = compareNumbers(get, testcase[i].expected);
    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//test case2

function testCase2() {
  const testcase = [
    {
      input1: 1,
      input2: 3,
      expected: 3,
    },
    {
      input1: -1,
      input2: 3,
      expected: -3,
    },
    {
      input1: 1,
      input2: -3,
      expected: -3,
    },
    {
      input1: -8,
      input2: -3,
      expected: 24,
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let get = multiplyNumbers(testcase[i].input1, testcase[i].input2);
    let got = compareNumbers(get, testcase[i].expected);
    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
