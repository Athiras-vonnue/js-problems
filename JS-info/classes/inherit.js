//class inheritance

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("white Rabbit");
rabbit.run(5);
rabbit.hide();
rabbit.stop();

//Any expression is allowed after extends

function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}
class User extends f("==>Hello") {}
new User().sayHi();

//Overriding a method
// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).

class Rabbits extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call parent class
    this.hide();
  }
}

let rabbits = new Rabbits("white Rabbit");

rabbits.run(5);
rabbits.stop();

//Arrow function have no super

class Rabbit1 extends Animal {
  stop() {
    // setTimeout(function () {
    //   super.stop();
    // }, 1000); //error
    setTimeout(() => super.stop(), 1000);
  }
}

let rabbi = new Rabbit1("white Rabbit");

//rabbi.run(5);
rabbi.stop();

//overriding constructor

class Deer extends Animal {
  constructor(name, earlength) {
    super(name);
    this.speed = 0;
    this.name = name;
    this.earlength = earlength;
  }
}

let deer = new Deer("yellow Deer", 10);
console.log(deer.name);
console.log(deer.earlength);

class Vehicles {
  name = "vehicle";
  constructor() {
    console.log(this.name);
  }
}

class Car extends Vehicles {
  name = "Car";
}
new Vehicles();
new Car();

//static properties and methods

class User3 {
  static staticMethod() {
    console.log(this === User3);
  }
}
User3.staticMethod();

/*
//Alternate
class User3{}
User.staticMethod= function(){
    console.log(this===User)
}

User.staticMethod();
*/

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }

  static createTodays() {
    return new this("Today's digest", new Date());
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles[0].title);
let article = Article.createTodays();
console.log(article.title);

class Article1 {
  static publisher = "Ilya Kantor";
  // Article1.publisher = "Iltya Kantor"
}
console.log(Article1.publisher);
//Article2.publisher = "Iltya Kantor";

//inheritance of static properties and methods

class Planet {
  static planet = "Earth";
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class plant extends Planet {
  hide() {
    console.log(`${this.name} hides!`);
  }
}
let rabits = [new plant("White Rabbit", 20), new plant("Black Rabbit", 5)];
rabits.sort(plant.compare);
rabits[0].run();
console.log(plant.planet);

/*
 
 */
