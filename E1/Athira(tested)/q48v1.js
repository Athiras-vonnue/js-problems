// extract values from an array

const students = [
  {
    name: "Aaron",
    Age: 15,
    noOfSubjects: 5,
    mark: [
      { Subject: "Maths", mark: 69 },
      { Subject: "English", mark: 80 },
      { Subject: "Computer", mark: 85 },
    ],
  },
  {
    name: "Anu",
    Age: 15,
    noOfSubjects: 5,
    mark: [
      { Subject: "Maths", mark: 89 },
      { Subject: "English", mark: 100 },
      { Subject: "Computer", mark: 90 },
    ],
  },
  {
    name: "Banu",
    Age: 15,
    noOfSubjects: 5,
    mark: [
      { Subject: "Maths", mark: 29 },
      { Subject: "English", mark: 30 },
      { Subject: "Computer", mark: 45 },
    ],
  },
];

function extractValues(students, passMark) {
  if (students.length > 0) {
    let resultArray = [];
    for (let i = 0; i < students.length; i++) {
      let marks = students[i].mark;
      for (const mark of marks) {
        if (mark.Subject === "Maths" && mark.mark >= passMark) {
          resultArray[i] = students[i].name;
        }
      }
    }
    return resultArray;
  } else {
    return [-1];
  }
}

//test cases
function testExtractValues() {
  const tcs = [
    {
      input1: students,
      input2: 50,
      exp: ["Aaron", "Anu"],
    },
    {
      input1: students,
      input2: 20,
      exp: ["Aaron", "Anu", "Binu"],
    },

    {
      input1: [],
      input2: 30,
      exp: [-1],
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = extractValues(tcs[i].input1, tcs[i].input2);
    if (compareArray(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

testExtractValues();

function compareArray(got, exp) {
  if (got.length != exp.length) {
    return false;
  } else {
    for (let i = 0; i < got.length; i++) {
      if (got[i] === exp[i]) {
        return true;
      }
    }
  }
  return false;
}
