function guessingGame(number) {
  //To generate the random numbers
  //const randomNumber = Math.floor(Math.random() * 10) + 1;

  //let input = prompt("Guess a number between 1 to 10");
  let secretNumber = 10;

  while (secretNumber === number) {
    return true;
  }
  return false;
}

console.log(guessingGame());
function TestGuessingGame() {
  const tcs = [
    {
      input: 1,
      exp: false,
    },
    {
      input: 10,
      exp: true,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = guessingGame(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

TestGuessingGame();
