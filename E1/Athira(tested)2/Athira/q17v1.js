/*
no need to test this
Use of bult-in functions like Math.floor() and Math.random()
*/

function rollingDie(specificNum) {
  let randomNumber = 1;
  let result = true;
  let sides = 6;
  let i = 1;
  if (specificNum > 0 && specificNum <= sides) {
    do {
      randomNumber = Math.floor(Math.random() * sides) + 1; //used built-in functions like Math.floor() and Math.random()
      result = false;
      i++;
    } while (randomNumber !== specificNum && i);
    if (randomNumber === specificNum) {
      return true;
    }
    return result;
  }
  return -1;
}

//test cases
function testRollingDie() {
  const tcs = [
    {
      input: 5,
      exp: true,
    },
    {
      input: 10,
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = rollingDie(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testRollingDie();
