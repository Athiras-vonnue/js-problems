//if -else statements

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

//Assignment operator

let shopping = true;
let childAllowance;

if (shopping) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
console.log(childAllowance);

//Nesting if
let choice = "sunny";
let temperature = 90;
if (choice === "sunny") {
  if (temperature <= 86) {
    para.textContent = `It is a ${temperature} degrees outside`;
  } else if (temperature >= 86) {
    para.textContent = `It is a ${temperature} degrees outside`;
  }
}

//Logical AND or OR operator
let houseStatus = "onfire";
icecreamOutside = "onSnow";
let loggedIn = true;

if (!(icecreamOutside || houseStatus === "onfire")) {
  console.log("Probably just stay in then");
} else {
  console.log("You should leave the house quickly");
}

let x = 5;
userName = "Steve";
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  console.log(userName);
}

//Switch case

select.addEventListener("change", updateWeatherStaus);

function updateWeatherStaus() {
  choice = select.value;
  switch (choice) {
    case "sunny":
      para.textContent =
        " ==> It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        " ==> Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    default:
      para.textCotent = "";
  }
}

//Ternary operator

let isBirthday = false;
const greeting = isBirthday ? "Happy Birthday" : "Good Morning";
console.log(greeting);
