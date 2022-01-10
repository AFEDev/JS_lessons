function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//---------------------------------------------------------------------------------------------------

function sum(x, y) {
  return x + y; //jeigu funkcija pasieke return toliau kodas nebevykdomas
  console.log("bla bla bla");
}

sum(6, 6);
sum(18, 18);
sum(22, 0);

let suma = sum(2, 2);

console.log(suma);

//---------------------------------------------------------------------------------------------------

console.log(`------------------SKAICIUOTUVAS------------------`);

function calculator(x, y, z) {
  if (z === "+") {
    console.log(this);
    return x + y;
  }
  if (z === "*") {
    return x * y;
  }
  if (z === "-") {
    return x - y;
  }
  if (z === "/") {
    return x / y;
  }
  return `Tokios funkcijos kalkuliatorius nepalaiko`; // return uzbaigia bunkcija todel ELSE netenka prasmes
}

console.log(calculator(5, 3, "+"));

//---------------------------------------------------------------------------------------------------

function duSkaiciai(a, b) {
  return [a + 3, b + 3];
}

console.log(duSkaiciai(5, 7));

//duotos trys spalvos Red, Blue ir Green. Reikia parašyti funkciją su vienu argumentu. Funkcija turi veikti taip: jeigu argumentas yra Red, turi grąžinti dvi kitas spalvas, Blue ==> Red ir Green DONE!
let debug = [];

function rgb(c) {
  const m = ["red", "green", "blue"];
  m.splice(m.indexOf(c), 1);
  debug.push({ c, index, indexOf: rgb.indexOf(c) });
  return m;
}

let [color1, color2] = rgb("green");

console.table(debug);

console.log(color1, color2);

// Reikia padaryti funkciją, kuri neturi argumentų, bet ji grąžina dvi raides X ir U. Raides reikia įrašyti į du kintamuosius l1 ir l2 DONE!

console.log("-------------------------------------------------------");
console.log(
  "funkciją, kuri neturi argumentų, bet ji grąžina dvi raides X ir U"
);
console.log("-------------------------------------------------------");

function xu() {
  const masyvas = [];
  masyvas.push("X");
  masyvas.push("U");
  return masyvas;
}
let [l1, l2] = xu();
console.log(l1, l2);

//duotos trys spalvos Red, Blue ir Green. Reikia parašyti funkciją su vienu argumentu. Funkcija turi veikti taip: jeigu argumentas yra Red, turi grąžinti dvi kitas spalvas, Blue ==> Red ir Green DONE!

function spalvos() {
  return ["red", "green", "blue"].filter((color) => c != color);
}

let [color3, color4] = rgb("green");

console.log(color3, color4);

// anonimiones funkcijos

// const anonimas = function () {
//   console.log("Valio");
// };

// let laDaina = function () {
//   console.log("la la la");
// };

// anonimas();

console.log("----------Funkcijos su argumentu----------");

let baras = {};

baras.alus = "Nuogas ruonis";

baras.kedes = rand(5, 20);

baras.daina = function () {
  console.log("la la la");
};

// THIS

baras.kedziuSkaicius = function () {
  console.log("Kėdžių skaičius šiame bare yra", this.kedes);
};

baras.kedziuSkaicius();

baras.daina();
baras.daina();
baras.daina();

console.log(baras);

console.log("----------STRINGAS YRA OBJEKTAS----------");

const st = "labas";

console.log(typeof st);
console.log(st);

console.log(st.charAt(2));

const stObj = new String("Gandras");

console.log(stObj);

String.prototype.hello = function () {
  return "Hello!!!";
};

let stringas = "Bla Bla";

console.log(stringas.hello());
console.log(stringas.valueOf());

//---------sukta uzduotis-------

console.log("----------STRINGO PROTOTIPAS----------");

//reikia suprototaipinti strigą pridedant metodą addStars kuris grąžintų to stringo reikšmę su 3 PVZ vardas='jonas' vardas.addStar() ====> jonas**

let vardas = "Jonas";

String.prototype.addStars = function () {
  return this.valueOf() + "***";
};

console.log(vardas);
console.log(stringas.addStars());

console.log("----------function add3----------");

function add3(a, b) {
  return [a + 3, b + 3];
}

// console.log('masyvas ===>', add3(5, 7));

let [k1, k2] = add3(10, 20);

console.log(k1, k2);
