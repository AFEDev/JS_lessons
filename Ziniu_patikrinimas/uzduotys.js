function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Javasript tarpinio žinių patikrinimo testas #1Masyvai, Ciklai, Mergaitės, Katinukai ir Nausėda
//Duotas toks vardų masyvas:

constgirls = [
  "Brigita",
  "Edita",
  "Deimantė",
  "Justė",
  "Ona",
  "Bronė",
  "Ramunė",
  "Kaštonė",
  "Meilutė",
];

console.log(constgirls.length);

//1.Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai skaičiai nuo 2 iki 12; Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai vardai iš masyvo girls. Vardai gali kartotis. Masyvus atspausdinkite su console.log();

console.log("--------------1 uzduotis--------------");

let cats = []; //sukuriam masyva 'cats'

for (let i = 0; i < 10; i++) {
  // paleidziam cikla kuris suksis 10 kartu
  cats.push(rand(2, 12)); // uzduodam siklui salyga, kiekvieno prasisukimo metu i masyva 'cats' 'istumti' atsitiktini elementa nuo 2 iki 12.
}

console.log(cats); // isvedam i console masyva 'cats'

let owners = []; // sukuriam masyva owners

for (let i = 0; i < 10; i++) {
  owners.push(constgirls[rand(0, constgirls.length - 1)]);
}

console.log(owners);

//2.Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą). Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3. Rezultatą atspausdinkite suconsole.log();

console.log("--------------2 uzduotis--------------");

let katinukai = 0;

for (let i = 0; i < cats.length; i++) {
  cats[i] % 3 ? "" : (katinukai += cats[i]);
}

console.log(
  `Masyve cats yra ${katinukai} katinuku kuriu skaiciu dalinasi is 3`
);

//3.Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o ne užrašykite ant mergaitės!) pridėkite vardą 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;

console.log("--------------3 uzduotis--------------");

owners.unshift("Nauseda");
console.log('Masyvas su pridetu elementu "Nauseda');
console.log(owners);

//4.Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats)naudodami masyvus cats ir owners pagal taisyklę: pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo, antrai- antras ir t.t. Atkreipkite dėmesį,kad pirma mergaitė owners masyve yra ne pirmas elementas suindeksu 0 (pirmas yra 'Nausėda' ), o antras is su indeksu 1. Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0.Masyvą atspausdinkite su console.log();

console.log("--------------4 uzduotis--------------");

let catOwners = [];

// for (let i = 0; i < owners.length - 1; i++) {
//   catOwners[i].push(owners[i]);
// }

catOwners = owners.slice(1, owners.length);

for (let i = 0; i < catOwners.length; i++) {
  catOwners[i] = catOwners[i] + " has " + cats[i] + " cats ";
}
console.log("Trecias masyvas su reiksmemis is masyvu cats ir owners:");
console.log(catOwners);

//"5.Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite suconsole.log()"

console.log("--------------5 uzduotis--------------");

let vardas;
let f = 0;

for (let i = 0; i < owners.length; i++) {
  console.log("i", i);
  for (let x = 0; x < owners.length; x++) {
    console.log(x);
    owners[i] == owners[x] && i != x ? ((vardas = owners[i]), f++) : "";
  }
}

console.log(`pasikartojantis vardas yra ${vardas}`);

console.log(`pasikartojantis vardas yra ${f}`);

console.log("--------------Destytojo 5--------------");

console.log("Nr 5");

const uniqueNames = [];
let repeatName;
for (let i = 0; i < owners.length; i++) {
  if (uniqueNames.indexOf(owners[i]) == -1) {
    uniqueNames.push(owners[i]);
  } else {
    repeatName = owners[i];
    break;
  }
}
console.log(`Mergaitės su vienodu vardu: ${repeatName}`);
