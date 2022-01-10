function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-----------------------------------------------------------------------------------------------------------

//8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
let randomDigit = 0;
i = 0;
x = 0;
sumCount = 0;
tester18 = 0;
sumNonCount = 0;
lyginiai = 0;
nelyginiai = 0;
skaiciuojam = 0;

do {
  x++;
  i = 0;
  do {
    randomDigit = rand(10, 25);
    console.log(randomDigit);
    i++;
    randomDigit > 18
      ? (sumCount = randomDigit + sumCount)
      : (sumNonCount = randomDigit + sumNonCount);
    randomDigit < 18 ? tester18++ : tester18;
    randomDigit % 2 ? ++nelyginiai : ++lyginiai;
    console.log("tikrinam", i);
  } while (randomDigit > 12);
} while (i < 20);

// for (let i = 0; i < tester; i++) {
//   randomDigit1 = rand(10, 25);

//   if (counter < 20 || randomDigit1 > 12) {
//     tester++;
//     counter_x_20++;
//   } else {
//     tester--;
//   }
//   tester > 1 ? counter++ : counter++;

//   randomDigit1 > 18
//     ? (sumCount = randomDigit1 + sumCount)
//     : (sumNonCount = randomDigit1 + sumNonCount);

//   randomDigit1 > 18 ? tester18++ : tester18;
//   randomDigit1 % 2 ? ++nelyginiai : ++lyginiai;

//   //console.log(`skaitiklis ${sumCount}`);

//   // console.log(`sumuojam ${counter}`);

//   //   if (randomDigit1 > 12) {
//   //     tester = tester + 1;
//   //     console.log(`turim: ${randomDigit1}`);
//   //   } else {
//   //     tester = 0;
//   //     console.log("stabdom");
//   //   }
//   //   console.log(randomDigit1);
//   // }

//   console.log(randomDigit1);
// }

console.log("-----------------A DALIS------------------");

// //A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

console.log(`Sustojom ant: ${randomDigit}`);

// //B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

console.log("-----------------B DALIS------------------");

console.log(`Prireike interaciju: ${i}`);

// //C.Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log("-----------------C DALIS------------------");

console.log(`Suma skaiciu >18: ${sumCount}`);

// //D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log("-----------------D DALIS------------------");

console.log(`Suma skaiciu <18: ${sumNonCount}`);
console.log(`Kiek tokiu buvo: ${tester18}`);

// //E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.

console.log("-----------------E DALIS------------------");

console.log(`Lyginiai: ${lyginiai}`);
console.log(`Nelyginiai: ${nelyginiai}`);

// //F. Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.

console.log("-----------------F DALIS------------------");

console.log(`Prireike pakartojimu: ${x}`);

// //[18:27] Arvydas Kijakauskas (Dėstytojas)
// //h = 0;s = 0;buvoCiklu = 0;do {    buvoCiklu++;    let coin = rand(0, 1) ? 'H' : 'S';    'H' == coin ? h++ : s++;    console.log(coin);} while (h < 3)

// //console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

console.log("-----------------9 UZDUOTIS------------------");
//9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;

let randomDigit09 = 0;
a = 0;
b = 0;
c = 0;
d = 0;

do {
  a = 0;
  d++;
  do {
    a++;
    randomDigit09 = rand(5, 10);
    console.log("random", randomDigit09);
    console.log("a", a);
    for (b = 0; b < randomDigit09; b++) {
      c++;
    }
  } while (randomDigit09 != 5);
} while (d < 3);

console.log("-----------------A DALIS------------------");

//A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

console.log("didysis", a);
console.log("mazasis", c);

console.log("-----------------B DALIS------------------");

//B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;

console.log("prasukimai", d);

console.log("-----------------C DALIS------------------");
//C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

//Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.

let kt = 0;
pt = 0;
kazioTas = 0;
petroTas = 0;

do {
  kt = rand(10, 20);
  pt = rand(5, 25);
  console.log(`Kazys ${kt}`);
  console.log(`Petras ${pt}`);

  if (kt > pt) {
    console.log(`Kazys laimejo`);
    kazioTas += kt;
    petroTas += pt;
  } else if (kt < pt) {
    console.log(`Petras laimejo`);
    kazioTas += kt;
    petroTas += pt;
  } else {
    console.log(`Lygiosios`);
    kazioTas += kt;
    petroTas += pt;
  }
} while (kazioTas < 222 && petroTas < 222);

if (kazioTas > petroTas) {
  console.log(
    `Partija laimejo Kazys, surinkes ${kazioTas} taskus, Petras surinko ${petroTas}`
  );
} else {
  console.log(
    `Partija laimejo Petras, surinkes ${petroTas} taskus, Kazys surinko ${kazioTas}`
  );
}
