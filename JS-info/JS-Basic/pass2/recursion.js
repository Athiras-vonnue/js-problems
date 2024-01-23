function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3));

//recursive thinking

function pow(x, n) {
  if (n === 1) return x;
  else return x * pow(x, n - 1);
}
console.log(pow(2, 4));

//problem 2

function sum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(10));

//recursive way

function sum1(n) {
  if (n == 0) return n;
  else return n + sum1(n - 1);
}

console.log(sum1(5));

/****/
