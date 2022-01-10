function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ------------------------MASYVAI (OBJECT)---------------------------

// let masyvas = ["jautis", "avinas"];

// masyvas.push("kiaule"); //ikeliam i masyva reiksme (masyvo pabaiga)

// masyvas.push("kate");

// masyvas.push(42);

// masyvas[0] = "karve"; //pakeiciam masyvo reiksme;

// masyvas[2]++;

// masyvas[8] = "suo";

// masyvas.unshift("kalakutas");

// console.log(masyvas);

// console.log(masyvas[1]);

// console.log(masyvas[0]);

// masyvas.pop(); //istrina paskutini masyvo elementa
// masyvas.shift(); //istrina pirma masyvo elementa

// masyvas;

//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

console.log("1 uzduotis-------------------");

i = 0;
elementas = 0;

let masyvas = [];

do {
  i++;
  elementas = rand(5, 25);
  masyvas.push(elementas);
} while (i < 30);

console.log(masyvas);

// masyvas.length - skaiciuoja masyvo ilgi

//Naudodamiesi 1 uždavinio masyvu:
//Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

console.log("2 A");

let more10 = 0;

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > 10) {
    more10++;
  }
}

console.log(more10);

//Raskite didžiausią masyvo reikšmę ir jos indeksą;

console.log("--------------2 B--------------");

let max = masyvas[0];
maxIndex = 0;

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > max) {
    max = masyvas[i];
    maxIndex = i;
  }
}

console.log(max, maxIndex);

//Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

console.log("--------------2 C--------------");

poriniuSuma = 0;

for (let i = 0; i < masyvas.length; i++) {
  if (i % 2) {
    poriniuSuma = masyvas[i] + poriniuSuma;
  }
}

console.log(poriniuSuma);

//Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

console.log("--------------2 D--------------");

update = 0;

let masyvas2 = [];

for (let i = 0; i < masyvas.length; i++) {
  update = masyvas[i] - i;
  masyvas2.push(update);
}

console.log(masyvas2);

//Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

console.log("--------------2 E--------------");

let papildymas = 0;
let t = 0;

for (let i = 0; i < 10; i++) {
  papildymas = rand(5, 25);
  masyvas.push(papildymas);
}

console.log(masyvas);

//Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;

console.log("--------------2 F--------------");

let porinis = [];
neporinis = [];

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] % 2) {
    neporinis.push(masyvas[i]);
  } else {
    porinis.push(masyvas[i]);
  }
}

console.log(porinis);
console.log(neporinis);

//Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

console.log("--------------2 G--------------");

for (let i = 0; i < porinis.length; i++) {
  if (porinis[i] > 15) {
    porinis[i] = 0;
  }
}

console.log(porinis);

//Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

console.log("--------------2 H--------------");

let x = 0;

for (let i = 0; i < masyvas.length; i++) {
  x++;
  if (porinis[i] > 10) {
    console.log(`radom ji ${i} pozicijoje`);
    i = masyvas.length;
  }
}

//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

console.log("--------------3 uzduotis--------------");

let masyvas200 = [];
let a = 0;
b = 0;
c = 0;
d = 0;

for (let i = 0; i < 200; i++) {
  let keturi = rand(0, 3) ? (rand(0, 2) ? (rand(0, 1) ? "A" : "B") : "C") : "D";
  masyvas200.push(keturi);
}

for (let i = 0; i < masyvas200.length; i++) {
  if (masyvas200[i] == "A") {
    a++;
  } else if (masyvas200[i] == "B") {
    b++;
  } else if (masyvas200[i] == "C") {
    c++;
  } else {
    d++;
  }
}

console.log(`A = ${a} B = ${b} C = ${c} D = ${d}`);

console.log(masyvas200);

//let trys = rand(0, 2) ? (rand(0, 1) ? "green" : "blue") : "red";

console.log("--------------4 uzduotis--------------");

//Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

// let masyvasA = [];
// masyvasB = [];
// masyvasC = [];
// k = 0;
// trys = "";
// keturi = "";
// saugiklis = 0;

//   do {
//     saugiklis++;
//     if (saugiklis > 700) {
//       break;
//     }
//     let keturi = rand(0, 3)
//       ? rand(0, 2)
//         ? rand(0, 1)
//           ? "A"
//           : "B"
//         : "C"
//       : "D";
//     //    console.log(keturi);
//     let trys = rand(0, 2) ? (rand(0, 1) ? "X" : "Y") : "Z";

