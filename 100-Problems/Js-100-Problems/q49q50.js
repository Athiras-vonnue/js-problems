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

//49: Write a function to calculate and print the total marks for each student

const printStudentsMarksTotal = () => {
  const students = classObj.students;
  let totalMark = 0;

  const totalMarksArray = students.map((student) => {
    const subjects = student.marks;
    let name = student.name;
    totalMark = 0;

    subjects.map((subject) => {
      totalMark += subject.mark;
    });

    return { name, totalMark };
  });

  return totalMarksArray;
};

console.log(
  "Total marks obtained for each students",
  printStudentsMarksTotal()
);

//Q50: Write a function to calculate and print the average marks for each student.

const printStudentsMarksAverage = () => {
  const totalArray = printStudentsMarksTotal();
  let average = 0;
  let name = "";

  return totalArray.map((total) => {
    average = 0;

    average = total.totalMark / subjects().length;
    name = total.name;

    return { name, average };
  });
};

console.log(
  "Average marks obtained for each students",
  printStudentsMarksAverage()
);
