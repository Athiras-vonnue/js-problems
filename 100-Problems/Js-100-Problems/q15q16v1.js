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

//Function to find subject with the highest and lowest average marks

const subjectWithAvg = (classObj, operation) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return [];

  const subjectArray = subjects(classObj);
  let avgArray = [];
  let initialValue = operation === "highestAverage" ? 0 : 100; // setting initial values

  subjectArray.map((subject) => {
    let total = 0;
    let subjectName = subject;
    const students = classObj.students;

    students.forEach((student) => {
      student.marks.find((sub) => {
        if (sub.subject === subject) {
          total += sub.mark;
        }
      });
    });

    let average = total / students.length;

    if (operation == "highestAverage") {
      if (initialValue < average) {
        initialValue = average;
      }
    } else if (operation == "lowestAverage") {
      if (initialValue > average) {
        initialValue = average;
      }
    } else {
      return [];
    }
    avgArray.push({ subjectName, average });
  });

  return avgArray
    .filter((avg) => avg.average === initialValue)
    .map((sub) => sub.subjectName);
};

//Q15 & Q16: Write a function to find and print the subject with the highest/lowest average marks.

//testcases

function testSubjectWithAvg() {
  const tcs = [
    {
      input1: classObj,
      input2: "highestAverage",
      exp: ["Maths"],
    },
    {
      input1: classObj,
      input2: "lowestAverage",
      exp: ["English"],
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
    let got = subjectWithAvg(tcs[i].input1, tcs[i].input2);

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

testSubjectWithAvg();
