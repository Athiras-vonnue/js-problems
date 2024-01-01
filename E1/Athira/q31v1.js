function removeSpaces(sentence) {
  let withoutSpace = "";

  if (sentence.length > 0) {
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        withoutSpace += sentence[i];
      }
    }

    return withoutSpace;
  }

  return -1;
}

//test function

function testRemoveSpaces() {
  const tcs = [
    {
      input: "madam in",
      exp: "madamin",
    },
    {
      input: "nurses run",
      exp: "nursesrun",
    },
    {
      input: " Malayalam lang ",
      exp: "Malayalamlang",
    },
    {
      input: [],
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = removeSpaces(tcs[i].input);

    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testRemoveSpaces();
