const mongoose = require("mongoose");
const {
  db: { host, port, name },
} = require("../configs/mongodb.config");

const connnectionString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connnectionString)
      .then(() => {
        console.log("Connect databse successfully");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
