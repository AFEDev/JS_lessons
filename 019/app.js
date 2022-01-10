let body = document.querySelector("body");
let div = document.querySelector("div");
let span = document.querySelector("span");
let button = document.querySelector("button");

let h1 = document.createElement("h1"); // naujas elementas
let text = document.createTextNode("Valiuo!"); // paruostas tekstas
h1.appendChild(text); // tekstas idetas i elemeta
div.appendChild(h1); // elementas idedamas i div

span.appendChild(h1);

let ul = document.createElement("ul"); // naujas elementas
div.appendChild(ul); // elementas idedamas i div

const newLi = () => {
  let li = document.createElement("li"); // naujas elementas
  let koks = document.createTextNode(`Kons nors`); // paruostas tekstas
  li.appendChild(koks); // tekstas idetas i elemeta
  ul.appendChild(li); // elementas idedamas i div
  li.addEventListener("click", () => (li.style.color = "yellow"));
};

newLi();

for (let i = 0; i < 10; i++) {
  newLi();
}

ul.querySelectorAll("li").forEach(
  (e, i) => (e.style.color = i % 2 ? "red" : "green")
);

button.addEventListener("click", () => {
  newLi();
});

// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener("click", () => {
//     li[i].style.color = "yellow";
//   });
// }
