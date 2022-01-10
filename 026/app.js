class Maisas {
  static visoBulviu = 0;
  constructor() {
    this.bulviu = 0;
  }

  pridetiBulviu = (kiekis) => {
    this.bulviu += kiekis;
    Maisas.visoBulviu += kiekis;
  };

  kiekisMaise = () => {
    console.log("maise yra " + this.bulviu);
  };

  kiekYraViso = () => {
    console.log("Viso yra bulviu: " + Maisas.visoBulviu);
  };
}

const m1 = new Maisas();
const m2 = new Maisas();
m1.pridetiBulviu(22);
m2.pridetiBulviu(8);
m1.kiekisMaise();
m2.kiekisMaise();

console.log(Maisas.visoBulviu);

class Troleibusas {
  static visoKeleiviu = 0;

  static bendrasKeleiviuSkaicius = 0;

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

class Troleibusas1 {
  static visiKeleiviai = 0;

  static bendrasKeleiviuSkaicius = (keleiviuSkaicius) => {
    Troleibusas.visiKeleiviai += keleiviuSkaicius;
  };

  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa = (keleiviuSkaicius) => {
    this.keleiviuSkaicius += keleiviuSkaicius;
    Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
  };

  islipa = (keleiviuSkaicius) => {
    Troleibusas.bendrasKeleiviuSkaicius(
      -1 * Math.min(this.keleiviuSkaicius, keleiviuSkaicius)
    );
    this.keleiviuSkaicius = Math.max(
      0,
      (this.keleiviuSkaicius -= keleiviuSkaicius)
    );
  };

  keleiviuSkaiciusVisuoseTroleibusuose = () => {
    console.log(
      "Visais Trūlais važiuoja: " + Troleibusas.visiKeleiviai + " keleivių"
    );
  };

  vaziuoja = () => {
    console.log("Trūlu važiuoja: " + this.keleiviuSkaicius + " keleivių");
  };
}

const t4 = new Troleibusas();
const t10 = new Troleibusas();

t4.ilipa(10);
t10.ilipa(10);
t4.ilipa(10);
t10.ilipa(10);
t4.islipa(80);

//(STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 {
  static akmenuSkaiciusViso = 0;

  static bendrasAkmenuSkaicius = (quantity) => {
    Kibiras1.akmenuSkaiciusViso += quantity;
  };

  constructor() {
    this.quantity = 0;
  }

  prideti1Akmeni = () => {
    this.quantity++;
    Kibiras1.bendrasAkmenuSkaicius(1);
  };
  pridetiDaugAkmenu = (quantity) => {
    this.quantity += quantity;
    Kibiras1.bendrasAkmenuSkaicius(quantity);
  };
}

const kibiras = new Kibiras1();

kibiras.pridetiDaugAkmenu(11);

kibiras.prideti1Akmeni();

console.log(kibiras);

console.log(Kibiras1.akmenuSkaiciusViso);

//Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }

  static monetos = [];
  static banknotai = [];

  static monetosAdd = (metaliniaiPinigai) => {
    Pinigine.monetos.push(metaliniaiPinigai);
  };

  static banknotaiAdd = (popieriniaiPinigai) => {
    Pinigine.banknotai.push(popieriniaiPinigai);
  };

  ideti = (kiekis) => {
    if (kiekis < 2 && kiekis > 0) {
      this.metaliniaiPinigai += kiekis;
      Pinigine.monetosAdd(kiekis);
    } else {
      this.popieriniaiPinigai += kiekis;
      Pinigine.banknotaiAdd(kiekis);
    }
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
pinigine.ideti(1.5);
pinigine.ideti(3);
pinigine.ideti(5);
pinigine.skaiciuoti();

console.log("Ideta monetu: ", Pinigine.monetos.length);
console.log("Ideta banknotu: ", Pinigine.banknotai.length);

//Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti($kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui.

//Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 15                                0, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
  constructor(turisAdd) {
    this.turis = turisAdd;
    this.kiekis = 0;
  }

  ipilti = (kiekis) => {
    if (kiekis > this.turis) {
      this.kiekis = this.turis;
    } else if (kiekis + this.kiekis > this.turis) {
      this.kiekis = this.turis;
    } else {
      this.kiekis += kiekis;
    }
  };

  //   ipilti = (kiekis) => {
  //     let suma = 0;
  //     if (kiekis > this.turis) {
  //       this.kiekis.push(this.turis);
  //     } else if (kiekis + suma > this.turis) {
  //       this.kiekis.push(this.turis - suma);
  //     } else if (kiekis + suma < this.turis) {
  //       this.kiekis.push(kiekis);
  //     }
  //     this.kiekis.forEach((element) => {
  //       suma += element;
  //     });
  //   };

  ispilti = () => {
    return this.kiekis;
  };

  //   ipilti = (kiekis) => {
  //     if (kiekis > this.turis) {
  //       this.kiekis = this.turis;
  //     } else {
  //       this.kiekis += kiekis;
  //     }
  //   };

  stiklinejeYra = () => {
    console.log(this.kiekis);
  };
}

const stikline200 = new Stikline(200);
const stikline150 = new Stikline(150);
const stikline100 = new Stikline(100);

stikline200.ipilti(30);
stikline200.ipilti(80);
stikline200.ipilti(50);

stikline150.ipilti(stikline200.ispilti());

stikline200.stiklinejeYra();
stikline150.stiklinejeYra();
stikline200.stiklinejeYra();
