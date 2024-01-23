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
