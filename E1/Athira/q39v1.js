const students = [
  {
    name: "Aaron",
    Age: 15,
    noOfSubjects: 5,
    mark: [
      { Subject: "Maths", mark: 69 },
      { Subject: "English", mark: 80 },
      { Subject: "Computer", mark: 85 },
    ],
  },
  {
    name: "Anu",
    Age: 15,
    noOfSubjects: 5,
    mark: [
      { Subject: "Maths", mark: 89 },
      { Subject: "English", mark: 100 },
      { Subject: "Computer", mark: 90 },
    ],
  },
  {
    name: "Banu",
    Age: 15,
    noOfSubjects: 5,
    mark: [
      { Subject: "Maths", mark: 29 },
      { Subject: "English", mark: 30 },
      { Subject: "Computer", mark: 45 },
    ],
  },
];

function getData() {
  let data = [];
  for (let i = 0; i < students.length; i++) {
    data[i] = students[i].name;
  }
  return data;
}
getData();
