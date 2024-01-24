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

//Function to find the lowest and highest mark of a student

const studentsWithMarkInSub = (classObj, operation, selectedSub) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length ||
    !isAvail(selectedSub)
  )
    return [];

  const students = classObj.students;
  let score = students[0].marks.find((sub) => sub.subject === selectedSub).mark;

  students.forEach((student) => {
    let subjectMark = student.marks.find(
      (sub) => sub.subject === selectedSub
    ).mark;

    switch (operation) {
      case "highestScore":
        if (subjectMark > score) score = subjectMark;
        break;
      case "lowestScore":
        if (subjectMark < score) score = subjectMark;
        break;
      default:
        score = 0;
    }
  });

  let resultarray = students.map((student) => {
    if (student.marks.find((sub) => sub.mark === score)) return student.name;
  });

  return resultarray.filter((name) => name !== undefined);
};

//Q.11 & 12: Write a function to find and print the student with the highest/lowest marks in a specific subject.

//testcases

function testStudentsWithMarkInSub() {
  const tcs = [
    {
      input1: classObj,
      input2: "highestScore",
      input3: "Maths",
      exp: ["Mini SS", "Binu"],
    },
    {
      input1: classObj,
      input2: "lowestScore",
      input3: "Maths",
      exp: ["Aju"],
    },
    {
      input1: classObj,
      input2: "lowestScored",
      input3: "Maths",
      exp: [],
    },
    {
      input1: classObj,
      input2: "unknown input",
      input3: "Maths",
      exp: [],
    },
    {
      input1: {},
      input2: "lowestScore",
      input3: "Maths",
      exp: [],
    },
  ];

  let i = 0;

  while (tcs[i]) {
    let got = studentsWithMarkInSub(
      tcs[i].input1,
      tcs[i].input2,
      tcs[i].input3
    );
    console.log(got);
    if (compareArray(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testStudentsWithMarkInSub();

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

function isAvail(item) {
  const students = classObj.students;
  let res = students[0].marks.find((sub) => sub.subject === item);

  if (res != undefined) {
    return true;
  } else {
    return false;
  }
}
