//Su JS skripto pagalba aplink kiekvieną katiną apibraukite baltą, suapvalintais kraštais rėmelį (ant kiekvieno <li> elemento uždėti border);

const li = document.querySelectorAll("li");

li.forEach((element) => {
  element.style.border = "2px solid white";
  element.style.borderRadius = "5px";
  element.style.listStylePosition = "inside";
});

//Suskaičiuokite kiek katinų turi klasę “black” ir kiek “ginger”. Rezultatus atspausdinkite konsolėje;

let black = 0;
let ginger = 0;

li.forEach((element) => {
  if (element.classList.contains("black")) {
    black++;
  }
  if (element.classList.contains("ginger")) {
    ginger++;
  }
});

console.log(`black ${black}`);
console.log(`ginger ${ginger}`);

//Į katino <li> elementą su JS įterpkite <span> elementą, kurio viduje įrašytas katino eilės numeris iš sąrašo;

li.forEach((element, i) => {
  let span = document.createElement("span");
  let text = document.createTextNode(i + 1);
  span.appendChild(text);
  element.appendChild(span);
});

//Padarykite taip, kad paspaudus ant katino vardo, to vardo teksto fonto storis pasidarytų bold, o spalva pasikeistų į darkcyan;

li.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.fontWeight = "bold";
    element.style.color = "darkcyan";
  });
});

//Parašykite skriptą, kuris kas kelias sekundes keistų visų katinų vardų teksto spalvas į atsitiktines

setInterval(() => {
  li.forEach((element) => {
    element.style.color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
}, 1000);