//     //    console.log(trys);

//     if (trys == "X" && masyvasA.length != 200) {
//       k++;
//       masyvasA.push(keturi);
//     } else if (trys == "Y" && masyvasB.length != 200) {
//       masyvasB.push(keturi);
//     } else if (trys == "Z" && masyvasC.length != 200) {
//       masyvasC.push(keturi);
//     }
//   } while ();

//console.log(keturi);
//console.log(trys);
// console.log(k);
// console.log(masyvasA);
// console.log(masyvasB);
// console.log(masyvasC);

//Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

let pinigine = [];
a = 0;

for (let i = 0; i < rand(10, 30); i++) {
  pinigine.push(rand(0, 10));
}

console.log(pinigine);

//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

console.log("--------------2 uzduotis ------------");

suma = 0;

for (let i = 0; i < pinigine.length; i++) {
  suma = pinigine[i] + suma;
}

console.log(suma);

//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

console.log("--------------3 uzduotis ------------");

let sumaPop = 0;

for (let i = 0; i < pinigine.length; i++) {
  pinigine[i] > 2 ? (sumaPop += pinigine[i]) : sumaPop;
}

console.log(sumaPop);

console.log("--------------4 uzduotis ------------");

//Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

let centai = 0;

for (let i = 0; i < pinigine.length; i++) {
  pinigine[i] < 2 ? (pinigine[i] = 0) : pinigine;
}

console.log(pinigine);

console.log("--------------5 uzduotis ------------");

//Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let pinigineStart = pinigine[0];
let pinigineMax = 0;
pinigineDid = 0;

for (let i = 0; i < pinigine.length; i++) {
  pinigine[i] > pinigineMax ? (pinigineMax = pinigine[i]) : pinigine;
}
console.log(pinigine);

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] == pinigineMax) {
    pinigineDid++;
  }
}

console.log(
  `Masyvo didžiausia reikšmė ${pinigineMax} , masyve yra ${pinigineDid} tokios reiksmes`
);

console.log("--------------6 uzduotis ------------");
//Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

for (let i = 0; i < pinigine.length; i++) {
  pinigine[i] == 0 ? (pinigine[i] = i) : pinigine;
}
console.log(pinigine);

//Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

console.log("--------------7 uzduotis ------------");

while (pinigine.length < 30) {
  pinigine.push(rand(0, 10));
}

console.log(pinigine);

//Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

console.log("--------------8 uzduotis ------------");

let pinigineMonetos = [];
piniginePopieriukai = [];

for (let i = 0; i < pinigine.length; i++) {
  pinigine[i] <= 2
    ? pinigineMonetos.push(pinigine[i])
    : piniginePopieriukai.push(pinigine[i]);
}

console.log(pinigineMonetos);
console.log(piniginePopieriukai);

// piniogine = pinigine2 - perdavimas pagal nuoroda. Objektui tik sukuria kita varda, reiksmiu nepriskiria;
//pinigine2 = pinigine(slice) - nukopijuojam visas reiksmes.

//Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

console.log("--------------9 uzduotis ------------");

let didelePinigine = [];
skyrelisMonetos = [];
skyrelisPopieriukai = [];

skyrelisMonetos = pinigineMonetos.slice();
skyrelisPopieriukai = piniginePopieriukai.slice();

console.log(skyrelisMonetos);
console.log(skyrelisPopieriukai);

didelePinigine[0] = skyrelisMonetos;
didelePinigine[1] = skyrelisPopieriukai;

console.log(didelePinigine);

//Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

console.log("--------------10 uzduotis ------------");

skyrelisKorteles = [
  "KIKA",
  "Euro Vaistinė",
  "Drogas",
  "Ačiū",
  "Lietuvos Geležinkeliai",
  "Mano RIMI",
];
didelePinigine[3] = skyrelisKorteles;

console.log(didelePinigine);
console.log(skyrelisKorteles);

//Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

console.log("--------------11 uzduotis ------------");

console.log(skyrelisKorteles.sort());

skyrelisKorteles.sort();

console.log(skyrelisKorteles);

//Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

console.log("--------------12 uzduotis ------------");

console.log(skyrelisKorteles.length);

while (skyrelisKorteles.length < 20) {
  didelePinigine[3].push(rand(0, 1) ? "MasterCard" : "Visa");
}

console.log(skyrelisKorteles);

//console.log(skyrelisKorteles.lenght);

console.log("--------------BANDOM ------------");

console.table(skyrelisKorteles);
