function replaceWord(sentence, word, newWord) {
  let wordsArray = [];
  wordsArray = sentence.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === word) {
      wordsArray[i] = newWord;
    }
  }
  return wordsArray.join(" ");
}

function testReplaceWord() {
  const tcs = [
    {
      input1: "Hi there",
      input2: "there",
      input3: "All",
      exp: "Hi All",
    },
    {
      input1: "This is my Program JS Program.",
      input2: "Program",
      input3: "Problem",
      exp: "This is my Problem JS Problem.",  //failed
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = replaceWord(tcs[i].input1, tcs[i].input2, tcs[i].input3);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testReplaceWord();
