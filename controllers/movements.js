const Movements = require("../models/movements");

/*** GET ALL ***/

const getAllMovements = (req, resp) => {
  Movements.getAll()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "Products are empty" });
      }
    })
    .catch((err) => {
      resp.status(500);
      console.log(err);
    });
};

/**** GET SALARY  ****/
const getSalaryM = (req, resp) => {
  Movements.getSalary()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "No salary movements found" });
      }
    })
    .catch((err) => {
      resp.status(500).send({ msg: "Internal server error" });
      console.log(err);
    });
};

/**** GET UNEXPECTED  ****/
const getUnexpectedM = (req, resp) => {
  Movements.getUnexpected()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "No unexpected movements found" });
      }
    })
    .catch((err) => {
      resp.status(500).send({ msg: "Internal server error" });
      console.log(err);
    });
};

/**** GET FIXED  ****/
const getFixedM = (req, resp) => {
  Movements.getFixed()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "No fixed movements found" });
      }
    })
    .catch((err) => {
      resp.status(500).send({ msg: "Internal server error" });
      console.log(err);
    });
};
/**** GET DAILY  ****/
const getDailyM = (req, resp) => {
  Movements.getDaily()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "No daily movements found" });
      }
    })
    .catch((err) => {
      resp.status(500).send({ msg: "Internal server error" });
      console.log(err);
    });
};
/**** GET ANT  ****/
const getAntM = (req, resp) => {
  Movements.getAnt()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "No ant movements found" });
      }
    })
    .catch((err) => {
      resp.status(500).send({ msg: "Internal server error" });
      console.log(err);
    });
};
/**** GET MEDICAL  ****/
const getMedicalM = (req, resp) => {
  Movements.getMedical()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "No medical movements found" });
      }
    })
    .catch((err) => {
      resp.status(500).send({ msg: "Internal server error" });
      console.log(err);
    });
};

/**** GET SAVINGS  ****/
const getSavingsM = (req, resp) => {
  Movements.getSavings()
    .then((data) => {
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "No savings movements found" });
      }
    })
    .catch((err) => {
      resp.status(500).send({ msg: "Internal server error" });
      console.log(err);
    });
};

/**** GET ONE MOVEMENT BY ID  ****/
const getMovement = (req, resp) => {
  const id = req.params.id;
  //getById es el nombre de la funcion que yo estoy importando desde models

  Movements.getById(id)
    .then((data) => {
      //si data en posicion cero tiene length entonces devuelveme tal, ino tiene length no devuelves nada
      if (data[0].length) {
        resp.status(200).send({ data: data[0] });
      } else {
        resp.status(404).send({ msg: "movement not found" });
      }
    })
    .catch((err) => {
      resp.status(500);
      console.log(err);
    });
};

// /**** CREATE  ****/
const createMovement = (req, resp) => {
  //vamos a destructurar y vamos a sacar el name el price por separado...
  //y se la pasamoa a mi instancia
  const { name, description, amount, type } = req.body;
  const moneyMovement = new Movements(name, description, amount, type);
  //lamamos a la funcion create que viene de models e insert una nueva linia en la tabla
  moneyMovement
    .create()
    .then(() => resp.status(201).send({ data: moneyMovement }))
    .catch((err) => {
      resp.status(500);
      console.log(err);
    });
};
// const saveMov = (req, res) => {
//   const { name, description, amount, type } = req.body;
//   const newMov = new Movements(name, description, amount, type);
//   newMov
//     .save()
//     .then(() => res.status(201).send({ data: newMov }))
//     .catch((err) => {
//       res.status(500);
//       console.log(err);
//     });
// };
/**** DELETE MOVEMENT  ****/
const deleteMovement = (req, resp) => {
  const id = req.params.id;
  Movements.delete(id)
    .then(() => {
      resp.status(200).send({ msg: "movement deleted" });
    })
    .catch((err) => {
      resp.status(500);
      console.log(err);
    });
};

module.exports = {
  getAllMovements,
  getSalaryM,
  getUnexpectedM,
  getFixedM,
  getDailyM,
  getAntM,
  getMedicalM,
  getSavingsM,
  getMovement,
  createMovement,
  // saveMov,
  deleteMovement,
};
