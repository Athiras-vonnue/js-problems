function evenNumbers(n) {
  if (n <= 0 || typeof n !== "number") return [];
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
      input: "4",
      exp: [],
    },
    {
      input: 3,
      exp: [2],
    },
    {
      input: -1,
      exp: [],
    },
    {
      input: 0,
      exp: [],
    },
    {
      input: "",
      exp: [-1],
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = evenNumbers(tcs[i].input);
    if (compareArrays(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testEvenNumbers();

//compare two arrays

function compareArrays(array1, array2) {
  let i = 0;
  while (array1[i]) {
    if (array1[i] !== array2[i]) return false;

    i++;
  }
  return true;
}
