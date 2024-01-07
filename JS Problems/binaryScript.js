function getBinary(num) {
  if (typeof num !== "number") return "invalid";

  let i = 0;
  let res = "";
  binary = "";

  if (num === 0) {
    res += "*";
  }

  while (num) {
    if (num % 2 === 0) {
      res += "*";
    } else {
      res += "+";
    }

    num = Math.floor(num / 2);
  }

  let k = res.length - 1;
  while (res[k]) {
    binary += res[k];
    k--;
  }
  return binary;
}

console.log(getBinary(5));

//testcases
