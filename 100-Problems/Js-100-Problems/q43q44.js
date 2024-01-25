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

//function to find and print the subject(s) in which all students scored above/below a certain mark.

//Function to store subjects in an array

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

const subjectWithAllStudentsScoredBasedOnSpecificMark = (choice) => {
  if (!choice) return "invalid";
  const students = classObj.students;
  const specificMark = 35;
  let subjectName = "";
  let countOfStudents = 0;

  const resArray = subjects().map((sub) => {
    subjectName = sub;
    countOfStudents = 0;

    students.forEach((student) => {
      const subjects = student.marks;

      subjects.forEach((subject) => {
        if (sub === subject.subject) {
          switch (choice) {
            case "above":
              if (subject.mark >= specificMark) {
                countOfStudents++;
              }
              break;

            case "below":
              if (subject.mark < specificMark) {
                countOfStudents++;
              }
              break;

            default:
              return "Entered functionality not available! Please Enter the correct one";
          }
        }
      });
    });

    return { subjectName, countOfStudents };
  });

  return resArray.filter((res) => res.countOfStudents === students.length);
};

//Q43: Write a function to find and print the subject(s) in which all students scored above a certain mark.

const subjectWithAllStudentsScoredAboveOnSpecificMark = () => {
  const option = "above";

  return subjectWithAllStudentsScoredBasedOnSpecificMark(option);
};

console.log(subjectWithAllStudentsScoredAboveOnSpecificMark());

//Q44: Write a function to find and print the subject(s) in which all students scored below a certain mark.

const subjectWithAllStudentsScoredBelowOnSpecificMark = () => {
  const option = "below";

  return subjectWithAllStudentsScoredBasedOnSpecificMark(option);
};

console.log(subjectWithAllStudentsScoredBelowOnSpecificMark());
