function getBinary(num) {
  if (num < 0 || typeof num !== "number") return "invalid";

  let i = 0;
  let res = "";
  let binary = "";
  let value = 0;

  if (num === 0) {
    res += "*";
  }

  while (num) {
    if (num % 2 === 0) {
      res += "*";
    } else {
      res += "+";
    }

    value = num / 2;

    //convert to whole numbers
    let i = 0;
    while (value >= i) {
      num = i;
      i++;
    }
  }

  //reverse
  let k = res.length - 1;
  while (res[k]) {
    binary += res[k];
    k--;
  }
  return binary;
}

//Testcases

function testGetBinary() {
  const testcase = [
    {
      input1: 0,
      expected: "*",
    },
    {
      input1: "1",
      expected: "invalid",
    },
    {
      input1: 4,
      expected: "+**",
    },
    {
      input1: "",
      expected: "invalid",
    },
    {
      input1: -4,
      expected: "invalid",
    },
    {
      input1: [4],
      expected: "invalid",
    },
    {
      input1: true,
      expected: "invalid",
    },
    {
      input1: 20,
      expected: "+*+**",
    },
  ];

  for (let i = 0; i < testcase.length; i++) {
    let got = getBinary(testcase[i].input1);
    if (got === testcase[i].expected) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testGetBinary();
