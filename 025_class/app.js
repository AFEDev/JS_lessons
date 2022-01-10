const cat = { name: "Tomas", age: 5 };

console.log(cat);

const upperCase = (sentence) => {
  sentence = sentence.toUpperCase();
  console.log(sentence);
};

upperCase("labas");

//Į katino objektą reikia pridėti metoda bigName, kurį iškvietus katino vardas būtų atspausdinamas didžiosiom raidėm DONE!

cat.bigName = function () {
  let name = this.name.toUpperCase();
  console.log(name);
};

cat.bigName();

cat.addYear = function () {
  age = this.age++;
  console.log(age);
};

cat.addYear();
cat.addYear();
cat.addYear();
cat.addYear();

const cat2 = {
  name: "Miau",
  age: 3,
  bigName: function () {
    let name = this.name.toUpperCase();
    console.log(name);
  },
  addYear: function () {
    age = this.age++;
    console.log(age);
  },
};

console.log(cat);
console.log(cat2);
