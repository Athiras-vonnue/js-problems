//syntax
try {
  //code
} catch (err) {
  //error handling
}

try {
  console.log("start of try runs");
  console.log("end of try(never reached");
  lalala;
} catch (err) {
  console.log("Error has occured");
}

/*
try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}
*/
// try catch works synchronously

// try {
//   setTimeout(function () {
//     noSuchVariable;
//   }, 1000);
// } catch (err) {
//   console.log("Won't work"); // it will not work
// }

//you can write like this

setTimeout(function () {
  try {
    noSuchVariable;
  } catch {
    console.log("Error is caught here!");
  }
}, 1000);

//using "try...catch"

let json = `{"name":"John","age":30}`;
let user = JSON.parse(json);
console.log(user.name);
console.log(user.age);

//handle error json data

json = "{bad json}";

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (err) {
  console.log(
    "Our apologies, the data has errors, we'll try to request it one more time"
  );
  console.log(err.name);
  console.log(err.message);
}

//Throwing our own errors

json = '{"age":40}';
try {
  let user = JSON.parse(json);
  console.log(user.age);
} catch (err) {
  console.log("doesn't execute");
}
//syntax
// let error = new Error(message);
// let error1 = new SyntaxError(message);
// let error2 = new ReferenceError(message);

/*json = '{"age":30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data : no name");
  }
  console.log(user.name);
} catch (err) {
  console.log("JSON Error: " + err);
}

//Rethrowing
json = '{"age":30}';
try {
  user = JSON.parse(json);
} catch (err) {
  console.log("JSON Error: " + err);
}

/*
 **/
try {
  user = {
    /**,... */
  };
} catch (err) {
  if (err instanceof ReferenceError) {
    console.log("ReferenceError");
  }
}

let jsonData = '{"age":"Joan"}';
try {
  let user = JSON.parse(jsonData);
  if (!user.name) {
    throw new SyntaxError("Incomplete data : no name");
  }
  blabla();
  console.log(user.name);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log("JSON ERROR: " + err.message);
  } else {
    throw err;
  }
}

function readData() {
  let json = '{"age":30}';
  try {
    blabala();
  } catch (err) {
    if (!(err instanceof SyntaxError)) {
      throw err;
    }
  }
  try {
    readData();
  } catch (err) {
    console.log("External Catch got: " + err);
  }
}

//try...catch...finally

try {
  console.log("try");
  if (confirm("make an error?")) BAD_CODE();
} catch (err) {
  console.log("catch");
} finally {
  console.log("finally");
}

let num = +prompt("Enter a positive integer number?", 35);
let diff, result;
function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative and also an integer");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "error occured");
console.log(`execution took ${diff}ms`);

//finally and return

function func() {
  try {
    return 1;
  } catch (err) {
  } finally {
    console.log("finally");
  }
}

console.log(func());

//custom errors

/*
Pseudo code
*/

class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
    //this.stack=<call stack>
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

function test() {
  throw new ValidationError("Whoops");
}

try {
  test();
} catch (err) {
  console.log(err.message);
  console.log(err.name);
  console.log(err.stack);
}

//usage
/*
function readUser(json) {
    let user = JSON.parse(json);
    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No Field: name");
    }
    return user;
  }
  
  try {
    let user = readUser('{"name":25}');
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("invalid data:" + err.message);
    } else if (err instanceof SyntaxError) {
      console.log("JSON Syntax Error:" + err.message);
    } else {
      throw err;
    }
  }*/

//Further inheritance

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("No property: " + property);
//     this.name = "PropertyRequiredError";
//     this.property = property;
//   }
// }

try {
  let user = readUser('{"age":25}');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message);
    console.log(err.name);
    console.log(err.property);
  } else if (err instanceof SyntaxError) {
    console.log("JSON Syntax Error" + err.message);
  } else {
    throw err;
  }
}

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}
console.log(new PropertyRequiredError("field").name);

//wrapping exceptions
//scheme

try {
  readUser();
} catch (err) {
  if (err instanceof ValidationError) {
  } else if (err instanceof SyntaxError) {
  } else {
    throw err;
  }
}

