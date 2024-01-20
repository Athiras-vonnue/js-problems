//function to print fibonacci upto range n

function fibonacci(range) {
  if (range < 0 || typeof range !== "number") return [];
  if (range > 0) {
    const fib = [];
    fib[0] = 0;
    fib[1] = 1;
    let i = 2;

    while (i < range) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }

    return fib;
  }

  return [];
}

//testcase function

function testFibonacci() {
  const tcs = [
    {
      input: "5",
      exp: [], //done
    },
    {
      input: -10,
      exp: [],
    },
    {
      input: "a",
      exp: [],
    },
    {
      input: 0,
      exp: [], //done
    },
    {
      input: {},
      exp: [],
    },
    {
      input: [],
      exp: [],
    },
    {
      input: 5,
      exp: [0, 1, 1, 2, 3],
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = fibonacci(tcs[i].input);

    if (compareArrays(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFibonacci();

//compare function

function compareArrays(array1, array2) {
  let i = 0;

  while (array1[i] !== array2[i]) {
    return false;
    i++;
  }
  return true;
}
