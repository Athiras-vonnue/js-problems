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
        while (j < newWord.length) {
          replaced += newWord[j];
          j++;
        }
        sliceWord = "";
        index = -1;
      }

      if (!word[index]) index = 0;
      else index++;
    } else {
      replaced += sentence[i];
    }
    i++;
  }
  return replaced;
}

//test function

function testReplaceWord() {
  const tcs = [
    {
      input1: "Hi there.",
      input2: "there",
      input3: "All",
      exp: "Hi All.",
    },
    {
      input1: "This is my JS Program process.  ",
      input2: "Program",
      input3: "Problem",
      exp: "This is my JS Problem process.  ",
    },
    // {
    //   input1:
    //     "My name is John, This guy is very intelligent and John have some ideas",
    //   input2: "John",
    //   input3: "Ram",
    //   exp: "My name is Ram, This guy is very intelligent and Ram have some ideas",
    // },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = replaceWord(tcs[i].input1, tcs[i].input2, tcs[i].input3);
    console.log(got);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testReplaceWord();
