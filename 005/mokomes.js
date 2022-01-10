function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("----------------------A-----------------------");

//Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;

// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;

let a = rand(5, 25);
b = rand(5, 25);
c = rand(5, 25);

let suma = a + b + c;
console.log(a, b, c);
console.log(`Sumos kintamasis yra: ${suma}`);

console.log("----------------------B-----------------------");

// Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;

let stringai = a + "" + b + "" + c;

console.log(typeof stringai);
console.log(stringai);

console.log("----------------------C-----------------------");

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;

let stringaiSuTarpu = a + " " + b + " " + c;

console.log(typeof stringaiSuTarpu);
console.log(stringaiSuTarpu);

console.log("----------------------D-----------------------");

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

let stringaiSuKintamuoju = a + " " + b + " " + c + " " + "=" + " " + suma;

console.log(typeof stringaiSuKintamuoju);
console.log(stringaiSuKintamuoju);

console.log("------------------2 UZDUOTIS------------------");

//Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

let number = rand(5, 10);
console.log(number);

console.log("------------------3 UZDUOTIS------------------");

//Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

let x = "Labas";

for (let i = 0; i < 5; i++) {
  console.log(x);
}

console.log("------------------4 UZDUOTIS------------------");

//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

for (let i = 0; i < 7; i++) {
  console.log(number);
}

console.log("------------------5 UZDUOTIS------------------");

//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;

for (let i = 0; i < number; i++) {
  console.log(number);
}

console.log("------------------6 UZDUOTIS------------------");

//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;

if (number > 7) {
  for (let i = 0; i < number; i++) {
    console.log(number);
  }
} else {
  console.log("Skaicius mazesnis uz 7");
}

console.log("------------------7 UZDUOTIS------------------");

//Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;

console.log("--------------------A DALIS------------------");

// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

let myVariable;

for (let i = 0; i < 5; i++) {
  myRandom = rand(10, 20);
  myVariable = myRandom;
  console.log(myVariable);
}

// B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log("--------------------B DALIS------------------");

let task7 = 0;

for (let i = 0; i < 5; i++) {
  let randomDigit = rand(10, 20);
  task7 = task7 + randomDigit;
}
console.log(`${task7}`);

// C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;

console.log("--------------------C DALIS------------------");

let taskC = "";

for (let i = 0; i < 5; i++) {
  let randomDigit = rand(10, 20);
  taskC = randomDigit + " " + taskC;
}
console.log(typeof taskC);
console.log(taskC);

// D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;

console.log("--------------------D DALIS------------------");

let taskSpace = "";
let taskSum = 0;

for (let i = 0; i < 5; i++) {
  let randomDigit = rand(10, 20);

  taskSpace = randomDigit + " " + taskSpace;
  taskSum = taskSum + randomDigit;
}
console.log(typeof taskC);
console.log(taskSpace, taskSum);

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
