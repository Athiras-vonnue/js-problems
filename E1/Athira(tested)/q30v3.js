//capitalize first letter of each word in a sentence

function capitalizeLetter(string) {
  if (!string || typeof string != "string") return -1;

  let smallLetters = "abcdefghijklmnopqrstuvwxyz";
  let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sentence = "";

  for (let i = 0; i < string.length; i++) {
    if (i === 0 || (string[i - 1] === " " && string[i] !== " ")) {
      for (let j = 0; j < smallLetters.length; j++) {
        if (string[i] === smallLetters[j]) {
          sentence += capitalLetters[j];
        }
      }
    } else {
      sentence += string[i];
    }
  }

  return sentence;
}

//test function

function testCapitalizeLetter() {
  const tcs = [
    {
      input: "madam is",
      exp: "Madam Is",
    },
    {
      input: "nurses run",
      exp: "Nurses Run",
    },
    {
      input: "malayalam language is the very special language",
      exp: "Malayalam Language Is The Very Special Language",
    },
    {
      input: "",
      exp: -1,
    },
    {
      input: 123345,
      exp: -1,
    },
    {
      input: { name: "Doe" },
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = capitalizeLetter(tcs[i].input);

    if (compareStr(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

function compareStr(got, exp) {
  for (let i = 0; i < got.length; i++) {
    if (got[i] !== exp[i]) return false;
  }

  return true;
}

testCapitalizeLetter();
