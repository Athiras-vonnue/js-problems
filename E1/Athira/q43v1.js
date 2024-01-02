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
//console.log(cartItems[1].price);
function sortObjects() {
  let temp;
  let sorted = [];
  for (let i = 0; i < cartItems.length; i++) {
    for (let j = 0; j < cartItems.length; j++) {
      if (cartItems[i].price < cartItems[j].price) {
        temp = cartItems[i];
        cartItems[i] = cartItems[j];
        cartItems[j] = temp;
      }
    }
  }
  return cartItems;
}

//test cases

function testSortObjects() {
  const tcs = [
    {
      input1: cartItems,
      exp: [
        {
          name: "oil",
          price: 458,
        },
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
      ],
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = sortObjects(tcs[i].input1);
    if (compareObj(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//compare objects
function compareObj(got, exp) {
  for (let i = 0; i < got.length; i++) {
    for (let prop in got[i]) {
      if (got[i][prop] != exp[i][prop]) {
        return false;
      }
    }
  }
  return true;
}
testSortObjects();
