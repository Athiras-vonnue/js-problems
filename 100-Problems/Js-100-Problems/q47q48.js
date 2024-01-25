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
const subjects = () => {
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
};

//Function to find and print the highest/lowest marks in each subject

const studentWithMarkInEachSubject = (choice, initialValue) => {
  const students = classObj.students;
  let mark = initialValue;

  const markArray = subjects().map((sub) => {
    students.forEach((student) => {
      let subjectWithMarks = student.marks;

      subjectWithMarks.forEach((subject) => {
        if (sub === subject.subject) {
          switch (choice) {
            case "highest":
              if (mark < subject.mark) mark = subject.mark;
              break;

            case "lowest":
              if (mark > subject.mark) mark = subject.mark;
              break;

            default:
              return "Sorry! choice not available, Please try with correct choice";
          }
        }
      });
    });

    return { sub, mark };
  });
  console.log(markArray);
  return markArray;
};

//Function to find and print the student(s) who scored the lowest/highest marks in at least one subject.

const studentWithMarkAtLeastOneSubject = (option, initialValue) => {
  const students = classObj.students;
  const highestMarkArray = [];
  const highestMarks = studentWithMarkInEachSubject(option, initialValue);
  let studentName = "";
  let subjectName = "";
  students.forEach((student) => {
    const subjects = student.marks;
    studentName = student.name;

    highestMarks.forEach((highestMark) => {
      subjects.forEach((subject) => {
        if (
          highestMark.mark === subject.mark &&
          highestMark.sub === subject.subject
        ) {
          mark = highestMark.mark;
          subjectName = highestMark.sub;

          highestMarkArray.push({ studentName, subjectName, mark });
        }
      });
    });
  });

  return highestMarkArray;
};

//Q47: Write a function to find and print the student(s) who scored the Highest marks in at least one subject.

const studentWithHighestMarkAtLeastOneSubject = () => {
  const option = "highest";
  initialValue = 0;

  return studentWithMarkAtLeastOneSubject(option, initialValue);
};

console.log(
  "Highest mark atleast one subject",
  studentWithHighestMarkAtLeastOneSubject()
);

//Q48: Write a function to find and print the student(s) who scored the lowest marks in at least one subject.

const studentWithLowestMarkAtLeastOneSubject = () => {
  const option = "lowest";
  initialValue = 50;

  return studentWithMarkAtLeastOneSubject(option, initialValue);
};

console.log(
  "Lowest mark atleast one subject",
  studentWithLowestMarkAtLeastOneSubject()
);
