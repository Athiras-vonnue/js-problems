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

//21: Write a function to find and print the subject with the highest total marks.

const highestTotalMark = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  let highestTotal = 0;
  const markArray = totalMarksForSubjects(classObj);

  markArray.forEach((mark) => {
    if (highestTotal < mark.totalObtained) highestTotal = mark.totalObtained;
  });

  return markArray.filter((mark) => mark.totalObtained === highestTotal);
};

//Q22: Write a function to find and print the subject with the lowest total marks.

const lowestTotalMark = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  let markArray = totalMarksForSubjects(classObj);
  let lowestTotal = markArray[0].totalObtained;

  markArray.forEach((mark) => {
    if (lowestTotal > mark.totalObtained) lowestTotal = mark.totalObtained;
  });

  return markArray.filter((mark) => mark.totalObtained === lowestTotal);
};

//function to find total marks for all subjects

function totalMarksForSubjects(classObj) {
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
}

function testHighestTotalMark() {
  const tcs = [
    {
      input1: classObj,
      exp: [{ name: "Maths", totalObtained: 184 }],
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
    let got = highestTotalMark(tcs[i].input1);

    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testHighestTotalMark();

//testcases

function testLowestTotalMark() {
  const tcs = [
    {
      input1: classObj,
      exp: [{ name: "English", totalObtained: 121 }],
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
    let got = lowestTotalMark(tcs[i].input1);

    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testLowestTotalMark();

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
