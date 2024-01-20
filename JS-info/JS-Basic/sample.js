let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let sal in salaries) {
  sum += salaries[sal];
  // console.log(salaries[sal] * 2);
}
//console.log(sum);

let obj1 = {
  A: "Y",
  Age: 30,
};
let obj2 = {
  A: "Y",
  Age: 30,
};
for (let prop in obj1) {
  console.log(prop);
  if (prop in obj1 && prop in obj2) {
    if (obj1[prop] === obj2[prop]) console.log(true);
    else console.log(false);
  } else console.log(false);
}
