function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
} //The maximum is exclusive and the minimum is inclusive

//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
//4.
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
//5.
let raideABC;

let skaicius123 = rand(1, 4);

console.log("Patikrinam =", skaicius123);

if (skaicius123 == 1) {
  raideABC = "A";
} else if (skaicius123 == 2) {
  raideABC = "B";
} else {
  raideABC = "C";
}

console.log("Kintamasis =", raideABC);

//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę

//6.---------------------------------------------------------------
console.log("6 uzduotis");

let pirmas = rand(0, 3);
let antras = rand(0, 3);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma
console.log("Pirmas", pirmas, "Antras", antras);

if ((pirmas * antras) < (pirmas + antras)) {
  console.log("Suma didesne uz sandauga");
} else if ((pirmas * antras) > (pirmas + antras)) {
  console.log("Sandauga didesne uz suma");
} else {
  console.log("Reiksmes lygios");
}

//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju

//9.
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.

//10.
let as = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirklės") : "akmuo";
let tu = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirklės") : "akmuo";
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
