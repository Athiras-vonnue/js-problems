function canVote(age) {
  if (typeof age !== "number" || age < 0) return -1;
  else if (age > 0) {
    return age >= 18 ? true : false;
  }
}

function testCanVote() {
  const tcs = [
    {
      input: 10,
      exp: false,
    },
    {
      input: "18",
      exp: -1,
    },
    {
      input: 20,
      exp: true,
    },
    {
      input: -18,
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = canVote(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testCanVote();
