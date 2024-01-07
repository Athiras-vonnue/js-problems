function subtractNumbers(num1, num2) {
  let res = num1 - num2;
  if (!isNaN(res)) {
    return res;
  } else {
    return false;
  }
}

function divide(n1, n2) {
  let quotient = 0;
  let res = 0;
  if (n1 < n2) {
    res = n2;
    n2 = n1;
  } else {
    res = n1;
  }
  for (let i = 0; res >= n2; i++) {
    res = subtractNumbers(res, n2);
    quotient = i + 1;
  }
  return quotient;
}

function commonFactor(n1, n2) {
  let i = 2;
  let gcd = 0;
  while (n1 >= i && n2 >= i) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
    }
    i++;
  }
  return gcd;
}
function minimalFraction(n1, n2) {
  let gcd = commonFactor(n1, n2);
  let n1Res = divide(n1, gcd);
  let n2Res = divide(n2, gcd);

  return `${n1Res}/${n2Res}`;
}

console.log(minimalFraction(25, 5));
