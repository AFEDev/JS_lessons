function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tevas = document.querySelector(".tevas");

const vaikas = document.querySelector(".vaikas");

const vaikas2 = document.querySelector(".vaikas2");

const body = document.querySelector("body");

vaikas.addEventListener("click", function (e) {
  e.stopPropagation();
  vaikas.style.backgroundColor = "blue";
});

vaikas2.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  vaikas2.style.backgroundColor = "red";
  setTimeout(function () {
    window.location = "wwww.google.com";
  }, 2000);
});

tevas.addEventListener("click", function (e) {
  e.stopPropagation();
  tevas.style.backgroundColor = "gray";
});

body.addEventListener("click", function () {
  body.style.backgroundColor = "gray";
});
