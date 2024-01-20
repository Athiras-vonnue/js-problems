//factorial of a number using do while loop
function factorial(n) {
  if (n === 0) return 1;
  else if (n < 0 || typeof n !== "number") return null;
  let fact = 1;

  do {
    fact *= n;
    n--;
  } while (n != 0);

  return fact;
}

function testFactorial() {
  const tcs = [
    {
      input: "5",
      exp: null,
    },
    {
      input: -10,
      exp: null,
    },
    {
      input: -9,
      exp: null,
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
