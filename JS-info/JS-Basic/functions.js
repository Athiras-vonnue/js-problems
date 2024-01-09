const showMessage = () => {
  let message = "Hello I'm Javascript";
  console.log(message);
};

showMessage();

//default values

const readMsg = (from, text = "no text given") => {
  console.log(from, ":", text);
};

readMsg("Ann", "playing");

user = "Ann";
//user ?? "unknown";==>  not supported

//Arrow functions

let sum = (a, b) => {
  let result = a + b;
  return result;
};

console.log(sum(12, 3));
