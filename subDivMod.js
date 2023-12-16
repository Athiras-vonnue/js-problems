//compare function
function compareNumbers(get, expec) {
  if (get !== expec) {
    return false;
  } else {
    return true;
  }
}
//Subtract two numbers

function subtractNumbers(num1, num2) {
  let res = num1 - num2;
  if (!isNaN(res)) {
    return res;
  } else {
    return false;
  }
}

//Divide two numbers

function divideNumbers(num1, num2) {
  let val1 = num1;
  let val2 = num2;
  let quotient = 0;
  let res = 0;
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  if (num1 < 0 && num2 < 0) {
    num1 = -num1;
    num2 = -num2;
  } else if (num1 < 0) {
    num1 = -num1;
  } else if (num2 < 0) {
    num2 = -num2;
  }

  if (num1 < num2) {
    res = num2;
    num2 = num1;
  } else if (num1 > num2) {
    res = num1;
  }

  for (let i = 0; res >= num2; i++) {
    res = subtractNumbers(res, num2);
    quotient = i + 1;
  }

  if ((val1 < 0 && val2 > 0) || (val2 < 0 && val1 > 0)) {
    return -quotient;
  } else {
    return quotient;
  }
}

//modulus of two  numbers

function modulusNumbers(num1, num2) {
  let val1 = num1;
  let val2 = num2;
  let remainder = 0;

  if (num1 < 0 && num2 < 0) {
    num1 = -num1;
    num2 = -num2;
  } else if (num1 < 0) {
    num1 = -num1;
  } else if (num2 < 0) {
    num2 = -num2;
  }

  if (num1 < num2) {
    remainder = num2;
    num2 = num1;
  } else if (num1 > num2) {
    remainder = num1;
  }
  if (num2 === 0 || num1 == 0) {
    return 0;
  }

  for (let i = 0; remainder >= num2; i++) {
    remainder = subtractNumbers(remainder, num2);
  }

  if ((val1 < 0 && val2 > 0) || (val2 < 0 && val1 > 0)) {
    return -remainder;
  } else {
    return remainder;
  }
}

//call testcases

testCase1();
testCase2();
testCase3();

//Testcases for subtraction

function testCase1() {
  const testcase = [
    {
      input1: 0,
      input2: 3,
      expected: -3,
    },
    {
      input1: 3,
      input2: 0,
      expected: 3,
    },
    {
      input1: 1,
      input2: 3,
      expected: -2,
    },
    {
      input1: -1,
      input2: 3,
      expected: -4,
    },
    {
      input1: 1,
      input2: -3,
      expected: 4,
    },
    {
      input1: -8,
      input2: -3,
      expected: -5,
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let get = subtractNumbers(testcase[i].input1, testcase[i].input2);
    let got = compareNumbers(get, testcase[i].expected);

    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//Testcases for division

function testCase2() {
  const testcase = [
    {
      input1: 0,
      input2: 3,
      expected: 0,
    },
    {
      input1: 3,
      input2: 0,
      expected: 0,
    },
    {
      input1: 8,
      input2: 4,
      expected: 2,
    },
    {
      input1: -8,
      input2: -2,
      expected: 4,
    },
    {
      input1: 2,
      input2: 6,
      expected: 3,
    },
    {
      input1: 8,
      input2: 3,
      expected: 2,
    },
    {
      input1: 8,
      input2: -3,
      expected: -2,
    },
    {
      input1: -8,
      input2: 3,
      expected: -2,
    },
    {
      input1: 0,
      input2: 3,
      expected: 0,
    },
    {
      input1: 3,
      input2: 0,
      expected: 0,
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let get = divideNumbers(testcase[i].input1, testcase[i].input2);
    let got = compareNumbers(get, testcase[i].expected);

    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//Testcases for modulus
function testCase3() {
  const testcase = [
    {
      input1: 0,
      input2: 3,
      expected: 0,
    },
    {
      input1: 3,
      input2: 0,
      expected: 0,
    },
    {
      input1: 8,
      input2: 4,
      expected: 0,
    },
    {
      input1: -8,
      input2: -2,
      expected: 0,
    },
    {
      input1: 2,
      input2: 6,
      expected: 0,
    },
    {
      input1: 8,
      input2: 3,
      expected: 2,
    },
    {
      input1: 8,
      input2: -3,
      expected: -2,
    },
    {
      input1: -8,
      input2: 3,
      expected: -2,
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let get = modulusNumbers(testcase[i].input1, testcase[i].input2);
    let got = compareNumbers(get, testcase[i].expected);

    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
