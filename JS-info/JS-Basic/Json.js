//JSON methods, to JSON

let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name:"${this.name}",age:${this.age}}`;
  },
};
console.log(user);

//JSON.
JSON.stringify; // convert object to json
JSON.parse; //to convert json to object

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};
console.log(student);
let json = JSON.stringify(student);
console.log(json);
let parse = JSON.parse(json);
console.log(parse);

let meetup = {
  title: "conference",
  room: {
    number: 23,
    participants: ["John", "ann"],
  },
};

console.log(JSON.stringify(meetup));
let user1 = {
  nmae: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 2)); // 2- add indentation
console.log(JSON.stringify(user));

//JSON.parse

//let value = JSON.parse(str, [reviver]);

let numbers = "[0,1,2,3,4]";
numbers = JSON.parse(numbers);
console.log(numbers[1]);

let userData = '{"name":"John","age":35,"isAdmin":false,"friends":[0,1,2,3]}';
let user3 = JSON.parse(userData);
console.log(user3.friends[1]);
