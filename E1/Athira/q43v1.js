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
  let p;
  let sorted = [];
  for (let i = 0; i < cartItems.length; i++) {
    for (let j = 0; j < cartItems.length; j++) {
      if (cartItems[i].price < cartItems[j].price) {
        p = cartItems[i];
        cartItems[i] = cartItems[j];
        cartItems[j] = p;
        // console.log(cartItems);
      }
    }
    //sorted = cartItems
  }
  return cartItems;
}

console.log(sortObjects());
