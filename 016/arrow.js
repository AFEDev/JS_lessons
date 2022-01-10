//ARROW FUNCTION

//Funkcija nuo arrow funkcijos skiriasi konteksto nebuvimu.

const anon1 = function () {
  console.log("I'm anon No 1 ");
  return "*****";
};

const anon2 = () => {
  console.log("I'm anon No 2 ");
};

const anon3 = (number) => {
  console.log("I'm no 3", number);
};
//Jeigu funkcija turi tik VIENA!!! eilute, galime praleisti ir garbanotus skliaustus:
const anon4 = (number) => console.log("I'm no 4", number);

//yra iskart grazinama be return
const anon5 = (number) => number;

anon1();
anon2();
anon3(5555);
anon4(4444);
console.log(anon5(777));

console.log(anon1());
