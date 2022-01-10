//destytojo kvartalas

const colors = ["red", "blue", "ugly"];

const destytojoKvartalas = [];

for (let i = 0; i < 33; i++) {
  destytojoKvartalas[i] = {};

  destytojoKvartalas[i].number = i + 1;

  destytojoKvartalas[i].color = colors[rand(0, 2)];

  destytojoKvartalas[i].hasDog = !rand(0, 1); //!rand(0, 1) is o ir 1 padaro thrue or folse
}

console.log(destytojoKvartalas);

//---------------------------------------------------------------------------------------

for (let i = 1; i < kvartalas.length; i++) {
  const color = kvartalas[i].color;
  colorCounter[color]++;
}
// jeigu color == ugly;
//colorCounter.ugly;
