//compare arrays

function compareNumbers(get, expec) {
  if (get !== expec) {
    return false;
  } else {
    return true;
  }
}

//Problem 1:Find converge of number n

function converge(num) {
  let length = 0;
  let count = 1;

  if (num == 1) {
    num = 3 * num + 1;
    count = 2;
  }

  if (num > 0) {
    for (let i = count; num != 1; i++) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = 3 * num + 1;
      }
      length = i;
    }

    return length;
  }
  return 0;
}

testCase();

//testcase for converge function

function testCase() {
  const testcase = [
    {
      input: 0,
      expected: 0,
    },
    {
      input: 1,
      expected: 3,
    },
    {
      input: 2,
      expected: 1,
    },
    {
      input: 3,
      expected: 7,
    },
    {
      input: 4,
      expected: 2,
    },
    {
      input: 5,
      expected: 5,
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let get = converge(testcase[i].input);
    let got = compareNumbers(get, testcase[i].expected);

    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
