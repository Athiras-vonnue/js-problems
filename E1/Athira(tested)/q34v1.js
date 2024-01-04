//function to check prime

function isPrime(num) {
  if (num > 0 && typeof num === "number") {
    let k = 0;
    for (let i = 2; i <= num; i++) {
      if (num % i == 0) {
        k++;
      }
    }
    return k === 1 ? true : false;
  }
  return -1;
}

//test cases

function testIsPrime() {
  const tcs = [
    {
      input1: 19,
      exp: true,
    },
    {
      input1: "19",
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = isPrime(tcs[i].input1);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testIsPrime();
