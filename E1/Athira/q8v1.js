//Function to create multiplication table

function multiplicationTable(num) {
  const mulArray = [];
  if (num > 0) {
    for (let i = 0; i < 10; i++) {
      mulArray[i] = num * (i + 1);
    }
    return mulArray;
  }
  return [-1];
}

///testcase function

function testMultiplicationTable() {
  const tcs = [
    {
      input: 2,
      exp: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    {
      input: -5,
      exp: [-1],
    },
    s,
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = multiplicationTable(tcs[i].input);
    if (compareArray(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testMultiplicationTable();

//compare array function
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
