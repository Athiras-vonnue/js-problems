let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

//Q9: Write a function to calculate and print the average marks for all students in a specific subject.

const avgSubMarks = (classObj, subject) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  let students = classObj.students;

  let totalObtained = totalSubMarks(classObj, subject);

  return totalObtained / students.length;
};

//Q10: Write a function to calculate and print the total marks for all students in a specific subject.

const totalSubMarks = (classObj, selectedSub) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  let totalObtained = 0;
  const students = classObj.students;

  students.forEach((student) => {
    let subjects = student.marks;

    subjects.forEach((sub) => {
      if (selectedSub.toLowerCase() === sub.subject.toLowerCase()) {
        totalObtained += sub.mark;
      }
    });
  });

  return totalObtained;
};

//testcases
function testAvgSubMarks() {
  const tcs = [
    {
      input1: classObj,
      input2: "Maths",
      exp: 46,
    },
    {
      input1: classObj,
      input2: "Eng", // sub not available return 0
      exp: 0,
    },
    {
      input1: [],
      input2: "Physics",
      exp: "invalid",
    },
    {
      input1: {},
      input2: "Chemistry",
      exp: "invalid",
    },
  ];

  let i = 0;
  while (tcs[i]) {
    let got = avgSubMarks(tcs[i].input1, tcs[i].input2);
    if (got === tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testAvgSubMarks();

//test case for findSum

function testTotalSubMarks() {
  const tcs = [
    {
      input1: classObj,
      input2: "Maths",
      exp: 184,
    },
    {
      input1: classObj,
      input2: "mat", // subject not available return 0
      exp: 0,
    },
    {
      input1: [],
      input2: "Maths",
      exp: "invalid",
    },
    {
      input1: {},
      input2: "Physics",
      exp: "invalid",
    },
  ];

  let i = 0;
  while (tcs[i]) {
    let got = totalSubMarks(tcs[i].input1, tcs[i].input2);
    if (got === tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}
testTotalSubMarks();
