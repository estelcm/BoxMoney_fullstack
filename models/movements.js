const db = require("../config/database");

const typeMov = {
  salay: "salary",
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
      (this.type = typeMov[movementType]);
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

  static getfixed() {
    return db.execute("SELECT * FROM movements WHERE movements.type = ?", [
      "fixed",
    ]);
  }

  static getdaily() {
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

  //   static getById(id) {}

  //   static create() {}

  //   static delete(id) {}
};
