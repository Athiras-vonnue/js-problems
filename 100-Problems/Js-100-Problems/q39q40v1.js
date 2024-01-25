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

//Function to find perentage

const percentage = (obtained, total) => {
  return `${((obtained / total) * 100).toFixed(2)}%`;
};

//function to find and print the student(s) with the highest & lowest percentage of marks in a specific subject.

const studentWithPercentageInSubject = (option, subjectName) => {
  const students = classObj.students;
  const totalMark = 50;
  let percentages = 0;
  let studentName = "";
  let subjectMark = 0;
  let total = option === "highest" ? 0 : totalMark;

  const markArray = students.map((student) => {
    const subjects = student.marks;
    studentName = student.name;

    subjects.forEach((subject) => {
      let mark = subject.mark;

      if (subject.subject === subjectName) {
        subjectMark = mark;

        switch (option) {
          case "highest":
            if (mark >= total) {
              total = mark;
            }
            break;

          case "lowest":
            if (mark <= total) {
              total = mark;
            }
            break;

          default:
            return "Entered functionality not available! Please Enter the correct one";
        }
      }
    });

    percentages = percentage(subjectMark, totalMark);

    return { studentName, subjectName, percentages };
  });

  return markArray.filter(
    (mark) => mark.percentages === percentage(total, totalMark)
  );
};

//testcases
function testStudentWithPercentageInSubject() {
  const tcs = [
    {
      choice: "highest",
      subject: "Maths",
      exp: [
        { studentName: "Mini SS", subjectName: "Maths", percentages: "98.00%" },
        { studentName: "Binu", subjectName: "Maths", percentages: "98.00%" },
      ],
    },
    {
      choice: "lowest",
      subject: "Maths",
      exp: [
        { studentName: "Aju", subjectName: "Maths", percentages: "76.00%" },
      ],
    },
  ];

  let i = 0;

  while (tcs[i]) {
    let got = studentWithPercentageInSubject(tcs[i].choice, tcs[i].subject);
    if (compareObj(got, tcs[i].exp)) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testStudentWithPercentageInSubject();

function compareObj(got, exp) {
  let i = 0;
  while (got[i] && exp[i]) {
    for (let prop in got[i]) {
      if (got[i][prop] !== exp[i][prop]) return false;
    }
    i++;
  }
  return true;
}
