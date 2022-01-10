const h1 = document.querySelector("h1");

h1.style.color = "red";
h1.style.margin = "auto";
h1.style.textAlign = "center";

console.log(h1);

const labukas = document.querySelector("div:nth-of-type(2)");

labukas.style.color = "white";

//Ne tas divas - uždėti mėlyną borderį, paddingas 20px, letterspeisingas 3px, fontas 40px DONE!

const neTas = document.querySelector("div:nth-of-type(1)");

neTas.style.color = "blue";

neTas.style.padding = "20px";

neTas.style.border = "4px solid blue";

neTas.style.fontSize = "25px";

neTas.style.letterSpacing = "3px";

const body = document.querySelector("body");

body.style.background = "pink";
body.style.width = "100vw";
body.style.height = "100vh";

function myCallback() {
  console.log("disco");
  if (body.style.background == "pink") {
    body.style.background = null;
  } else {
    body.style.background = "pink";
  }
  myCallback.classList.toggle("bodys");
  console.log("myCallback");
}

//setInterval(myCallback, 500);

labukas.classList.add("big");
labukas.classList.remove("big");

console.log(labukas);

const afrika = document.querySelector("h2:nth-of-type(1)");

afrika.style.background = "green";

afrika.classList.toggle("blue");

const amerika = document.querySelector("h2:nth-of-type(2)");

amerika.style.background = "blue";

amerika.classList.toggle("green");

//Su setInterval padarykite, kad spalvos tiek klasių, tiek inline style kaitaliotųsi tarpusavyje tarp Afrikos ir Amerikos

setInterval(function () {
  afrika.style.background == "green"
    ? (afrika.style.background = "blue")
    : (afrika.style.background = "green");
  amerika.style.background == "blue"
    ? (amerika.style.background = "green")
    : (amerika.style.background = "blue");

  amerika.classList.toggle("green");
  afrika.classList.toggle("blue");
  amerika.classList.toggle("blue");
  afrika.classList.toggle("green");
  console.log("zemynai");
}, 500);

//DESTYTOJO VARIANTAS
console.log("------------DESTYTOJO VARIANTAS-------------");
console.log("zemynai");

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("ja ja ja");
});

function numygimas() {
  console.log("ja ja ja");
}

console.log(button);
