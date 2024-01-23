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

//Q7: Write a function to calculate and print the average marks for a specific student.

const findAverage = (classObj, studentID) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  let result = 0;
  let average = 0;
  const students = classObj.students;

  let total = findSum(classObj, studentID);

  students.forEach((student) => {
    let subjects = student.marks;
    average = total / subjects.length;
  });

  return average;
};

//Q8: Write a function to calculate and print the total marks for a specific student.

function findSum(classObj, studentID) {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  const students = classObj.students;

  let result = 0;

  students.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;
      for (let i = 0; i < subjects.length; i++) {
        result += subjects[i].mark;
      }
    }
  });

  return result;
}

//testcases
function testFindAverage() {
  const tcs = [
    {
      input1: classObj,
      input2: "101",
      exp: 32.6,
    },
    {
      input1: classObj,
      input2: "107", // id not available return 0
      exp: 0,
    },
    {
      input1: [],
      input2: "103",

      exp: "invalid",
    },
    {
      input1: {},
      input2: "103",
      exp: "invalid",
    },
  ];

  let i = 0;
  while (tcs[i]) {
    let got = findAverage(tcs[i].input1, tcs[i].input2);
    if (got === tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testFindAverage();

//test case for findSum

function testFindSum() {
  const tcs = [
    {
      input1: classObj,
      input2: "101",
      exp: 163,
    },
    {
      input1: classObj,
      input2: "107", // id not available return 0
      exp: 0,
    },
    {
      input1: [],
      input2: "103",
      exp: "invalid",
    },
    {
      input1: {},
      input2: "103",
      exp: "invalid",
    },
  ];

  let i = 0;
  while (tcs[i]) {
    let got = findSum(tcs[i].input1, tcs[i].input2);
    if (got === tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testFindSum();
