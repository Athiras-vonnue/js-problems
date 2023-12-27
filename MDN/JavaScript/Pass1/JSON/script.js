async function populate() {
  const reqURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(reqURL);

  const response = await fetch(request);
  const superheroes = await response.json();
  // console.log(superheroes);
  populateHeader(superheroes);
  populateHeros(superheroes);
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.hometown} Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

function populateHeros(obj) {
  const section = document.querySelector("section");
  const heros = obj.members;

  for (const hero of heros) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.Age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
populate();

//conver to js objects

async function populate() {
  const reqURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(reqURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();
  console.log(superHeroesText);
  const superheroes = JSON.parse(superHeroesText);
  console.log(superheroes);
  const strin = JSON.stringify(superheroes);
  console.log(strin);
}
populate();

//
const url =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
function fetchData() {
  const res = fetch(url);
  res
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  //   const response = await res.json();
  //   console.log(response);
}
fetchData();

//promises
