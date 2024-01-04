function smallestInteger(num) {
  if (num === 0) {
    return 0;
  } else if (num > 0) {
    let integer = num;

    while (integer != 0) {
      let j = 1;
      let count = 0;

      while (j <= num) {
        if (integer % j === 0) {
          count++;
        }
        j++;
      }

      if (count == num) {
        return integer;
        break;
      }
      integer++;
    }
  }
  return -1;
}

//testcase function
function testSmallestInteger() {
  const tcs = [
    {
      input: 5,
      exp: 60,
    },
    {
      input: 4,
      exp: 12,
    },
    {
      input: -3,
      exp: -1,
    },
    {
      input: {},
      exp: -1,
    },
    {
      input: [],
      exp: -1,
    },
    {
      input: 0,
      exp: 0,
    },
    {
      input: "q",
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = smallestInteger(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testSmallestInteger();
