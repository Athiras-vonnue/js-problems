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

const totalMarksForSubjects = (classObj) => {
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
};

const avgMarkForSubjects = (classObj) => {
  if (
    typeof classObj !== "object" ||
    Array.isArray(classObj) ||
    !Object.keys(classObj).length
  )
    return "invalid";

  const students = classObj.students;
  let totalMarks = totalMarksForSubjects(classObj);

  let resultArray = totalMarks.map((mark) => {
    let average = 0;
    let sub = mark.name;

    average = mark.totalObtained / students.length;

    return { sub, average };
  });

  return resultArray;
};

//Q45: Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.

const SubjectWithAvgMarkAboveCertainMark = (specificMark) =>
  avgMarkForSubjects(classObj).filter(
    (average) => average.average >= specificMark
  );

console.log(SubjectWithAvgMarkAboveCertainMark(35));

//Q46: Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.

const SubjectWithAvgMArkBelowCertainMark = (specificMark) =>
  avgMarkForSubjects(classObj).filter(
    (average) => average.average < specificMark
  );

console.log(SubjectWithAvgMArkBelowCertainMark(35));
