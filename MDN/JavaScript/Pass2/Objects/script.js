// Object creation

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]}`);
  },
  introduce: function () {
    console.log(`Hi my name is ${this.name[0] + " " + this.name[1]}`);
  },
};
person.bio();
person.introduce();
console.log("Objects");

//[] notation[]

console.log(person["age"]);

//construction function - before

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduce = function () {
    console.log(`Hi! I'm this ${this.name}`);
  };
  return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduce();

const Athira = createPerson("Athira");
Athira.name;
Athira.introduce();

//constructor
function Person(name) {
  this.name = name;
  this.introduce = function () {
    console.log(`Hi! ${this.name}, Welcome to constructor function`);
  };
}

const sara = new Person("Sara");
sara.name;
sara.introduce();

const smith = new Person("Smith");
smith.name;
smith.introduce();

//Object Prototypes
console.log(sara);

//Shadowing Properties

const myDate = new Date(1995, 11, 17);
console.log(myDate.getFullYear());

//Setting a prototype
//Object.create

const personPrototype = {
  greet() {
    console.log("hello");
  },
};
const carl = Object.create(personPrototype);
carl.greet();
const deny = Object.create(personPrototype);
deny.greet();
//console.log(deny);

//Using constructor

const studentProto = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

function Persons(name) {
  this.name = name;
}

Object.assign(Persons.prototype, studentProto);

const reuben = new Persons("Reuben");
reuben.greet();
const ram = new Persons("Ram");

//Object Methods
//hasOwn

console.log(Object.hasOwns(reuben, "name"));
console.log(Object.hasOwn(sara, "introduce"));
console.log(Object.hasOwns(ram, "name"));

//