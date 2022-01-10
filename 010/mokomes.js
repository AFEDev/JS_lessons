function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

komoda = [1, 2, 3, 4];
dezute = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(komoda);

komoda[0] = dezute;

komoda[0][2] = "sirdele <3";

console.log(komoda);

console.log(komoda[0][2]);

komoda[0][5] = "kryziukas";

console.log(komoda);

komoda[3] = [];

for (let i = 0; i < 20; i++) {
  komoda[3].push(rand(5, 17));
}

console.log(komoda);

komoda[3].push(25, 18);

komoda[3].push([1, 2, 3, 4]);

//komoda[3].push([]);

console.log(komoda);

dezute.push(18);
