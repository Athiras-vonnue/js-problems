//Return the next number from the integer passed

function findNext(num) {
  return num + 1;
}
console.log(findNext(5));

//Area of a Triangle

function area(height, base) {
  return (base * height) / 2;
}

console.log(area(3, 2));

//Add up the Numbers from a Single Number

function addNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(addNumbers(4));

//Matchstick Houses

function matchHouses(house) {
  let sticks = 6;
  if (house == 0) {
    return 0;
  } else if (house === 1) {
    return sticks;
  } else if (house > 1) {
    sticks = sticks * house;
    sticks = sticks - (house - 1);

    return sticks;
  }
}

console.log(matchHouses(87));

//Left Shift by Powers of Two

function shiftToLeft(num, pow) {
  let power = 2;
  for (let i = 1; i < pow; i++) {
    power = 2 * power;
  }
  return num * power;
}
console.log(shiftToLeft(10, 3));

//Find the smallest and Biggest Numbers

function minMax(arr) {
  let max = arr[0];
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      s;
      min = arr[i];
    }
  }

  console.log(max, min);
}

console.log(minMax([13, 20, 3, 42, 5]));
