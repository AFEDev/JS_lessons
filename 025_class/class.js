class Cat {
  constructor(catName, catAge) {
    this.name = catName;
    this.age = catAge;
  }

  bigName = () => {
    let name = this.name.toUpperCase();
    console.log(name);
  };

  addYear = () => {
    this.age++;
  };

  sayNames = () => {
    for (let i = 0; i < this.age; i++) {
      this.bigName();
    }
  };
}

//Destytojo versija

const cat1 = new Cat("Murka", 3);
const cat2 = new Cat("Purka", 2);
const cat3 = new Cat("Lurka", 5);

console.log(cat1, cat2, cat3);

cat2.bigName();

cat1.sayNames();

//Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
  constructor() {
    this.quantity = 0;
  }

  prideti1Akmeni = () => {
    this.quantity++;
  };
  pridetiDaugAkmenu = (kiekis) => {
    this.quantity = this.quantity + kiekis;
  };
}

const kibiras = new Kibiras1(0);

kibiras.pridetiDaugAkmenu(11);

kibiras.prideti1Akmeni();

console.log(kibiras);

// /Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }

  ideti = (kiekis) => {
    kiekis > 2
      ? (this.popieriniaiPinigai += kiekis)
      : (this.metaliniaiPinigai += kiekis);
  };
  skaiciuoti = () => {
    console.log("Popieriniai pinigai:", this.popieriniaiPinigai);
    console.log("Metaliniai pinigai:", +this.metaliniaiPinigai);
    console.log(
      "Viso pinigų:",
      this.popieriniaiPinigai + this.metaliniaiPinigai
    );
  };
}

const pinigine = new Pinigine();

pinigine.ideti(1);
pinigine.ideti(3);
pinigine.ideti(5);
pinigine.skaiciuoti();

//Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Troleibusas {
  static visoKeleiviu = 0;

  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa = (keleiviai) => {
    this.keleiviuSkaicius += keleiviai;
    console.log(this.keleiviuSkaicius);
    Troleibusas.visoKeleiviu += keleiviai;
  };

  islipa = (keleiviai) => {
    if (keleiviai > this.keleiviuSkaicius) {
      console.log("Negali islipti daugiau keleiviu nei ilipo");
    } else {
      this.keleiviuSkaicius -= keleiviai;
      Maisas.visoKeleiviu -= keleiviai;
      console.log;
    }
  };

  vaziuoja = () => {
    console.log(this.keleiviuSkaicius);
  };
}

const t1 = new Troleibusas();
const t2 = new Troleibusas();
const t3 = new Troleibusas();

t1.ilipa(20);
t2.ilipa(11);
t3.ilipa(4);

console.log(Troleibusas.visoKeleiviu);

//(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
