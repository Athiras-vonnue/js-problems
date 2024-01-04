const cartItems = [
  {
    name: "dress",
    price: 1728,
  },
  {
    name: "watch",
    price: 1020,
  },
  {
    name: "grocerry",
    price: 1500,
  },
  {
    name: "oil",
    price: 458,
  },
];

function findHighest() {
  let max = cartItems[0].price;
  for (let i = 1; i < cartItems.length; i++) {
    if (max < cartItems[i].price) {
      max = cartItems[i].price;
    }
  }
  return max;
}

//test cases

function testFindHighest() {
  const tcs = [
    {
      input: cartItems,
      exp: 1728,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = findHighest(tcs[i].input);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testFindHighest();
