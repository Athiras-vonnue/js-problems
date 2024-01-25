console.clear();
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

/***************************************************************************/

let students = classObj.students;

//Q1: Write a function to print the name of the class: "class A"

const getClassName = () => classObj.name;
console.log("name", getClassName());

//Q2:Write a function to print the teacher's name: "Mary".

const printTeacherName = () => classObj.teacherName;
console.log("Teacher Name:", printTeacherName());

//Q3:Write a function to print the names of all the students in the class.

const printStudentsName = () => {
  const nameArray = [];
  for (i = 0; i < students.length; i++) {
    nameArray.push(students[i].name);
  }

  return nameArray;
};

console.log("Students Name:", printStudentsName());

//Q4:Write a function to print the IDs of all the students in the class.

const printStudentsId = () => {
  const idArray = [];

  for (i = 0; i < students.length; i++) {
    idArray.push(students[i].id);
  }

  return idArray;
};

console.log("Students Ids:", printStudentsId());

//Q5: Write a function to print the subject names for a specific student.

const printSubjects = () => {
  const studentID = "103";
  const subArray = [];

  students.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;

      subjects.forEach((sub) => {
        subArray.push(sub.subject);
      });
    }
  });
  return subArray;
};
console.log("Available Subjects:", printSubjects());

//Q6: Write a function to print the marks of a specific student in all subjects.

const printSubjectMarks = () => {
  const subjectArr = [];
  const studentID = "103";

  students.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;

      subjects.forEach((sub) => {
        subjectArr.push(`${sub.subject} : ${sub.mark}`);
      });
    }
  });

  return subjectArr;
};
console.log(printSubjectMarks());

//Q7: Write a function to calculate and print the average marks for a specific student.

const findAverage = (studentID) => {
  let result = 0;
  let average = 0;

  let total = findSum(studentID);
  students.forEach((student) => {
    let subjects = student.marks;
    average = total / subjects.length;
  });

  return average;
};

console.log("Average mark Obtained:", findAverage("102"));

//Q8: Write a function to calculate and print the total marks for a specific student.

