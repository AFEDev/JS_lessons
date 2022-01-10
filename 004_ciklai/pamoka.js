function rand(min, max) {
    min = Math.ceil(min);
  
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let i;

i=99;

if (true) {
    console.log('hello from IF')
    let i;
    i = 8;
}

console.log(i);

console.log('----------------------2 uzduotis-----------------');

let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4

if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4 ) {
    console.log('Eksperimentas pavyko!!! jo rezultatas:', eksperimentoRezultatas)
}
else {
    console.log('Eksperimentas nepavyko, nes rezultatas:', eksperimentoRezultatas)
}

console.log('----------------------7 uzduotis-----------------');

//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

if (asilai || karves ) {
    console.log('Gyvuliu yra!!!!!' )
}
else {
    console.log('Gyvuliu nera :(')
}


console.log('----------------------PAPILDOMA UZDUOTIS-----------------');


// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

if (!(!asilai && !karves) ) {
    console.log('Gyvuliu yra!!!!!' )
}
else {
    console.log('Gyvuliu nera :(')
}

//--------------------------------------------------------------

let color1 = rand(0, 0) ? 'red' : 'blue';

let color2 = rand(0, 0) ? 'red' : 'blue';

let color3 = rand(0, 0) ? 'red' : 'blue';

let color4 = rand(0, 0) ? 'red' : 'blue';

//OK kai 1 ir 2 vienodi arba 3 ir 4 vienodi
//NOT OK kitais atvejais


console.log('SPALVU PATIKRINIMAS:', color1, color2, color3, color4)

if (color1 == color2 || color3 == color4) {
    console.log('OK')
}
else {
    console.log('NE OK')
}

//--------------------------------------------------------------

console.log('ANTRA MODIFIKACIJA')

if (color1 != color2 && color1 == color4) {
    console.log('OK')
}
else {
    console.log('NE OK')
}

//--------------------------------------------------------------

console.log('TRECIA MODIFIKACIJA')

if (color1 != color2 && (color1 == color4 || color1 == color3) ) {
    console.log('OK')
}
else {
    console.log('NE OK')
}

//--------------------------------------------------------------

console.log('KETVIRTA MODIFIKACIJA')

if (color1 == 'blue' && color2 == color3 && color2 == color4 ) {
    console.log('OK')
}
else {
    console.log('NE OK')
}

//--------------------------------------------------------------

console.log('PENKTA MODIFIKACIJA')

if ((color1 != color2 && color3 == color4 ) || 
(color1 == 'blue' && color4 == 'blue')) {
    console.log('OK')
}
else {
    console.log('NE OK')
}
