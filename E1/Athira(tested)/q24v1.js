//index of the specific element

function findIndex(arr, element) {
  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
  }
  return -1;
}

//testcase function
function testFindIndex() {
  const tcs = [
    {
      input1: [1, 2, 3, 4],
      input2: 2,
      exp: 1,
    },
    {
      input1: [1, 2, 3, 4],
      input2: 2,
      exp: 1,
    },
    {
      input1: ["Apple", "Orange", "Mango", "Cherry"],
      input2: "Mango",
      exp: 2,
    },
    {
      input1: [],
      input2: "",
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = findIndex(tcs[i].input1, tcs[i].input2);

    if ((got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFindIndex();
