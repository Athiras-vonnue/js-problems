//Function to create multiplication table

function multiplicationTable(num) {
  if (typeof num !== "number" || num < 0) return "invalid";
  const mulArray = [];

  for (let i = 0; i < 10; i++) {
    mulArray[i] = num * (i + 1);
  }
  return mulArray;
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
      exp: "invalid",
    },
    {
      input: 0,
      exp: "invalid",
    },
    {
      input: "a",
      exp: "invalid",
    },
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
  let i = 0;
  while (got[i]) {
    if (got[i] !== exp[i]) {
      return false;
    }
    i++;
  }
  return true;
}
