//count words in a sentence

function countWords(string) {
  if (string.length > 0) {
    let count = 1;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        count++;
      }
    }

    return count;
  }

  return -1;
}
//test function

function testCountWords() {
  const tcs = [
    {
      input: "madam is in the room",
      exp: 5,
    },
    {
      input: "nurses run come",
      exp: 3,
    },
    {
      input: "Malayalam language is the very special language",
      exp: 7,
    },
    {
      input: [],
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = countWords(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testCountWords();
