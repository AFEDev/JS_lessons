/*
id
name
tipe'
    1. Plunksniniai
    2. Plunksniniai kamuoliniai
    3. Kamuoliniai
    4. Liutiniai kamuoliniai
    5. Sluoksniniai
*/

class Cloud {
  constructor(id, name, type, space) {
    this.id = id;
    this.name = name;
    this.space = space;
    switch (type) {
      case 1:
        this.type = "Plunksniniai";
      case 2:
        this.type = "Plunksniniai kamuoliniai";
      case 3:
        this.type = "Kamuoliniai";
      case 4:
        this.type = "Liutiniai kamuoliniai";
      case 5:
        this.type = "Sluoksniniai";
      default:
        this.type = "Kitas";
    }
  }
}

class Db {
  constructor() {
    let data;
    data = localStorage.getItem("cloudsRegister");

    if (null === data) {
      data = JSON.stringify([]);
      localStorage.setItem("cloudsRegister", JSON.stringify([]));
    }
    data = JSON.parse(data);
    data.forEach((c) => {
      const cloud = new Cloud(c.id, c.name, c.typec, c.space);
      this.type.push(cloud);
    });
  }

  getNextId = () => {
    let id;
    id = localStorage.getItem("cloudsRegisterID");
    if (null === id) {
      id = 0;
      localStorage.setItem("cloudsRegisterID", id);
    }
    id = parseInt(id);
    id++;
    localStorage.setItem("cloudsRegisterID", id);
    return id;
  };

  save = () => {
    const clouds = [];
    this.data.forEach((c) => {
      switch (c.type) {
        case "Plunksniniai":
          type = 1;
        case "Plunksniniai kamuoliniai":
          type = 2;
        case "Kamuoliniai":
          type = 3;
        case "Liutiniai kamuoliniai":
          type = 4;
        case "Sluoksniniai":
          type = 5;
        default:
          type = "Kitas";
      }
      const cloud = {
        id: c.id,
        name: c.name,
        type: type,
        space: c.space,
      };
      this.data.push(cloud);
      this.save();
    });
  };

  create = (name, type, space) => {
    const cloud = new Cloud(this.getNextId, name, type, space);
    this.data.push(cloud);
  };
}

class CloudApp {
  static db;
  static start = () => {
    this.db = new Db();
    this.render();
    document.querySelector("button").addEventListener("click", () => this.new())
};
  };

  static new = () => {
      this.db.create(
          document.querySelector("[name=name]").value,
          document.querySelector("[name=type]").value,
          document.querySelector("[name=space]").value,
      
          )

  }

  static render = () => {
    const section = document.querySelector("#list");
    section.innerHTML = "";
    this.db.data.forEach((c) => {
      const html = `
            <h3><i>ID: ${c.id} </i>${c.name}</h3>
            <i>${c.type}</i>
            <p>${c.space} kv. km</p>
            `;
      const div = document.createElement("div");
      div.innerHTML = html;
      section.appendChild(div);
    });
  };
}
