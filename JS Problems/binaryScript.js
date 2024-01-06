function getBinary(num) {
  let i = 0;
  let binary = "";
  while (num % 2 !=1) {
    if (num % 2 === 0) {
      binary += "*";
    } else {
      binary += "+";
    }

    num = Math.floor(num / 2);
    console.log(num);
  }
  return binary;
}


console.log(getBinary(6));

//testcases
