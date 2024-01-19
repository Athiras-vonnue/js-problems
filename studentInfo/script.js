const studentObj = {
  class: "A",
  students: [
    {
      name: "Joan",
      roll_no: 1,
      subjects: [
        { subject: "Maths", score: 80 },
        { subject: "Physics", score: 70 },
        { subject: "Chemistry", score: 50 },
        { subject: "Computer", score: 100 },
        { subject: "English", score: 60 },
      ],
    },
    {
      name: "Ann",
      roll_no: 2,
      subjects: [
        { subject: "Maths", score: 29 },
        { subject: "Physics", score: 34 },
        { subject: "Chemistry", score: 67 },
        { subject: "Computer", score: 90 },
        { subject: "English", score: 59 },
      ],
    },
    {
      name: "Tom",
      roll_no: 3,
      subjects: [
        { subject: "Maths", score: 89 },
        { subject: "Physics", score: 90 },
        { subject: "Chemistry", score: 50 },
        { subject: "Computer", score: 100 },
        { subject: "English", score: 84 },
      ],
    },
    {
      name: "Mary",
      roll_no: 4,
      subjects: [
        { subject: "Maths", score: 40 },
        { subject: "Physics", score: 70 },
        { subject: "Chemistry", score: 80 },
        { subject: "Computer", score: 90 },
        { subject: "English", score: 80 },
      ],
    },
    {
      name: "Janet",
      roll_no: 5,
      subjects: [
        { subject: "Maths", score: 89 },
        { subject: "Physics", score: 90 },
        { subject: "Chemistry", score: 50 },
        { subject: "Computer", score: 100 },
        { subject: "English", score: 84 },
      ],
    },
  ],
};

//Total marks for all students

const sumOfMarks = (studentObj) => {
  let sumArray = [];

  const students = studentObj.students;

  students.forEach((student) => {
    let name = student.name;
    let sum = 0;

    student.subjects.forEach((subject) => {
      sum += subject.score;
    });

    sumArray.push({ name, sum });
  });

  return sumArray;
};

//find topper in the class

const findTopper = (obj) => {
  if (typeof obj !== "object" || !obj || Array.isArray(obj)) return [];

  let total = sumOfMarks(obj);
  let maxMark = total[0].sum;

  total.forEach((score) => {
    if (maxMark < score.sum) maxMark = score.sum;
  });

  return total
    .filter((score) => score.sum === maxMark)
    .map((score) => score.name);
};

//Find the student with lowest score in the class

const findLowest = (obj) => {
  if (typeof obj !== "object" || !obj || Array.isArray(obj)) return [];

  let total = sum(obj);
  let minMark = total[0].sum;

  total.forEach((score) => {
    if (minMark > score.sum) minMark = score.sum;
  });

  return total
    .filter((score) => score.sum === minMark)
    .map((score) => score.name);
};

//print marks of a specific student

const showStudent = (obj, id) => {
  if (
    typeof obj !== "object" ||
    !obj ||
    Array.isArray(obj) ||
    typeof id !== "number"
  )
    return [];

  let students = obj.students;

  return students.find((student) => student.roll_no === id);
};

//add new student in the db

function addStudent(name, roll_no, subjects, obj) {
  let students = obj.students;
  let student = {};

  student.name = name;
  student.roll_no = roll_no;
  student.subjects = subjects;
  students[students.length] = student;

  return students;
}

function updateStudent(id, property, tobeUpdated, obj) {
  let student = showStudent(obj, id);
}
//testcases

function testFindTopper() {
  const tcs = [
    {
      input: studentObj,
      expected: ["Tom", "Janet"],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: "",
      expected: [],
    },
    {
      name: {},
      expected: [],
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = findTopper(tcs[i].input);
    if (compareValue(got, tcs[i].expected)) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

function testShowStudent() {
  const tcs = [
    {
      input1: studentObj,
      input2: 5,
      expected: {
        name: "Janet",
        roll_no: 5,
        subjects: [
          { subject: "Maths", score: 89 },
          { subject: "Physics", score: 90 },
          { subject: "Chemistry", score: 50 },
          { subject: "Computer", score: 100 },
          { subject: "English", score: 84 },
        ],
      },
    },
    {
      input: [],
      input2: 3,
      expected: [],
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = showStudent(tcs[i].input1, tcs[i].input2);
    if (compareValue(got, tcs[i].expected)) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

function testAddStudent() {
  const tcs = [
    {
      input1: "Aaron",
      input2: 6,
      input3: [
        { subject: "Maths", score: 89 },
        { subject: "Physics", score: 90 },
        { subject: "Chemistry", score: 50 },
        { subject: "Computer", score: 100 },
        { subject: "English", score: 84 },
      ],
      input4: studentObj,
      expected: studentObj.students,
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = addStudent(
      tcs[i].input1,
      tcs[i].input2,
      tcs[i].input3,
      tcs[i].input4
    );

    if (compareValue(got, tcs[i].expected)) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}
const compareValue = (got, exp) => {
  let i = 0;

  while (got[i] !== exp[i]) {
    i++;
    return false;
  }

  return true;
};

//testFindTopper();
//testShowStudent();
testAddStudent();
