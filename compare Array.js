function compareResult(x, y) {
  if (x.length != y.length) {
    return false;
  } else {
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        return false;
      }
    }
    return true;
  }
}

function testCase() {
  const tcs = [
    {
      x: [1, 2, 4],
      y: [1, 2, 4],
      expec: true,
    },
    {
      x: [1, 2, 4, 7],
      y: [1, 2, 4],
      expec: false,
    },
    {
      x: [1, 2, 4],
      y: [1, 2, 4, 5],
      expec: true,
    },
    {
      x: [1, 9, 4, 5, 6],
      y: [1, "9", 4, 5, 6],
      expec: false,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = compareResult(tcs[i].x, tcs[i].y);
    if (got === tcs[i].expec) {
      console.log(`testcase ${i + 1} is passed`);
    } else {
      console.log(`testcase ${i + 1} is failed`);
    }
  }
}

testCase();
