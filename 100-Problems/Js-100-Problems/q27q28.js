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

//function to calculate and print the number of students who scored above & below a certain mark in a specific subject

const getStudentsCountBasedSpecificMarkInSub = (
  obj,
  condition,
  subject,
  specificMark
) => {
  if (typeof obj !== "object" || Array.isArray(obj) || !Object.keys(obj).length)
    return "invalid";

  let count = 0;
  const students = obj.students;
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
            count =
              "Entered choice not available! Please Enter the correct one";
        }
      }
    });
  });

  return count;
};

//testcases

function testGetStudentsCountBasedSpecificMarkInSub() {
  const tcs = [
    {
      obj: classObj,
      choice: "above",
      subject: "English",
      specificMark: 40,
      exp: 1,
    },
    {
      obj: classObj,
      choice: "below",
      subject: "English",
      specificMark: 40,
      exp: 3,
    },

    {
      obj: "classObj",
      choice: "above",
      subject: "English",
      specificMark: 40,
      exp: "invalid",
    },

    {
      obj: classObj,
      choice: "unknown",
      subject: "English",
      specificMark: 40,
      exp: "Entered choice not available! Please Enter the correct one",
    },
  ];

  let i = 0;

  while (tcs[i]) {
    let got = getStudentsCountBasedSpecificMarkInSub(
      tcs[i].obj,
      tcs[i].choice,
      tcs[i].subject,
      tcs[i].specificMark
    );

    if (got === tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testGetStudentsCountBasedSpecificMarkInSub();
