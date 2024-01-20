//Random password generator using do-while loop
/*
Im working on this file and no need to test this
Use of bult-in functions like Math.floor() and Math.random()
*/

function generatePassword(length) {
  if (length > 0) {
    let password = "";
    let randomNumber = 0;
    let alphabets = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      "!",
      "$",
      "%",
      "#",
      "&",
      "*",
    ];
    let i = 0;
    do {
      password += alphabets[randomNumber];
      randomNumber = Math.floor(Math.random() * alphabets.length) + 1; //use of in-built functions
      i++;
    } while (i != length);
    return password;
  } else {
    return -1;
  }
}

function testGeneratePassword() {
  const tcs = [
    {
      input: 5,
      exp: 5,
    },
    {
      input: 7,
      exp: 7,
    },
    {
      input: -7,
      exp: undefined,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = generatePassword(tcs[i].input);
    if (got.length === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testGeneratePassword();
