function isSentencePalindrome(sentence) {
  let reverse = "";
  let withoutSpace = "";

  if (sentence.length > 0) {
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        withoutSpace += sentence[i];
      }
    }
    for (let i = withoutSpace.length - 1; i >= 0; i--) {
      reverse += withoutSpace[i];
    }

    return withoutSpace === reverse ? true : false;
  }

  return -1;
}

//test function

function testIsSentencePalindrome() {
  const tcs = [
    {
      input: "madam in",
      exp: false,
    },
    {
      input: "nurs es run",
      exp: true,
    },
    {
      input: "Malayalam lang",
      exp: false,
    },
    {
      input: 123,
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = isSentencePalindrome(tcs[i].input);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testIsSentencePalindrome();
