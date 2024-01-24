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

//Q19:Write a function to calculate and print the total marks for each subject.

const totalMarksForSubjects = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  const students = classObj.students;
  let resultArray = subjects(classObj).map((name) => {
    let totalObtained = 0;

    students.forEach((student) => {
      student.marks.find((sub) => {
        if (sub.subject === name) {
          totalObtained += sub.mark;
        }
      });
    });

    return { name, totalObtained };
  });

  return resultArray;
};

//Q20:Write a function to calculate and print the average marks for each subject.

const avgMarkForSubjects = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  const students = classObj.students;
  let totalMarks = totalMarksForSubjects(classObj);

  let resultArray = totalMarks.map((mark) => {
    let average = 0;
    let sub = mark.name;

    average = mark.totalObtained / students.length;

    return { sub, average };
  });

  return resultArray;
};

//testcases

function testTotalMarksForSubjects() {
  const tcs = [
    {
      input1: classObj,
      exp: [
        { name: "English", totalObtained: 121 },
        { name: "Maths", totalObtained: 184 },
        { name: "Physics", totalObtained: 138 },
        { name: "Chemistry", totalObtained: 140 },
        { name: "Computer", totalObtained: 140 },
      ],
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
    let got = totalMarksForSubjects(tcs[i].input1);

    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}
testTotalMarksForSubjects();

function testAvgMarkForSubjects() {
  const tcs = [
    {
      input1: classObj,
      exp: [
        { sub: "English", average: 30.25 },
        { sub: "Maths", average: 46 },
        { sub: "Physics", average: 34.5 },
        { sub: "Chemistry", average: 35 },
        { sub: "Computer", average: 35 },
      ],
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
    let got = avgMarkForSubjects(tcs[i].input1);

    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}
testAvgMarkForSubjects();

function compareArray(got, exp) {
  let i = 0;
  while (got[i] && exp[i]) {
    for (let prop in got[i]) {
      if (got[i][prop] !== exp[i][prop]) return false;
    }
    i++;
  }
  return true;
}
