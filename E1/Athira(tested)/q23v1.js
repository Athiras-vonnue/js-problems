//reverse the elements

function reverse(arr) {
  let reverse = [];
  if (arr.length != 0) {
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse[j] = arr[i];
      j++;
    }
    return reverse;
  }
  return [];
}

//testcase function
function testReverse() {
  const tcs = [
    {
      input: [1, 2, 3, 4],
      exp: [4, 3, 2, 1],
    },
    {
      input: [10, 20, 30, 40],
      exp: [40, 30, 20, 10],
    },
    {
      input: ["Apple", "Orange", "Mango", "Cherry"],
      exp: ["Cherry", "Mango", "Orange", "Apple"],
    },
    {
      input: [],
      exp: [],
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = reverse(tcs[i].input);

    if (compareArray(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testReverse();

//compare array function
function compareArray(got, exp) {
  let i = 0;
  while (got[i] !== exp[i]) {
    i++;
    return false;
  }
  return true;
}
