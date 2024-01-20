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

const studentObj1 = {
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
    {
      name: "Aaron",
      roll_no: 6,
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

function addStudent(name, subjects, obj) {
  if (!name || !subjects || !obj) return "invalid";
  let students = obj.students;
  let student = {};

  student.name = name;
  student.roll_no = students.length;
  student.subjects = subjects;
  students[students.length] = student;

  return students;
}

//update student details
//asumes ids is in the order 0,1,2,3,4..

const updateStudent = (id, property, tobeUpdated, obj) => {
  if (id < 0 || id > obj.students.length || typeof id !== "number")
    return "invalid";

  let student = showStudent(obj, id);

  if (!student.hasOwnProperty(property)) return "invalid";

  student[property] = tobeUpdated;

  return student[property];
};

//update student marks

const updateMarks = (id, subject, score, obj) => {
  if (
    id < 0 ||
    id > obj.students.length ||
    typeof id !== "number" ||
    typeof score !== "number" ||
    score > 100 ||
    !subject ||
    !obj ||
    score < 0
  )
    return "invalid";

  let student = showStudent(obj, id);
  let result;

  for (let sub of student.subjects) {
    if (sub.subject === subject) {
      sub.score = score;
      result = sub.score;
      break;
    } else {
      result = "invalid";
    }
  }

  return result;
};

console.log(updateMarks(1, "Maths", 42, studentObj));

const testFindTopper = () => {
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
};

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
      input2: [
        { subject: "Maths", score: 89 },
        { subject: "Physics", score: 90 },
        { subject: "Chemistry", score: 50 },
        { subject: "Computer", score: 100 },
        { subject: "English", score: 84 },
      ],
      input3: studentObj,
      expected: studentObj.students,
    },
    {
      input1: "",
      input2: [
        { subject: "Maths", score: 89 },
        { subject: "Physics", score: 90 },
        { subject: "Chemistry", score: 50 },
        { subject: "Computer", score: 100 },
        { subject: "English", score: 84 },
      ],
      input3: studentObj,
      expected: "invalid",
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = addStudent(tcs[i].input1, tcs[i].input2, tcs[i].input3);
    if (compareValue(got, tcs[i].expected)) {
      console.log(`testcase ${i + 1} passed`);
    } else {
      console.log(`testcase ${i + 1} failed`);
    }
  }
}

function testUpdateStudent() {
  const tcs = [
    {
      input1: 1,
      input2: "name",
      input3: "Eliza",
      input4: studentObj,
      expected: "Eliza",
    },
    {
      input1: 7,
      input2: "name",
      input3: "Eliza",
      input4: studentObj,
      expected: "invalid",
    },
    {
      input1: 2,
      input2: "age",
      input3: "Eliza",
      input4: studentObj,
      expected: "invalid",
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = updateStudent(
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

function testUpdateMarks() {
  const tcs = [
    {
      input1: "1",
      input2: "Maths",
      input3: 98,
      input4: studentObj,
      expected: "invalid",
    },
    {
      input1: 1,
      input2: "Mat",
      input3: 98,
      input4: studentObj,
      expected: "invalid",
    },
    {
      input1: 8,
      input2: "Maths",
      input3: 98,
      input4: studentObj,
      expected: "invalid",
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    let got = updateMarks(
      tcs[i].input1,
      tcs[i].input2,
      tcs[i].input3,
      tcs[i].input4
    );
    if (got === tcs[i].expected) {
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

// testFindTopper();
// testShowStudent();
// testAddStudent();
// testUpdateStudent();
testUpdateMarks();
