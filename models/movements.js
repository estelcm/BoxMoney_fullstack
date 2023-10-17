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
  //posar total al constructor que vindra precalcular al momet de crearlo
  constructor(name, description, amount, movementType, currentTotal) {
    (this.name = name),
      (this.description = description),
      (this.amount = amount),
      // (this.type = type[movementType]);
      (this.type = movementType),
      // (this.movementsList = []),
      (this.total = currentTotal);
    // (this.total = this.updateTotal());
    //crear metodo para calcular el total
  }

  // addMovement(name, description, amount, type) {
  //   const movement = {
  //     name,
  //     description,
  //     amount,
  //     type,
  //   };

  //   // this.movementsList.push(movement);
  //   // this.updateTotal();
  // }

  // updateTotal() {
  //   //primer hauria d'anar fent push del primer total. llavora ferho recursiu
  //   //que cada vegada vagi a agafar lultim i el calculi amb lo del reduce.
  //   //pero cal? fent servir la taula q ja esta organitzada no en tindriem prou per refrenciar-ho?
  //   //thi.movements.reduce no estic entrant a amount
  //   this.total = this.movementsList.reduce((acc, movement) => {
  //     if (movement.type === "salary" || movement.type === "unexpected") {
  //       return acc + movement.amount;
  //     } else {
  //       return acc - movement.amount;
  //     }
  //     //this 0 is for how it starts the count
  //   }, 0);
  //   return this.total;
  // }
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
  create() {
    return db.execute(
      `INSERT INTO movements (name, description, amount, type, total) VALUES ('${this.name}', '${this.description}', '${this.amount}', '${this.type}', '${this.total}')`
    );
  }

  // save() {
  //   // opción 1:
  //   // return db.execute("INSERT INTO home (name, price, description, room) VALUES (?,?,?,?)", [this.name, this.price, this.description, this.room])
  //   // opción 2:
  //   return db.execute(
  //     `INSERT INTO movements (name, description, amount, type) VALUES ('${this.name}','${this.description}','${this.amount}','${this.type}')`
  //   );
  // }
  static delete(id) {
    return db.execute(`DELETE FROM movements WHERE movements.id = ${id}`);
  }
};
