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

//Q5: Write a function to print the subject names for a specific student.

const printSubjects = (classObj, studentID) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length ||
    !isAvail(studentID)
  )
    return "invalid";

  const subArray = [];
  const students = classObj.students;

  students.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;

      subjects.forEach((sub) => {
        subArray.push(sub.subject);
      });
    }
  });
  return subArray;
};

function isAvail(item) {
  const students = classObj.students;
  let res = students.find((itm) => itm.id === item);

  if (res != undefined) {
    return true;
  } else {
    return false;
  }
}

//testcases
function testPrintSubjects() {
  const tcs = [
    {
      input1: classObj,
      input2: "103",
      exp: ["English", "Maths", "Physics", "Chemistry", "Computer"],
    },
    {
      input1: [],
      input2: "103",
      exp: "invalid",
    },
    {
      input1: classObj,
      input2: 103,
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
    let got = printSubjects(tcs[i].input1, tcs[i].input2);
    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testPrintSubjects();

function compareArray(got, exp) {
  let i = 0;
  while (got[i] && exp[i]) {
    if (got[i] === exp[i]) {
      return true;
    }

    i++;
  }
  return false;
}


