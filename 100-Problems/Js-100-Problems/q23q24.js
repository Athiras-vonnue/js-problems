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

//function to store subjects in an array

function subjects(classObj) {
  const subjectArray = [];
  const students = classObj.students;
  students.forEach((student) => {
    let subjects = student.marks;

    subjects.map((sub) => {
      if (!subjectArray.includes(sub.subject)) {
        subjectArray.push(sub.subject);
      }
    });
  });

  return subjectArray;
}

//function to find and print the student(s) with the highest & lowest average marks.

const averageMark = (totalMark, classObj) => {
  let average = 0;
  let name = "";

  totalMark.map((total) => {
    average = total.totalObtained / subjects(classObj).length;
    name = total.name;
  });

  return { name, average };
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

  return sumArray.filter((sum) => sum.totalObtained === score);
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

//Q23: Write a function to find and print the student(s) with the highest average marks.

const highestAverageMark = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  return averageMark(studentWithTotal(classObj, "highestTotal"), classObj);
};

//Q24: Write a function to find and print the student(s) with the lowest average marks.

const lowestAvgMark = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  return averageMark(studentWithTotal(classObj, "lowestTotal"), classObj);
};

//testcases

function testHighestAverageMark() {
  const tcs = [
    {
      input1: classObj,
      exp: { name: "Binu", average: 48.2 },
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
    let got = highestAverageMark(tcs[i].input1);

    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testHighestAverageMark();

//testcase

function testLowestAvgMark() {
  const tcs = [
    {
      input1: classObj,
      exp: { name: "Mini SS", average: 29.8 },
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
    let got = lowestAvgMark(tcs[i].input1);

    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testLowestAvgMark();

function compareArray(got, exp) {
  for (let prop in got) {
    if (got[prop] !== exp[prop]) return false;
  }

  return true;
}
