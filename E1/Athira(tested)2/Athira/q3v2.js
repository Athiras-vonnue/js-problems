// function to implement grading system

function grade(score) {
  if (typeof score === "number") {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 60 && score <= 69) {
      return "D";
    } else if (score >= 50 && score <= 59) {
      return "E";
    } else if (score >= 0 && score <= 49) {
      return "F";
    } else if (score < 0 && score > 100) {
      return -1;
    }
  }
  return -1;
}

//Test function

function testGrade() {
  const tcs = [
    {
      input: 90,
      exp: "A",
    },
    {
      input: 70,
      exp: "C",
    },
    {
      input: "12",
      exp: -1,
    },
    {
      input: 150,
      exp: -1,
    },
    {
      input: 30,
      exp: "F",
    },
    {
      input: 0,
      exp: "F",
    },
    {
      input: [],
      exp: -1,
    },
    {
      input: -50,
      exp: -1,
    },
    {
      input: "we",
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = grade(tcs[i].input);
    // console.log(got);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testGrade();
//console.log(typeof 100);
