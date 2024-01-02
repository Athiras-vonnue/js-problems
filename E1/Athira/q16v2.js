//menu -driven program

function calculate(n1, n2, operator) {
  let result = 0;
  do {
    if (operator == "+") {
      return n1 + n2;
    } else if (operator == "-") {
      return n1 - n2;
    } else if (operator == "/") {
      return n1 / n2;
    } else if (operator == "*") {
      return n1 * n2;
    }
  } while (operator !== "");

  return "";
}

//testcase function
function testCalculate() {
  const tcs = [
    {
      input1: 8,
      input2: 12,
      operator: "+",
      exp: 20,
    },
    {
      input1: 20,
      input2: 10,
      operator: "-",
      exp: 10,
    },
    {
      input1: 0,
      input2: 10,
      operator: "*",
      exp: 0,
    },
    {
      input1: 10,
      input2: 2,
      operator: "/",
      exp: 5,
    },
    {
      input1: 10,
      input2: 2,
      operator: "",
      exp: "",
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = calculate(tcs[i].input1, tcs[i].input2, tcs[i].operator);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testCalculate();
