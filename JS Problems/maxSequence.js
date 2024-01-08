//compare arrays

function compareArrays(got, expec) {
  let i = 0;
  while (got[i]) {
    if (got[i] !== expec[i]) {
      return false;
    }
    i++;
  }
  return true;
}

//Function to find converge of number n

function converge(num) {
  if (!num || typeof num !== "number" || num < 0) return "invalid input";

  let value = num;
  let sequence = [];
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
      sequence = [value, i];
    }

    return sequence;
  }
  return 0;
}

function findMaxSequence(min, max) {
  if (
    !max ||
    !min ||
    typeof min !== "number" ||
    typeof max !== "number" ||
    max < 0 ||
    min < 0
  )
    return "invalid input";

  let sequence = [];
  let i = min;
  let index = 0;
  while (max >= i) {
    sequence[index] = converge(i);
    i++;
    index++;
  }

  let k = 0;
  let maxValue = sequence[k][1];
  while (k < sequence.length) {
    if (sequence[k][1] > maxValue) maxValue = sequence[k][1];
    k++;
  }
  for (const value of sequence) {
    if (value[1] === maxValue) {
      return value;
    }
  }
}

//console.log(findMaxSequence(10, 100));

//testcase for converge function
function testConverge() {
  const testcase = [
    {
      input: 0,
      expected: "invalid input",
    },
    {
      input: "1",
      expected: "invalid input",
    },
    {
      input: -2,
      expected: "invalid input",
    },
    {
      input: [3],
      expected: "invalid input",
    },
    {
      input: 4,
      expected: [4, 2],
    },
    {
      input: 5,
      expected: [5, 5],
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let got = converge(testcase[i].input);
    if (compareArrays(got, testcase[i].expected)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testConverge();

//testcase for findMaxSequence function

function testFindMaxSequence() {
  const testcase = [
    {
      input1: 0,
      input2: 100,
      expected: "invalid input",
    },
    {
      input1: "10",
      input2: 100,
      expected: "invalid input",
    },
    {
      input1: -10,
      input2: 100,
      expected: "invalid input",
    },
    {
      input1: [10],
      input2: [100],
      expected: "invalid input",
    },
    {
      input1: 1,
      input2: 10,
      expected: [9, 19],
    },
    {
      input1: 2,
      input2: "5",
      expected: "invalid input",
    },
    {
      input1: { input1: 2 },
      input2: { input2: 10 },
      expected: "invalid input",
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let got = findMaxSequence(testcase[i].input1, testcase[i].input2);
    if (compareArrays(got, testcase[i].expected)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFindMaxSequence();
