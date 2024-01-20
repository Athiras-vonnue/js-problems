//handling errors
/*
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("Script load error for ${src}"));
  document.head.append(script);
}

//usage

loadScript("/myScript", function (error, script) {
  if (error) {
    //handle error
  } else {
    //script loaded successfully
  }
});

//Pyramid of doom ==or callback hell

loadScript("1.js", function (error, script) {
  if (error) {
    handleError(error);
  } else {
    loadScript("2.js", function (error, script) {
      if (error) {
        handleError(error);
      } else {
        //..... continue after all scripts are loaded
      }
    });
  }
});

// to avoid this problem,  make the function standalone

loadScript("1.js", step1);
function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    //....
    loadScript("2.js", step2);
  }
}
function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    //....
    loadScript("3.js", step3);
  }
}

//Promise
let promise = new Promise(function (resolve, reject) {
  //executor(producer code)
});

let pormise = new Promise(function (resolve, reject) {
  setTimeout(
    () => resolve("done"),
    1000,
    setTimeout(() => reject(new Error("Whoops!")))
  );
});
*/

//resolve
let promises = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});
promises.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

//reject
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise1.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

//catch
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.catch(console.log);

//Cleanup:finally

new Promise((resolve, reject) => {
  //code
})
  .finally(() => "stop loading indicator")
  .then(
    (result) => "show result",
    (err) => "show error"
  );

//promises example

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (resolve, reject) {
  let x = 0;

  //producing code

  if (x !== 0) {
    resolve("Ok");
  } else {
    reject("error");
  }
});

//consumer code
myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

//Promises chaining

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  });

//thenables

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}
new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result);
  })
  .then(console.log);

//fetch example

/*fetch("https://api.sampleapis.com/futurama/info")
  //fetch("/article/promise-chaining/user.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (text) {
    console.log(text);
  });*/

//example promise with fetch
/*
fetch("https://api.publicapis.org/entries")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then((githubUser) => new Promise(function (resolve, reject) {}));
  */

//error handling with promises
/*
fetch("https://api.publicapis.org/entries.gghh")
  .then((response) => response.json())
  .catch((err) => console.log(err));
  */

//Implict try...catch
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(console.log); //error:whoops

//rethrowing

new Promise((resolve, reject) => {
  throw new Error("Whoops");
})
  .catch(function (error) {
    console.log("The error is handled, continue normally");
  })
  .then(() => console.log("Next successful handler runs"));

new Promise((resolve, reject) = {
  //throw new Error ("Whoops")
}).catch(function (error) {
  if (error instanceof URIError) {
    //handle
  } else {
    console.log("can't handle such error")
    throw error
  }
}).then(function () {
  //....
}).catch(error => {
  console.log(`The unknown error has occured: ${error}`)
})

/*

 */
