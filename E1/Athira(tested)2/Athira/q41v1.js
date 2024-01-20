const cartItems = [
  {
    name: "dress",
    price: 720,
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

function getTotalPrice(cartItems) {
  if (!cartItems) return -1;
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }

  return total;
}

//test cases
function testGetTotalPrice() {
  const tcs = [
    {
      input1: cartItems,
      exp: 3698,
    },
    {
      input1: "",
      exp: -1,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = getTotalPrice(tcs[i].input1);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testGetTotalPrice();
