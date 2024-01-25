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

console.log(typeof studentWithScoreBasedClassAvg);
