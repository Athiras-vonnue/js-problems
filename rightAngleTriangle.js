//function to compare two arrays

function compareNumbers(get, expec) {
  if (get !== expec) {
    return false;
  } else {
    return true;
  }
}

//problem 1:function to find hypotenuse

function findHypotenuse(height, base) {
  return Math.sqrt(height * height + base * base);
}

testCase1();

//testcases

function testCase1() {
  const testcase = [
    {
      height: 0,
      base: 0,
      expec: 0,
    },
    {
      height: 5,
      base: 0,
      expec: 5,
    },
    {
      height: 0,
      base: 5,
      expec: 5,
    },
    {
      height: 3,
      base: 4,
      expec: 5,
    },
    {
      height: 8,
      base: 6,
      expec: 10,
    },
    {
      height: -3,
      base: 4,
      expec: 5,
    },
    {
      height: 3,
      base: -4,
      expec: 5,
    },
  ];
  for (let i = 0; i < testcase.length; i++) {
    let get = findHypotenuse(testcase[i].height, testcase[i].base);
    let got = compareNumbers(get, testcase[i].expec);
    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//problem2 - find right angle triangle

function isRightAngleTriangle(side1, side2) {
  let sideC = side1 * side1 + side2 * side2;
  let result = false;

  for (let i = 0; i < sideC / 2; i++) {
    if (i * i === sideC) {
      result = true;
      break;
    }
  }
  return result;
}

testCase2();
//testcases for problem 2

function testCase2() {
  const testcase = [
    {
      side1: 3,
      side2: 4,
      expec: true,
    },
    {
      side1: 2,
      side2: 3,
      expec: false,
    },
    {
      side1: 0,
      side2: 5,
      expec: true,
    },
    {
      side1: -3,
      side2: 4,
      expec: true,
    },
  ];
  for (let i = 0; i < testcase.length; i++) {
    let get = isRightAngleTriangle(testcase[i].side1, testcase[i].side2);
    let got = compareNumbers(get, testcase[i].expec);
    if (got) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
