const students = [
  {
    name: "Aaron",
    Age: 15,
    noOfSubjects: 5,
    isDaySchollar: true,
  },
  {
    name: "Anu",
    Age: 15,
    noOfSubjects: 5,
    isDaySchollar: false,
  },
  {
    name: "Banu",
    Age: 15,
    noOfSubjects: 5,
    isDaySchollar: true,
  },
];

function getProperty(ObjArray, property) {
  let resObj = [];
  for (let i = 0; i < ObjArray.length; i++) {
    for (prop in ObjArray[i]) {
      if (prop === property) {
        resObj[i] = `{${prop} : ${students[i][prop]}}`;
      }
    }
  }
  return resObj;
}
//console.log(getData());

//test cases
function testGetProperty() {
  const tcs = [
    {
      input1: students,
      input2: "name",
      exp: ["{name : Aaron}", "{name :Anu}", "{name :Banu}"], //wrong
    },
    {
      input1: students,
      input2: "unknown",
      exp: [],
    },
    {
      input1: students,
      input2: "isDaySchollar",
      exp: [
        "{isDaySchollar : true}",
        "{isDaySchollar : false}",
        "{isDaySchollar : true}",
      ],
    },
  ];

  for (let i = 0; i < tcs.length; i++) {
    const got = getProperty(tcs[i].input1, tcs[i].input2);

    console.log(got, tcs[i].exp);
    if (compareObj(got, tcs[i].exp)) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}

//compare objects
function compareObj(got, exp) {
  for (let prop in got) {
    if (got[prop] != exp[prop]) {
      return false;
    }
  }
  return true;
}

testGetProperty();
