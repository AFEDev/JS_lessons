const squer = document.querySelector("div");

squer.addEventListener(
  "click",
  function () {
    squer.classList.toggle("kvadratas_left");
    squer.classList.toggle("kvadratas_right");
  },
  1000
);

const kv3 = document.querySelector(".kvadratas3");
kv3.style.left = "0";

// kv3.addEventListener(
// "click",
// function () {
// if (kv3.dataset.leftRight == 'right') {
//     kv3.style.left = "0";
//     kv3.dataset.leftRight = 'left';
// } else {
//     kv3.style
// }
