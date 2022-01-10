

// 1. ciklo kintamojo deklaravimas ir jo pradines reiksmes priskyrimas


for (let i = 0; i < 10; i++) {

//do 10 times {
    console.log('Hi', i);
    console.log('Hello!');
//}
}

// console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

console.log('----------------------1-----------------------');

for (let i = 0; i < 5; i++) {

        console.log('Labas', i);
    }

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

console.log('----------------------2-----------------------');

for (let i = 0; i < 5; i++) {

    console.log( i);
}

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

console.log('----------------------3-----------------------');

for (let i = 0; i < 50; i = i + 10)  {

    console.log( i);
}

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

console.log('----------------------4-----------------------');

for (let i = 49; i < 54; i++)  {

    console.log( i);
}


// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

console.log('----------------------5-----------------------');


for (let i = 4; i > -1; i--)  {

    console.log( i);
}


// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

console.log('----------------------6-----------------------');

for (let i = 0; i < 10; i = i + 2 ) {

    console.log( i);
}


// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

function rand(min, max) {
    min = Math.ceil(min);
  
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

console.log('----------------------7-----------------------');

for (let i = 0; i < 5; i++ ) {

    console.log(rand(0, 10));
}


// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

console.log('----------------------8-----------------------');

for (let i = 0; i < 5; i++ ) {

    console.log(rand(0, 10));
}


console.log('----------------------A-----------------------');

//Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;

// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;

let 
a = rand(5, 25);
b = rand(5, 25);
c = rand(5, 25);

let suma = a + b + c;
console.log (a , b , c)
console.log (suma)

console.log('----------------------B-----------------------');

// Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;

let stringai = (a+""+b+""+c)  

console.log(typeof stringai);
console.log(stringai);

console.log('----------------------C-----------------------');

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;

let stringaiSuTarpu = (a+" "+b+" "+c)  

console.log(typeof stringaiSuTarpu);
console.log(stringaiSuTarpu);

console.log('----------------------D-----------------------');

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

let stringaiSuKintamuoju = (a+" "+b+" "+c+" "+"="+" "+suma)  

console.log(typeof stringaiSuKintamuoju);
console.log(stringaiSuKintamuoju);