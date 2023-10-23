//este express viene de tus dependencias
const express = require("express");
const router = express.Router();
const {
  getAllMovements,
  getSalaryM,
  getUnexpectedM,
  getFixedM,
  getDailyM,
  getAntM,
  getWhimM,
  getMatNeedM,
  getMedicalM,
  getSavingsM,
  getMovement,
  createMovement,
  // saveMov,
  deleteMovement,
} = require("../controllers/movements");

router.get("/mov", getAllMovements);
router.get("/mov/salary", getSalaryM);
router.get("/mov/unexpected", getUnexpectedM);
router.get("/mov/fixed", getFixedM);
router.get("/mov/daily", getDailyM);
router.get("/mov/ant", getAntM);
router.get("/mov/whim", getWhimM);
router.get("/mov/mat_need", getMatNeedM);
router.get("/mov/medical", getMedicalM);
router.get("/mov/savings", getSavingsM);
router.get("/mov/:id", getMovement);

router.post("/mov", createMovement);
// router.post("/mov", saveMov);
router.delete("/mov/:id", deleteMovement);

module.exports = router;
