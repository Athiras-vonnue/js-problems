//capitalize first letter of each word in a sentence

function capitalizeLetter(string) {
  let letter = "";
  let sentence = "";

  if (string.length > 0) {
    let index = [];
    let k = 1;
    for (let i = 1; i < string.length; i++) {
      index[0] = 0;
      if (string[i] === " ") {
        index[k] = i + 1;
        k++;
      }
    }
  }
  return -1;
}

console.log(capitalizeLetter("string hii"));

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
    {
      input: [],
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = capitalizeLetter(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//testCapitalizeLetter();
//
