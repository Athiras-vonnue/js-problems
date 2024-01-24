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

//Function to find and print the student with the highest & lowest total marks

const studentWithTotal = (classObj, operation) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return [];

  const students = classObj.students;
  let score = findSum(classObj, students[0].id);

  let sumArray = students.map((student) => {
    let totalObtained = findSum(classObj, student.id);
    let name = student.name;

    if (operation == "highestTotal") {
      if (totalObtained > score) {
        score = totalObtained;
      }
    } else if (operation == "lowestTotal") {
      if (totalObtained < score) {
        score = totalObtained;
      }
    } else {
      return [];
    }

    return { name, totalObtained };
  });

  return sumArray
    .filter((sum) => sum.totalObtained === score)
    .map((student) => student.name);
};

//function to find total marks of all students

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

//Q 13 & Q 14: Write a function to find and print the student with the highest/lowest total marks.

//testcases

function testStudentWithTotal() {
  const tcs = [
    {
      input1: classObj,
      input2: "highestTotal",
      exp: ["Binu"],
    },
    {
      input1: classObj,
      input2: "lowestTotal",
      exp: ["Mini SS"],
    },
    {
      input1: classObj,
      input2: "unknown",
      exp: [],
    },
    {
      input1: {},
      input2: "unknown input",
      exp: [],
    },
    {
      input1: {},
      input2: "lowestTotal",
      exp: [],
    },
  ];

  let i = 0;

  while (tcs[i]) {
    let got = studentWithTotal(tcs[i].input1, tcs[i].input2);
    console.log(got);
    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

function compareArray(got, exp) {
  let i = 0;
  while (got[i] && exp[i]) {
    if (got[i] !== exp[i]) {
      return false;
    }
    i++;
  }
  return true;
}

testStudentWithTotal();
