const bitGirls = ["Brigita", "Edita", "Deimante", "Juste", "Lina"];

for (let i = 0; i < bitGirls.length; i++) {
  console.log(bitGirls[i]);
}

bitGirls.forEach((girl) => console.log(girl));

const bits = [4, 56, 897, 465, 156, 654798, 8489, 51, 654, 849, 894];

let suma = 0;
let a = 0;

bits.forEach((number) => {
  suma = suma + number;
});

console.log(suma);

bits.forEach((number) => {
  number % 2 ? console.log(number) : a++;
});

console.log("lyginių yra:", a);

//SUPER EXTRA suskaičiuoti kiek yra aštuonetų DONE!
