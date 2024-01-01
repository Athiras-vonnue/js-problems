function rollingDie(specificNum) {
  let randomNumber = 0;
  let result = true;
  let i = 0;
  do {
    console.log(randomNumber, specificNum);
    randomNumber = Math.floor(Math.random() * 6) + 1;
    result = false;
    i++;
  } while (randomNumber !== specificNum && i <= 6);
  if (randomNumber === specificNum) {
    return true;
  }
  return result;
}

console.log(rollingDie(1));
