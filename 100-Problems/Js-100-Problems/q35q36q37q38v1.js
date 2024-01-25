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

//Function to find perentage

const percentage = (obtained, total) => {
  return `${((obtained / total) * 100).toFixed(2)}%`;
};

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

//function to find and print the subject with the highest total marks.

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

//function to find and print the subject with the lowest total marks.

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

//Function to find and print the student(s) with the percentage of marks.

const studentWithPercentage = (obj, choice, option) => {
  if (typeof obj !== "object" || Array.isArray(obj) || !Object.keys(obj).length)
    return "invalid";

  let name = "";
  let totalObtained = 0;
  let sumOfMarks = [];

  if (choice === "studentWithPercentage") totalMark = 250;
  else if (
    choice === "subjectWithHighestPercentage" ||
    "subjectWithLowestPercentage"
  )
    totalMark = 200;
  else return "invalid";

  switch (choice) {
    case "studentWithPercentage":
      sumOfMarks = studentWithTotal(obj, option);
      break;

    case "subjectWithHighestPercentage":
      sumOfMarks = highestTotalMark(obj);
      break;

    case "subjectWithLowestPercentage":
      sumOfMarks = lowestTotalMark(obj);
      break;

    default:
      return "Entered functionality not available! Please Enter the correct one";
  }

  sumOfMarks.forEach((mark) => {
    name = mark.name;
    totalObtained = mark.totalObtained;
  });

  const percentageObtained = percentage(totalObtained, totalMark);

  return { name, percentageObtained };
};

//testcases
function testStudentWithPercentage() {
  const tcs = [
    {
      obj: classObj,
      choice: "studentWithPercentage",
      option: "highestTotal",
      exp: { name: "Binu", percentageObtained: "96.40%" },
    },
    {
      obj: classObj,
      choice: "studentWithPercentage",
      option: "lowestTotal",
      exp: { name: "Mini SS", percentageObtained: "59.60%" },
    },

    {
      obj: classObj,
      choice: "subjectWithHighestPercentage",
      option: "highestTotal",
      exp: { name: "Maths", percentageObtained: "92.00%" },
    },

    {
      obj: classObj,
      choice: "subjectWithLowestPercentage",
      option: "lowestTotal",
      exp: { name: "English", percentageObtained: "60.50%" },
    },
    {
      obj: classObj,
      choice: "subjectWithLowestPercentageg",
      option: "lowestTotal",
      exp: "Entered functionality not available! Please Enter the correct one",
    },
  ];

  let i = 0;

  while (tcs[i]) {
    let got = studentWithPercentage(tcs[i].obj, tcs[i].choice, tcs[i].option);
    console.log(got);
    if (compareObj(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testStudentWithPercentage();

function compareObj(got, exp) {
  for (let prop in got) {
    if (got[prop] !== exp[prop]) return false;
  }

  return true;
}
