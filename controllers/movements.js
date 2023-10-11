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

module.exports = {
  getAllMovements,
  getSalaryM,
};
