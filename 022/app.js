// Perkrovus puslapį, atsirastų po vieną papildomą random spalvos apskritimą.
// Pradžioje apskritimų nėra, perkrovus puslapį atsiranda 1 tada perkrovus atsiranda dar vienas,
//  o prieš tai buvęs lieka. DONE!

let colors = localStorage.getItem("color"); // gauname stringa

// Pirmas kartas
if (null === colors) {
  colors = [];
  localStorage.setItem("color", JSON.stringify([]));
} else {
  colors = JSON.parse(colors); //is json stringo padarome struktura
}

let newRandom = "#" + Math.floor(Math.random() * 16777215).toString(16);

newRandom = newRandom.length < 7 ? newRandom + "0" : newRandom;

colors.push(newRandom);

// struktura paverciam stringu ir irasome i saugykla
localStorage.setItem("color", JSON.stringify(colors));

// Tin vizualizacija
console.log(JSON.parse(localStorage.getItem("colors")));

let dog = JSON.parse(localStorage.getItem("colors"));

console.log(dog);

//mano variantas

// const apskritimas = (i) => {
//   const body = document.querySelector("body");
//   const div = document.createElement("div");
//   body.appendChild(div);
//   div.classList.add("apskr");
//   div.style.backgroundColor = dog[i];
// };

// for (let i = 0; i < dog.length; i++) {
//   apskritimas(i);
// }

//destytojo variantas:

colors.forEach((element) => {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  body.appendChild(div);
  div.classList.add("apskr");
  div.style.backgroundColor = element;
});
