//capitalize first letter of each word in a sentence

function capitalizeLetter(string) {
  let sentence = "";
  let wordsArray = [];

  if (string.length > 0) {
    wordsArray = string.split(" ");
    for (let word of wordsArray) {
      for (let i = 0; i < word.length; i++) {
        if (i == 0) {
          sentence += word[0].toUpperCase();
        } else {
          sentence += word[i];
        }
      }
      sentence += " ";
    }
    return sentence;
  }
  return [-1];
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
      input: "Malayalam language is the very special language",
      exp: "Malayalam Language Is The Very Special Language",
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
  if (got.length - 1 !== exp.length) {
    return false;
  } else {
    for (let i = 0; i < got.length; i++) {
      got[i] === exp[i];
      return true;
    }
  }
  return false;
}

testCapitalizeLetter();
