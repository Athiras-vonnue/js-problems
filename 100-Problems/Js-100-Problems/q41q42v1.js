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
function isAvail(item) {
  const students = classObj.students;
  let res = students.find((itm) => itm.id === item);

  if (res != undefined) {
    return true;
  } else {
    return false;
  }
}

//Function to find perentage

const percentage = (obtained, total) => {
  return `${((obtained / total) * 100).toFixed(2)}%`;
};

//function to find and print the subject(s) with the highest/lowest percentage of marks for a specific student

const printSubjectPercentageOfStudent = (obj, studentId, option) => {
  if (
    typeof obj !== "object" ||
    Array.isArray(obj) ||
    !Object.keys(obj).length ||
    !isAvail(studentId)
  )
    return "invalid";

  const students = classObj.students;
  const totalmark = 50;
  let subjectName = "";
  let studentName = "";
  let subjectArray = [];
  let subjectMark = 0;
  let obtainedPercentage = 0;

  students.forEach((student) => {
    const subjects = student.marks;

    studentName = student.name;
    if (student.id === studentId) {
      obtainedPercentage = subjects[0].mark;
      subjectArray = subjects.map((subject) => {
        subjectName = subject.subject;
        subjectMark = subject.mark;

        switch (option) {
          case "highest":
            if (obtainedPercentage <= subject.mark) {
              obtainedPercentage = subject.mark;
            }
            break;

          case "lowest":
            if (obtainedPercentage >= subject.mark) {
              obtainedPercentage = subject.mark;
            }
            break;

          default:
            return "Entered functionality not available! Please Enter the correct one";
        }

        return {
          studentName,
          subjectName,
          percentages: percentage(subjectMark, totalmark),
        };
      });
    }
  });

  return subjectArray.filter(
    (subject) =>
      subject.percentages === percentage(obtainedPercentage, totalmark)
  );
};

//Q41: Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.

const printSubjectWithHighestPercentageOfStudent = (classObj, studentId) => {
  const option = "highest";

  return printSubjectPercentageOfStudent(classObj, studentId, option);
};

console.log(printSubjectWithHighestPercentageOfStudent(classObj, "101"));

//Q42: Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student

const printSubjectWithLowestPercentageOfStudent = (classObj, studentId) => {
  const option = "lowest";

  return printSubjectPercentageOfStudent(classObj, studentId, option);
};

console.log(printSubjectWithLowestPercentageOfStudent(classObj, "101"));
