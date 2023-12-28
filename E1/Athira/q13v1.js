function fibonacci(range) {
  const fib = [];
  fib[0] = 0;
  fib[1] = 1;
  if (range > 0) {
    let i = 2;
    while (i < range) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }
    return fib;
  }
  return [-1];
}

console.log(fibonacci(5));
function testFibonacci() {
  const tcs = [
    {
      input: 5,
      exp: [0, 1, 1, 2, 3],
    },
    {
      input: -10,
      exp: [-1],
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = fibonacci(tcs[i].input);
    if (compareArray(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFibonacci();

//compare function
function compareArray(got, exp) {
  if (got.length !== exp.length) {
    return false;
  } else {
    for (let i = 0; i < got.length; i++) {
      if (got[i] === exp[i]) {
        return true;
      }
    }
  }
}
