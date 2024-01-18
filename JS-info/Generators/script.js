function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();
let sequence = [0, ...generateSequence()];
console.log(sequence);

for (let value of generator) {
  console.log(value);
}

let one = generator.next();
let two = generator.next();
let three = generator.next();

console.log(JSON.stringify(one));
console.log(JSON.stringify(two));
console.log(JSON.stringify(three));

let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log([...range]);

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* generatePasswordCodes() {
  yield* generateSequence(48, 57);
  yield* generateSequence(65, 90);
  yield* generateSequence(97, 122);
}
let str = "";
for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}
console.log(str);

function* gen() {
  let result = yield "2+2=?";
  console.log(result);
}

let generator1 = gen();
let question = generator1.next().value;
generator1.next(8);

/**/

function* gen() {
  let ask1 = yield "2+2=?";
  console.log(ask1);
  let ask2 = yield "3*3=?";
  console.log(ask2);
}
let generator2 = gen();
console.log(generator2.next().value);
console.log(generator2.next(4).value);
console.log(generator2.next(9).done);