function findSum(studentID) {
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
const studentID = "103";
console.log("Total Marks:" + findSum(studentID));

//Q9: Write a function to calculate and print the average marks for all students in a specific subject.

const subject = {
  english: "English",
  maths: "Maths",
  physics: "Physics",
  chemistry: "Chemistry",
  computer: "Computer",
};

const avgSubMarks = (subject) => {
  let totalObtained = 0;
  let avgObtained = 0;

  students.forEach((student) => {
    let subjects = student.marks;

    subjects.forEach((sub) => {
      if (subject === sub.subject) {
        totalObtained += sub.mark;
        avgObtained = totalObtained / students.length;
      }
    });
  });

  return avgObtained;
};

console.log(
  "Average Obtained in subject:",
  subject.english,
  ":",
  avgSubMarks(subject.english)
);

//Q10: Write a function to calculate and print the total marks for all students in a specific subject.

const totalSubMarks = (selectedSub) => {
  let totalObtained = 0;

  students.forEach((student) => {
    let subjects = student.marks;

    subjects.forEach((sub) => {
      if (selectedSub.toLowerCase() === sub.subject.toLowerCase()) {
        totalObtained += sub.mark;
      }
    });
  });

  return totalObtained;
};

console.log(
  "Total Obtained in subject:",
  subject.physics,
  ":",
  totalSubMarks(subject.physics)
);

//Function to find the lowest and highest mark of a student

const studentsWithMarkInSub = (operation, score) => {
  const selectedSub = "Maths";

  students.forEach((student) => {
    let subjectMark = student.marks.find(
      (sub) => sub.subject === selectedSub
    ).mark;

    if (operation == "highestScore") {
      if (subjectMark > score) score = subjectMark;
    } else if (operation == "lowestScore") {
      if (subjectMark < score) score = subjectMark;
    }
  });

  let resultarray = students.map((student) => {
    if (student.marks.find((sub) => sub.mark === score)) return student.name;
  });

  return resultarray.filter((name) => name !== undefined);
};

//Q.11: Write a function to find and print the student with the highest marks in a specific subject.

const studentsWithHighestMarkInSub = () => {
  let operation = "highestScore";
  let mark = 0;

  return studentsWithMarkInSub(operation, mark);
};

console.log(studentsWithHighestMarkInSub());

//Q.12 Write a function to find and print the student with the lowest marks in a specific subject.

const studentsWithLowestMarkInSub = () => {
  let operation = "lowestScore";
  let mark = 100;

  return studentsWithMarkInSub(operation, mark);
};

console.log(studentsWithLowestMarkInSub());

//Function to find and print the student with the highest & lowest total marks

const studentWithTotal = (operation, score) => {
  let sumArray = students.map((student) => {
    let totalObtained = findSum(student.id);
    let name = student.name;

    if (operation == "highestTotal") {
      if (totalObtained > score) {
        score = totalObtained;
      }
    } else if (operation == "lowestTotal") {
      if (totalObtained < score) {
        score = totalObtained;
      }
    }

    return { name, totalObtained };
  });

  return sumArray.filter((sum) => sum.totalObtained === score);
};

//Q 13: Write a function to find and print the student with the highest total marks.

const studentWithHighestTotal = () => {
  let operation = "highestTotal";
  let score = 0;

  return studentWithTotal(operation, score);
};

console.log(studentWithHighestTotal());

//Q14: Write a function to find and print the student with the lowest total marks.

const studentWithLowestTotal = () => {
  let operation = "lowestTotal";
  let score = 500;

  return studentWithTotal(operation, score);
};

console.log(studentWithLowestTotal());

//Function to store subjects in an array

const subjects = () => {
  const subjectArray = [];

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

console.log(subjects());

//Function to find subject with the highest and lowest average marks

const subjectWithAvg = (operation, highestAverage) => {
  const subjectArray = subjects();
  let avgArray = [];

  subjectArray.map((subject) => {
    let total = 0;
    let subjectName = subject;

    students.forEach((student) => {
      student.marks.find((sub) => {
        if (sub.subject === subject) {
          total += sub.mark;
        }
      });
    });

    let average = total / students.length;

    if (operation == "highestAverage") {
      if (highestAverage < average) {
        highestAverage = average;
      }
    } else if (operation == "lowestAverage") {
      if (highestAverage > average) {
        highestAverage = average;
      }
    }
    avgArray.push({ subjectName, average });
  });

  return avgArray.filter((avg) => avg.average === highestAverage);
};

//Q15: Write a function to find and print the subject with the highest average marks.

const subWithHighestAvg = () => {
  let operation = "highestAverage";
  let highestAverage = 0;

  return subjectWithAvg(operation, highestAverage);
};
console.log(subWithHighestAvg());

//Q16: Write a function to find and print the subject with the lowest average marks.

const subWithLowestAvg = () => {
  let operation = "lowestAverage";
  let lowestAverage = 100;

  return subjectWithAvg(operation, lowestAverage);
};

console.log(subWithLowestAvg());

//Q17: Write a function to calculate and print the overall marks for the class.

const overallMarks = () => {
  let sum = 0;

  students.forEach((student) => {
    let subject = student.marks;
    subject.map((sub) => {
      sum += sub.mark;
    });
  });

  return sum;
};

console.log(overallMarks());

//Q18: Write a function to calculate and print the overall average marks for the class.

const overallAvgMark = () => {
  let overallAverage = 0;

  students.forEach((student) => {
    let subject = student.marks;
    let sum = overallMarks();
    let length = subject.length * students.length;

    overallAverage = sum / length;
  });

  return overallAverage;
};

console.log(overallAvgMark());

//Q19:Write a function to calculate and print the total marks for each subject.

const totalMarksForSubjects = () => {
  let resultArray = subjects().map((name) => {
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
console.log(totalMarksForSubjects());

//Q20:Write a function to calculate and print the average marks for each subject.

const avgMarkForSubjects = () => {
  let totalMarks = totalMarksForSubjects();

  let resultArray = totalMarks.map((mark) => {
    let average = 0;
    let sub = mark.name;

    average = mark.totalObtained / students.length;

    return { sub, average };
  });
  totalMarksForSubjects;
  return resultArray;
};

console.log(avgMarkForSubjects());

//21: Write a function to find and print the subject with the highest total marks.

const highestTotalMark = () => {
  let highestTotal = 0;
  const markArray = totalMarksForSubjects();

  markArray.forEach((mark) => {
    if (highestTotal < mark.totalObtained) highestTotal = mark.totalObtained;
  });

  return markArray.filter((mark) => mark.totalObtained === highestTotal);
};

console.log(highestTotalMark());

//Q22: Write a function to find and print the subject with the lowest total marks.

const lowestTotalMark = () => {
  let lowestTotal = 200;
  let markArray = totalMarksForSubjects();

  markArray.forEach((mark) => {
    if (lowestTotal > mark.totalObtained) lowestTotal = mark.totalObtained;
  });

  return markArray.filter((mark) => mark.totalObtained === lowestTotal);
};

console.log(lowestTotalMark());

//function to find and print the student(s) with the highest & lowest average marks.

const averageMark = (totalMark) => {
  let average = 0;
  let name = "";

  totalMark.map((total) => {
    average = total.totalObtained / subjects().length;
    name = total.name;
  });

  return { name, average };
};

//Q23: Write a function to find and print the student(s) with the highest average marks.

const highestAverageMark = () => {
  return averageMark(studentWithHighestTotal());
};

console.log(highestAverageMark());

//Q24: Write a function to find and print the student(s) with the lowest average marks.

const lowestAvgMark = () => {
  return averageMark(studentWithLowestTotal());
};

console.log(lowestAvgMark());

//Q25: Write a function to find and print the student(s) with the highest total marks.

console.log(studentWithHighestTotal());

//Q26: Write a function to find and print the student(s) with the lowest total marks.

console.log(studentWithLowestTotal());

//function to calculate and print the number of students who scored above & below a certain mark in a specific subject

const getStudentsCountBasedSpecificMarkInSub = (
  condition,
  subject,
  specificMark
) => {
  let count = 0;

  students.forEach((student) => {
    const marks = student.marks;
    marks.forEach((mark) => {
      if (mark.subject === subject) {
        switch (condition) {
          case "above":
            if (mark.mark >= specificMark) {
              count++;
            }
            break;
          case "below":
            if (mark.mark <= specificMark) {
              count++;
            }
            break;

          default:
            return "Entered functionality not available! Please Enter the correct one";
        }
      }
    });
  });

  return count;
};

//Q27: Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.

const getStudentsCountAboveSpecificMarkInSub = () => {
  const condition = "above";
  const subject = "English";
  const specificMark = 40;

  return getStudentsCountBasedSpecificMarkInSub(
    condition,
    subject,
    specificMark
  );
};

console.log(getStudentsCountAboveSpecificMarkInSub());

//Q28: Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.

const getStudentsCountBelowSpecificMarkInSub = () => {
  const condition = "below";
  const subject = "English";
  const specificMark = 40;

  return getStudentsCountBasedSpecificMarkInSub(
    condition,
    subject,
    specificMark
  );
};

console.log(getStudentsCountBelowSpecificMarkInSub());

//Write a function to calculate and print the number of students who scored above & below a certain mark in all subjects.

const countofStudentsScoredSpecificMarkInAllSub = (condition) => {
  const specificMark = 30;
  let studentCount = 0;
  let count = 0;

  students.forEach((student) => {
    const marks = student.marks;
    count = 0;

    marks.forEach((mark) => {
      switch (condition) {
        case "above":
          if (mark.mark >= specificMark) {
            count++;
          }
          break;

        case "below":
          if (mark.mark < specificMark) {
            count++;
          }
          break;

        default:
          return "Entered functionality not available! Please Enter the correct one";
      }
    });

    if (count === 5 && count != 0 && condition == "above") {
      studentCount++;
    } else if (count < 5 && count != 0 && condition == "below") {
      studentCount++;
    }
  });

  return studentCount;
};

//Q29: Write a function to calculate and print the number of students who scored above a certain mark in all subjects.

const countofStudentsScoredAboveMarkInAllSub = () => {
  const condition = "above";

  return countofStudentsScoredSpecificMarkInAllSub(condition);
};

console.log(countofStudentsScoredAboveMarkInAllSub());

//Q30: Write a function to calculate and print the number of students who scored below a certain mark in all subjects.

const countStudentsScoredBelowMarkInAllSub = () => {
  const condition = "below";

  return countofStudentsScoredSpecificMarkInAllSub(condition);
};

console.log(countStudentsScoredBelowMarkInAllSub());

//Function to find perentage

const percentage = (obtained, total) => {
  return `${(obtained / total) * 100}%`;
};

//31: Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.

const getStudentsPercentageAboveSpecificMarkInSub = () => {
  const studentsCountAboveMark = getStudentsCountAboveSpecificMarkInSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountAboveMark, noOfStudents);
};

console.log(getStudentsPercentageAboveSpecificMarkInSub());

//32. Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.

const getStudentsPercentageBelowSpecificMarkInSub = () => {
  const studentsCountBelowMark = getStudentsCountBelowSpecificMarkInSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountBelowMark, noOfStudents);
};

console.log(getStudentsPercentageBelowSpecificMarkInSub());

//Q33. Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.

const getStudentsPercentageAboveSpecificMarkInAllSub = () => {
  const studentsCountAboveMark = countofStudentsScoredAboveMarkInAllSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountAboveMark, noOfStudents);
};

console.log(getStudentsPercentageAboveSpecificMarkInAllSub());

//Q34: Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.

const getStudentsPercentageBelowSpecificMarkInAllSub = () => {
  const studentsCountBelowMark = countStudentsScoredBelowMarkInAllSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountBelowMark, noOfStudents);
};

console.log(getStudentsPercentageBelowSpecificMarkInAllSub());

//Function to find and print the student(s) with the percentage of marks.

const studentWithPercentage = (option, markTotal) => {
  const totalMark = markTotal;
  let name = "";
  let totalObtained = 0;
  let sumOfMarks = [];

  switch (option) {
    case "studentHighestPercentage":
      sumOfMarks = studentWithHighestTotal();
      break;

    case "studentLowestPercentage":
      sumOfMarks = studentWithLowestTotal();
      break;

    case "subjectWithHighestPercentage":
      sumOfMarks = highestTotalMark();
      break;

    case "subjectWithLowestPercentage":
      sumOfMarks = lowestTotalMark();
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

//Q35: Write a function to find and print the student(s) with the highest percentage of marks.

const studentWithHighestPercentage = (option) => {
  const totalMark = 250;

  return studentWithPercentage(option, totalMark);
};

console.log(studentWithHighestPercentage("studentHighestPercentage"));

//Q36: Write a function to find and print the student(s) with the lowest percentage of marks.

const studentWithLowestPercentage = (option) => {
  const totalMark = 250;

  return studentWithPercentage(option, totalMark);
};

console.log(studentWithLowestPercentage("studentLowestPercentage"));

//Q37: Write a function to find and print the subject(s) with the highest percentage of marks.

const subjectWithHighestPercentage = (option) => {
  const totalMark = 200;

  return studentWithPercentage(option, totalMark);
};

console.log(subjectWithHighestPercentage("subjectWithHighestPercentage"));

//Q38: Write a function to find and print the subject(s) with the lowest percentage of marks.

const subjectWithLowestPercentage = (option) => {
  const totalMark = 200;

  return studentWithPercentage(option, totalMark);
};

console.log(subjectWithLowestPercentage("subjectWithLowestPercentage"));

//function to find and print the student(s) with the highest & lowest percentage of marks in a specific subject.

const studentWithPercentageInSubject = (total, option, subjectName) => {
  const students = classObj.students;
  const totalMark = 50;
  let percentages = 0;
  let studentName = "";
  let subjectMark = 0;

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

//Q39: Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.

const studentWithHighestPercentageInSubject = (subjectName) => {
  const highestTotal = 0;
  const option = "highest";

  return studentWithPercentageInSubject(highestTotal, option, subjectName);
};

console.log(studentWithHighestPercentageInSubject("Maths"));

//Q40: Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.

const studentWithLowestPercentageInSubject = (subjectName) => {
  const lowestTotal = 50;
  const option = "lowest";

  return studentWithPercentageInSubject(lowestTotal, option, subjectName);
};

console.log(studentWithLowestPercentageInSubject("Maths"));

//function to find and print the subject(s) with the highest/lowest percentage of marks for a specific student

const printSubjectPercentageOfStudent = (studentId, option) => {
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

        //const percentages = percentage(subjectMark, totalmark);
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

const printSubjectWithHighestPercentageOfStudent = (studentId) => {
  const option = "highest";
  //const obtainedPercentage = 0;

  return printSubjectPercentageOfStudent(studentId, option);
};

console.log(printSubjectWithHighestPercentageOfStudent("101"));

//Q42: Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student

const printSubjectWithLowestPercentageOfStudent = (studentId) => {
  const option = "lowest";
  //const obtainedPercentage = 50;

  return printSubjectPercentageOfStudent(studentId, option);
};

console.log(printSubjectWithLowestPercentageOfStudent("101"));

//function to find and print the subject(s) in which all students scored above/below a certain mark.

const subjectWithAllStudentsScoredBasedOnSpecificMark = (choice) => {
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

//Q45: Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.

const SubjectWithAvgMarkAboveCertainMark = (specificMark) =>
  avgMarkForSubjects().filter((average) => average.average >= specificMark);

console.log(SubjectWithAvgMarkAboveCertainMark(35));

//Q46: Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.

const SubjectWithAvgMArkBelowCertainMark = (specificMark) =>
  avgMarkForSubjects().filter((average) => average.average < specificMark);

console.log(SubjectWithAvgMArkBelowCertainMark(35));

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
//Q51: Write a function to find and print the student(s) who scored the highest marks in each subject.

console.log(
  "Highest marks each subjects",
  studentWithHighestMarkAtLeastOneSubject()
);

//Q52: Write a function to find and print the student(s) who scored the lowest marks in each subject.

console.log(
  "Lowest marks each subjects",
  studentWithLowestMarkAtLeastOneSubject()
);

//Q53: Write a function to find and print the subject(s) in which the highest marks were scored.

const subjectWithHighestMark = () => {
  let highestMark = 0;

  studentWithHighestMarkAtLeastOneSubject().forEach((mark) => {
    if (mark.mark > highestMark) {
      highestMark = mark.mark;
    }
  });

  return studentWithHighestMarkAtLeastOneSubject().filter(
    (mark) => mark.mark === highestMark
  );
};

console.log("Subject with Highest Mark :", subjectWithHighestMark());

//Q54: Write a function to find and print the subject(s) in which the lowest marks were scored.

const subjectWithLowestMark = () => {
  let highestMark = 50;
  studentWithLowestMarkAtLeastOneSubject().forEach((mark) => {
    if (mark.mark < highestMark) {
      highestMark = mark.mark;
    }
  });

  return studentWithLowestMarkAtLeastOneSubject().filter(
    (mark) => mark.mark === highestMark
  );
};

console.log("Subject with Lowest Mark :", subjectWithLowestMark());

//Q55: Write a function to find and print the student(s) who scored above the class average marks.

const studentsScoredAboveClassAverage = () => {
  const classAverage = overallAvgMark();

  return printStudentsMarksAverage().filter(
    (student) => classAverage < student.average
  );
};

console.log(
  "Studnts scored above class average",
  studentsScoredAboveClassAverage()
);

//Q56: Write a function to find and print the student(s) who scored above the class average marks.

const studentsScoredBelowClassAverage = () => {
  const classAverage = overallAvgMark();

  return printStudentsMarksAverage().filter(
    (student) => classAverage > student.average
  );
};
console.log(
  "Studnts scored below class average",
  studentsScoredBelowClassAverage()
);

//Q57: Write a function to find and print the subject(s) in which the average marks are above the class average marks.

const subjectsWithAverageScoredAboveClassAverage = () => {
  const classAverage = overallAvgMark();

  return avgMarkForSubjects().filter(
    (subject) => classAverage < subject.average
  );
};

console.log(
  "Subjects scored Above class average",
  subjectsWithAverageScoredAboveClassAverage()
);

//Q58: Write a function to find and print the subject(s) in which the average marks are below the class average marks.

const subjectsWithAverageScoredBelowClassAverage = () => {
  const classAverage = overallAvgMark();

  return avgMarkForSubjects().filter(
    (subject) => classAverage > subject.average
  );
};

console.log(
  "Subjects scored below class average",
  subjectsWithAverageScoredBelowClassAverage()
);

//function to find and print the subject(s) in which the highest percentage of students scored above/below a certain mark.
const subjectWithHighestPercentageBasedSpecificMark = (
  option,
  choice,
  count
) => {
  const studentsCountArray = subjects().map((subject) => {
    const countOfStudents = getStudentsCountBasedSpecificMarkInSub(
      option,
      subject,
      40
    );

    switch (choice) {
      case "highest":
        if (count < countOfStudents) {
          count = countOfStudents;
        }
        break;

      case "lowest":
        if (count > countOfStudents) {
          count = countOfStudents;
        }
        break;

      default:
        return "Please enter the correct choice";
    }

    return { subject, countOfStudents };
  });

  return studentsCountArray.filter(
    (studentCount) => studentCount.countOfStudents === count
  );
};

//Q59: Write a function to find and print the subject(s) in which the highest percentage of students scored above a certain mark.
console.log(
  "Subject with highest percentage of student scored above certain mark:",
  subjectWithHighestPercentageBasedSpecificMark("above", "highest", 0)
);

//Q60: Write a function to find and print the subject(s) in which the highest percentage of students scored below a certain mark.

console.log(
  "Subject with highest percentage of student scored below certain mark:",
  subjectWithHighestPercentageBasedSpecificMark("below", "highest", 0)
);

//Q61: Write a function to find and print the subject(s) in which the lowest percentage of students scored above a certain mark.

console.log(
  "Subject with lowest percentage of student scored above certain mark:",
  subjectWithHighestPercentageBasedSpecificMark("above", "lowest", 4)
);

//Q62: Write a function to find and print the subject(s) in which the lowest percentage of students scored below a certain mark.

console.log(
  "Subject with lowest percentage of student scored below certain mark:",
  subjectWithHighestPercentageBasedSpecificMark("below", "lowest", 4)
);

//Function to calculate and print the percentage of students who scored above /below the class average marks in each subject.

const studentsPercentageBasedClassAverage = (option) => {
  const classAverage = overallAvgMark();
  const students = classObj.students;

  return subjects().map((subject) => {
    const countOfStudents = getStudentsCountBasedSpecificMarkInSub(
      option,
      subject,
      classAverage
    );

    const percentageObtained = percentage(countOfStudents, students.length);

    return { subject, percentageObtained };
  });
};

//Q63: Write a function to calculate and print the percentage of students who scored above the class average marks in each subject.

console.log(
  "Percentage of students , who scored above class average",
  studentsPercentageBasedClassAverage("above")
);

//Q64: Write a function to calculate and print the percentage of students who scored below the class average marks in each subject.

console.log(
  "Percentage of students , who scored below class average",
  studentsPercentageBasedClassAverage("below")
);

//Function to calculate and print the percentage of students who scored above/below the class average marks in at least one subject.

const studentPercetageBasedClassAverageInAtleastOneSubject = (option) => {
  const students = classObj.students;
  const classAverage = overallAvgMark();
  let count = 0;
  let studentCount = 0;

  students.map((student) => {
    count = 0;

    student.marks.map((mark) => {
      switch (option) {
        case "above":
          if (mark.mark >= classAverage) {
            count++;
          }
          break;

        case "below":
          if (mark.mark < classAverage) {
            count++;
          }
          break;

        default:
          return "Sorry!, Please enter correct choice";
      }
    });

    count > 0 ? studentCount++ : studentCount;
  });

  return percentage(studentCount, students.length);
};

//Q65: Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject.

console.log(
  "Students who scored above the class average marks in at least one subject:",
  studentPercetageBasedClassAverageInAtleastOneSubject("above")
);

//Q66: Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject.
console.log(
  "Students who scored above the class average marks in at least one subject:",
  studentPercetageBasedClassAverageInAtleastOneSubject("below")
);

//Write a function to find and print the student(s) who scored above/below the class average marks in all subjects.

const studentWithScoreBasedClassAvg = (option, choice) => {
  const students = classObj.students;
  const classAverage = overallAvgMark();
  let count = 0;
  let studentName = "";
  let highestCount = 0;

  const nameArray = students.map((student) => {
    const subjects = student.marks;
    studentName = student.name;
    count = 0;

    subjects.map((subject) => {
      switch (option) {
        case "above":
          if (classAverage <= subject.mark) {
            count++;
          }
          break;

        case "below":
          if (classAverage > subject.mark) {
            count++;
          }
          break;

        default:
          return "Sorry!, Please choose correct option";
      }
    });

    if (highestCount < count) {
      highestCount = count;
    }
    return { studentName, count };
  });

  switch (choice) {
    case "studentsWithAllsubjects":
      return nameArray.filter((count) => count.count === subjects().length);
      break;

    case "studentsWithMajorityOfSubjects":
      return nameArray.filter((count) => count.count === highestCount);
      break;

    default:
      return "Sorry!, Please choose correct option";
  }
};

//Q67: Write a function to find and print the student(s) who scored above the class average marks in all subjects.

console.log(
  "Students who scored above the class average marks in all subjects",
  studentWithScoreBasedClassAvg("above", "studentsWithAllsubjects")
);

//Q68: Write a function to find and print the student(s) who scored below the class average marks in all subjects.

console.log(
  "Students who scored above the class average marks in all subjects",
  studentWithScoreBasedClassAvg("below", "studentsWithAllsubjects")
);

//Q69: Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.

console.log(
  "Students who scored below the class average marks in the majority of Students who scored below the class average marks in the majority of subjects",
  studentWithScoreBasedClassAvg("above", "studentsWithMajorityOfSubjects")
);

//Q70: Write a function to find and print the student(s) who scored below the class average marks in the majority of subjects.

console.log(
  "Students who scored below the class average marks in the majority of subjects",
  studentWithScoreBasedClassAvg("below", "studentsWithMajorityOfSubjects")
);

//Function to find and print the subject(s) in which the majority of students scored above the class average marks.

const subWithStudentsScoredBasesClassAvg = (choice) => {
  const students = classObj.students;
  let highest = 0;
  let countArray = [];
  const classAverage = overallAvgMark();
  let count = 0;
  let subjectName = "";

  subjects().forEach((sub) => {
    count = 0;
    subjectName = sub;

    students.forEach((student) => {
      const subject = student.marks;

      subject.find((subj) => {
        if (subj.subject === sub) {
          switch (choice) {
            case "above":
              if (subj.mark >= classAverage) count++;
              break;

            case "below":
              if (subj.mark <= classAverage) count++;
              break;

            default:
              return "invalid choice";
          }
        }
      });
    });

    countArray.push({ subjectName, count });
    if (highest < count) {
      highest = count;
    }
  });

  return countArray
    .filter((cnt) => cnt.count === highest)
    .map((subject) => subject.subjectName);
};

//Q71: Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.
console.log(
  "subject(s) in which the majority of students scored above the class average marks",
  subWithStudentsScoredBasesClassAvg("above")
);

//Q72: Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.
console.log(
  "subject(s) in which the majority of students scored below the class average marks",
  subWithStudentsScoredBasesClassAvg("below")
);

//function to calculate and print the percentage of students who scored above/below the average marks of a specific student in each subject.

const percentageWithStudentsScoredBasedSpecificStudent = (
  studentID,
  choice
) => {
  const students = classObj.students;
  let highest = 0;
  countArray = [];
  const average = findAverage(studentID);
  let count = 0;
  let subjectName = "";

  return subjects().map((subject) => {
    const countOfStudents = getStudentsCountBasedSpecificMarkInSub(
      choice,
      subject,
      average
    );

    const percentageObtained = percentage(countOfStudents, students.length);

    return { subject, percentageObtained };
  });
};

//Q73: Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.

console.log(
  "percentage of students who scored above the average marks of a specific student in each subject",
  percentageWithStudentsScoredBasedSpecificStudent("103", "above")
);

//Q74: Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in each subject.

console.log(
  "percentage of students who scored above the average marks of a specific student in each subject",
  percentageWithStudentsScoredBasedSpecificStudent("103", "below")
);

//function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.

const getPercetageBasedStdntAvgInAtleastOneSub = (option, studentID) => {
  const students = classObj.students;
  const average = findAverage(studentID);
  let count = 0;
  let studentCount = 0;

  students.map((student) => {
    count = 0;

    student.marks.map((mark) => {
      switch (option) {
        case "above":
          if (mark.mark >= average) {
            count++;
          }
          break;

        case "below":
          if (mark.mark < average) {
            count++;
          }
          break;

        default:
          return "Sorry!, Please enter correct choice";
      }
    });

    count > 0 ? studentCount++ : studentCount;
  });

  return percentage(studentCount, students.length);
};

//75. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.

console.log(
  "percentage of students who scored above the average marks of a specific student in at least one subject",
  getPercetageBasedStdntAvgInAtleastOneSub("above", "104")
);

//76. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in at least one subject.

console.log(
  "percentage of students who scored below the average marks of a specific student in at least one subject",
  getPercetageBasedStdntAvgInAtleastOneSub("below", "104")
);

//77. Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects.

const getStudentsScoredAboveSpecStdntAverage = (studentID) => {
  const average = findAverage(studentID);

  return printStudentsMarksAverage().filter(
    (student) => average <= student.average
  );
};

console.log(
  "student(s) who scored above the average marks of a specific student in all subjects",
  getStudentsScoredAboveSpecStdntAverage("102")
);

//78. Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects.

const getStudentsScoredBelowSpecStdntAverage = (studentID) => {
  const average = findAverage(studentID);

  return printStudentsMarksAverage().filter(
    (student) => average >= student.average
  );
};
console.log(
  "student(s) who scored below the average marks of a specific student in all subjects",
  getStudentsScoredBelowSpecStdntAverage("102")
);

//79. Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student.

const subWithAvgScoredAboveStudntAvg = (studentID) => {
  const average = findAverage(studentID);

  return avgMarkForSubjects().filter((subject) => average <= subject.average);
};

console.log(
  "subject(s) in which the average marks are above the average marks of a specific student",
  subWithAvgScoredAboveStudntAvg("101")
);

//80. Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student.

const subWithAvgScoredBelowStudntAvg = (studentID) => {
  const average = findAverage(studentID);

  return avgMarkForSubjects().filter((subject) => average > subject.average);
};

console.log(
  "subject(s) in which the average marks are above the average marks of a specific student",
  subWithAvgScoredBelowStudntAvg("101")
);

//function to find and print the subject(s) in which the highest percentage of students scored above / below the average marks of a specific student.

const subWithStudentsScoredBasedOnStudAvg = (studentID, option, choice) => {
  const average = findAverage(studentID);
  const students = classObj.students;
  let count = option === "highest" ? 0 : students.length;

  const studentsCountArray = subjects().map((subject) => {
    const countOfStudents = getStudentsCountBasedSpecificMarkInSub(
      option,
      subject,
      average
    );

    switch (choice) {
      case "highest":
        if (count < countOfStudents) {
          count = countOfStudents;
        }
        break;

      case "lowest":
        if (count > countOfStudents) {
          count = countOfStudents;
        }
        break;

      default:
        return "Please enter the correct choice";
    }

    return { subject, countOfStudents };
  });

  return studentsCountArray
    .filter((studentCount) => studentCount.countOfStudents === count)
    .map((sub) => sub.subject);
};

//81. Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.

console.log(
  "subject(s) in which the highest percentage of students scored above the average marks of a specific student",
  subWithStudentsScoredBasedOnStudAvg("102", "above", "highest")
);

//82. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.

console.log(
  "subject(s) in which the highest percentage of students scored below the average marks of a specific student",
  subWithStudentsScoredBasedOnStudAvg("102", "below", "highest")
);

//83. Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.

console.log(
  "subject(s) in which the lowest percentage of students scored above the average marks of a specific student",
  subWithStudentsScoredBasedOnStudAvg("102", "above", "lowest")
);

//84. Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.

console.log(
  "subject(s) in which the lowest percentage of students scored below the average marks of a specific student",
  subWithStudentsScoredBasedOnStudAvg("102", "below", "lowest")
);

//Q85: Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject.


//Q86: Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject.
