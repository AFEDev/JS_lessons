// 1. Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log

const text1 = document.querySelector("#myText");
const button1 = document.querySelector("#done");
//const h1 = document.createElement("h1");

const arrayResult1 = [];
const output1 = () => {
  const h1 = document.createElement("h1");

  button1.addEventListener("click", () => {
    let myText = text1.value;
    arrayResult1.push(myText);
    console.log(arrayResult1);
    const div1 = document.querySelector("#d1");
    div1.appendChild(h1);
    h1.innerText = myText;
  });
};

output1();

// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log

const select2 = document.querySelector("select");
const div2 = document.querySelector("#d2");
const arrayResult2 = [];

const output2 = () => {
  const h1 = document.createElement("h1");
  select2.addEventListener("change", () => {
    const mySelect = select2.value;
    console.log(mySelect);
    const div2 = document.querySelector("#d2");
    div2.appendChild(h1);
    h1.innerText = mySelect;
    arrayResult2.push(mySelect);
    console.log(arrayResult2);
  });
};

output2();

// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log

const radio = document.querySelectorAll("[name=parosLaikas]");
const arrayResult3 = [];

const output3 = () => {
  const h1 = document.createElement("h1");
  const div3 = document.querySelector("#d3");
  div3.appendChild(h1);
  radio.forEach((element) => {
    element.addEventListener("change", () => {
      const radioSelect = element.value;
      console.log(radioSelect);
      h1.innerText = radioSelect;
      arrayResult3.push(radioSelect);
      console.log(arrayResult3);
    });
  });
};

output3();
// 4. Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”

const checkb = document.querySelector("#cha");

const output4 = () => {
  const div = document.querySelector("#d4");
  const h1 = document.createElement("h1");
  div.appendChild(h1);
  checkb.addEventListener("change", () => {
    const checkControl = checkb.checked ? "pazymeta" : "nepazymeta";
    console.log(checkControl);
    h1.innerText = checkControl;
  });
};

output4();

// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), išvesti į console.log visų pažymėtų checkbox’ų reikšmes.

const chbMany = document.querySelectorAll(".manyCh");

const output5 = () => {
  const div = document.querySelector("#d5");
  const h1 = document.createElement("h1");
  div.appendChild(h1);

  chbMany.forEach((option) => {
    option.addEventListener("change", () => {
      const selections = [];
      chbMany.forEach((selection) => {
        if (selection.checked) {
          selections.push(selection.value);
        } else {
          h1.innerText = " ";
        }
      });
      console.log(selections);
      h1.innerText = selections;
    });
  });
};

output5();

// 6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.

//Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą (5 uždavinio atveju įrašyti masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.
