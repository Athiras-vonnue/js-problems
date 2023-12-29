//capitalize first letter of each word in a sentence
//count words in a sentence

function capitalizeLetter(string) {
  let words = [];
  if (string.length > 0) {
    let index = 0;
    i = 0;
    do {
      //not completed
      string = string[index].toUpperCase() + string[i + 1];
      index = i + 1;
      i++;
    } while (i < string.length);
    console.log(string);
  }

  return -1;
}

console.log(capitalizeLetter("string"));
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

testCapitalizeLetter();
