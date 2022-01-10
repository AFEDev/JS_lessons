const h1 = document.querySelector("h1");

h1.style.color = "red";

const tester = document.querySelector("button");

tester.style.color = "red";

tester.addEventListener("click", () => {
  tester.style.backgroundColor = "black";
  h1.style.color = "blue";
  console.log("rytas click");
});

console.log("labas");

document.querySelector("h1").addEventListener("click", () => {
  console.log("rytas h1");
});
