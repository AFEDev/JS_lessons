const masterArray = [
  "Beržas",
  "Drebule",
  "Azuolas",
  "Klevas",
  "Uosis",
  "Palmė",
  "Agrastas",
  "Egle",
];

console.log(masterArray.length);

//1 atspausdinti medzius//

masterArray.forEach((medis) => {
  console.table(medis);
  console.log(masterArray.length);
});

//2//
//suskaiciuoti kiek visuose zodziuose yra raidziu

//3//
let x = 0;

masterArray.forEach((d) => {
  for (let i = 0; i < d.length; i++) {
    x++;
  }
});

console.log(`Viso raidžių masyvuose yra: ${x}`);

let aq = "";

masterArray.forEach((d, i) => {
  for (let i = 0; i < d.length; i++) {
    d[i] == "a" ? aq++ : "";
  }
});

console.log(`A raidžių masyve yra: ${aq} `);

//4//

let body = document.querySelector("body");
let ul = document.createElement("ul"); // naujas elementas
body.appendChild(ul); // elementas idedamas i body

masterArray.forEach((Tree, i) => {
  let li = document.createElement("li");
  let text = document.createTextNode(masterArray[i]);
  li.appendChild(text);
  ul.appendChild(li);
});

//// 5

// Medžius turinčius savo pavadinime "a" raidę nudažyti raudonai

ul.querySelectorAll("li").forEach((li) => {
  for (let i = 0; i < li.innerText.length; i++) {
    if ("a" == li.innerText[i]) {
      li.style.color = "red";
    }
  }
});

// 6// Suskaičiuoti, kiek section#_1 yra gėlių// 7// Suskaičiuoti, kiek section#_1 gėlių pavadinuose yra raidžių (kaip nr2)
let kiekRaidziu = 0;
let count = 0;
let geles = document.querySelectorAll("p");

geles.forEach((p) => {
  for (let i = 0; i < p.innerText.length; i++) {
    kiekRaidziu++;
    if (p.innerText[i]) {
      count++;
      break;
    }
  }
});

console.log(`geliu yra: ${count} `);

geles.forEach((p) => {
  for (let i = 0; i < p.innerText.length; i++) {
    kiekRaidziu++;
  }
});

console.log(`raidziu yra: ${kiekRaidziu} `);

//8

// Kiekvienos gėlės raidžių skaičių įrašyti į data-letters-count="7" atributą

let z = 0;

geles.forEach((p) => {
  z = 0;
  for (let i = 0; i < p.innerText.length; i++) {
    p.dataset.lettersCount = ++z;
  }
  console.log(z);
});

// Kiekvienos gėlės raidžių skaičių įrašyti į <span> tagą ir jį įdėti į gėlės <p> tagą

let f = 0;
let text = document.createTextNode("0");

geles.forEach((p) => {
  f = 0;
  for (let i = 0; i < p.innerText.length; i++) {
    ++f;
  }
  let text = document.createTextNode(f);
  const span = document.createElement("span");
  span.appendChild(text);
  p.appendChild(span);
});
