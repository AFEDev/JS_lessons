console.log("page loadet");

const ul = document.querySelector("ul");
let data = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((struktura) => {
    console.table(struktura);
    data = struktura;
    document.querySelector("#az").addEventListener("click", () => {
      ul.innerHTML = "";
      data.sort((a, b) => {
        if (a.username > b.username) {
          return 1;
        } else if (a.username < b.username) {
          return -1;
        } else {
          return 0;
        }
      });
      render();
    });

    document.querySelector("#za").addEventListener("click", () => {
      ul.innerHTML = "";
      data.sort((a, b) => {
        if (a.username < b.username) {
          return 1;
        } else if (a.username > b.username) {
          return -1;
        } else {
          return 0;
        }
      });
      render();
    });

    document.querySelector("#add").addEventListener("click", () => {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const names = { name: name, email: email };
      data.push(names);
      render();

      console.log(names);
      console.table(data);

      // let car = {
      //   color: "red",
      //   type: "cabrio",
      //   registration: new Date("2016-05-02"),
      //   capacity: 2,
      // };
      // cars.push(car);

      // data.name.push(name);
      // data.email.push(email);
    });

    // const inputMyText = document.querySelector("input#myText");

    // buttonDone.addEventListener("click", () => {
    //   const myText = inputMyText.value;
    //   console.log("CLICK => ", myText);
    // });

    //--------------------------------RUSIAVIMAS--------------------------------
    // struktura.sort((a, b) => {
    //   if (a.username > b.username) {
    //     return 1;
    //   } else if (a.username < b.username) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // });

    //console.table(data);

    // items.sort(function (a, b) {
    //   return a.value - b.value;
    const render = () => {
      data.forEach((element) => {
        const li = document.createElement("li");
        ul.appendChild(li);
        const userName = document.createTextNode(element.username);
        li.appendChild(userName);
        const small = document.createElement("div");
        small.innerText = element.email;
        small.style.fontSize = "9px";
        li.appendChild(small);
        const color = document.createElement("div");
        color.innerText = element.name;
        color.style.color = "rgb(187, 35, 208)";
        li.appendChild(color);
      });
    };

    render();
  });

// document.querySelector("#add").addEventListener("click", () => {
//   const programmer = {
//     username: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//   };
//   data.unshift(programmer);
//   document.querySelector("#name").value = "";
//   document.querySelector("#email").value = "";
//   render();
// });

const masyvas = ["Pupsis", "Mupsis", "Sarikas", "Bobikas", "Pupsis"];

masyvas.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

//console.table(masyvas);
