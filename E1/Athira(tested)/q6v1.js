function evenNumbers(n) {
  const even = [];
  let j = 0;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        even[j] = i;
        j++;
      }
    }
    return even;
  }
  return [-1];
}

//testcases
function testEvenNumbers() {
  const tcs = [
    {
      input: 4,
      exp: [2, 4],
    },
    {
      input: 3,
      exp: [2],
    },
    {
      input: -1,
      exp: [-1],
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = evenNumbers(tcs[i].input);
    if (compareArray(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testEvenNumbers();

//compare two arrays

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
