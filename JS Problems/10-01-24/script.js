function factorial(n) {
  let maxRange = 9999999999999998;

  if (n === 0) return 1;
  if (n < 0 || typeof n !== "number") return -1;

  let fact = 1;

  while (n != 0) {
    fact *= n;
    n--;
  }

  if (fact <= maxRange) return fact;
  else return -1;
}

function findExponent(num, exp) {
  let maxRange = 9999999999999998;

  if (num < 0 || exp < 0 || typeof num !== "number" || typeof exp !== "number")
    return 0;

  if (exp === 0) return 1;
  if (num === 0) return 0;

  i = exp;
  let exponent = 1;

  while (i) {
    exponent *= num;
    i--;
  }

  if (exponent > maxRange) {
    return 0;
  } else {
    return exponent;
  }
}

function reduce(value) {
  if (value <= 0 || typeof value !== "number") return -1;

  let sub = 360;

  while (value >= sub) {
    value -= sub;
  }

  return value;
}

function findFactor(val) {
  if (!val || typeof val !== "number" || val < 0) return -1;
  let value = reduce(val);

  return (value * 6.28) / 360;
}

function seqMax(val, term) {
  if (
    typeof val !== "number" ||
    typeof term !== "number" ||
    val < 0 ||
    term < 0 ||
    !term
  )
    return 0;

  let value = findFactor(val);
  let res = 0;

  for (let k = 0, i = 1; k < term; k++, i = i + 2) {
    if (k % 2 == 0) {
      res += findExponent(value, i) / factorial(i);
    } else {
      res -= findExponent(value, i) / factorial(i);
    }
  }

  return res;
}

//console.log(seqMax(750, 22));

//testcase

function testFactorial() {
  const tcs = [
    {
      input: 5,
      exp: 120,
    },
    {
      input: 23,
      exp: -1,
    },
    {
      input: 5,
      exp: 120,
    },
    {
      input: "5",
      exp: -1,
    },
    {
      input: 0,
      exp: 1,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = factorial(findFactor(tcs[i].input));

    if (got === tcs[i].exp) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

//testFactorial();

function testFindExponent() {
  const tcs = [
    {
      input1: 2,
      input2: 3,
      exp: 8,
    },
    {
      input1: 0,
      input2: 3,
      exp: 0,
    },
    {
      input1: 3,
      input2: 0,
      exp: 1,
    },
    {
      input1: 0,
      input2: 0,
      exp: 1,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = findExponent(tcs[i].input1, tcs[i].input2);

    if (got === tcs[i].exp) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

//testFindExponent();

function testReduce() {
  const tcs = [
    {
      input1: "458",
      exp: -1,
    },
    {
      input1: -458,
      exp: -1,
    },
    {
      input1: 458,
      exp: 98,
    },
    {
      input1: 0,
      exp: -1,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = reduce(tcs[i].input1);
    if (got === tcs[i].exp) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

//testReduce();

function testFindFactor() {
  const tcs = [
    {
      input1: 458,
      exp: 1.709555,
    },
    {
      input1: -458,
      exp: -1,
    },
    {
      input1: [458],
      exp: -1,
    },
    {
      input1: 0,
      exp: -1,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = findFactor(tcs[i].input1);

    if (compareVal(got, tcs[i].exp)) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

//testFindFactor();

//testcase

function testSeqMax() {
  const tcs = [
    {
      input1: 580,
      input2: 2,
      exp: -5.58303,
    },
    {
      input1: -580,
      input2: 2,
      exp: 0,
    },
    {
      input1: 360,
      input2: 1,
      exp: 0,
    },
    {
      input1: 750,
      input2: 22,
      exp: 0.499757,
    },
    {
      input1: 750,
      input2: 24,
      exp: 0.499757,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = seqMax(tcs[i].input1, tcs[i].input2);

    if (compareVal(got, tcs[i].exp)) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

function compareVal(got, exp) {
  while (got < exp + 1 && got > exp - 1) {
    return true;
  }

  return false;
}

testSeqMax();
