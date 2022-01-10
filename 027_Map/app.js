//Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti($kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui.

//Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 15                                0, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

// class Stikline {
//   constructor(turisAdd) {
//     this.turis = turisAdd;
//     this.kiekis = 0;
//   }

//   ipilti = (kiekis) => {
//     this.kiekis += kiekis;
//     this.kiekis = Math.min(this.turis, this.kiekis);
//   };

//   ispilti = () => {
//     const tarpinisKiekis = this.kiekis;
//     this.kiekis = 0;
//     return tarpinisKiekis;
//   };

//   stiklinejeYra = () => {
//     console.log("Stiklineje yra: " + this.kiekis);
//   };
// }

// const stikline200 = new Stikline(200);
// const stikline150 = new Stikline(150);
// const stikline100 = new Stikline(100);

// stikline200.ipilti(30);
// stikline200.ipilti(80);
// stikline200.ipilti(50);

// stikline150.ipilti(stikline200.ispilti());
// stikline100.ipilti(stikline150.ispilti());

// stikline200.stiklinejeYra();
// stikline150.stiklinejeYra();
// stikline100.stiklinejeYra();

// //-----------------------------------------------------------------------------------------------------------------------------

// const mapas = new Map();

// mapas.set("murka", 7);
// mapas.set("rainys", 4);
// mapas.set("miausis", 3);

// mapas.delete("rainys");

// console.table(mapas.get("murka"));
// console.table(mapas.size);
// console.table(mapas.has("rainys"));

// //console.table(mapas);

// for (const value of mapas) {
//   console.log(value);
// }

//(MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }

  idetiSureli(kiekis) {
    this.turinys.has("Surelis")
      ? this.turinys.set("Surelis", kiekis + this.turinys.get("Surelis"))
      : this.turinys.set("Surelis", kiekis);
  }
  idetiPieno(kiekis) {
    this.turinys.has("Pienas")
      ? this.turinys.set("Pienas", kiekis + this.turinys.get("Surelis"))
      : this.turinys.set("Pienas", kiekis);
  }

  idetiDuonos(kiekis) {
    this.turinys.has("Duona")
      ? this.turinys.set("Duona", kiekis + this.turinys.get("Surelis"))
      : this.turinys.set("Duona", kiekis);
  }

  krepselioTurinys() {
    for (const value of this.turinys) console.log(value);
  }
}

const sarasas = new PirkiniuKrepselis();

sarasas.idetiSureli(5);
sarasas.idetiSureli(2);

sarasas.krepselioTurinys();
