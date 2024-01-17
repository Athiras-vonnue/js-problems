// Protecting "waterAmount"

/*class coffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
    //console.log(`Created a coffee-machine, power: ${power}`);
  }
}
//let coffeeMachine = new coffeeMachine(100);
new coffeeMachine().setWaterAmount(100);
coffeeMachine.waterAmount = -10;
coffeeMachine.power = 25;
*/
/*
class CoffeeMachine{
    #waterLimit=200;

    #fixWaterAmount(value){
    if(value < 0) return 0;
    if(value > this.#waterLimit)
    return this.#waterLimit
    }

    setWaterAmount(value){
    this.#waterLimit = this.#fixWaterAmount(value)
    }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.#fixWaterAmount(123);
coffeeMachine.#waterLimit=1000
*/

//Add one more method to it

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

let filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr);

class Rabbit {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);

//also works with constructor function
console.log(new Rabbit() instanceof Rabbit);

let arra = [1, 2, 3];

console.log(arra instanceof Array);
console.log(arra instanceof Object);

let s = Object.prototype.toString;
console.log(s.call(123));
console.log(s.call(null));

console.log(s.call("123"));
console.log(s.call(console.log));

let user = {
  [Symbol.toStringTag]: "User",
};
console.log({}.toString.call(user)); // [Object User]

//Mixins

let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(User.prototype, sayHiMixin);

new User("Dude").sayHi();
new User("Joan").sayBye();

//Event Mixin

let eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return;
    }
    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  },
};

class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
menu.on("select", (value) => console.log(`value selected ${value} `));
menu.choose("123");
