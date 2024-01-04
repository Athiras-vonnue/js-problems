function guessingGame(input) {
  if (input < 0 || typeof input !== "number") return null;
  //To generate the random numbers
  //const randomNumber = Math.floor(Math.random() * 10) + 1;

  let secretNumber = 10;
  //input = prompt("Guess a number between 1 to 10");

  while (secretNumber === input) {
    //alert("You got it!");
    return true;
  }
  //alert("lost!");
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
    {
      input: -1,
      exp: null,
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
