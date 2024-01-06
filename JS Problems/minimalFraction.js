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

function minimalFraction(n1, n2) {
  let n1Res = n1;
  let n2Res = n2;
  let j;
  console.log(n1Res);
  do {
    j = 2;
    n1Res = divide(n1Res, j);
    n2Res = divide(n2Res, j);
    j++;
  } while (n1Res % j === 0 && n2Res % j == 0);

  return `${n1Res}/${n2Res}`;
}

console.log(minimalFraction(4, 12));
