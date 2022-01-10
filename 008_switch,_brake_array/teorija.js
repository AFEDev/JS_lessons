function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i < 5; i++) {
  if (i == 3) {
    console.log("Oooooo i lygu 3!!!");
    break; // <---- Sustabdo cikla
  }
  console.log(`Sukasi karta Nr ${i}`);
}

let saugiklis = 0;

// ------------------------BREAK---------------------------
console.log(`---------------BREAK----------------------`);
do {
  saugiklis++;
  if (saugiklis > 500) {
    break;
  }
  console.log("bla bla");
} while (true);

didelis: for (let z = 1; z < 5; z++) {
  console.log(`Didelis sukasi Nr ${z}`);
  for (let i = 1; i < 5; i++) {
    console.log(`Mazas sukasi Nr ${i}`);
    if (i == 3) {
      console.log("ooo i lygu trim- stabdom");
      break didelis;
    }
  }
}

// ------------------------BREAK---------------------------
console.log(`---------------CONTINUE----------------------`);

didelis: for (let z = 1; z < 5; z++) {
  console.log(`Didelis sukasi Nr ${z}`);
  for (let i = 1; i < 5; i++) {
    if (i == 3) {
      console.log("ooo i lygu trim");
      continue didelis;
    }
    console.log(`Mazas sukasi Nr ${i}`);
  }
}

// ------------------------CASE---------------------------
console.log(`---------------CASE----------------------`);

let siuntosDydis = "M";

switch (siuntosDydis) {
  case "S":
    console.log("Tikrinam ar yra laisvu S");
    if (rand(0, 2)) {
      break;
    }
  case "M":
    console.log("Tikrinam ar yra laisvu M");
    if (rand(0, 2)) {
      break;
    }
  case "L":
    if (rand(0, 2)) {
      break;
    }
    console.log("Tikrinam ar yra laisvu L");
  default:
    "XL";
    if (rand(0, 2)) {
      break;
    }
    console.log("Tikrinam ar yra laisvu XL");
}

// if (siuntosDydis == "S") {
//   console.log("Tikrinam ar yra laisvu S");
//   console.log("Tikrinam ar yra laisvu M");
//   console.log("Tikrinam ar yra laisvu L");
//   console.log("Tikrinam ar yra laisvu XL");
// } else if (siuntosDydis == "M") {
//   console.log("Tikrinam ar yra laisvu M");
//   console.log("Tikrinam ar yra laisvu L");
//   console.log("Tikrinam ar yra laisvu XL");
// }

let spalva = "red";

if (spalva == "red") {
  console.log("Dega raudona");
}

if (spalva == "green") {
  console.log("Dega zalia");
}

if (spalva == "yelow") {
  console.log("Dega geltona");
}

switch (spalva) {
  case "red":
    console.log("Dega raudona");
    break;
  case "green":
    console.log("Dega zalia");
    break;
  default:
    console.log("Dega raudona");
}
