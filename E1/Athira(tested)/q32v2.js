//Replace word

function replaceWord(sentence, word, newWord) {
  let replaced = "";
  sliceWord = "";
  let index = 0;

  let i = 0;
  while (sentence[i]) {
    if (sentence[i] === word[index]) {
      sliceWord += sentence[i];
      if (sliceWord === word) {
        let j = 0;
        while (newWord[j]) {
          replaced += newWord[j];
          j++;
        }
        sliceWord = "";
        index = -1;
      }

      if (!word[index]) index = 0;
      else index++;
    } else {
      replaced += sentence;
    }
    i++;
  }
  return replaced;
}

//test function

function testReplaceWord() {
  const tcs = [
    {
      input1: "Hi there",
      input2: "there",
      input3: "All",
      exp: "Hi All",
    },
    {
      input1: "This is my JS Program",
      input2: "Program",
      input3: "Problem",
      exp: "This is my JS Problem",
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
