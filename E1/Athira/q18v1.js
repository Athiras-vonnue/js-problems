//factorial of a number using do while loop
function factorial(n) {
  if (n > 0) {
    let fact = 1;

    do {
      fact *= n;
      n--;
    } while (n != 0);

    return fact;
  }
  return -1;
}

function testFactorial() {
  const tcs = [
    {
      input: 5,
      exp: 120,
    },
    {
      input: -10,
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = factorial(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFactorial();
