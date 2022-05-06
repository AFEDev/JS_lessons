let book = [];
let typ = [];
const main = document.querySelector("main");


main.classList.add("loader_big");

fetch("https://in3.dev/knygos/")
  .then((response) => response.json())
  .then((books) => {
    book = books;
    creatCard();
    // select.addEventListener("change", () => {
    //     const mySelection = select.value;
    //     console.log("CHANGE => ", mySelection);
    //   });

    const select = document.querySelector("select");

    select.addEventListener("change", () => {
      const mySelect = select.value;
      console.log("CHANGE => ", mySelect);
      if (mySelect == "atoz") {
        main.innerHTML = "";
        books.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (mySelect == "ztoa") {
        main.innerHTML = "";
        books.sort((a, b) => {
          if (a.title < b.title) {
            return 1;
          } else if (a.title > b.title) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (mySelect == "brangu") {
        main.innerHTML = "";
        books.sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          } else if (a.price > b.price) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (mySelect == "pigu") {
        main.innerHTML = "";
        books.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          } else if (a.price < b.price) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      creatCard();
    });
    console.table(books);
  });

const creatCard = () => {
  book.forEach((element) => {
    const cardColumn = document.createElement("div");
    const cardImage = document.createElement("div");
    const cardText = document.createElement("div");
    const img = document.createElement("img");
    img.src = element.img;
    const title = document.createElement("h3");
    const author = document.createElement("h5");
    const price = document.createElement("h4");
    const type = document.createElement("div");
    const bg = document.createElement("div"); //<----- buvo h4
    type.classList.add("loader");
    title.innerText = element.title;
    author.innerText = element.author;
    price.innerText = element.price + " €";
    type.classList.remove("loader_big");
    //type.innerText = element.type;
   
    fetch("https://in3.dev/knygos/types/")
      .then((response) => response.json())
      .then((types) => {
        typ = types;
        type.classList.remove("loader");
        typ.forEach((t) => {
          if (element.type == t.id) {
            type.innerText = t.title;
          }
        });
       
       
      });
    title.classList.add("book_title");
    cardColumn.classList.add("cards__column");
    
    main.classList.add("cards__row");
    bg.classList.add("cards__column-bg");
    cardImage.classList.add("cards__image");
    cardText.classList.add("cards__text");
    main.classList.remove("loader_big");
    main.appendChild(bg);
    bg.appendChild(cardColumn);
    cardColumn.appendChild(cardImage);
    cardImage.appendChild(img);
    cardColumn.appendChild(cardText);
    cardText.appendChild(title);
    cardText.appendChild(author);
    cardText.appendChild(price);
    cardText.appendChild(type);
  });
};
