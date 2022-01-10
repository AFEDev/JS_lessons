function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1. Funkcijos deklaracija

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

console.log("Have funn", sayHello("Martyna"));

//2. Iskvietimas

sayHello("Martyna");
sayHello("Jonai");
sayHello("Monika");

//---------------------------------------------------------------------------------------------

function sayHello(name, count) {
  for (let i = 0; i < count; i++) {
    console.log(`Hello, ${name}!`);
  }
}

console.log("Have funn", sayHello("Martyna"));

const times = 25;

sayHello("Martyna", 1);
sayHello("Jonai", times);
sayHello("Monika", 10);

//---------------------------------------------------------------------------------------------------

function sum(x, y) {
  console.log(x + y);
}

sum(6, 6);
sum(18, 18);
sum(22, 0);

//sukurti funkciją calculator() su trim parametrais skaicius1 skaicius2 ir veiksmas. Funkcija calculator(5, 8, '-') turi consolėje spausdinti skirtumą +, / ir * titinkamai DONE!

console.log(`------------------SKAICIUOTUVAS------------------`);

function calculator(x, y, z) {
  if (z === "+") {
    console.log(x + y);
  } else if (z === "*") {
    console.log(x * y);
  } else if (z === "-") {
    console.log(x - y);
  } else if (z === "/") {
    console.log(x / y);
  } else {
    console.log(`Tokios funkcijos kalkuliatorius nepalaiko`);
  }
}

calculator(5, 3, "+");

console.table(calculator);
