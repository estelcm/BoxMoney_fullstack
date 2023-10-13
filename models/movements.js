const db = require("../config/database");

const type = {
  salary: "salary",
  unexpected: "unexpected",
  fixed: "fixed",
  daily: "daily",
  ant: "ant",
  whim: "whim",
  mat_need: "material need",
  medical: "medical",
  savings: "savings",
};

module.exports = class Movements {
  constructor(name, description, amount, movementType) {
    (this.name = name),
      (this.description = description),
      (this.amount = amount),
      // (this.type = type[movementType]);
      (this.type = movementType);
  }

  static getAll() {
    return db.execute("SELECT * FROM movements");
  }

  static getSalary() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "salary",
    ]);
  }

  static getUnexpected() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "unexpected",
    ]);
  }

  static getFixed() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "fixed",
    ]);
  }

  static getDaily() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "daily",
    ]);
  }

  static getAnt() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "ant",
    ]);
  }

  static getWhim() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "whim",
    ]);
  }

  static getAnt() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "ant",
    ]);
  }

  static getMatNeed() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "material need",
    ]);
  }

  static getMedical() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "medical",
    ]);
  }

  static getSavings() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "savings",
    ]);
  }

  /* ------ GetById ------ */
  static getById(id) {
    return db.execute(`SELECT * FROM movements WHERE movements.id = ${id}`);
  }
  /* ------ create ------ */
  // create() {
  //   return db.execute(
  //     `INSERT INTO movements (name, description, amount, type) VALUES ('${this.name}', '${this.description}', '${this.amount}', '${this.type}')`
  //   );
  // }

  save() {
    // opción 1:
    // return db.execute("INSERT INTO home (name, price, description, room) VALUES (?,?,?,?)", [this.name, this.price, this.description, this.room])
    // opción 2:
    return db.execute(
      `INSERT INTO movements (name, description, amount, type) VALUES ('${this.name}','${this.description}','${this.amount}','${this.type}')`
    );
  }
  static delete(id) {
    return db.execute(`DELETE FROM movements WHERE movements.id = ${id}`);
  }
};
