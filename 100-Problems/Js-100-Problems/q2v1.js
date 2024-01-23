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

//Q2:Write a function to print the teacher's name: "Mary".

const printTeacherName = (classObj, property) => {
  if (typeof classObj !== "object" || Array.isArray(classObj)) return "invalid";

  if (!classObj.hasOwnProperty(property)) return "invalid";

  return classObj.teacherName;
};

//testcases
function testPrintTeacherName() {
  const tcs = [
    {
      input1: classObj,
      input2: "teacherName",
      exp: "Mary",
    },
    {
      input1: [],
      input2: "teacherName",
      exp: "invalid",
    },
  ];
  let i = 0;
  while (tcs[i]) {
    let got = printTeacherName(tcs[i].input1, tcs[i].input2);
    if (got == tcs[i].exp) {
      console.log(`Test case ${i + 1} passed`);
    } else {
      console.log(`Test case ${i + 1} failed`);
    }
    i++;
  }
}

testPrintTeacherName();
