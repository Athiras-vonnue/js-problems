function isPalindrome(string) {
  let reverse = "";
  if (string.length > 0) {
    for (let i = string.length - 1; i >= 0; i--) {
      reverse += string[i];
    }
    return string === reverse ? true : false;
  }

  return -1;
}

//test function

function testIsPalindrome() {
  const tcs = [
    {
      input: "madam",
      exp: true,
    },
    {
      input: "mango",
      exp: false,
    },
    {
      input: "Malayalam",
      exp: false,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = isPalindrome(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testIsPalindrome();
