function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("----------------8 UZDUOTIS--------------");

//8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;

let randomDigit1 = 0;
tester = 1;
counter = 0;
sumCount = 0;
sumNonCount = 0;
tester18 = 0;
lyginiai = 0;
nelyginiai = 0;
counter_x_20 = 0;

for (let i = 0; i < tester; i++) {
  randomDigit1 = rand(10, 25);

  if (counter < 20 || randomDigit1 > 12) {
    tester++;
    counter_x_20++;
  } else {
    tester--;
  }
  tester > 1 ? counter++ : counter++;

  randomDigit1 > 18
    ? (sumCount = randomDigit1 + sumCount)
    : (sumNonCount = randomDigit1 + sumNonCount);

  randomDigit1 > 18 ? tester18++ : tester18;
  randomDigit1 % 2 ? ++nelyginiai : ++lyginiai;

  //console.log(`skaitiklis ${sumCount}`);

  // console.log(`sumuojam ${counter}`);

  //   if (randomDigit1 > 12) {
  //     tester = tester + 1;
  //     console.log(`turim: ${randomDigit1}`);
  //   } else {
  //     tester = 0;
  //     console.log("stabdom");
  //   }
  //   console.log(randomDigit1);
  // }

  console.log(randomDigit1);
}

console.log("-----------------A DALIS------------------");

//A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

console.log(randomDigit1);

//B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

console.log("-----------------B DALIS------------------");

console.log(`Prireike interaciju: ${counter}`);

//C.Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log("-----------------C DALIS------------------");

console.log(`Suma skaiciu >18: ${sumCount}`);

//D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log("-----------------D DALIS------------------");

console.log(`Suma skaiciu <18: ${sumNonCount}`);
console.log(`Kiek tokiu buvo: ${tester18}`);

//E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.

console.log("-----------------E DALIS------------------");

console.log(`Lyginiai: ${lyginiai}`);
console.log(`Nelyginiai: ${nelyginiai}`);

//F. Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.

console.log("-----------------F DALIS------------------");

console.log(`Prireike pakartojimu: ${counter_x_20}`);

//[18:27] Arvydas Kijakauskas (Dėstytojas)
//h = 0;s = 0;buvoCiklu = 0;do {    buvoCiklu++;    let coin = rand(0, 1) ? 'H' : 'S';    'H' == coin ? h++ : s++;    console.log(coin);} while (h < 3)

//console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

console.log("-----------------9 uzduotis------------------");

let skaiciuSuma = 0;
i = 0;

do {
  let randomDigits = rand(0, 10);
  i++;
  console.log(randomDigits);
  skaiciuSuma = randomDigits + skaiciuSuma;
} while (skaiciuSuma < 100);

console.log("----------Ciklas uzsibaige---------");

console.log(skaiciuSuma);

console.log("-----------------10 uzduotis------------------");

//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

let notRandom = 0;

do {
  notRandom = rand(0, 10);
  i++;
  console.log(notRandom);
} while (notRandom != 5 && notRandom != 7);

//console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

console.log("-----------------11 uzduotis------------------");

let x = 0;
skaiciuSum = 0;

do {
  let randomDigits = rand(0, 10);
  x++;
  console.log(randomDigits);
  //console.log(x);
  skaiciuSum += randomDigits;
} while (skaiciuSum < 20 || x < 11);

//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

console.log("-----------------12 uzduotis------------------");

let y = 0;
lyginis = 0;

do {
  let randomDigits = rand(0, 10);
  console.log(randomDigits);

  randomDigits % 2 ? ++lyginis : lyginis;
} while (lyginis < 3);

//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

console.log("-----------------13 uzduotis------------------");

let x1 = 0;
random1 = 0;
random2 = 0;

do {
  random1 = rand(0, 10);
  random2 = rand(0, 10);
  console.log(random1, random2);
} while (random1 != random2);

//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

console.log("-----------------14 uzduotis------------------");

let x2 = 0;
random_1 = 0;
random4 = 0;
skaiciuSum1 = 0;
skaiciuSum2 = 0;

do {
  random3 = rand(0, 10);
  random4 = rand(0, 10);
  console.log(random3, random4);
  skaiciuSum1 = random3 + skaiciuSum1;
  skaiciuSum2 = random4 + skaiciuSum2;
} while (skaiciuSum1 < 100 || skaiciuSum2 < 100);

console.log(`tikrinames pirma: ${skaiciuSum1} antra: ${skaiciuSum2} `);
