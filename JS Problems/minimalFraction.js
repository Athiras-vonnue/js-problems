function subtractNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return null;
  else return num1 - num2;
}

function divide(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") return null;

  let quotient = 0;
  let res = 0;

  if (n1 < n2) {
    res = n2;
    n2 = n1;
  } else {
    res = n1;
  }

  for (let i = 0; res >= n2; i++) {
    res = subtractNumbers(res, n2);
    quotient = i + 1;
  }

  return quotient;
}

function commonFactor(n1, n2) {
  let i = 2;
  let gcf = 0;

  if (n1 === 1 || n2 === 1) return 1;

  while (n1 >= i && n2 >= i) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcf = i;
    }
    i++;
  }
  return gcf;
}

function minimalFraction(n1, n2) {
  if (!n1 || !n2 || typeof n1 != "number" || typeof n2 != "number") return null;
  let num1 = n1;
  let num2 = n2;

  if (n1 < 0) {
    n1 = -n1;
  }
  if (n2 < 0) {
    n2 = -n2;
  }
  let gcf = commonFactor(n1, n2);
  let n1Res = divide(n1, gcf);
  let n2Res = divide(n2, gcf);

  if (num1 < 0 && num2 > 0) return `-${n1Res}/${n2Res}`;
  else if (num2 < 0 && num1 > 0) return `${n1Res}/-${n2Res}`;
  else return `${n1Res}/${n2Res}`;
}
//console.log(minimalFraction(-1, -3));

//Testcases

function testMinimalFraction() {
  const testcase = [
    {
      input1: 0,
      input2: 3,
      expected: null,
    },
    {
      input1: 3,
      input2: 0,
      expected: null,
    },
    {
      input1: 1,
      input2: 3,
      expected: "1/3",
    },
    {
      input1: -1,
      input2: 3,
      expected: "-1/3",
    },
    {
      input1: -1,
      input2: "-3",
      expected: null,
    },
    {
      input1: "12",
      input2: 4,
      expected: null,
    },
    {
      input1: [12],
      input2: [19],
      expected: null,
    },
    {
      input1: -100,
      input2: -20,
      expected: "5/1",
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let got = minimalFraction(testcase[i].input1, testcase[i].input2);
    if (got === testcase[i].expected) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testMinimalFraction();
