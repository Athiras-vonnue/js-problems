function isPass(score) {
  if (score > 0 && score <= 100) {
    return score >= 60 ? "PASS" : "FAIL";
  }
  return -1;
}

//test function

function testIsPass() {
  const tcs = [
    {
      input: 60,
      exp: "PASS",
    },
    {
      input: 156,
      exp: -1,
    },
    {
      input: -70,
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = isPass(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testIsPass();
