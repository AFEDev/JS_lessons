const h1 = document.querySelector("h1");

h1.style.color = "rgb(8, 57, 8)";

const tagI = document.querySelector("i");

tagI.classList.add("small");

h1.classList.remove("main");

const h2first = document.querySelector("h1 + h2");

h2first.classList.add("first");

h2first.classList.remove("main");

//Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

const h2span = document.querySelector("h2 :first-child");

h2span.style.fontSize = "10px";
h2span.style.color = "grey";

//Suskaičiuoti kiek yra h2 tagų;

const h2 = document.querySelectorAll("h2");

console.log(`H2 tagu yra: ${h2.length}`);

//Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

const h2f = document.querySelectorAll("h2.first");

console.log(h2.length - h2f.length);

//Visus h2 tagus nuspalvinti šviesiai mėlynai

for (let i = 0; i < h2.length; i++) {
  h2[i].style.color = "blue";
}

//Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

const prices = document.querySelectorAll("div.prices");

for (let i = 0; i < prices.length; i++) {
  prices[i].classList.add("price-tag");
}

//Pabraukti visus tagus su klase new;

const tNew = document.querySelectorAll(".new");

for (let i = 0; i < tNew.length; i++) {
  tNew[i].style.textDecoration = "underline";
}

//Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

const ul = document.querySelectorAll("ul");

console.log(`Gyvunu kategoriju yra: ${ul.length}`);

const ulli = document.querySelectorAll("ul#zirafos li:not(.like-button");

console.log(`Zirafu yra ${ulli.length}`);

//Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

for (let i = 0; i < ul.length; i++) {
  ul[i].style.border = "2px solid";
  ul[i].style.padding = "15px 50px 15px 50px";
}

//Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

const newAnimals = document.querySelectorAll("li.new");

console.log(`Nauju gyvunu yra: ${newAnimals.length}`);

//Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

const nZirafos = document.querySelectorAll("ul#zirafos li.new");
const nPlesrunai = document.querySelectorAll("ul#plesrunai li.new");
const nGyvates = document.querySelectorAll("ul#gyvates li.new");
const nZoleedziai = document.querySelectorAll("ul#zoliaedziai li.new");

console.log(`Nauju Žirafų yra: ${nZirafos.length}`);
console.log(`Nauju plesrunu yra: ${nPlesrunai.length}`);
console.log(`Nauju gyvaciu yra: ${nGyvates.length}`);
console.log(`Nauju zoleedziu yra: ${nZoleedziai.length}`);

//3. Elementų events
//Padaryti tai ką liepia mygtukai Header1 sekcijoje;

const h1color = document.querySelector("#h1-color");

h1color.addEventListener("click", () => {
  h1.style.color = "green";
});

const h1font = document.querySelector("#h1-font");

h1font.addEventListener("click", () => {
  h1.style.fontSize = "10px";
});

//Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;

tagI.addEventListener("click", () => {
  tagI.style.fontWeight = "bold";
});

//Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

const price = document.querySelector(".prices");
price.style.backgroundColor = "white";

price.addEventListener("click", () => {
  price.style.backgroundColor == "white"
    ? (price.style.backgroundColor = "grey")
    : (price.style.backgroundColor = "white");
});

//Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

const contacs = document.querySelector("#contacts");

contacs.addEventListener("click", () => {
  contacs.style.color = "orange";
});
//Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;

const padidinti = document.querySelector("#contacts u");

padidinti.style.cursor = "pointer";

padidinti.addEventListener("click", () => {
  contacs.style.fontSize = "20px";
});

//Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element

const panaikinti = document.querySelector("#contacts b");

panaikinti.style.cursor = "pointer";

panaikinti.addEventListener("click", (e) => {
  e.stopPropagation();
  contacs.style.fontSize = null;
  contacs.style.color = null;
});

//Padaryti tai ką liepia mygtukai Header2 sekcijoje;

const colorBack = document.querySelector("#h1-color-back");

colorBack.addEventListener("click", (e) => {
  e.stopPropagation();
  h1.style.color = null;
});

const fontBack = document.querySelector("#h1-font-back");

fontBack.addEventListener("click", () => {
  h1.style.fontSize = null;
});

//4. Elementų grupių events
//Padaryti, kad du kartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
console.log(`Nauju gyvunu yra: ${newAnimals.length}`);

for (let i = 0; i < newAnimals.length; i++) {
  newAnimals[i].addEventListener("dblclick", () => {
    newAnimals[i].style.color = "red";
  });
}

//Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

const li = document.querySelectorAll("ul li:not(:first-child)");

li.forEach((element, i) => {
  li[i].addEventListener("click", () => {
    li[i].style.fontSize = "130%";
  });
});

//Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

const like = document.querySelectorAll(".like-button");
//const like_add = document.querySelectorAll(".animals ul");

like.forEach((laikas) => {
  laikas.addEventListener("click", () => {
    const like_add = laikas.closest("ul");
    like_add.classList.add("like");
  });
});

// 5.Dinaminis elementų kūrimas (su createElement)

//Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

let senjorai = document.createElement("h2");
senjorai.innerHTML = "Senjorai tik: 1.99 eur";
price.appendChild(senjorai);

//Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

let senjoruGrupe = document.createElement("h2");
senjoruGrupe.innerHTML = "Senjorų grupė iki 10: tik 5.99 eu";
senjoruGrupe.classList.add("new");
senjoruGrupe.classList.add("green");
price.appendChild(senjoruGrupe);

//Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

ul.forEach((tag) => {
  let li = document.createElement("li");
  let text = document.createTextNode("NEPATINKA");
  li.appendChild(text);
  tag.insertBefore(li, tag.firstElementChild.nextSibling);
  li.classList.add("like-button");
  li.addEventListener("click", () => {
    const like_remove = li.closest("ul");
    like_remove.classList.remove("like");
  });
});

//Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta

const fieldset = document.querySelector("fieldset:last-of-type");
const fieldsetAdd = document.createElement("fieldset");
const legend = document.createElement("legend");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
let textButton1 = document.createTextNode("Pabraukti H1 tagą");
let textButton2 = document.createTextNode("Nepabraukti H1 tagą");
let textLegend = document.createTextNode("HEADER 3");

fieldset.after(fieldsetAdd);
fieldsetAdd.appendChild(legend);
legend.appendChild(textLegend);
fieldsetAdd.appendChild(button1);
fieldsetAdd.appendChild(button2);
button1.appendChild(textButton1);
button2.appendChild(textButton2);
