//date and time

let now = new Date();
console.log(now); // shows current date and time

//0 means 01.01.1970 UTC+0
let ms = new Date(0);
console.log(ms);

let ms1 = new Date(24 * 3600 * 1000);
//console.log(ms1);

//dates before 1970 has negative timestamps

let ms2 = new Date(-24 * 3600 * 1000);
console.log(ms2);

let date = new Date("2017-01-26");
//console.log(date);

//onsole.log(getFullYear());

let today = new Date();
today.setHours(0);
console.log(today);

//Autocorrection
let date1 = new Date(2013, 0, 32);
console.log(date1);

date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
console.log(date);

let date2 = new Date();
date2.setSeconds(date.getSeconds() + 70);
console.log(date2);

//date to number
date = new Date();
console.log(+date);

//date diff
let start = new Date();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date();
console.log(`The loop took ${end - start} ms`);

//date.now

start = Date.now();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
end = Date.now();

console.log(`The loop took ${end - start} ms`);

function getWeekDay(date) {
  let days = ["SU", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  return days[date.getDay()];
}

date = new Date(2024, 0, 11);
console.log(getWeekDay(date));
