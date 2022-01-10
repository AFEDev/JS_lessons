function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

object = {};
array = [];

array[0] = "jonas";
array.push("Janina");

object.vyras = "jonas";
object.moteris = "Janina";

console.log(object, array);
console.log(array);

namas = {};

namas.stogas = {};

namas.stogas.antena = "antena";

namas.stogas.kaminas = [];

for (let i = 1; i < 101; i++) {
  namas.stogas.kaminas.push("plyta Nr " + i);
}

namas.siena = ["1 langas", " 2 langas", "3 langas", "4 langas"];

namas.stogas.stoglangiai = [];

for (let i = 1; i < 11; i++) {
  namas.stogas.stoglangiai.push("Stoglangis " + i);
}

console.log(namas);

/*
Kvartalas

Reikia sukurti 33 namų kvartalą. kvartalas yra masyvas;
Kiekvienas namas kvartale yra objektas.
Kiekvienas namas turi number, color, hasDog
number skaičiai nuo 1 iki 33 iš eilės
color random iš 'red', 'blue', 'ugly'
hasDog random true arba false
*/
let kvartalas = [];
let y = "";
let x = "";

console.log(y);

for (let i = 1; i < 34; i++) {
  y = rand(0, 1) ? true : false;
  x = rand(0, 2) ? (rand(0, 1) ? "red" : "blue") : "ugly";
  kvartalas[i] = namukas = { number: i, color: x, hasDog: y };
}

console.log(kvartalas.length);

console.log(kvartalas);

//Jeigu kotedže yra šuo duoti jam vardą priskiriant kotedžui naują savybę dogName. Vardas random iš pačių sudaryto šunų masyvo vardų DONE!

const names = ["Fredis", "Maxas", "Shansas", "Rikis", "Rudis"];

for (let i = 1; i < kvartalas.length; i++) {
  if (kvartalas[i].hasDog == true) {
    kvartalas[i].dogName = names[rand(0, names.length - 1)];
  }
}

//Suskaičiuoti kiek kvartale yra šunų DONE!

let suo = 0;

for (let i = 1; i < kvartalas.length; i++) {
  if (kvartalas[i].hasDog) {
    suo++;
  }
}

console.log(`Kvartale sunu yra: ${suo}`);

//Kokios spalvos namų kvartale yra daugiausia? DONE!

const colorCounter = { ugly: 0, blue: 0, red: 0 };

for (let i = 1; i < kvartalas.length; i++) {
  const color = kvartalas[i].color;
  colorCounter[color]++;
}
// jeigu color == ugly;
//colorCounter.ugly;

console.log(colorCounter);

//fancy metodas

const fancy = [];
fancy[colorCounter.ugly] = "ugly";
fancy[colorCounter.blue] = "blue";
fancy[colorCounter.red] = "red";

console.log(fancy);

//Visiems 'ugly' namams, kurie neturi šuns duoti po šunį (hasDog ===> true) ir duoti šuniui vardą DONE!

for (let i = 1; i < kvartalas.length; i++) {
  if (kvartalas[i].hasDog === false) {
    kvartalas[i].hasDog = true;
    kvartalas[i].dogName = names[rand(0, 4)];
  }
}

console.table(kvartalas);
