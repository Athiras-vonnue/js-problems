//break statements

// let sum = 0;
// while (true) {
//   let value = 3;
//   if (!value) break;
//   sum = sum + value;
// }
//console.log(sum);

//continue statement

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
//labels for break and continue

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = console.log(`Value at coords(${i},${j})`, "");
    if (!input) break outer;
  }
}
console.log("done");

//grouping in switch case

let a = 5;
switch (a) {
  case 4:
    console.log("right");
    break;
  case 3: // grouping in switch case
  case 5:
    console.log("wrong");
    break;
}
