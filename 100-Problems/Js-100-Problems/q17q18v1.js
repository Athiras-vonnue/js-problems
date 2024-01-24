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

//Q17: Write a function to calculate and print the overall marks for the class.

const overallMarks = (obj) => {
  if (typeof obj !== "object" || Array.isArray(obj) || !Object.keys(obj).length)
    return "invalid";

  let sum = 0;
  const students = obj.students;

  students.forEach((student) => {
    let subject = student.marks;
    subject.map((sub) => {
      sum += sub.mark;
    });
  });

  return sum;
};

//Q18: Write a function to calculate and print the overall average marks for the class.

const overallAvgMark = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  let overallAverage = 0;
  const students = classObj.students;

  students.forEach((student) => {
    let subject = student.marks;
    let sum = overallMarks(classObj);
    let length = subject.length * students.length;

    overallAverage = sum / length;
  });

  return overallAverage;
};

//testcases

function testOverallMarks() {
  const tcs = [
    {
      input1: classObj,
      exp: 723,
    },
    {
      input1: "classObj",
      exp: "invalid",
    },
    {
      input1: {},

      exp: "invalid",
    },
    {
      input1: [],
      exp: "invalid",
    },
  ];

  let i = 0;

  while (tcs[i]) {
    let got = overallMarks(tcs[i].input1);

    if (got === tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}
testOverallMarks();

function testOverallAvgMark() {
  const tcs = [
    {
      input1: classObj,
      exp: 36.15,
    },
    {
      input1: "classObj",
      exp: "invalid",
    },
    {
      input1: {},

      exp: "invalid",
    },
    {
      input1: [],
      exp: "invalid",
    },
  ];

  let i = 0;

  while (tcs[i]) {
    let got = overallAvgMark(tcs[i].input1);

    if (got === tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}
testOverallAvgMark();
