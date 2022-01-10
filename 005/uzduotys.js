console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-----------------KARTOJIMAS----------------");

let moneta = rand(0, 1) ? "S" : "H";
console.log(moneta);

console.log("-----------------KARTOJIMAS 2----------------");

for (let i = 0; i < 7; i++) {
  let moneta = rand(0, 1) ? "S" : "H";
  console.log(moneta);
}

//-------------------------------------------------------

console.log("-----------------KARTOJIMAS 3----------------");

let herbas = 0;
let skaicius = 0;

for (let i = 0; i < 7; i++) {
  let result = rand(0, 1) ? "S" : "H";
  "H" == result ? herbas++ : skaicius++;
  console.log(result);
}

console.log("herbas", herbas);
console.log("skaicius", skaicius);

document.querySelector;
