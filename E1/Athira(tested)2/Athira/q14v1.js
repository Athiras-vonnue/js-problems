//GCD

function findGCD(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") return -1;
  let i = 1;
  let gcd = 0;
  if (n1 > 0 && n2 > 0) {
    while (i <= n1 && i <= n2) {
      if (n1 % i === 0 && n2 % i === 0) {
        gcd = i;
      }
      i++;
    }
    return gcd;
  }
  return -1;
}

//testcase function
function testfindGCD() {
  const tcs = [
    {
      input1: "8",
      input2: "12",
      exp: -1,
    },
    {
      input1: 5,
      input2: 20,
      exp: 5,
    },
    {
      input1: 0,
      input2: 10,
      exp: -1,
    },
    {
      input1: -8,
      input2: -12,
      exp: -1,
    },
    {
      input1: "8",
      input2: -12,
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = findGCD(tcs[i].input1, tcs[i].input2);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testfindGCD();
