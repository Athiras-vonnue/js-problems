//Promise API
/*
  
 */
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
// ]).then(console.log); //[1,2,3]

// //examples

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// let requests = urls.map((url) => fetch(url));
// Promise.all(requests).then((responses) =>
//   responses.forEach((response) =>
//     console.log(`${response.url}:${response.status}`)
//   )
// );

/*
let names = ["iliakan", "remy", "jeresig"];
let requests1 = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests1)
  .then((responses) => {
    for (let response of responses) {
      console.log(`${response.url}:${response.status}`);
    }
    return responses;
  })
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then((users) => users.forEach((user) => console.log(user.name)));
  */

//2.Promis.allSettled

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];
Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      console.log(`${urls[num]}:${result.value.status}`);
    }
    if (result.status == "rejected") {
      console.log(`${urls[num]}:${result.reason}`);
    }
  });
});

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log);

//promise.any

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")))
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log);

//promisification

//Async/await

/*
async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
*/

// let response = await fetch("/article/promise-chaining/user.json");
// let user = await response.json();
// console.log(user);

(async () => {
  let response = await fetch("https://api.github.com/users/iliakan");
  let user = await response.json();
  console.log(user);
})();

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
async function f() {
  let result = await new Thenable(1);
  console.log(result);
}
f();
//Async class method
class waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new waiter().wait().then(console.log);

//Error handling
async function f() {
  await Promise.reject(new Error("Whoops!"));
}

async function f1() {
  try {
    let response = await fetch("http://no such url");
  } catch (err) {
    console.log(err);
  }
}
f1();
